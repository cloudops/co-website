---
title: "Guide de survie Rook et Ceph"
date: "2019-12-02"
author: "CloudOps"
resources:
- name: "thumbnail"
  src: "RookCeph.jpg"
class_name: "blog post"
slug: /guide-de-survie-rook-et-ceph
aliases:
    - /fr/2019/05/guide-de-survie-rook-et-ceph/
    - /fr/guide-de-survie-rook-et-ceph
---

<div class="post-content"><p>Le principe de base des conteneurs est qu’ils sont conçus sans états, mais les données doivent tout de même être stockées et être accessibles à certains services. Vous avez donc besoin d’une solution qui préserve les données en cas de redémarrage de conteneurs.</p><p>Les demandes de volume persistant (Persistent Volume Claims ou PVC) sont les solutions recommandées pour la gestion d’applications à états dans Kubernetes. Avec une PVC, un pod peut faire une requête et se connecter aux volumes puisque ceux-ci existent indépendamment du cycle de vie du pod enfermant.</p><p>Les PVC offrent l’avantage de séparer les Ops du Dev. Les administrateurs infonuagiques peuvent approvisionner les volumes. Les développeurs peuvent faire une requête pour ces volumes sans connaître les fournisseurs à l’arrière-plan.</p><p>Voici les composantes d’une PVC.</p><ul><li><a href="https://kubernetes.io/docs/concepts/storage/volumes/#persistentvolumeclaim"><strong>Les demandes de volume persistant (Persistent Volume Claims)</strong></a> désignent une requête de stockage faite par un pod. Les PVC sont montées de façon dynamique dans le pod qui fait la requête et seront utilisées en tant que volume.</li><li><a href="https://kubernetes.io/docs/concepts/storage/persistent-volumes/"><strong>Les volumes persistants (Persistent Volumes ou PV)</strong></a> sont les volumes spécifiques approvisionnés manuellement par les administrateurs ou dynamiquement par une classe de stockage. Les PV ne sont pas liés à un pod en particulier et sont gérés par Kubernetes.</li><li><strong><a href="https://kubernetes.io/docs/concepts/storage/storage-classes/">Les classes de stockage</a></strong> permettent l’allocation dynamique de volumes et de PV. Les classes sont définies par les administrateurs.</li><li><strong>Les stockages physiques</strong> désignent les volumes comme tels sur lesquels il est possible de connecter et d’être monté.</li></ul><p>Les systèmes de stockage distribués sont un moyen efficace de résoudre les ensembles à états hautement disponibles. Ceph est un système de stockage distribué qui, au cours des dernières années, a capté de plus en plus l’attention. Rook est un orchestrateur pour un ensemble divers de solutions de stockage, incluant Ceph. Rook simplifie le déploiement de Ceph dans une grappe Kubernetes.</p><p>La liste des entreprises qui utilisent Rook avec Ceph en production est en croissance, spécialement pour les entreprises qui déploient sur place, parmi celles-ci, <a href="https://www.cengn.ca/">CENGN</a>, Gini, RPR et plusieurs autres qui en sont à l’étape d’évaluation.</p><h2>Qu’est-ce que Ceph ?</h2><p>Ceph est un système de stockage distribué extrêmement évolutif et hautement performant sans aucun point de défaillance. Ceph est un système de logiciel distribué (Software Distributed System ou SDS), ce qui signifie qu’il peut être exploité sur n’importe quel matériel conforme à ses exigences.</p><p>Ceph est fait de nombreuses composantes&nbsp;:</p><ul><li><strong>Les moniteurs Ceph (MON)</strong> sont responsables de la formation de quorums de grappes. Tous les nœuds de grappes se rapportent aux nœuds moniteurs et partagent l’information à propos de changement dans leur état.</li><li><strong>Les appareils de stockage d’objets Ceph (OSD)</strong> sont responsables du stockage d’objets sur des systèmes locaux de fichiers et d’en fournir l’accès sur le réseau. Habituellement, un deamon OSD est lié à un disque physique dans votre grappe. <em>Les clients de Ceph interagissent directement avec les appareils de stockage d’objet.</em></li><li><strong>Le Gestionnaire Ceph (Ceph Manager ou MGR)</strong> offre une surveillance supplémentaire en plus d’interfaces vers une surveillance et des systèmes de gestion externes.</li><li><strong>Le stockage d’objet distribué fiable et autonome </strong>(<strong>Reliable Autonomic Distributed Object Stores ou RADOS)</strong> est au cœur des grappes de stockage Ceph. Cette couche fait en sorte que les données stockées demeurent toujours constantes et qu’elles effectuent, entre autres, des répliques, des détections de failles et des reprises après celles-ci.</li></ul><p>Pour lire ou écrire des données, vers une grappe ou d’une grappe Ceph, un client doit d’abord contacter les Ceph Mon afin d’obtenir la copie la plus récente de sa carte de grappes (cluster map). Celle-ci contient la topologie des grappes ainsi que les lieux de stockage des données. Les clients de Ceph utilisent la carte pour trouver les appareils (OSD) avec lesquels interagir et initier une connexion avec l’appareil (OSD) associé.</p><h2>Qu’est-ce que Rook ?</h2><p>Rook est un <a href="https://coreos.com/blog/introducing-operators.html">opérateur</a> qui gère pour vous vos grappes Ceph. Rook utilise des définitions de ressources sur mesure (Custom Resource Definitions ou CRD) et des contrôleurs sur mesure pour déployer et gérer des ressources sur mesure, comme des grappes Ceph.</p><p>Rook est fait de nombreuses composantes&nbsp;:</p><ul><li><strong>L’opérateur Rook</strong> se trouve au cœur de Rook.L’opérateur Rook est un simple conteneur qui initialise automatiquement la grappe de stockage et surveille les deamons de stockage afin d’assurer que les grappes de stockage restent saines.</li><li><strong>Les agents Rook</strong> fonctionnent sur chaque nœud de stockage et configurent un module d’extension FlexVolume qui s’intègre à la structure de contrôleur de volume de Kubernetes. Les agents s’occupent de toutes les opérations de stockage comme d’attacher les appareils de stockage de réseau, de monter les volumes sur les hôtes et de formater le système de fichier.</li><li><strong>Rook Discovers</strong> détecte les appareils de stockage attachés au nœud de stockage.</li></ul><p>Rook déploie aussi des deamons MON, OSD et MGR pour les grappes Ceph comme pods Kubernetes.</p><p>L’opérateur Rook vous permet de créer et de gérer vos grappes de stockage avec des CRD. Chaque type de ressource à son propre CRD défini.</p><ul><li>Une<a href="https://rook.github.io/docs/rook/master/cluster-crd.html"> grappe</a> Rook fournit les paramètres de la grappe de stockage afin de servir les systèmes de blocs, de stockage d’objets et de fichiers partagés. Chaque grappe contient de nombreux bassins.</li><li>Un<a href="https://rook.github.io/docs/rook/master/pool-crd.html"> bassin</a> gère le stockage de sauvegarde pour un stock en mode bloc.. Les bassins sont aussi utilisés à l’interne par le stockage d’objets et de fichiers.</li><li>Un <a href="https://rook.github.io/docs/rook/master/filesystem-crd.html">système de fichier</a> offre le stockage partagé pour de nombreux pods Kubernetes.</li></ul><p>A <a href="https://rook.github.io/docs/rook/master/filesystem-crd.html">File System</a> provides shared storage for multiple Kubernetes pods.</p><h2>Comment déployer Rook dans Kubernetes ?</h2><p>Dans ce guide, nous allons présenter les étapes à suivre pour déployer Rook dans la même grappe Kubernetes qu’un client consommateur de stockage. Comme Ceph exige de l’espace supplémentaire pour stocker les données, il est recommandé d’avoir un ensemble réservé de nœuds de stockage.</p><h3>Prérequis</h3><ul><li>Helm</li><li>Grappe Kubernetes avec contrôle d’accès basé sur les rôles (CABR).</li></ul><h3>Configuration de disque</h3><p>Ce guide assume les disques non formatés sur les nœuds de stockage. Afin de maximiser leur performance, vous devez localiser le Write Ahead Log (WAL) sur un appareil différent (non couvert dans cet article).</p><h3>Configurer FlexVolume (si nécessaire)</h3><p>Les agents Rook utilisent <a href="https://github.com/kubernetes/community/blob/master/contributors/devel/flexvolume.md">FlexVolume</a> afin de s’intégrer à Kubernetes pour les opérations de stockage performantes. Pour ce faire, les agents Rook déploient le pilote FlexVolume de Rook dans un répertoire sur chaque nœud.</p><p>Le répertoire FlexVolume par défaut est, dans certains cas, à lecture seule, comme Rancher et CoreOS. Dans ce cas-ci, le Kubelet doit être configuré pour utiliser un différent répertoire sur lequel on peut écrire.</p><p>Si vous utilisez Rancher Kubernetes Engine (RKE), configurez le kubelet comme suit et exécutez <strong>`rke up`</strong> pour l’appliquer.</p><pre>kubelet:
  image: ""
  extra_args:
    volume-plugin-dir: /usr/libexec/kubernetes/kubelet-plugins/volume/exec
  extra_binds:
    - /usr/libexec/kubernetes/kubelet-plugins/volume/exec:/usr/libexec/kubernetes/kubelet-plugins/volume/exec
