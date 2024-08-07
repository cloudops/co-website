---
title: "Guide CNCF du débutant"
date: "2018-10-26"
author: "Ayrat Khayretdinov"
resources:
- name: "thumbnail"
  src: "CNCF-thumbnail.png"
- name: "cover"
  src: "CNCF-cover.png"
class_name: "blog post"
slug: "guide-cncf-du-debutant"
aliases:
  - /fr/2018/10/guide-cncf-du-debutant/
  - /fr/guide-cncf-du-debutant
description: Le paysage en nuage natif est chaotique. Ce guide pour débutants vous présentera les projets CNCF.
keywords: [outils cncf, guide cncf, outils nuage natif, guide nuage natif]
tags: [Nuage natif, Guide technique]
---

Le contexte des déploiements infonuagiques natifs peut paraître compliqué et
porter à confusion. La vaste et dynamique communauté technologique contribue
continuellement à une multitude de projets de logiciel libre. La fondation Cloud
Native Computing Foundation ([CNCF](https://www.cncf.io/)) a créé [une carte
interactive](https://landscape.cncf.io/) démontrant l’éventail de solutions de
déploiements infonuagiques natifs qui, pour la plupart, sont sous sa gouverne.
En tant qu’ambassadeur de la CNCF, je participe activement à la promotion pan
canadienne des efforts de la communauté technologique et de l’éducation aux
déploiements infonuagiques natifs. Chez CloudOps, j’anime des ateliers sur
Docker et Kubernetes portant sur l’introduction aux technologies de déploiements
infonuagiques natifs et aidant les équipes de DevOps à exploiter leurs
applications. J’organise aussi des meetups Kubernetes et Cloud Native qui
rassemblent des conférenciers de partout dans le monde et qui présentent une
panoplie de projets. Ils se déroulent aux trois mois à
[Montréal](https://www.meetup.com/Kubernetes-Montreal), à
[Ottawa](https://www.meetup.com/Kubernetes-Ottawa), à
[Toronto](https://www.meetup.com/Kubernetes-Toronto), à
[Kitchener-Waterloo](https://www.meetup.com/Kubernetes-Kitchener-Waterloo), et à
[Québec](https://www.meetup.com/Kubernetes-Quebec/). Pour en apprendre davantage
sur les déploiements infonuagiques natifs, vous pouvez me rejoindre à
[@archyufa](https://twitter.com/archyufa) ou envoyez un courriel à CloudOps.
Entretemps, j’ai écrit un guide du débutant expliquant le paysage des
déploiements infonuagiques natifs. J’espère que cela améliorera votre
compréhension de ce domaine et vous guidera vers la meilleure façon de vous y
retrouver. **Les débuts de la fondation CNCF**

<figure class="alignright is-resized">
  <img
    src="https://www.cloudops.com/wp-content/uploads/2018/10/icon_cncf_twitter.png"
    alt="CNCF"
    width="232"
    height="232"
  />
</figure>

En 2014, Google a utilisé le logiciel libre pour un projet interne, appelé Borg,
dont l’utilité était l’orchestration de conteneurs. Comme ils n’avaient pas
d’endroit pour loger leur projet, ils ont formé un partenariat avec la fondation
Linux afin de créer la fondation Cloud Native Computing Foundation (CNCF), pour
encourager le développement et la collaboration de Kubernetes et d’autres
solutions de déploiements infonuagiques natifs. L’implémentation de Borg fut
réécrite en Go, renommée vers Kubernetes et le projet fut offert comme projet
initiateur. Ce fut tout de suite clair que Kubernetes n’était que le début et
qu’un foisonnement de nouveaux projets rejoindrait la CNCF et allait étendre la
fonctionnalité de Kubernetes. **La mission de la CNCF** La CNCF encourage les
projets de logiciel libre en offrant des solutions viables aux communautés
d’utilisateurs finaux afin de bâtir des applications à déploiements
infonuagiques natifs. En encourageant les projets à collaborer entre eux, la
CNCF espère favoriser les piles technologiques à part entière composées
uniquement de projets membres de la fondation. C’est une façon d’aider les
entreprises à *[être maîtres de leur destin infonuagique.<br />](https://www.cloudops.com/fr/2018/07/manifeste-cloudops/)*
**Procédés de la CNCF** En tout, 25 projets ont suivi Kubernetes et ont été
adoptés par la CNCF. Les projets, pour se joindre, doivent être sélectionnés,
puis élus par le comité de la supervision technique (CST), avec une super
majorité. Le processus de scrutin est appuyé par une saine communauté de
collaborateurs CST, qui sont, comme moi-même, représentants des sociétés membres
de la CNCF. Les projets membres rejoignent soit le bac à sable, la phase
d’incubation ou le stade d’achèvement, selon le niveau de maturité de leur code.
Les projets dans le **bac à sable** en sont à leurs tout débuts ; ils demandent
une implication de la part de la communauté et une grande maturité au niveau du
code avant de pouvoir être déployés en production. Ils ont été adoptés, car ils
représentent un potentiel inexploité. Les [lignes
directrices](https://github.com/cncf/toc/blob/master/process/sandbox.md) de la
fondation indiquent que la CNCF aide à promouvoir la visibilité par le public
des projets dans le bac à sable et à faciliter leur alignement aux projets
existants. Les projets dans le bac à sable reçoivent peu de soutien, de
financement et de marketing de la part de la fondation et sont sujets à une
réévaluation et à un retrait possible tous les 12 mois. Les projets entrent en
phase **d’incubation** lorsqu’ils répondent à tous les critères du bac à sable
et qu’ils démontrent certaines caractéristiques de croissance et de maturité.
Ils doivent être utilisés en production par au moins trois entreprises et
maintenir une équipe vigoureuse qui approuve et qui accepte un flux dynamique de
contributions de la part de la communauté incluant de nouvelles fonctionnalités
et du code. Une fois que les projets en phase d’incubation ont atteint un moment
tournant dans leur utilisation en production, le CST peut voter pour les
transférer vers le stade **d’achèvement.** Pour se rendre au stade d’achèvement,
les projets doivent atteindre un taux d’adoption élevé et répondre à tous les
critères de la phase d’incubation. Ils doivent aussi avoir des « committers »
provenant d’au moins deux organisations, des procédés de gouvernance documentés
et structurés et obtenir le [Badge des pratiques exemplaires (Best Practices
Badge)](https://bestpractices.coreinfrastructure.org/en) de la « Linux
Foundation Core Infrastructure Initiative ». Jusqu’à maintenant, seuls
Kubernetes et Prometheus ont atteint le stade d’achèvement. **Les projets en
tant que tels** Ci-dessous, nous avons classé les projets en douze catégories :
orchestrations, développement d’application, surveillance, enregistrement,
traçage, registres de conteneurs, stockage et bases de données, temps
d’exécution, découverte de services, services maillés, mandataire de services,
sécurité et enfin, diffusion continue et messagerie. Vous trouverez aussi de
l’information qui éclairera les entreprises ou les individus dans l’évaluation
des utilités de chaque projet, la façon dont ceux-ci s’intègrent aux autres
projets de la CNCF et la compréhension de leur l’évolution et de leur l’état
actuel. **Orchestrations**

<figure class="alignleft">
  <img
    src="https://www.cloudops.com/wp-content/uploads/2018/10/Kubernetes.png"
    alt="Kubernetes"
  />
</figure>

**Kubernetes (Achevé) –**[Kubernetes](https://kubernetes.io/) automatise le
déploiement, la mise à l’échelle et la gestion d’applications conteneurisées, en
mettant l’accent sur l’automatisation et la configuration déclarative. Ce mot
désigne un timonier en grec ancien. Kubernetes orchestre les conteneurs, ceux-ci
étant des progiciels de microservices portatifs et modulaires, et ajoute une
couche d’abstraction, regroupant les conteneurs en « pods ». Kubernetes aide les
ingénieurs à planifier les charges de travail et permet aux conteneurs d’être
déployés à l’échelle à travers des environnements multinuages. Depuis son
achèvement, Kubernetes a atteint un niveau d’adoption critique. Dans un récent
sondage de la CNCF, [40 % des répondants provenant d’entreprises exploitent
Kubernetes en<br />
production.](https://www.cncf.io/blog/2018/08/29/cncf-survey-use-of-cloud-native-technologies-in-production-has-grown-over-200-percent/)
***Développement d’applications***

<figure class="alignleft">
  <img
    src="https://www.cloudops.com/wp-content/uploads/2018/10/Helm.png"
    alt="Helm"
  />
</figure>

**Helm (phase d’incubation) –**[Helm](https://helm.sh/) est un gestionnaire de
progiciel applicatif qui permet aux utilisateurs de trouver, de partager,
d’installer et de mettre à jour facilement les applications de Kubernetes (aussi
appelées charts). La plateforme aide les utilisateurs finaux à déployer des
applications existantes (incluant MySQL, Jenkins, Artifactory, etc.) avec
[KubeApps Hub](https://hub.kubeapps.com/), qui affichent des charts provenant
des registres [stable](https://github.com/helm/charts/tree/master/stable) et
[incubator](https://github.com/helm/charts/tree/master/incubator) et qui sont
maintenus par la communauté Kubernetes. Avec Helm, vous pouvez installer
d’autres projets de la CNCF exploités par-dessus la plateforme Kubernetes. Helm
permet aussi aux organisations de créer des applications personnalisées ou des
microservices, puis de les déployer vers Kubernetes. Cela implique de créer des
manifestes YAML avec des valeurs numériques qui ne conviennent pas aux
déploiements dans des environnements différents ou des pipelines CI/CD. Helm
crée des charts uniques pouvant être versionnés selon les modifications
d’application ou de configuration, déployés dans des environnements variés et
partagés parmi les organisations. Helm provient de chez Deis, et résulte d’une
tentative de création d’une expérience « homebrew » pour les utilisateurs de
Kubernetes. Helm V2 est le côté client de ce qui est actuellement le projet
Helm. Le « tiller » côté serveur, ou Helm V2, a été ajouté par Deis en
collaboration avec Google, environ au même moment où Kubernetes 1.2. a été
publié. C’est ainsi que Helm est devenu la norme dans le déploiement
d’applications par-dessus la plateforme Kubernetes. Helm est en train
d’effectuer une série de modifications et de mises à jour en préparation de la
publication de Helm V3, qui devrait avoir lieu d’ici la fin de l’année. Les
entreprises qui se fient sur Helm pour leur développement CI/CD quotidien,
incluant Reddit, Ubisoft et Nike, ont suggérer des améliorations pour le nouveau
design.

<figure class="alignleft">
  <img
    src="https://www.cloudops.com/wp-content/uploads/2018/10/Telepresence.png"
    alt="Telepresence"
  />
</figure>

**Telepresence (bac à sable) –**Il peut s’avérer difficile de développer des
applications conteneurisées sur Kubernetes. Les outils populaires servant au
développement local incluent Docker Compose et Minikube. Malheureusement, la
plupart des applications à déploiement infonuagique natif d’aujourd’hui
consomment beaucoup de ressources et impliquent plusieurs bases de données et de
nombreux services et dépendances. De plus, il peut être difficile d’imiter les
dépendances infonuagiques comme les systèmes de messagerie et les bases de
données dans Compose et Minikube. Une approche alternative est d’utiliser des
grappes Kubernetes à distance; par contre, cela vous empêchera de développer
avec vos propres outils locaux (comme IDE, debugger) et de créer des « boucles
internes » à développement lent qui font que les développeurs doivent attendre
les CI pour tester les modifications.
[Telepresence](https://www.telepresence.io/), qui fut développé par Datawire,
offre le meilleur des deux mondes. Elle permet aux développeurs de « coder en
direct » en exécutant localement des microservices uniques à des fins de
développement tout en restant connectés à des grappes Kubernetes à distance qui
exécutent le reste de leur application. Telepresence déploie des « pods » qui
contiennent des mandataires de réseaux bidirectionnels sur des grappes
Kubernetes à distance. Cela lie les machines locales à des mandataires.
Telepresence met en œuvre des environnements réalistes de développement et tests
sans geler les outils locaux qui servent au code, au débogage et à l’édition.
***Surveillance***

<figure class="alignleft">
  <img
    src="https://www.cloudops.com/wp-content/uploads/2018/10/Prometheus-1.png"
    alt="Prometheus"
  />
</figure>

**Prometheus (stade d’achèvement) –**Suivant les traces de Kubernetes,
[Prometheus](https://prometheus.io/) fut le second projet à rejoindre la CNCF et
à avoir atteint le stade d’achèvement (et le dernier jusqu’à maintenant). Il
s’agit d’une solution de surveillance adéquate pour les environnements
infonuagiques et de conteneurs dynamiques. Il est inspiré de Borgmon, le système
de surveillance de Google. Contrairement aux autres systèmes de surveillance qui
utilisent l’approche du « pousser » et où les agents de surveillance sont
exécutés sur des nœuds ; Prometheus est un système basé sur la technologie du
« tirer », où ce sont ses configurations qui décident du moment et de l’élément
à supprimer. Prometheus stocke les paramètres supprimés dans une banque de
données chronologique. La plateforme Prometheus vous permet de créer des
graphiques significatifs à l’intérieur du tableau de bord Grafana avec des
langages d’interrogation puissants comme PromQL. Vous pouvez aussi générer et
envoyer des alertes vers diverses destinations comme Slack et les envoyer par
courriel avec le gestionnaire d’alertes intégré. Le projet Prometheus a remporté
un tel succès qu’il est devenu la plateforme par défaut pour la surveillance des
paramètres dans les déploiements infonuagiques natifs. Grâce à Prometheus, l’on
peut surveiller les MV, les grappes Kubernetes et les microservices qui sont
exécutés de n’importe où, spécialement dans des systèmes dynamiques comme
Kubernetes. Les paramètres de Prometheus automatisent aussi les décisions
relatives à l’évolution en tirant profit des fonctionnalités de Kubernetes
incluant HPA, VPA et Cluster Autoscaling (mise à l’échelle automatique de
grappes). Prometheus peut surveiller d’autres projets de la CNCF comme Rook,
Vitesse, Envoy, Linkerd, CoreDNS, Fluentd, et NATS. Les
[exportateurs](https://prometheus.io/docs/instrumenting/exporters/) de
Prometheus s’intègrent à de nombreuses autres applications et systèmes
distribués. Pour commencer, utilisez le [Helm
Chart](https://github.com/helm/charts/tree/master/stable/prometheus) officiel de
Prometheus.

<figure class="alignleft">
  <img
    src="https://www.cloudops.com/wp-content/uploads/2018/10/openmetrics.png"
    alt="OpenMetrics"
  />
</figure>

**OpenMetrics (bac à sable) –**[OpenMetrics](https://openmetrics.io/) crée des
normes neutres concernant le format d’exposition des paramètres d’une
application. Ses normes modernes relatives aux paramètres permettent aux
utilisateurs de transmettre les métriques à l’échelle. OpenMetrics est basé sur
le très populaire [format d’exposition de
Prometheus](https://prometheus.io/docs/instrumenting/exposition_formats/), qui
possède plus de 300 exportateurs existants et est basé sur l’expérience
opérationnelle de [Borgmon](http://borgmon/). Borgmon permet la surveillance
« boîte blanche » et la collecte des données de masse tout en gardant les coûts
bas. Avant OpenMetrics, le secteur de la surveillance était surtout basé sur des
normes et des techniques désuètes (comme le protocole SNMP) utilisant des
formats exclusifs sans se concentrer sur les paramètres. OpenMetrics est basé
sur le format d’exposition de Prometheus, mais sa syntaxe est plus concise, plus
claire et enrichie. Bien que OpenMetrics n’en soit qu’au stade du bac à sable,
cette plateforme est déjà utilisée en production par des entreprises comme
AppOptics, Cortex, Datadog, Google, InfluxData, OpenCensus, Prometheus, Sysdig,
et Uber.

<figure class="alignleft">
  <img
    src="https://www.cloudops.com/wp-content/uploads/2018/10/cortex.png"
    alt="Cortex"
  />
</figure>

**Cortex (bac à sable) –**En matière de design, la simplicité opérationnelle a
toujours été un des objectifs premiers de Prometheus. Par conséquent, la
plateforme Prometheus elle-même ne peut être exécutée sans se regrouper (en
nœuds uniques ou en conteneurs) et ne peut utiliser que le stockage local qui
n’est pas conçu pour durer à long terme. Prometheus a renoncé, en faveur de la
simplicité, à la complexité opérationnelle supplémentaire qui vient avec le
regroupement et le stockage distribué. Cortex est une solution à long terme, à
évolution horizontale et à locataires multiples qui complète Prometheus. Cela
permet aux grandes entreprises d’utiliser Prometheus tout en maintenant l’accès
au stockage à haute disponibilité et à long terme. Il y a présentement dans cet
espace, d’autres projets qui attirent l’intérêt de la communauté comme Thanos,
Timbala, et M3DB. En revanche, Cortex a déjà été testé en tant qu’offre SaaS
chez Grafanalabs et Weaveworks et est aussi déployé sur place tant par EA que
par StorageOS. ***Enregistrement et traçage***

<figure class="alignleft">
  <img
    src="https://www.cloudops.com/wp-content/uploads/2018/10/fluentd.png"
    alt="Fluentd"
  />
</figure>

**Fluentd** **(phase d’incubation)** – [Fluentd](https://www.fluentd.org/)
collecte, interprète et transmet les données d’enregistrement d’application. Les
données de collecte et de consommation sont unifiées afin que vous puissiez
mieux comprendre et utiliser vos données. Fluentd structure les données en tant
que JSON et rassemble la collecte, le filtrage, le tamponnage et la sortie
d’enregistrements à travers des sources et des destinations multiples. Fluentd
collecte des enregistrements provenant de MV et d’applications traditionnelles,
par contre, le système excelle dans des environnements à déploiements
infonuagiques natifs qui exécutent des microservices par-dessus Kubernetes, et
où les applications sont créées de manière dynamique. Fluentd est exécuté dans
Kubernetes en tant que Daemonset (des charges de travail qui sont exécutées
chacune dans son ensemble). Non seulement il collecte des enregistrements de
toutes les applications exécutées en tant que conteneurs (incluant celles de la
CNCF) et émet des enregistrements vers STDOUT, Fluentd analyse et tamponne les
entrées d’enregistrement entrantes et envoie les enregistrements formatés vers
des destinations configurées comme Elasticsearch, Hadoop, et Mongo, pour un
traitement plus avancé. À la base, Fluentd fut écrit en Ruby et prenait plus de
50 Mo de mémoire à l’exécution, le rendant inadéquat à être exécuté dans un
motif sidecar à proximité de conteneurs. [Fluentbit](https://fluentbit.io/) est
aussi en développement comme solution aux côtés de Fluentd. Fluentbit est écrit
en C et n’utilise que quelques Ko de mémoire à l’exécution. Fluentbit est plus
efficace en matière d’UCT et d’utilisation de mémoire, mais ses fonctionnalités
sont plus limitées que Fluentd. À l’origine, Fluentd fut développé par
Treasuredata en tant que projet de logiciel libre. Fluentd est disponible en tant
que module d’extension de Kubernetes et peut être déployé en version 0.12 ;
c’est une version plus ancienne et plus stable qui est actuellement largement
déployée en production. La nouvelle version (Version 1X), fut récemment
développée et offre de nombreuses améliorations, incluant de nouveaux modules
d’extensions API, la résolution en nanosecondes et le soutien Windows. Fluentd
est en train de devenir la norme en matière de collecte d’enregistrement dans le
domaine des déploiements infonuagiques natifs et est une bonne candidate pour se
rendre au stade d’achèvement de la CNCF.

<figure class="alignleft">
  <img
    src="https://www.cloudops.com/wp-content/uploads/2018/10/opentracing.png"
    alt="OpenTracing"
  />
</figure>

**OpenTracing (phase d’incubation)**– Il ne faut pas sous-estimer l’importance
du traçage distribué pour la création de microservices à l’échelle. Les
développeurs doivent pouvoir voir chaque transaction et comprendre le
comportement de leurs microservices. Par contre, le traçage distribué peut
s’avérer difficile puisque l’instrumentation doit propager le contexte du
traçage tant à l’intérieur qu’entre les processus qui existent à travers les
services, les paquets et le code spécifique à l’application.
[OpenTracing](https://opentracing.io/) permet aux développeurs de code
applicatif, de paquets OSS et de services OSS, d’instrumenter leur propre code
sans enfermement à un seul fournisseur de traçage. OpenTracing fournit des
normes de traçage distribué pour les applications et les paquets OSS avec des
API sans affiliation à un fournisseur et des bibliothèques disponibles en neuf
langues. Ces normes renforcent le traçage distribué, ce qui fait d’OpenTracing
une plateforme idéale pour les services maillés et les systèmes distribués.
OpenTracing en tant que tel n’est pas un système de traçage qui exécute des
traces afin d’analyser des intervalles de l’intérieur de l’IU. C’est un API qui
fonctionne avec la logique commerciale d’une application, sa structure et son
instrumentation existante afin de créer, de propager et d’étiqueter des
intervalles. La plateforme s’intègre tant au logiciel libre (comme
[Jaeger](https://www.jaegertracing.io/), [Zipkin](https://zipkin.io/)) ou à des
solutions de traçage commerciales (comme [Instana](https://www.instana.com/),
[Datadog](https://docs.datadoghq.com/tracing/)), et crée des traces qui sont
stockées soit en arrière-plan, soit couvertes en format IU. Cliquez ici pour
visionner un [tutoriel](https://www.katacoda.com/courses/opentracing/) ou pour
commencer à instrumenter votre propre système avec Jaeger, une solution de
traçage compatible.

<figure class="alignleft">
  <img
    src="https://www.cloudops.com/wp-content/uploads/2018/10/jaeger.png"
    alt="Jaeger"
  />
</figure>

**Jaeger – (phase d’incubation)**– [Jaeger](https://www.jaegertracing.io/) est
une solution de système de traçage distribué qui est compatible avec OpenTracing
et qui, à l’origine, fut développée et testée par Uber. Son nom se prononce :
yā′gər et signifie chasseur. Elle fut inspirée par
[Dapper](https://research.google.com/pubs/pub36356.html), le système interne de
traçage de Google et [Zipkin](http://zipkin.io/), un système alternatif de
traçage de logiciel libre écrit par Twitter, mais bâtit avec les normes
d’OpenTracing en tête. Le soutien à l’intégration d’OpenTracing est limité pour
Zipkin, mais Jaeger, lui, offre la rétrocompatibilité avec Zipkin en acceptant
des intervalles en format Zipkin au-dessus de HTTP. Les cas d’utilisation de
Jaeger surveillent et diagnostiquent les pannes de distributions basées sur les
microservices, offrant la propagation de contexte distribué, la surveillance de
transactions distribuées, l’analyse des causes principales et l’optimisation de
la performance et de la latence. Le modèle de données et les bibliothèques
d’instrumentation de Jaeger sont compatibles avec OpenTracing. Son IU Web
moderne est bâtie avec React/JavaScript et a de multiples formes de soutien pour
son arrière-plan. Cela inclut Cassandra, Elasticsearch, et la mémoire. Jaeger
s’intègre aux services maillés incluant Istio et Linkerd, facilitant
l’instrumentation de traçage. En matière d’observabilité, Jaeger expose les
paramètres par défaut de Prometheus et s’intègre facilement à Fluentd pour
l’expédition d’enregistrement. Pour commencer à utiliser Jaeger, vous pouvez le
déployer sur Kubernetes avec un [Helm
chart](https://github.com/kubernetes/charts/tree/master/incubator/jaeger) ou
avec le tout nouveau [Jaeger
Operator](https://github.com/jaegertracing/jaeger-operator). La plupart des
contributions au code de Jaeger proviennent de Uber et de Redhat et des
centaines d’entreprises l’adoptent pour le traçage distribué basé sur les
microservices à déploiements infonuagiques natifs. La plateforme Jaeger possède
de l’observabilité, car elle expose les paramètres par défaut de Prometheus et
s’intègre facilement à Fluentd pour l’expédition d’enregistrement. Commencez à
déployer Jaeger, sur Kubernetes avec un [Helm
chart](https://github.com/kubernetes/charts/tree/master/incubator/jaeger) ou
avec le tout nouveau [Jaeger
Operator](https://github.com/jaegertracing/jaeger-operator). La plupart des
contributions au code de Jaeger proviennent de Uber et de Redhat, mais il y a
centaines d’entreprises qui l’adoptent pour le traçage distribué basé sur les
microservices à déploiements infonuagiques natifs. ***Registres de conteneurs***

<figure class="alignleft">
  <img
    src="https://www.cloudops.com/wp-content/uploads/2018/10/harbor.png"
    alt="Harbor"
  />
</figure>

**Harbor (bac à sable) –**[Harbor](https://goharbor.io/) est un registre de
conteneurs fiable et de logiciel libre qui stocke, signe et balaye les images
Docker. Cette plateforme offre gratuitement des fonctionnalités et des capacités
améliorées de registres Docker, par exemple une interface Web avec soutien au
contrôle d’accès basé sur les rôles (CABR) et au protocole LDAP. Elle s’intègre
à Clair, un projet de logiciellibre développé par CoreOs pour le balayage de
vulnérabilités ainsi qu’à Notary, un projet relatif à la fiabilité de contenu,
en phase d’incubation à la CNCF et qui est décrit plus bas. Harbor offre la
vérification d’activités, la gestion de Helm chart et réplique des images d’une
instance de Harbor à une autre pour la haute disponibilité et la reprise après
sinistre. À l’origine, Harbor fut développé par VMWare en tant que solution de
logiciel libre. Cette solution est maintenant utilisée par des entreprises de
toutes tailles, incluant TrendMicro, Rancher, Pivotal, et AXA. ***Stockage et
bases de données***

<figure class="alignleft">
  <img
    src="https://www.cloudops.com/wp-content/uploads/2018/10/rook.png"
    alt="Rook"
  />
</figure>

**Rook (phase d’incubation)**– [Rook](https://rook.io/) est un orchestrateur de
stockage de déploiements infonuagiques natifs pour Kubernetes. Grâce à Rook, les
équipes des opérations peuvent exécuter des systèmes de logiciels distribués
(SDS) comme Ceph, par-dessus Kubernetes. Les développeurs peuvent alors utiliser
ce stockage afin de créer dynamiquement des volumes persistants (VP) dans
Kubernetes pour déployer des applications comme Jenkins, WordPress et toute
autre application qui exige un état. Ceph est un système de logiciel distribué
(SDS) de logiciel libre très populaire qui peut livrer vers plusieurs types de
systèmes de stockage connus, comme Object et File System et qui fonctionne sur
du matériel standard. Bien qu’il soit possible d’exécuter des grappes Ceph en
dehors de Kubernetes et de les connecter à Kubernetes avec le [module
d’extension CSI](https://github.com/ceph/ceph-csi), il s’avère être une tâche
difficile de déployer, puis d’opérer, des grappes Ceph sur du matériel ; la
popularité de ce système s’en trouve donc réduite. Rook déploie et intègre Ceph
à l’intérieur de Kubernetes en tant qu’objet de première classe avec des CRD
[(Custom Resource
Definition)](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/)
et le change en service de stockage autogéré, à mise à l’échelle et à
rétablissement automatique en utilisant la [structure
d’Operator](https://github.com/operator-framework). Le but
[d’Operator](https://coreos.com/operators/) dans Kubernetes est d’encoder la
connaissance opérationnelle des humains dans un logiciel qui est plus facile à
conditionner et à partager avec les utilisateurs finaux. Comparé à Helm qui se
concentre sur le conditionnement et le déploiement d’applications Kubernetes,
Operator peut déployer et gérer des cycles de vie d’applications complexes. Dans
le cas de Ceph, Rook Operator automatise les tâches de l’administrateur de
stockage comme le déploiement, le démarrage, la configuration, le
provisionnement, la mise à l’échelle horizontale, le rétablissement, la mise à
niveau, les sauvegardes, la reprise après sinistre et la surveillance. Au tout
début, la mise en œuvre de Rook Operator ne soutenait que Ceph. Depuis la
version 0.8, le soutien de Ceph a été transféré à Beta. Le projet Rook a plus
tard fait l’annonce de Rook Framework pour les fournisseurs de stockage, il
prolonge Rook en tant qu’orchestrateur de stockage de déploiements infonuagiques
natifs d’intérêt général et offre un soutien à de multiples solutions de
stockage avec des spécifications, une logique, des politiques et des essais,
tous réutilisables. Actuellement, Rook offre un soutien à CockroachDB, Minio,
NFS, tous en alpha et aux futurs Cassandra, Nexenta, et Alluxio. La liste des
entreprises qui utilisent Rook Operator en production avec Ceph est en
croissance, spécialement pour les entreprises qui déploient sur place, parmi
celles-ci, [CENGN](https://www.cengn.ca/), Gini, RPR et plusieurs qui en sont à
l’étape d’évaluation.

<figure class="alignleft">
  <img
    src="https://www.cloudops.com/wp-content/uploads/2018/10/vitess.png"
    alt="Vitess"
  />
</figure>

**Vitess (phase d’incubation)**– [Vitess](https://vitess.io/) est un intergiciel
pour les bases de données. Il utilise la répartition généralisée pour distribuer
les données à travers les instances MySQL. Il évolue horizontalement et peut se
mettre à l’échelle indéfiniment sans avoir d’effets sur votre application.
Lorsque vos fragments arrivent au maximum de leur capacité, Vitess va
refragmenter votre base de données sous-jacente sans temps d’arrêt et une bonne
observabilité. Vitess résout plusieurs problèmes associés aux données
transactionnelles, qui sont en croissance constante.

<figure class="alignleft">
  <img
    src="https://www.cloudops.com/wp-content/uploads/2018/10/tikv.png"
    alt="TiKV"
  />
</figure>

**TiKV (bac è sable) –**[TiKV](https://github.com/tikv/tikv) est une base de
données transactionnelles à valeur fondamentale qui offre la planification
simplifiée et l’équilibrage automatique. Elle agit en tant que couche de
stockage distribuée qui soutient une forte constance des données, des
transactions distribuées et une évolution horizontale. TiKV fut inspiré par le
concept de Google Spanner et de HBase, mais il a l’avantage de ne pas avoir de
système de fichiers distribués. TiKV fut développée par PingCAP et compte
actuellement sur des collaborateurs provenant de Samsung, Tencent Cloud, et de
UCloud. ***Temps d’exécution***

<figure class="alignleft">
  <img
    src="https://www.cloudops.com/wp-content/uploads/2018/10/rkt.png"
    alt="RKT"
  />
</figure>

**RKT (phase d’incubation) –**[RKT](https://coreos.com/rkt/) (se lit comme
Rocket) est une application de temps d’exécution de conteneur qui fut
originalement développée chez CoreOS. À l’époque où Docker était le temps
d’exécution par défaut de Kubernetes et était figé dans Kubelet, les communautés
de Kubernetes et de Docker avaient du mal à travailler ensemble. Docker Inc.,
l’entreprise derrière le développement de Docker en tant que logiciel de source
libre, possède sa propre feuille de route et ajoutait de la complexité à Docker.
Par exemple, elle a ajouté swarm-mode ou a changé filesystem de AUFS à overlay2
sans avoir donné d’avis. Ces modifications étaient généralement mal coordonnées
avec la communauté Kubernetes, il était difficile de planifier leur feuille de
route et les dates de publications. Finalement, les utilisateurs de Kubernetes
nécessitent un temps d’exécution simple qui peut démarrer et arrêter les
conteneurs et fournir des fonctionnalités de mise à l’échelle, de mise à niveau
et de temps exploitable. Avec RKT, CoreOs avait l’intention de créer un temps
d’exécution alternatif à Docker, bâti dans le but d’être exécuté avec
Kubernetes. Éventuellement, cela a mené l’équipe SIG-Node de Kubernetes à
développer une interface de temps d’exécution de conteurs (Container Runtime
Interface – CRI) pour Kubernetes qui peut se connecter à tous les types de
conteneurs et supprimer le code de Docker de son noyau. RKT peut consommer des
images tant OCI (Open container initiative) qu’en format Docker. Même si RKT a
eu un effet positif sur l’écosystème Kubernetes, le projet n’a jamais été adopté
par les utilisateurs finaux, spécialement par les développeurs habitués à
Docker CLI et qui ne veulent pas apprendre d’autre solution de conditionnement
d’applications. De plus, la popularité de Kubernetes a fait en sorte qu’il y a
un étalement de solutions de conteneur en concurrence pour ce créneau. Des
projets comme [gvisor](https://github.com/google/gvisor) et cri-o (basé sur OCI)
gagnent en popularité ces jours-ci tandis que RKT est en perte de position. Cela
fait de RKT un candidat potentiel à être supprimé de l’incubateur de la CNCF.

<figure class="alignleft">
  <img
    src="https://www.cloudops.com/wp-content/uploads/2018/10/containerd.png"
    alt="Containerd"
  />
</figure>

**Containerd (phase d’incubation)** – [Containerd](https://containerd.io/) est
une application de temps d’exécution de conteneurs qui met l’accent sur la
simplicité, la robustesse et la portabilité. Contrairement à RKT, Containerd est
conçu pour être incorporé dans un système plus large plutôt que d’être utilisé
directement par les développeurs ou les utilisateurs finaux. Tout comme RKT,
Containerd peut consommer des images de format tant OCI que Docker. C’est le
projet Docker qui a fait don de Containerd à la CNCF. Il y a longtemps, la
plateforme Docker était considérée comme une application monolithique. Par
contre, au fil du temps, il est devenu un système complexe à cause de l’ajout de
fonctionnalités comme « Swarm mode ». La complexité croissante de Docker le
rendait de plus en plus difficile à gérer et ses fonctionnalités complexes
étaient redondantes si vous utilisiez Docker avec un système qui exigeait de la
simplicité comme Kubernetes. C’est pourquoi Kubernetes s’est mis à la recherche
d’autres temps d’exécution, comme RKT pour remplacer Docker en tant que temps
d’exécution de conteneurs par défaut. Le projet Docker a décidé de se fragmenter
en composantes couplées de façon lâche et d’adopter une architecture plus
modulaire. Ce projet était connu sous le nom de Projet Moby ; où Containerd
était utilisé comme le noyau de la fonctionnalité de temps d’exécution. Depuis
le Projet Moby, Containerd a été intégré plus tard à Kubernetes par une
Interface CRI connue sous le nom de CRI-Containerd. Par contre, CRI-Containerd
n’est plus nécessaire, car Containerd vient avec un module d’extension CRI
intégré qui est activé par défaut à partir de Kubernetes 1.10 et peut éviter
n’importe quel saut gRPC. Même si Containerd a sa place dans l’écosystème
Kubernetes, des projets comme CRI-O (basé sur OCI) et Gvisor gagnent en
popularité ces jours-ci et la communauté se désintéresse de Containerd. En
revanche, il fait encore partie intégrante de la plateforme Docker.
***Découverte de services***

<figure class="alignleft">
  <img
    src="https://www.cloudops.com/wp-content/uploads/2018/10/coredns.png"
    alt="CoreDNS"
  />
</figure>

**CoreDNS (phase d’incubation) –** [CoreDNS](https://coredns.io/) est un serveur
DNS qui offre la découverte de services dans des déploiements infonuagiques
natifs. Dans un futur proche, CoreDNS est en voie de devenir la grappe DNS par
défaut de Kubernetes. Avant cela, Kubernetes utilisait SkyDNS, qui était en fait
une branche de Caddy et plus tard, de KubeDNS. SkyDNS – une solution de
découverte de services orientée-DNS – possédait une architecture rigide qui
rendait difficile l’ajout de fonctionnalités ou d’extensions. Plus tard,
Kubernetes a utilisé KubeDNS, exécuté en tant que 3 conteneurs (kube-dns,
dnsmasq, sidecar), il était enclin aux vulnérabilités dnsmasq et avait des
problèmes semblables qui s’étendaient jusqu’au système DNS avec les nouvelles
fonctionnalités. Par ailleurs, CoreDNS fut réécrit en Go depuis le début et est
une solution DNS souple orientée module d’extensions. Il est exécuté à
l’intérieur de Kubernetes comme un seul conteneur, contrairement à KubeDNS, qui
est exécuté comme trois. Il n’a pas de problème de vulnérabilité et peut mettre
à jour dynamiquement sa configuration avec ConfigMaps. De plus, CoreDns a résout
plusieurs problèmes issus de KubeDNS qui avaient été introduits à cause de sa
conception rigide (par exemple, « Verified Pod Records »). L’architecture de
CoreDns vous permet d’ajouter ou de supprimer des fonctionnalités avec des
modules d’extension. Actuellement, CoreDNS a plus de [trente modules
d’extensions](https://coredns.io/plugins/) et plus de [vingt modules
d’extensions externes](https://coredns.io/explugins/). En changeant les modules
d’extension, vous permettez la surveillance avec Prometheus, le traçage avec
Jaeger, l’enregistrement avec Fluentd, la configuration avec les API de K8 ou
etcd, et facilitez les fonctionnalités et les intégrations dns avancées.
***Services maillés***

<figure class="alignleft">
  <img
    src="https://www.cloudops.com/wp-content/uploads/2018/10/linkerd.png"
    alt="Linkerd"
  />
</figure>

**Linkerd (phase d’incubation)**– [Linkerd](https://linkerd.io/) un mandataire
de réseaux de logiciel libre conçu pour être déployé en tant que service maillé,
celui-ci étant une couche réservée pour la gestion, le contrôle et la
surveillance de la communication de service à service dans une application.
Linkerd aide les développeurs à exécuter des microservices à l’échelle en
améliorant la tolérance aux fautes d’une application par la configuration
programmable de coupe-circuits, de restriction de taux, de pauses et de réessais
sans modifier le code de l’application. Linkerd offre aussi la visibilité dans
les microservices par le traçage distribué avec Zipkin. Finalement, ce
mandataire fournit une instrumentation de contrôle de trafic avancée qui
facilite les déploiements de Canaries, Staging et Blue-green. Les équipes de
SecOps apprécieront la capacité de Linkerd de crypter, avec le protocole TLS et
de façon transparente, toutes les communications de nœud à nœud dans une grappe
Kubernetes. Linkerd est bâti par-dessus le projet Finagle de Twitter, qui est
largement utilisé en production et qui attire l’intérêt de nombreuses
entreprises explorant les services maillés. Aujourd’hui, Linkerd peut être
utilisé avec DC/OS et AWS/ECS. Le service maillé de Linkerd est déployé sur
Kubernetes en tant que DaemonSet, ce qui signifie qu’il exécute un pod Linkerd
sur chaque nœud de la grappe. De récentes modifications dans l’écosystème des
services maillés (c’est-à-dire l’introduction du projet Istio qui s’intègre
étroitement à Kubernetes et qui utilise le mandataire léger Envoy comme sidecar
pour être exécuté côte à côte de chaque microservice) peuvent offrir plus de
capacités que Linkerd et lui ont fait perdre de sa popularité. Certains se
posent même la question sur la véritable existence de Linkerd. Afin de susciter
l’intérêt de la communauté et de soutenir une base importante de clients
existants, Buoyant (l’entreprise derrière Linkerd), a annoncé le projet Conduit
avec l’idée de permettre aux DaemonSets de se servir de l’approche sidecar
utilisée par Istio et de réécrire le plan des données en Rust et le plan de
contrôle en Go. Cela permet de nombreuses fonctionnalités possibles pouvant
utiliser l’approche sidecar. Récemment, le projet Conduit a été renommé
Linkerd 2.0 et a annoncé sa disponibilité générale, signifiant qu’il est fin
prêt à entrer en production. Les services maillés continuent d’évoluer
rapidement et des projets comme Istio et Linkerd en seront le noyau.
***Mandataires de services***

<figure class="alignleft">
  <img
    src="https://www.cloudops.com/wp-content/uploads/2018/10/Envoy.png"
    alt="Envoy"
  />
</figure>

**Envoy (stade d’achèvement) –**[Envoy](https://www.envoyproxy.io/) est un
mandataire de services et de périphérie moderne conçu pour les applications à
déploiements infonuagiques natifs. C’est un mandataire de niveau de production
développé et testé par Lyft qui est indépendant au niveau du nuage, hautement
performant et léger (écrit en C++). Envoy est maintenant un projet de la CNCF en
phase d’incubation. Envoy fournit des capacités de tolérance aux fautes pour les
microservices (pauses, sécurité, réessais, coupe-circuits) sans avoir à modifier
une seule ligne du code de l’application en place. Envoy apporte automatiquement
la visibilité de ce qui se passe entre les microservices par l’intégration à
Prometheus, Fluentd, Jaeger et [Kiali](https://www.kiali.io/). Envoy peut aussi
être utilisé comme mandataire périphérique (par exemple, le contrôleur
d’entrées L7 pour Kubernetes) grâce à ses capacités de routage et de
fractionnement de trafic ainsi que d’équilibrage de charge conscient des zones
et avec basculements. Bien que le
[paysage](https://blog.envoyproxy.io/introduction-to-modern-network-load-balancing-and-proxying-a57f6ff80236)
des mandataires de services offre déjà de nombreuses options, Envoy est un très
bon ajout qui a suscité beaucoup d’intérêt et de nouvelles idées autour des
services maillés et l’équilibrage de charge moderne. Heptio a annoncé un projet
appelé [Contour](https://github.com/heptio/contour), un contrôleur d’entrées
pour Kubernetes qui fonctionne en déployant le mandataire Envoy en tant que
mandataire inversé et équilibreur de charge. Contour offre un soutien aux mises
à jour dynamiques de configuration et aux grappes Kubernetes à équipes multiples
grâce à sa capacité de limiter les namespaces pouvant configurer les hôtes
virtuels et les identifiants de protocole TLS et fournir des stratégies avancées
d’équilibrage de charge. Un autre projet qui utilise Envoy en son noyau est
[Ambassador](https://www.getambassador.io/) de Datawires, une puissante
passerelle API native de Kubernetes. Vu qu’Envoy est écrit en C++, il est
extrêmement léger et donc, le candidat idéal pour être exécuté dans un motif
sidecar dans Kubernetes et grâce à son style de mise à niveau des configurations
orientées API, il est aussi le candidat idéal pour les plans de données des
services maillés. Le service maillé Istio a annoncé qu’Envoy serait le
mandataire de services par défaut pour son plan de données où les mandataires
Envoy sont déployés à proximité de chaque instance dans Kubernetes en motif
sidecar. Cela crée un service maillé transparent qui est contrôlé et configuré
par le plan de gestion de Istio. Cette approche se compare au modèle DaemonSet,
utilisé dans Linkerd v1, et qui offre la visibilité pour chaque service ainsi
que la capacité de créer un protocole TLS sécuritaire pour chaque service dans
Kubernetes ou même pour des cas de nuage hybride. Récemment Hashicorp a annoncé
que Consul Connect, son projet de logiciel libre utilisera Envoy pour établir des
connexions de protocoles TLS sûres entre les microservices. Aujourd’hui, Envoy a
l’appui d’une vaste et active communauté de logiciel libre qui n’est soutenue ni
par un fournisseur ni par un projet commercial. Si vous souhaitez commencer à
utiliser Envoy, essayez Istio, Ambassador ou Contour ou rejoignez la communauté
Envoy au Kubecon (Seattle, WA) le 10 décembre 2018 pour le tout premier
[EnvoyCon](https://events.linuxfoundation.org/events/kubecon-cloudnativecon-north-america-2018/co-located-events/#envoycon).
***Sécurité***

<figure class="alignleft">
  <img
    src="https://www.cloudops.com/wp-content/uploads/2018/10/FalcoLogo.png"
    alt="Sysdig Falco"
  />
</figure>

**Falco (bac à sable)** – Falco est un outil de logiciel libre, développé par
Sysdig, qui voit à la sécurité du temps d’exécution. Il a été conçu pour
détecter les anomalies dans les activités et les intrusions dans les systèmes
orchestrés par Kubernetes. Falco est davantage un outil de vérification que de
mise en vigueur (comme Seccomp ou AppArmor). Il est exécuté dans l’espace
utilisateur avec l’aide d’un module de noyau Sysdig qui récupère les appels de
système. Falco est exécuté dans Kubernetes en tant que DaemonSet avec un nombre
préétabli de [règles](https://github.com/falcosecurity/falco/tree/dev/rules) qui
définissent les comportements et les événements à surveiller. Basé sur ces
règles, Falco détecte et ajoute des alertes à chaque comportement faisant des
appels de système Linux (comme Shell, qui est exploité dans les conteneurs ou
des binaires, qui connectent les réseaux sortants). Ces événements peuvent être
captés en erreur standard (STDERR) par Fluentd et puis envoyés vers
ElasticSearch ou Slack pour être filtrés. Cela peut aider les organisations à
répondre rapidement aux incidents de sécurité, comme les abus et les failles de
conteneurs, et minimiser les pénalités financières découlant de tels incidents.
Grâce à l’ajout de Falco dans le bac à sable de la CNCF, nous espérons qu’à
l’avenir, il y aura des intégrations plus rapprochées aux autres projets de la
CNCF. Pour commencer à utiliser Falco, vous devez trouver un [Helm
Chart](https://github.com/helm/charts/tree/master/stable/falco) officiel.

<figure class="alignleft">
  <img
    src="https://www.cloudops.com/wp-content/uploads/2018/10/spiffe.png"
    alt="Spiffe"
  />
</figure>

**Spiffe (bac à sable) –**[Spiffe](https://spiffe.io/) offre une structure
d’identité de productions sécuritaire. Cette plateforme facilite les
communications entre les charges de travail en vérifiant les identités. Elle est
axée sur les politiques et les API et peut être entièrement automatisée. C’est
une solution de déploiement infonuagique natif au problème complexe qui est
d’établir la confiance entre les charges de travail, cela devient difficile et
même dangereux tandis que les charges de travail évoluent de façon élastique et
sont planifiées de façon dynamique.

<figure class="alignleft">
  <img
    src="https://www.cloudops.com/wp-content/uploads/2018/10/spire.png"
    alt="Spire"
  />
</figure>

**Spire (bac à sable) –**[Spire](https://spire.com/) est l’environnement du
temps d’exécution de Spiffe. Il s’agit d’un ensemble d’éléments de logiciels qui
peuvent être intégrés aux couches d’intergiciel de fournisseurs infonuagiques.
Spire possède une architecture modulaire qui soutient une grande variété de
plateformes. Particulièrement, les communautés relatives à Spiffe et à Spire qui
sont en croissance rapide. HashiCorp vient d’annoncer son soutien à Spiffe IDs
dans Vault, qui sera utilisé pour du matériel important et pour la rotation.

<figure class="alignleft">
  <img
    src="https://www.cloudops.com/wp-content/uploads/2018/10/tuf.png"
    alt="Tuf"
  />
</figure>

**Tuf (phase d’incubation)**– La structure de mise à jour (Tuf) est une
structure pour la distribution de contenu fiable qui aide à résoudre les
problèmes de fiabilité de contenu. Elle aide à valider la provenance du logiciel
et à s’assurer qu’il s’agit de la dernière version. Le projet TUF joue un rôle
primordial au sein du projet Notary décrit plus bas. Il est utilisé en
production par des entreprises comme Docker, DigitalOcean, Flynn, Cloudflare, et
VMware pour bâtir leurs outils et leurs produits internes.

<figure class="alignleft">
  <img
    src="https://www.cloudops.com/wp-content/uploads/2018/10/notary.png"
    alt="Notary"
  />
</figure>

**Notary (phase d’incubation) –**Notary est une mise en œuvre de distribution de
logiciel sécuritaire. Notary est basé sur TUF et assure que toutes les images
Docker tirées sont la version de l’image signée, corrigée et non modifiée. Cela
peut se faire à n’importe quelle étape d’un flux de travail CI/CD, réglant ainsi
une préoccupation majeure en matière de sécurité pour les déploiements basés sur
Docker dans les systèmes Kubernetes. Notary publie et gère des ensembles fiables
de contenu. Il permet aux ingénieurs DevOps d’approuver les données fiables qui
ont été publiées et de créer des ensembles signés ; semblablement aux outils de
gestion de dépôts de logiciel présents dans les systèmes Linux modernes, mais
pour des images Docker. Certains objectifs de Notary incluent la garantie de la
fraîcheur des images (éviter les vulnérabilités en ayant toujours un contenu à
jour), la délégation de confiance entre les utilisateurs ou la distribution
fiable à travers des miroirs ou des canaux de transports non fiables. Bien que
Tuf et Notary ne soient pas généralement utilisés par des utilisateurs finaux,
leurs solutions s’intègrent à une variété de produits commerciaux ou à des
projets de logiciel libre pour la signature de contenu ou la signature d’images
provenant de distribution fiable comme Harbor, Docker Enterprise Registry, Quay
Enterprise et Aqua. Un autre projet de logiciel libre qui est intéressant dans cet
espace est Grafeas, c’est un API de logiciel libre pour les métadonnées qui peut
être utilisé pour stocker les « attestations » ou les signatures d’images,
celles-ci peuvent ensuite être vérifiées dans le cadre du contrôle d’admission
et utilisées dans des produits comme Container Analysis API, dans des
autorisations binaires chez GCP ainsi que des produits de JFrog et AquaSec.

<figure class="alignleft">
  <img
    src="https://www.cloudops.com/wp-content/uploads/2018/10/open-policy-agent.png"
    alt="Open Policy Agent"
  />
</figure>

**Open Policy Agent** **(bac à sable)**– En assurant que les politiques soient
précisées de façon déclarative, Open Policy Agent
([OPA](https://www.openpolicyagent.org/)) permet la distribution de différents
types de politiques à travers la pile technologique et l’application automatique
de mises à jour qui n’ont pas à être recompilées ou redéployées. OPA se situe
sur les couches de l’application et de la plateforme et est exécuté en envoyant
des requêtes de la part des services afin d’informer sur les décisions relatives
aux politiques. Il s’intègre à Docker, Kubernetes, Istio et bien d’autres.
***Diffusion en continu et messagerie***

<figure class="alignleft">
  <img
    src="https://www.cloudops.com/wp-content/uploads/2018/10/nats.png"
    alt="NATS"
  />
</figure>

**NATS** **(phase d’incubation)**– [NATS](https://nats.io/) est un service de
messagerie orienté intergiciel, permettant aux infrastructures d’envoyer et de
recevoir des messages entre les systèmes distribués. Ses technologies de
rétablissement automatique et de mise en grappes sont offertes en haute
disponibilité et sa diffusion en continu basée sur les enregistrements garantit
la livraison de retransmissions de données historiques et la réception de tous
les messages. NATS possède un API relativement simple et soutient une variété de
cas d’utilisation technique, incluant la messagerie dans le nuage (messagerie
générale, transport de microservices, plan de contrôle et découverte de service)
ainsi que la messagerie IdO. Contrairement aux solutions d’enregistrement, de
surveillance et de traçage mentionnées plus haut, NATS fonctionne au niveau de
l’application.

<figure class="alignleft">
  <img
    src="https://www.cloudops.com/wp-content/uploads/2018/10/grpc.png"
    alt="gRPC"
  />
</figure>

**gRPC (phase d’incubation)**– Une structure hautement performante d’appels de
procédure à distance (APD), [gRPC](https://grpc.io/) facilite la communication
entre les bibliothèques, les clients et les serveurs sur des plateformes
multiples. Elle peut être exécutée dans n’importe quel environnement et offre un
soutien aux mandataires comme Envoy et Nginx. gRPC lie les services de façon
efficace grâce à un soutien intégrable pour équilibrage de charge, traçage,
bilan de santé et authentification. gRPC est un outil au niveau de l’application
qui facilite l’envoi de messages en connectant les appareils, les applications
et les navigateurs aux services d’arrière-plan.

<figure class="alignleft">
  <img
    src="https://www.cloudops.com/wp-content/uploads/2018/10/cloudevents.png"
    alt="CloudEvents"
  />
</figure>

**CloudEvents (bac à sable) –**[CloudEvents](https://cloudevents.io/) fournit
aux développeurs une méthode courante pour décrire les événements qui se
déroulent à travers des environnements multinuages. En offrant des
spécifications pour décrire les données d’événements, CloudEvents simplifie la
déclaration d’événements et la livraison à travers les services et les
plateformes. Bien qu’il soit toujours dans la phase du bac à sable, CloudEvents
devrait grandement améliorer la portabilité et la productivité d’une
application. **Et après ?** L’écosystème des déploiements infonuagiques natifs
est continuellement en croissance rapide. Dans un futur immédiat, de plus en
plus de projets entreront dans le bac à sable ce qui leur donnera la chance de
se démarquer au sein de la communauté. Cela dit, nous espérons que les projets
reliés à l’infrastructure tels que Vitess, NATs, et Rook continueront à recevoir
du soutien de la CNCF, car ils seront d’importants facilitateurs de déploiements
infonuagiques natifs sur place. Nous espérons que la CNCF continuera de se
concentrer aussi dans le secteur de la livraison continue de déploiements
infonuagiques natifs, car il y a actuellement une lacune dans l’écosystème. La
CNCF accepte et achève de nouveaux projets, mais il est aussi important d’avoir
des mécanismes en place pour supprimer les projets pour lesquels l’intérêt de la
communauté s’estompe, car ils perdent de la valeur ou sont remplacés par des
projets plus pertinents. Même si la soumission de projets est ouverte à tous,
j’espère que le comité CST continuera de ne commanditer que les meilleurs
candidats, ainsi, la CNCF demeurera un écosystème de projets divers qui
fonctionnent bien les uns avec les autres. En tant qu’ambassadeur de la CNCF, je
vais continuellement mettre cet article à jour afin que les utilisateurs qui
souhaitent apprendre et mieux comprendre le paysage de la CNCF puissent trouver
l’information à jour ici. J’espère qu’il complètera le [contexte
CNCF](https://landscape.cncf.io/format=landscape) interactif en identifiant les
projets qui peuvent être évalués pour bâtir une pile de déploiements
infonuagiques natifs. J’encouragerais aussi les gens à se joindre à l’équipe
d’ambassadeurs au
[CloudNativeCon](https://events.linuxfoundation.org/events/kubecon-cloudnativecon-north-america-2018/)
d’Amérique du Nord le 10 décembre et à participer aux [webinaires de la
CNCF](https://www.cncf.io/events/), visitez les meetups de la CNCF dans votre
ville et finalement, rejoignez la CNCF en tant que
[membre](https://www.cncf.io/about/members/) et aidez-nous à accroitre
l’adoption de projets CNCF. Ayrat Khayretdinov est architecte de solutions chez
CloudOps et évangéliste Kubernetes dévoué à stimuler la croissance de la
communauté. Il est ambassadeur CNCF ainsi que membre du comité de la supervision
technique (CST) de la CNCF. Ayrat se passionne pour la promotion des efforts de
la communauté envers l’écosystème de déploiements infonuagiques natifs.

<!--HubSpot Call-to-Action Code --><span class="hs-cta-wrapper" id="hs-cta-wrapper-b8109334-fb28-4d6b-9af7-b3db1a564873"><span class="hs-cta-node hs-cta-b8109334-fb28-4d6b-9af7-b3db1a564873" id="hs-cta-b8109334-fb28-4d6b-9af7-b3db1a564873"><!--[if lte IE 8]><div id="hs-cta-ie-element"></div><![endif]--><a href="https://cta-redirect.hubspot.com/cta/redirect/732832/b8109334-fb28-4d6b-9af7-b3db1a564873"  target="_blank" ><img class="hs-cta-img" id="hs-cta-img-b8109334-fb28-4d6b-9af7-b3db1a564873" style="border-width:0px; width:100%;" src="https://no-cache.hubspot.com/cta/default/732832/b8109334-fb28-4d6b-9af7-b3db1a564873.png"  alt="New call-to-action"/></a></span><script charset="utf-8" src="https://js.hscta.net/cta/current.js"></script><script type="text/javascript"> hbspt.cta.load(732832, 'b8109334-fb28-4d6b-9af7-b3db1a564873', {"region":"na1"}); </script></span><!-- end HubSpot Call-to-Action Code -->
