---
title: "Est-ce que le sans serveur est la bonne voie vers le nuage?"
lastmod: "2021-06-01"
author: "CloudOps"
resources:
- name: "thumbnail"
  src: "ServerlessThumbnail.png"
- name: "cover"
  src: "ServerlessCover.png"
class_name: "blog post"
aliases:
slug: /est-ce-que-le-sans-serveur-est-la-bonne-voie-vers-le-nuage
description: Il y a eu une remarquable augmentation des plateformes infonuagiques sans serveur au cours des dernières années.
keywords: [informatique sans serveur, donald donovan]
tags: [DevOps, Guide technique]
---

<p>L’informatique sans serveur prend son envol. Bien qu'il existe depuis l’annonce de Lambda par AWS en 2014, le sans serveur atteint finalement la maturité nécessaire pour propulser un changement de modèle.</p>

<h2>En quoi consiste l’informatique « sans serveur »?</h2>

<p>L’informatique sans serveur décrit un modèle de développement de logiciels au sein duquel l’application n’a aucune interaction directe avec le serveur. Le terme « sans serveur » porte quelque peu à confusion parce qu’il y aura toujours des serveurs, tout comme le matériel informatique a toujours été derrière le EC2. La valeur du sans serveur réside dans le fait que vous n’avez pas à investir vos ressources pour les gérer. Vous avez la liberté d’utiliser vos ressources seulement lorsque cela est nécessaire ou utile.</p>

<p>Les produits sans serveur comme Lambda d’AWS, Azure Functions ou Google Cloud Functions procurent des solutions qui sont plus rapides, plus écologiques et plus agiles. C’est pour cela que nous disons que ces produits pourraient être la bonne voie vers le nuage.</p>

<h2>Nuage natif et informatique sans serveur</h2>

<p>Au cours des dernières années, le nuage natif est ce qui a guidé la modernisation des applications. La Fondation Cloud Native Computing (<a href="https://www.cncf.io/">CNCF</a>) a recours au terme pour décrire la conception d’applications à l’aide de Kubernetes, un système d’orchestration de conteneurs à titre de mécanisme de livraison. Cet espace a ajouté énormément de valeur pour les clients et a aidé les développeurs à déployer des applications existantes avec plus de flexibilité et de durabilité avec l’infrastructure en tant que code.</p>

<p>Pour les entreprises établies ayant des codes bases établis, la conteneurisation permet de déplacer des applications existantes dans le nuage. C’est là que Kubernetes et le déplacement au nuage natif sont des victoires faciles (ou à tout le moins, plus faciles). Plusieurs organisations ont adopté des architectures de nuage natif pour gagner en efficacité, en évolutivité et en agilité durant le processus.</p>

<p>L’informatique sans serveur peut donner l’apparence d’être le produit de l’informatique en nuage natif puisqu’elle prolonge les avantages du nuage natif. En fait, elle entraîne un changement de modèle.</p>

<blockquote>"Le développement d’applications sans serveur n’est pas un changement progressif, il est une réinitialisation totale en matière de rapidité, de coût et d’évolutivité de ce qui peut être conçu ... "
<br> Adrian Cockroft, vice-président, Stratégie, architecture infonuagique, chez AWS</blockquote>

<h2>Les solutions sans serveur pour les applications orientées événements</h2>

<p>L’informatique sans serveur requiert de se départir des façons de penser traditionnelles qui se sont avérées utiles pour la conteneurisation et l’informatique en nuage natif parce qu’elle exige de penser de manière asynchrone. L’informatique sans serveur rayonne lorsqu’elle est appliquée à des modèles orientés événements, où les applications s’adaptent aux événements (changements d’état) à mesure qu’ils surviennent. Cela fonctionne bien avec le code qui est chargé et devient le lien qui relie les événements aux systèmes en aval ou à d’autres processeurs d’événements. Les services sans serveur comme Lambda permettent de générer des versions de code en réponse aux événements et de ne payer que pour la puissance de calcul étant utilisée.</p>