</pre><h3>Installer l’opérateur Rook</h3><h4>Ajoutez le dépôt « Rook Charts » à Helm</h4><pre>helm repo add rook-stable https://charts.rook.io/stable
</pre><h4>Installer l’opérateur Rook (v 0.9.3 au moment d’écrire ceci)</h4>

<pre><code>

helm install --name rook --namespace rook-ceph-system rook-stable/rook-ceph

$ kubectl get po -n rook-ceph-system -o wide
NAME                                  READY   STATUS    RESTARTS   AGE   IP              NODE                      NOMINATED NODE
rook-ceph-agent-gwl8s                 1/1     Running   0          35d   10.212.144.51   coo-r1-k8s-worker-st-01   
rook-ceph-agent-lqkjl                 1/1     Running   0          35d   10.212.144.52   coo-r1-k8s-worker-st-02   
rook-ceph-agent-x66sw                 1/1     Running   0          35d   10.212.144.53   coo-r1-k8s-worker-st-03   
rook-ceph-operator-7d44ddfdcb-q5chh   1/1     Running   0          35d   10.244.8.3      coo-r1-k8s-worker-st-03   
rook-discover-fmqrd                   1/1     Running   0          35d   10.244.7.5      coo-r1-k8s-worker-st-01   
rook-discover-jlsv9                   1/1     Running   0          35d   10.244.6.3      coo-r1-k8s-worker-st-02   
rook-discover-vt7mk                   1/1     Running   0          35d   10.244.8.4      coo-r1-k8s-worker-st-03   

