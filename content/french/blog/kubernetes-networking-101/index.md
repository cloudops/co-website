---
title: "Réseautage Kubernetes 101"
date: "2020-06-03"
author: "Chanpreet Kaur"
resources:
- name: "thumbnail"
  src: "AnthosThumbnail.png"
- name: "cover"
  src: "AnthosCover.png"
class_name: "blog post"
slug: /reseautage-kubernetes-101
aliases:
    - /fr/2020/06/reseautage-kubernetes-101/
    - /fr/reseautage-kubernetes-101
description:
keywords:
tags:
---

<p>Le réseautage est un élément très important lorsqu’il s’agit d’architectures basées sur les miscroservices. Kubernetes offre un soutien de première classe pour toute une gamme de configurations de réseautage différentes. Essentiellement, il vous offre un réseau simple et isolé à l’échelle du cluster. En arrière-scène, le réseautage Kubernetes peut être très complexe à cause de tous les différents modules d’extension de réseautage. Il serait utile de garder en tête les concepts les plus simples avant d’essayer d’identifier le flux de paquets de réseautage individuels.</p><p>Il est important d’avoir une assez bonne compréhension des différents types de services et  d’ingresses afin de choisir la configuration adéquate pour votre cluster et ainsi minimiser la complexité et les ressources impliquées (comme des équilibreurs de charge provisionnés).</p><p>Pour commencer, voici quelques notions utiles :</p><p>1. Chaque pod se voit assigner une adresse IP unique.</p><p>2. Les pods sont exploités au sein d’un réseau virtuel, spécifié par le réseautage CIDR (routage interdomaine sans classe) du pod.</p><p>3. Les conteneurs à l’intérieur d’un pod individuel partagent le même namespace de réseau (Linux network namespace), cela signifie qu’ils peuvent tous être rejoints via un hôte local (localhost) et qu’ils partagent le même espace de port.</p><p>4. Tous les conteneurs sont configurés de façon à utiliser un serveur DNS qui est géré par Kubernetes.</p><h3>Fournir un accès externe à votre cluster</h3><p>Le processus qui requiert un accès externe pour entrer dans votre cluster fonctionne un peu différemment que de simplement écouter sur un port ouvert. À la place, un service d’entrée d’équilibreur de charge (<em>LoadBalancer</em>) ou un service de <em>NodePort</em> sera utilisé, on en reparlera ci-dessous.</p><h3>Inspection de l’adresse IP d’un pod</h3><p>Il est souvent utile d’identifier l’adresse I’P d’un pod. Cette valeur se trouve dans les métadonnées à l’intérieur de l’état du cluster Kubernetes.</p><p>Vous pouvez effectuer l’inspection de l’adresse IP en suivant les commandes suivantes :</p><pre class="wp-block-code"><code>$ kubectl get pod -o yaml busybox | grep podIP
podIP: 10.10.3.4</code></pre><p>De cette manière, vous éviterez d’avoir à exécuter manuellement dans le conteneur avec la commande ip addr ou autrement. Vous pouvez aussi visualiser cela avec l’argument <strong>-o wide</strong> vers <strong>kubectl get pods</strong>.</p><pre class="wp-block-code"><code>$ kubectl get pods -o wide
NAME READY STATUS RESTARTS AGE IP NODE NOMINATED NODE READINESS GATES
busybox 0/1 Completed 0 2d8h 10.10.3.4 node-1 &lt;none&gt; &lt;none&gt;</code></pre><h2>Services</h2><p>L’un des principes fondamentaux de réseautage dans Kubernetes est un service. Tout comme les déploiements, les services sont définis de façon déclarative et ont des «&thinsp;contrôleurs&thinsp;» qui y sont associés qui regardent et qui approvisionnent les ressources autour du service. Les services sont reliés au concept de «&thinsp;découverte de service&thinsp;», ce qui signifie de permettre aux différentes applications de se découvrir ou de communiquer entre elles. Les services simplifient le processus de gestion des adresses IP individuelles autour de conteneurs en fonction.</p><p>En termes pratiques, par exemple, un service peut cibler un ou plusieurs pods exploités sur n’importe quels nœuds de cluster. Cela arrive habituellement via une résolution DNS privée et interne. Pour chaque service défini, Kubernetes créera une entrée DNS. Cela permet aux pods de chercher les noms d’hôtes et de recevoir la bonne adresse IP de pod.</p><h3>Types de service</h3><p>Il existe une grande variété de configurations de services qui sont soutenues. Voici les quatre types de services de base:</p><h4>Adresse IP de base : Cluster IP</h4><p>C’est le type de service par défaut et l’un des plus simples. Deux grandes<br> propriétés sont définies, le nom du service et le sélecteur. Le nom du service est un identifiant unique, tandis que le sélecteur précise ce que le service doit router vers la cible.</p><h4>NodePort</h4><p>Les NodePorts sont semblables aux Cluster IP sauf que tous les nœuds ont<br> des ports, soit spécifiés ou aléatoires, attribués à leur service. Les requêtes de réseaux vers des ports sur n’importe quels des nœuds sont mandatés dans le service.</p><h4>Équilibreur de charge</h4><p>Les équilibreurs de charge sont semblables aux ClusterIP, mais ils sont provisionnés de façon externe et ont des adresses IP publiques qui leur sont assignées. L’équilibreur de charge sera spécifique à la mise en œuvre. On l’utilise souvent dans des plateformes infonuagiques.</p><h4>Nom externe</h4><p>Deux grandes propriétés sont définies, le nom du service et le domaine externe&thinsp;; un alias de nom de domaine, en quelque sorte. Même si cela pourrait sembler étrange ou inutile, cela vous permet de définir un service qui est référencé dans différents endroits (pods ou autres services) et de gérer le point d’extrémité/ domaine externe défini en un seul endroit. Cela vous permet aussi d’abstraire le domaine en tant que service afin de l’échanger plus tard pour un autre service Kubernetes.</p><h3>Sélecteur</h3><p>Dans le cas des trois premiers types de service, nous avons un sélecteur. Il s’agit de sélectionner les pods pour cibler ceux qui traiteront la requête de réseau (l’exportation ou «&thinsp;output&thinsp;» du service). Par exemple, nous pourrions avoir un service Web où nous ciblons tous les pods qui ont une étiquette «&thinsp;app&thinsp;» et une valeur de «&thinsp;web&thinsp;».</p><h3>Configuration d’un service simple</h3><p>Créer un nouveau fichier appelé <strong>web-app-service.yaml</strong> et dont le contenu est:</p><pre class="wp-block-code"><code>apiVersion: v1
kind: Service
metadata:
 name: web-service