<p>Sam Newman explique en détail que l’informatique sans serveur exige de penser différemment quant à la façon de concevoir lors d’une discussion intitulée <a href="https://www.youtube.com/watch?v=Mz-b-rQ9wL0&feature=youtu.be">'Where We're Going, We Don't Need Servers'</a> qui a été présentée à GOTO 2020.</p>

<h2>Nous pouvons faire mieux!</h2>

<p>Ce n’est jamais facile d’admettre qu’il y a peut-être une meilleure façon de faire les choses, surtout lorsqu’on fait ces choses de la même manière depuis longtemps. Mais le moment est venu de poser de nouvelles questions parce que les technologies sans serveur et les applications orientées événements peuvent offrir des solutions plus rapides, plus agiles, plus respectueuses de l’environnement et de plus grande valeur différenciée.</p>

<h3>1. Rapidité</h3>

<p>Il n’y a aucun doute que la transition dans le nuage (lorsque c’est bien fait) a permis aux entreprises d’exploiter leurs activités plus efficacement dans le monde numérique d’aujourd’hui. La conception orientée événement prolonge cette efficacité parce qu’elle simplifie les applications elles-mêmes. Particulièrement, les fonctions en tant que service (FaaS) permettent de rédiger et de déployer de plus petites pièces de code sans avoir à se soucier de l’infrastructure. Ceci permet d’exploiter les applications plus rapidement.</p>

<h3>2. Agilité</h3>

<p>Les microservices (lorsque bien conçus) augmentent la rapidité et l’agilité des applications, ce qui permet de détecter rapidement les défaillances grâce à une expérimentation et à une génération de valeur plus rapides. Lorsqu’utilisées dans des projets nouveaux, les technologies sans serveur ont démontré leur capacité à ajouter encore plus d’agilité. La gestion des systèmes sans serveur est loin d’être aussi complexe que celle de nombreux déploiements VM ou Kubernetes à grande échelle. Les organisations peuvent améliorer considérablement le temps de développement lorsqu’elles déploient plusieurs petites fonctions de manière indépendante sans avoir à se soucier du même niveau d’infrastructure.</p>

<blockquote>"Vous pouvez concevoir des systèmes évolutifs d’extrême complexité en à peine quelques jours."
<br> Adrian Cockroft</blockquote>

<h3>3. Responsabilité environnementale</h3>

<p>De grandes quantités de ressources (électricité) sont consommées lors de l’exploitation de services, d’applications ou de conteneurs. Ces ressources sont souvent mises à l’échelle pour une utilisation médiane ou au pire des périodes de pointe, puis consommées pour maintenir les états d’inactivité.</p>

<p>Demandez-vous si vos applications ont besoin de consommer des ressources en continu, ou seulement en réponse à certains événements. L’informatique sans serveur peut vous permettre de consommer seulement les ressources dont vous avez besoin, libérant des ressources pour les remettre dans un bassin partagé lorsqu’elles ne sont pas utilisées. Ceci peut offrir une solution plus écologique et plus efficace du point de vue énergétique.</p>

<p>AWS et Azure se sont engagées à devenir carbones neutres ou carbones négatives avant les cibles nationales. Elles investissent dans des sources d’énergie renouvelable pour alimenter leurs centres de données. Déjà, le déplacement de charges sur site à AWS a donné lieu à une <a href="https://www.youtube.com/watch?v=4rLVJFHfK98">réduction de 88 % de l’empreinte carbone</a>. Les fournisseurs sans serveur à grande échelle sont beaucoup mieux placés que les plus petits centres de données pour demander une électricité plus verte, et le sans serveur peut les aider sur ce parcours.</p>

<h3>4. Valeur différenciée</h4>