</code></pre>

<p>Le tableau helm (Helm Chart) déploie, entre autres, les pods reliés à Rook (rook-operator, rook-discover and rook-agent) ainsi qu’une CustomResourceDefinition pour une grappe Ceph. Le pod de découverte exécute un script découverte pour localiser les appareils de stockage attachés aux nœuds de stockage Kubernetes.</p><p>Veuillez noter que tous les pods dans le système rook-ceph doivent être exécutés ou complétés sans redémarrage ou erreurs avant de procéder à l’étape suivante.</p><h3>Créer une grappe Ceph gérée par Rook</h3><p><span style="font-weight: 400;">L’étape suivante est de créer une grappe Ceph de l’arborescence des sources « Rook ». </span><a href="https://github.com/rook/rook"><span style="font-weight: 400;">Cliquez ici pour voir le clone git</span></a><span style="font-weight: 400;">. Au niveau cluster/exemples/kubernetes/ceph, inspectez et modifiez</span></p><pre>cluster.yaml</pre><p> selon vos préférences. La grappe CRD définit les paramètres désirés pour une grappe de stockage. <span style="font-weight: 400;">Exécutez simplement la commande suivante pour initialiser une grappe rook&nbsp;: </span></p><pre>kubectl create -f cluster.yaml</pre><p>Afin de confirmer que notre grappe Rook fonctionne, vérifions les nœuds exécutés sous le namespace rook-ceph&nbsp;:</p><pre>$ kubectl get po -n rook-ceph -o wide
NAME                                                  READY   STATUS      RESTARTS   AGE   IP              NODE                      NOMINATED NODE
rook-ceph-mgr-a-bf78cdcb8-q4gpz                       1/1     Running     0          35d   10.244.7.7      coo-r1-k8s-worker-st-01   <none>
rook-ceph-mon-a-755d985488-72kzh                      1/1     Running     0          35d   10.244.7.6      coo-r1-k8s-worker-st-01   <none>
rook-ceph-mon-b-845c97f94b-h5jlp                      1/1     Running     0          35d   10.244.6.4      coo-r1-k8s-worker-st-02   <none>
rook-ceph-mon-c-68b495d97d-m524q                      1/1     Running     0          35d   10.244.8.7      coo-r1-k8s-worker-st-03   <none>
rook-ceph-osd-0-56b7b86b5b-kz882                      1/1     Running     0          35d   10.244.7.9      coo-r1-k8s-worker-st-01   <none>
rook-ceph-osd-1-6d9558b6bd-xlkzf                      1/1     Running     0          35d   10.244.6.6      coo-r1-k8s-worker-st-02   <none>
rook-ceph-osd-2-56bf4b6c64-2p9rp                      1/1     Running     0          35d   10.244.8.9      coo-r1-k8s-worker-st-03   <none>
rook-ceph-osd-3-86ccf5d69f-xzjmz                      1/1     Running     0          35d   10.244.7.10     coo-r1-k8s-worker-st-01   <none>
rook-ceph-osd-4-6f469fc877-bt799                      1/1     Running     0          35d   10.244.6.7      coo-r1-k8s-worker-st-02   <none>
rook-ceph-osd-5-6549cdf949-qbvnh                      1/1     Running     0          35d   10.244.7.11     coo-r1-k8s-worker-st-01   <none>
rook-ceph-osd-6-7f56d8cf95-qgd8p                      1/1     Running     0          35d   10.244.6.8      coo-r1-k8s-worker-st-02   <none>
rook-ceph-osd-7-55b6c5c8df-dnp4p                      1/1     Running     0          35d   10.244.8.11     coo-r1-k8s-worker-st-03   <none>
rook-ceph-osd-8-d6df7694-w2psw                        1/1     Running     0          35d   10.244.8.10     coo-r1-k8s-worker-st-03   <none>
rook-ceph-osd-prepare-coo-r1-k8s-worker-st-01-zbs6m   0/2     Completed   0          35d   10.244.7.8      coo-r1-k8s-worker-st-01   <none>
rook-ceph-osd-prepare-coo-r1-k8s-worker-st-02-sr2dm   0/2     Completed   0          35d   10.244.6.5      coo-r1-k8s-worker-st-02   <none>
rook-ceph-osd-prepare-coo-r1-k8s-worker-st-03-zzqmq   0/2     Completed   0          35d   10.244.8.8      coo-r1-k8s-worker-st-03   <none>
rook-ceph-tools-cb5655595-vq4vj                       1/1     Running     0          35d   10.212.144.53   coo-r1-k8s-worker-st-03   <none>
</none></none></none></none></none></none></none></none></none></none></none></none></none></none></none></none></none></pre><p>Vous verrez que Rook commencera à déployer quelques</p><pre>mon</pre><p> ainsi que des pods</p><pre>osd-prepare</pre><p>. Les pods</p><pre>rook-ceph-osd-prepare</pre><p> préparent le</p><pre>osd</pre><p> en formatant le disque et en ajoutant les pods osd dans la grappe.</p><p>Rook vient aussi avec un conteneur</p><pre>toolkit</pre><p> qui a toute la suite de clients de Ceph pour le débogage et les tests rook. Après avoir exécuté</p><pre>kubectl create -f toolkit.yaml</pre><p> dans la grappe, utilisez la commande suivante pour entrer dans le pod :</p><pre>kubectl -n rook-ceph exec -it $(kubectl -n rook-ceph get pod -l "app=rook-ceph-tools" -o jsonpath='{.items[0].metadata.name}') bash</pre><h3><strong>Astuces pour la configuration de grappes&nbsp;:</strong></h3><p>Définir</p><pre>mon.count</pre><p> avec un nombre impair plus grand que 3.</p><p>Définir les limites de ressources pour les composantes Ceph&nbsp;:</p><pre>mgr:
	limits:
		cpu: "500m"
		memory: "1024Mi"
	requests:
		cpu: "500m"
		memory: "1024Mi"