spec:
 ports:
 - name: http
 port: 80
 selector:
 app: web</code></pre><p>Créez-le et décrivez-le :</p><pre class="wp-block-code"><code>$ kubectl create -f web-app-service.yaml
service/web-service created</code></pre><pre class="wp-block-code"><code>$ kubectl describe services web-service
Name: web-service
Namespace: default
Labels: &lt;none&gt;
Annotations: &lt;none&gt;
Selector: app=web
Type: ClusterIP
IP: 10.97.7.119
Port: http 80/TCP
TargetPort: 80/TCP
Endpoints: &lt;none&gt;
Session Affinity: None
Events: &lt;none&gt;</code></pre><p>Dans le cas ci-dessus, nous voyons que le point d’extrémité est nul. Endpoints: . Cette valeur montre les adresses IP du pod qui correspondent au sélecteur app=web spécifié, dans ce cas-ci, aucun ( pas de correspondance).</p><p>Maintenant, créons deux pods avec les bonnes étiquettes qui correspondent au sélecteur. Nous pouvons faire ça en créant simplement deux pods gérés manuellement (plutôt que par un déploiement) en suivant les commandes suivantes :</p><pre class="wp-block-code"><code>$ kubectl run httpbin --generator=run-pod/v1 --image=kennethreitz/httpbin --labels=”app=web”
pod/httpbin created
$ kubectl run httpbin-2 --generator=run-pod/v1 --image=kennethreitz/httpbin --labels=”app=web”
pod/httpbin-2 created</code></pre><p>Une fois que ces pods sont planifiés et qu’ils fonctionnent bien, nous pouvons faire l’inspection des services encore une fois. Nous devrions voir ce qui suit pour les (points d’extrémités) <strong>Endpoints:</strong></p><pre class="wp-block-code"><code>$ kubectl describe services web-service |
grep “Endpoints”
Endpoints:
172.17.0.3:80,172.17.0.4:80</code></pre><p>Ces adresses IP appartiennent aux pods que nous venons de créer!</p><h3>Accéder aux services</h3><p>Comme j’ai mentionné plus haut, Kubernetes a crée une entrée DNS pour chaque service défini. Dans le cas du service que nous avons crée, le serveur DNS de Kubernetes arrêtera le nom d’hôte du service Web vers l’un des pods dans le service Web. Pour démontrer l’exemple, nous pouvons exécuter curl dans l’un des conteneurs, en nous assurant d’installer curl comme s’il n’était pas inclus par défaut!</p><pre class="wp-block-code"><code>$ kubectl exec -it httpbin -- /bin/bash
$ apt update
...
$ apt install curl
...
$ curl web-service
&lt;!DOCTYPE html&gt;
&lt;html lang=”en”&gt;
&lt;head&gt;
 &lt;meta charset=”UTF-8”&gt;
 &lt;title&gt;httpbin.org&lt;/title&gt;