<p>La crise de la COVID-19 nous a montré que les besoins des clients peuvent changer drastiquement en très peu de temps. Les infrastructures infonuagiques ont aidé les organisations à se réorienter sans crainte d’entraîner des coûts d’infrastructures irrécupérables. La transition aux FaaS et autres technologies sans serveur a donné encore plus de liberté pour concevoir et exploiter rapidement à l’échelle sans avoir à planifier et à s’approvisionner pour une charge potentielle. Ces technologies offrent un moyen de gérer le travail lourd et indifférencié du développement d’applications, permettant aux développeurs de consacrer plus de temps à générer une valeur différenciée. Plutôt que de concevoir une plateforme qui existe déjà, ils peuvent consacrer leur expertise à répondre aux besoins de l’entreprise.</p>

<h2>Est-ce que l’informatique sans serveur est prête?</h2>

<p>Les technologies sans serveur peuvent permettre des déploiements plus rapides, plus écologiques et plus agiles qui donnent des moyens aux organisations de mettre l’accent sur l’offre d’une valeur différenciée. Elles préconisent des modèles orientés événements qui peuvent révolutionner une troisième vague d’infonuagique. Mais les technologies sans serveur sont-elles suffisamment arrivées à maturité pour être adoptées?</p>

<p>Dans une <a href="https://acloudguru.com/blog/engineering/simon-wardley-is-a-big-fan-of-containers-despite-what-you-might-think">entrevue</a> avec Forest Brazeal, Simon Wardley souligne la plainte souvent exprimée voulant que le sans serveur ne soit pas encore prêt.</p>

<p>Ces types d’objections ne sont pas nouveaux : ils ont été exprimés lors de chaque phase du déplacement de XaaS (tout en tant que service) au nuage. Les gens n’ont pas pris le premier EC2 offert initialement avec grand sérieux. Lorsque le EC2 a finalement engendré le premier PaaS (plateforme en tant que service), il est devenu un catalyseur de l’IaC (infrastructure en tant que code). Ceci fut indéniablement un mouvement dans la bonne direction.</p>

<p>La plus grande préoccupation envers le sans serveur est le risque de captivité. Une fois que vous vous engagez envers un fournisseur de services sans serveur, il peut être difficile de passer à une autre plateforme. Plutôt que d’éviter la menace de captivité, évaluez la menace et l’impact. Il y a des moyens de n’associer que vaguement votre code avec les API du fournisseur si cela est idéal.</p>

<p>Amazon, Microsoft et Google s’efforcent de surmonter ces préoccupations courantes en améliorant leur offre de FaaS respective. Elles continuent de faire des progrès pour répondre aux préoccupations restantes.</p>

<p>Ainsi, le sans serveur gagne du terrain. Dans son <a href="https://www.youtube.com/watch?v=xZ3k7Fd6_eU">discours</a> re:Invent 2020, Andy Jassy (chef de la direction d’AWS) souligne que la moitié de tous les nouveaux services déployés à AWS le sont dans Lambda. Il y a encore des problèmes à régler pour le sans serveur, mais il semble prêt pour le marché.</p>

<p>En tant qu’architectes, nous devons résoudre de nouveaux problèmes complexes de manière à offrir de la flexibilité. Le sans serveur nous en donne les moyens. Il suffit de penser autrement.</p>

<p>Si nous voulons concevoir ces nouveaux systèmes et offrir une plus grande rapidité, nous devons concentrer nos efforts pour devenir plus efficaces avec de nouvelles techniques. Nous devons nous attaquer aux problèmes différemment.</p>

<p>Le moment est venu d’être plus rapide, plus écologique et plus agile.</p>

<p>Pensons d’abord au sans serveur!</p>

&nbsp;

<h4>Marc Boudreau</h4>
<p>Marc Boudreau est architecte infonuagique chez CloudOps et possède une formation en développement pour le nuage. Il est particulièrement passionné à aider les gens à utiliser les technologies sans serveur pour accélérer le développement de nuages. Marc aime faire du vélo durant ses temps libres et a hâte de passer l’automne et l’hiv er à faire du cyclo-cross en Belgique et aux Pays-Bas lorsqu’il sera possible de le faire de nouveau.</p>