mon:
	limits:
		cpu: "1"
		memory: "1024Mi"
	requests:
		cpu: "500m"
		memory: "1024Mi"
osd:
	limits:
		cpu: "1"
		memory: "2048Mi"
	requests:
		cpu: "500m"
		memory: "1024Mi"
</pre><p>Je recommande de rendre tous les nœuds de stockage aussi homogènes que possible, pour qu’ils aient tous la même UCT, la même mémoire vive et le même disque. Cela permet d’utiliser la fonctionnalité deviceFilter&nbsp;:</p><pre>storage:
  useAllNodes: true
  useAllDevices: false
  deviceFilter: sd[a-z]
</pre><p>Qui effectue la recherche de tous les appareils possédant le regex</p><pre>/dev/sd[a-z]</pre><p>.</p><h3>Création d’un bassin de répliques Ceph et d’une classe de stockage Kubernetes</h3><p>Le bassin CRD défini les paramètres désirés pour un bassin. Rook offre deux mécanismes pour assumer les pertes d’OSD&nbsp;: la réplication et le code d’effacement. La réplication est le choix par défaut, cela signifie que chaque objet est répliqué sur de nombreux disques, selon la taille <em>spec.replicated.size</em>. Veuillez noter qu’il faut préciser une taille de réplication qui convient à votre cas d’utilisation. Je recommande au moins 2 pour la non-production et 3 pour la production, mais cela dépend évidemment de la taille de votre grappe.</p><p>Le code d’effacement (erasure coding ou EC) est une alternative qui fait épargner de l’espace. Le code d’effacement brise les données en fragments <em>n</em> (<em>spec.erasureCoded.dataChunks</em>), ajoute des fragments de code <em>k</em> (<em>spec.erasureCoded.codingChunks</em>) et stocke des fragments <em>n+k</em> d’une manière distribuée sur les disques. Dans ce cas-ci, Ceph peut tolérer la perte d’OSD <em>k</em>.</p><pre># pool with replication enabled
apiVersion: ceph.rook.io/v1
kind: CephBlockPool
metadata:
  name: replicated-metadata-pool
  namespace: rook-ceph