...</code></pre><h3>Configuration d’un accès externe via un service NodePort</h3><p>NodePort est l’un des moyens les plus simples de fournir un accès externe à vos pods Kubernetes. Pour configurer un service NodePort, nous devons configurer explicitement le «&thinsp;spec type&thinsp;» (autrement, par défaut, il s’agit de ClusterIP) dans une configuration de service :</p><pre class="wp-block-code"><code>spec:
 type: NodePort</code></pre><p>Pour en configurer un, créer un nouveau fichier appelé <strong>web-app-nodeport-service.yaml </strong>et dont le contenu est :</p><pre class="wp-block-code"><code>apiVersion: v1
kind: Service
metadata:
 name: web-service-nodeport
spec:
 type: NodePort
 ports:
 - name: http
 port: 80
 selector:
 app: web</code></pre><p>Créez-le et décrivez-le :</p><pre class="wp-block-code"><code>$ kubectl create -f web-app-nodeport-service.yaml
service/web-service-nodeport created
$ kubectl get services web-service-nodeport
NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE
web-service-nodeport NodePort 10.101.203.150 &lt;none&gt; 80:32285/TCP 23s</code></pre><p>En jetant un coup d’œil au champ <strong>PORT</strong>, nous pouvons voir qu’on lui a attribué le port <strong>32285</strong>. C’est le port qui est attribué à chacun de nos nœuds Kubernetes, qui à leur tour, mandateront les pods appropriés.</p><p>Nous pouvons le tester en effectuant les commandes suivantes (prenez bien note qu’il faudra utiliser votre adresse IP ou nom de domaine spécifique. Dans mon cas, ce n’est que l’adresse IP du nœud interne de 192.168.122.188):</p><pre class="wp-block-code"><code>$ curl 192.168.122.188:32285
&lt;!DOCTYPE html&gt;
&lt;html lang=”en”&gt;
&lt;head&gt;
 &lt;meta charset=”UTF-8”&gt;
...</code></pre><h2>Ingresses (entrées réseau)</h2><p>Les ingresses désignent un autre objet Kubernetes. Essentiellement, ce sont des versions d’un service aux fonctionnalités plus complètes. La fonction principale des ingresses tourne autour du routage des requêtes HTTP, ils partagent aussi des similarités avec les<br> services. Vous aurez besoin d’installer ou de configurer un contrôleur d’ingresses spécifique, car il ne sera pas nécessairement configuré par défaut. De plus, plusieurs contrôleurs d’ingresses peuvent fonctionner au même moment. Habituellement, chaque contrôleur ne gère que les ingresses qui ont les annotations kubernetes. io/ingress.class appropriées relatives au contrôleur spécifique.</p><p>Les ingresses ciblent les services et non les pods.</p><h3>Contrôleurs d’ingresses</h3><p>Même si les contrôleurs d’ingresses se conforment tous à une interface ou spécification commune, ils incluent une configuration spécifique à la mise en place. Le contrôleur d’ingresses «&thinsp;nginx ingress controller&thinsp;» est l’une des plus populaires. Cela fait habituellement référence au projet suivant :</p><p><a href="https://github.com/kubernetes/ingress-nginx">https://github.com/kubernetes/ingress-nginx</a> qui est un contrôleur riche en fonctionnalités offrant du soutien à l’authentification HTTP, à l’affinité de session, réécriture d’URL, et plus encore.</p><h3>Configuration d’une entrée simple</h3><p>Créez un nouveau fichier appelé <strong>app-ingress.yaml</strong> et dont le contenu est (prenez note que nous mettons en place une règle pour un hôte de <strong>example.com</strong>) :</p><pre class="wp-block-code"><code>apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
 name: app-ingress
 annotations:
 nginx.ingress.kubernetes.io/rewrite-target: /
spec:
 rules:
 - http:
 paths:
 - path: /
 backend:
 serviceName: web-service
 servicePort: 80</code></pre><p>Créez-le et décrivez-le :</p><pre class="wp-block-code"><code>$ kubectl create -f app-ingress.yaml
