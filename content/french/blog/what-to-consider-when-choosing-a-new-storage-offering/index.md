---
title: Éléments à considérer lors du choix d’un nouveau service de stockage
date: "2021-04-30"
author: "CloudOps"
description: Que vous fassiez passer vos équipements de stockage à un système équivalent ou que vous optiez pour une stratégie complètement différente, CloudOps suggère généralement trois approches de stockage défini par logiciel à ses clients. 
resources:
- name: "thumbnail"
  src: "DataStorage-thumbnail.png"
- name: "cover"
  src: "DataStorage-cover.png"
class_name: "blog post"
aliases:
keywords: [cloud ops, cloud storage, pure, portworx, cloud storage migration, cloud storage vendor]
tags:
---


<p>Le nombre et la variété de services de stockage ont explosé au cours des dernières années, et plusieurs facteurs doivent être pris en considération lors du passage à une nouvelle plateforme de stockage. Que vous fassiez passer vos équipements de stockage à un système équivalent ou que vous optiez pour une stratégie complètement différente, CloudOps suggère généralement trois approches de stockage défini par logiciel à ses clients.</p>

<h3>Le faire soi-même</h3>

<p>Vous pourriez envisager de concevoir et d’exploiter votre propre service de stockage avec des outils source libre comme <a href="https://www.cloudops.com/fr/blog/guide-de-survie-rook-et-ceph/">Rook et Ceph</a>. Cette option procure la plus grande flexibilité, mais elle vient avec les plus grands risques. Les services clé en main sont beaucoup plus simples à mettre en place, mais la conception d’une solution de stockage maison est complexe, prend du temps et laisse peu de place à l’erreur. À moins d’avoir une équipe déjà expérimentée en matière d’outils de stockage source libre, il est préférable d’éviter d’avoir à faire des apprentissages en plein milieu de la transition.</p>

<h3>Fournisseur de stockage</h3>

<p>Les entreprises qui passent à un nouveau service de stockage peuvent opter pour un fournisseur de matériel informatique ou continuer à exploiter une infrastructure dans un centre des données, celle-ci étant appuyée par le nuage ou hébergée dans un espace de stockage local. Les dépenses initiales requises en capital constituent l’inconvénient du passage à un fournisseur traditionnel de stockage, tandis que l’offre de stockage en tant que service n’exige pas d’investir dans du matériel informatique dès le début et permet d’opter pour un modèle de dépenses d’exploitation. Le stockage peut être acheté au besoin à un prix raisonnable. À cet effet, CloudOps s’est associée à <a href="https://www.purestorage.com/">Pure</a>, le chef de file dans l’industrie de stockage en tant que service. Les fournisseurs de stockage permettent de plus en plus de créer des déploiements hybrides et multinuages et les services de Pure comprennent également un soutien pour les nuages à très grande échelle. </p>

<h3>Stockage en nuage natif</h3>

<p>Il faut garder à l’esprit que vous n’avez pas à acheter de l’équipement de stockage à moins que cela soit logique de le faire. Vous pouvez installer un contrôle régulateur dans vos clusters et exploiter le stockage local comme s’il était offert par un fournisseur de stockage. En retirant le contrôle régulateur de la pile, l’approche en nuage natif soustrait le stockage de l’infrastructure sous-jacente dans le centre des données. Il offre idéalement les mêmes fonctionnalités de tout contrôleur de stockage d’un fournisseur, mais sur des disques de base disponibles n’importe où et sans infrastructure en rack.</p>

<p><a href="https://portworx.com/">Portworx</a> (récemment acquise par Pure) soutient des modèles hybrides et multinuages en offrant un contrôleur unique de stockage et l’interface de toutes vos applications, qu’elles soient déployées dans cloud.ca, GCP ou sur site. Elle procure une portabilité et une indépendance à vos applications vis-à-vis des services d’une solution de stockage en rack. Si vous avez besoin d’une plateforme de stockage agnostique d’un fournisseur avec une interface de stockage stable et que vous ne savez pas où votre infrastructure sera exploitée à long terme, le choix du nuage natif s’impose et vous pourriez envisager de faire appel aux services de stockage de Portworx.</p>

<p>La conception d’une solution maison de stockage peut donner de bons résultats si elle est entreprise par des équipes bien expérimentées dans Rook, Ceph et outils source libre similaires, mais elle peut devenir un cauchemar pour les équipes moins expérimentées. Opter pour un fournisseur de stockage avec des appareils informatiques en rack et en tant que service vous facilitera la tâche pour la transition avec un modèle de dépenses d’exploitation gérable. Le choix d’un jeu de contrôleurs logiciels vous évitera de dépendre du matériel informatique d’un fournisseur en particulier dans vos centres des données et vous donnera une flexibilité à long terme pour une approche en nuage natif.</p>

<p>Avant d’arrêter votre choix de la meilleure option pour votre organisation, examinez vos besoins actuels de stockage. Tirez-vous profit d’un service de stockage hybride ou d’une option flash? Avez-vous créé plusieurs niveaux qui tirent parti des deux? Est-ce que votre fournisseur de stockage offre un service pour Kubernetes? Le processus de transition sera plus facile si vous connaissez votre point de départ.</p>

<p>Les <a href="https://www.cloudops.com/fr/consultation-en-nuage-natif/">services consultation en nuage natif de CloudOps</a> vous feront épargner du temps pour évaluer vos besoins actuels de stockage avant de trouver et de mettre en œuvre la bonne solution. Vous aurez la certitude qui vient avec le travail d’une équipe d’experts capable d’offrir des solutions, des outils et des scripts d’automatisation personnalisables appuyés par des antécédents de projets variés à leur actif. <a href="https://www.cloudops.com/fr/contactez-nous/">Contactez-nous pour en savoir plus</a>.</p>