spec:
  replicated:
    size: 2
---
# pool with EC enabled
apiVersion: ceph.rook.io/v1
kind: CephBlockPool
metadata:
  name: ec-data-pool
  namespace: rook-ceph
spec:
  erasureCoded:
    dataChunks: 2
    codingChunks: 1
</pre><p>Dans ce guide, nous allons nous fier à la réplication pour maintenir les données redondantes.</p><p>Les classes de stockage sont au cœur de l’approvisionnement dynamique des volumes persistant dans Kubernetes. Voici un exemple d’une classe de stockage pour le stockage en bloc de Ceph.</p><pre>apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
   name: rook-ceph-block
provisioner: ceph.rook.io/block
parameters:
  # The replicated pool as the `blockPool` parameter
  blockPool: replicated-metadata-pool
  # The erasure coded pool must be set as the `dataBlockPool` parameter below.
  dataBlockPool: ec-data-pool
  clusterNamespace: rook-ceph
</pre><p>Pour créer un bassin de réplique Ceph et une classe de stockage, il faut simplement appliquer le manifeste</p><pre>storageclass.yaml</pre><p> qui se trouve au même endroit que</p><pre>cluster.yaml</pre><p>.</p><pre>kubectl create -f storageclass.yaml</pre><h3>Tester le stockage</h3><p>Pour tester votre configuration, créez une PVC en utilisant le nom de la classe de stockage que vous avez créée à l’étape précédente.</p><pre>apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: mysql-pv-claim
  labels:
    app: wordpress