ingress.networking.k8s.io/app-ingress
created</code></pre><pre class="wp-block-code"><code>$ kubectl describe ingresses app-ingress
Name: app-ingress
Namespace: default
Address: 192.168.122.188
Default backend: default-http-backend:80 (172.17.0.8:8080)
Rules:
 Host Path Backends
 ---- ---- --------
 example.com
 / web-service:80 (172.17.0.3:80,172.17.0.4:80)
Annotations:
 nginx.ingress.kubernetes.io/rewrite-target: /
Events:
 Type Reason Age From Message
 ---- ------ ---- ---- -------
 Normal CREATE 21m nginx-ingress-controller Ingress default/app-ingress
 Normal UPDATE 67s (x5 over 20m) nginx-ingress-controller Ingress default/app-ingress</code></pre><p>Et si nous essayons d’envoyer une requête HTTP avec curl à l’adresse IP de l’ingress :</p><pre class="wp-block-code"><code> $ curl -H “Host: example.com”
http://192.168.122.188
&lt;!DOCTYPE html&gt;
&lt;html lang=”en”&gt;
&lt;head&gt;
 &lt;meta charset=”UTF-8”&gt;
 &lt;title&gt;httpbin.org&lt;/title&gt;
 &lt;link href=”https://fonts.googleapis.com/css?family=Open+Sans:400,700|-
Source+Code+Pro:300,600|Titillium+Web:400,600,700”
...</code></pre><p>D’un autre côté, si nous essayons un hôte que nous n’avons pas configuré :</p><pre class="wp-block-code"><code> $ curl -H “Host: example123.com”
http://192.168.122.188
default backend - 404</code></pre><p>Nous obtenons la réponse 404 page non trouvée – ce qui semble tout à fait adéquat, on ne s’attendait pas à autre chose!</p><h3>Configuration d’un ingress avec SSL</h3><p>Nous utiliserons un certificat autosigné pour démontrer la fonction SSL.</p><p>Nous n’avons pas encore parlé des «&thinsp;secrets&thinsp;», mais nous allons devoir en installer un afin de configurer une clé SSL et un certificat pour un ingress.</p><p>Pour cela, il faut effectuer la commande suivante :</p><pre class="wp-block-code"><code>$ kubectl create secret tls ssl-example-cert --key ssl.key --cert ssl.cert
secret/ssl-example-cert created</code></pre><p>Nous pouvons ajouter un certificat SSL en précisant le secret, sous la clé spec dans un ingress :</p><p>tls:</p><pre class="wp-block-code"><code> - secretName: ssl-example-cert</code></pre><p>Autrement dit, le contenu de notre fichier ingress sera :</p><pre class="wp-block-code"><code>apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
 name: app-ingress
 annotations:
 nginx.ingress.kubernetes.io/rewrite-target: /
spec:
 tls:
 - secretName: ssl-example-cert
 rules:
 - host: example.com
 http:
 paths:
 - path: /
 backend:
 serviceName: web-service
 servicePort: 80</code></pre><p>Maintenant, si nous essayons de point d’extrémité HTTPS du ingress (en ajoutant aussi le paramètre -k à curl afin d’ignorer l’erreur de certificat autosigné), nous verrons :</p><pre class="wp-block-code"><code>$ curl -k -H “Host: example.com”
https://192.168.122.188/
&lt;!DOCTYPE html&gt;
&lt;html lang=”en”&gt;
&lt;head&gt;
 &lt;meta charset=”UTF-8”&gt;
 &lt;title&gt;httpbin.org&lt;/title&gt;
 &lt;link href=”https://fonts.googleapis.com/css?family=Open+Sans:400,700|-
Source+Code+Pro:300,600|Titillium+Web:400,600,700”
...</code></pre><p>Maintenant que vous avez découvert le réseau Kubernetes, il est temps d’en apprendre davantage. Notre ebook “<a href="https://info.cloudops.com/azure-kubernetes-services-la-securite-des-conteneurs-pour-un-monde-infonuagique-0">The Beginner’s Guide to Kubernetes</a>” vous montrera ce qui peut être fait de plus avec la mise en réseau Kubernetes et vous offrira des ressources à propos des déploiements, des volumes et de la sécurité de Kubernetes.</p>

<div class="row">
    <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12 col-xs-12 cta-image">
      <img src="/images/blog/cta/kubernetesfr.png">
    </div>
</div>