spec:
  storageClassName: rook-ceph-block
  accessModes:
  - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi
</pre><p>Vérifiez l’état du PVC pour s’assurer qu’il est dans un état ‘Bounded’.</p><pre>$ kubectl get pvc
NAMESPACE       NAME                                     STATUS    VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS      AGE
default   mysql-pv-claim                                 Bound     pvc-f1af6df6-474a-11e9-8360-02006e76001e   8Gi        RWO            rook-ceph-block   1m
</pre><h3>Commandes Ceph courantes</h3><p>Une fois dans le pod ‘toolbox’, vous pouvez interagir avec les grappes Ceph et exécutez les commandes. Voici une liste de commandes utiles afin de vérifier l’état de votre grappe.</p><h4>État général de la grappe</h4><pre>$ ceph status
  cluster:
    id:     62e69dc1-efb5-42d9-a7bc-1ea6cfbd467f
    health: HEALTH_OK
 
  services:
    mon: 3 daemons, quorum c,a,b
    mgr: a(active)
    osd: 9 osds: 9 up, 9 in
 
  data:
    pools:   1 pools, 100 pgs
    objects: 236  objects, 406 MiB
    usage:   10 GiB used, 1.7 TiB / 1.8 TiB avail
    pgs:     100 active+clean
 
  io:
    client:   38 KiB/s wr, 0 op/s rd, 3 op/s wr
</pre><h4>État de santé détaillé</h4><p>Utile pour identifier les groupes en mauvais états qui ont besoin d’être réparés.</p><pre>$ ceph health detail
HEALTH_OK
</pre><h4>État de tous les OSD</h4><pre>$ ceph osd status
+----+-------------------------+-------+-------+--------+---------+--------+---------+-----------+
| id |           host          |  used | avail | wr ops | wr data | rd ops | rd data |   state   |
+----+-------------------------+-------+-------+--------+---------+--------+---------+-----------+
| 0  | coo-r1-k8s-worker-st-01 | 1149M |  198G |    0   |  13.6k  |    0   |     0   | exists,up |
| 1  | coo-r1-k8s-worker-st-02 | 1157M |  198G |    0   |     0   |    0   |     0   | exists,up |
| 2  | coo-r1-k8s-worker-st-03 | 1143M |  198G |    0   |     0   |    0   |     0   | exists,up |
| 3  | coo-r1-k8s-worker-st-01 | 1128M |  198G |    0   |     0   |    0   |     0   | exists,up |
| 4  | coo-r1-k8s-worker-st-02 | 1180M |  198G |    4   |  37.6k  |    0   |     0   | exists,up |
| 5  | coo-r1-k8s-worker-st-01 | 1169M |  198G |    1   |  12.0k  |    0   |     0   | exists,up |
| 6  | coo-r1-k8s-worker-st-02 | 1109M |  198G |    0   |     0   |    0   |     0   | exists,up |
| 7  | coo-r1-k8s-worker-st-03 | 1160M |  198G |    0   |  1638   |    0   |     0   | exists,up |
| 8  | coo-r1-k8s-worker-st-03 | 1143M |  198G |    0   |  3276   |    0   |     0   | exists,up |
+----+-------------------------+-------+-------+--------+---------+--------+---------+-----------+
</pre><h4>Détails du bassin Ceph</h4><pre>$ ceph osd pool ls detail
pool 1 'replicapool' replicated size 3 min_size 1 crush_rule 1 object_hash rjenkins pg_num 100 pgp_num 100 last_change 37 flags hashpspool,selfmanaged_snaps stripe_width 0 application rbd
	removed_snaps [1~3]
</pre><h4>Indiquer l’utilisation du bassin et l’utilisation totale</h4><pre>$ rados df
POOL_NAME      USED OBJECTS CLONES COPIES MISSING_ON_PRIMARY UNFOUND DEGRADED RD_OPS      RD  WR_OPS     WR  
replicapool 1.4 GiB     575      0   1150                  0       0        0   1224 2.4 MiB 1698291 84 GiB  

total_objects    575
total_used       5.6 GiB
total_avail      294 GiB
total_space      300 GiB
</pre><h3>Utiliser la classe de stockage avec les applications ou les Helm charts de Kubernetes.</h3><p>La plupart, sinon tous les Helm charts ont des options de configuration qui permettent d’outrepasser la classe de stockage. Par exemple&nbsp;:</p><pre>helm install --name=redis stable/redis \
  --set master.persistence.storageClass=rook-ceph-block \
  --set slave.persistence.storageClass=rook-ceph-block
</pre><h3>Réinstallation</h3><h4>Réinstallation complète incluant RKE</h4><p><strong>Clause de non-responsabilité</strong> : Les instructions suivantes servent à effacer les données ; il n’est pas recommandé de les exécuter sur la grappe<strong> Production</strong>.</p><p>Rook peut être difficile à réinstaller, car un grand nombre de données sont stockées sur les nœuds de stockage locaux. Si vous utilisez RKE, effacez les données sur les nœuds ouvriers et les nœuds maîtres, puis réinstaller RKE en entier. Pour nettoyer&nbsp;:</p><pre># remove rke docker and everything 
sudo apt -y purge docker-ce \
&amp;&amp; sudo apt -y autoremove \
&amp;&amp; sudo rm -rf /var/lib/docker \
&amp;&amp; sudo rm -rf /opt/* \
&amp;&amp; sudo rm -rf /var/lib/rook \
&amp;&amp; sudo rm -rf /var/lib/etcd \
&amp;&amp; sudo rm -rf /var/lib/cni \
&amp;&amp; sudo rm -rf /var/lib/containerd \
&amp;&amp; sudo rm -rf /var/lib/calico \
&amp;&amp; sudo rm -rf /var/lib/kubelet \
&amp;&amp; sudo rm -rf /var/lib/rancher
</pre><p>Ceci supprime toute trace de Docker, Rook, RKE et de leurs composantes.</p><p>Si cela fonctionne sur un nœud ouvrier/maître en marche, vous devriez redémarrer après avoir exécuté cette commande, et puis exécuter la commande à nouveau (certains fichiers sont verrouillés lors de processus en exécution), puis procédez à une réinstallation complète, Docker y compris !</p><p>Vous allez aussi devoir formater les disques utilisés par Rook/Ceph.</p><pre>$ sudo fdisk /dev/sdb
Welcome to fdisk (util-linux 2.29.2).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.

Device /dev/sdb already contains a LVM2_member signature.
The signature will be removed by a write command.

Device does not contain a recognized partition table.
Created a new DOS disklabel with disk identifier 0xa24124a7.

Command (m for help):
</pre><p>Tapez simplement ‘<strong>w</strong>’ et ‘enter’ ; cela aura pour effet d’écraser la table de partition et de rendre les disques à nouveau prêts à être utilisé par Rook/Ceph. Je recommande de réinitialiser après avoir effacé le disque, afin d’assurer que rien n’est lié ni ne possède d’indicateur fichier ouvert.</p><h4>Rook seulement</h4><p>Le fait de supprimer les namespaces rook-ceph et rook-ceph-system peut vous créer des problèmes. Pour démanteler la grappe Ceph&nbsp;:</p><p>Supprimez les ressources créées par-dessus la grappe rook (bassin, classe de stockage, PVC, etc.).</p><pre>kubectl delete -n rook-ceph cephblockpool replicapool
kubectl delete storageclass rook-ceph-block
</pre><p>Supprimez la grappe CRD et l’opérateur helm chart.</p><p>kubectl -n rook-ceph patch clusters.ceph.rook.io rook-ceph -p ‘{«&nbsp;metadata&nbsp;»:{«&nbsp;finalizers&nbsp;»: []}}’ –type=merge<br> kubectl -n rook-ceph delete cephcluster rook-ceph<br> helm delete –purge rook<br> kubectl delete namespace rook-ceph</p><p>Connectez-vous à chaque machine et supprimez</p><pre>/var/lib/rook</pre><p>, ou le chemin précisé par le</p><pre>dataDirHostPath</pre><p>.</p><p>Si vous rencontrez des problèmes, consultez <a href="https://github.com/rook/rook/blob/master/Documentation/ceph-teardown.md#troubleshooting">cette page</a>.</p><h3>Diagnostiques</h3><h4>Réparation de groupe physique</h4><p>Occasionnellement, l’état de Ceph peut indiquer que les groupes physiques nécessitent des réparations. Pour exécuter cela, connectez-vous dans le pod ‘toolbox’&nbsp;:</p><pre>$ ceph health detail 
HEALTH_ERR 
1 pgs inconsistent; 2 scrub errors 
pg 0.6 is active+clean+inconsistent, acting [0,1,2] 2 scrub errors
</pre><p>Cela indique que le groupe physique 0.6 a besoin de réparation. Pour le réparer&nbsp;:</p><pre>ceph pg repair 0.6</pre><p>Cela lancera la réparation qui peut prendre une minute à se compléter. À la suite de cela, l’état ‘health’ devrait être :</p><pre>HEALTH_OK</pre><h4>Changement de la taille de réplication</h4><p>Si la taille de réplication n’est pas bien définie, vous pouvez la définir sur un bassin de réplication ; appelé replicapool dans cet exemple. Une fois dans le pod ‘toolbox’&nbsp;:</p><pre>ceph osd pool set replicapool size 3
ceph osd pool set replicapool min_size 3
</pre><h4>Changements de nombre de groupes physiques</h4><p>Pour changer la taille du groupe physique pour un bassin de répliques, une fois à l’intérieur du pod ‘toolbox’&nbsp;:</p><pre>ceph osd pool set replicapool pg_num 256
ceph osd pool set replicapool pgp_num 256
</pre><p>Rook et Ceph peuvent aider les équipes à trouver des solutions infonuagiques pour le stockage. Pour en apprendre plus sur les outils du DevOps, <a href="https://www.cloudops.com/workshops/">inscrivez-vous à l’un de nos ateliers pratiques sur le DevOps</a>. Nous offrons des formations publiques, dans une variété de villes, sur Docker, Kubernetes, et sur la surveillance DevOps, puis des formations privées sur un plus grand éventail de sujets dans n’importe quelle ville. <a href="https://www.cloudops.com/fr/a-propos/nous-joindre/">Contactez-nous</a> pour savoir comment CloudOps peut aider votre organisation à trouver des solutions DevOps.</p><h4><strong>Références&nbsp;:</strong></h4><ul><li> https://github.com/rook/rook/blob/master/Documentation/ceph-toolbox.md</li><li>http://docs.ceph.com/docs/mimic/rados/troubleshooting/troubleshooting-pg/</li><li> http://docs.ceph.com/docs/jewel/rados/operations/placement-groups/#set-the-number-of-placement-groups</li><li> http://accelazh.github.io/ceph/Ceph-Performance-Tuning-Checklist</li><li> https://github.com/rook/rook/blob/master/Documentation/advanced-configuration.md</li><li> https://github.com/rook/rook/blob/master/Documentation/common-issues.md</li><li>http://docs.ceph.com/docs/giant/rados/troubleshooting/troubleshooting-osd/</li></ul></div>
