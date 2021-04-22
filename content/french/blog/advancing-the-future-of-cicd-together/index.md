---
title: "Ensemble, faisons progresser les CI/CD vers le futur"
date: "2020-08-24"
author: "Tracy Miranda"
resources:
- name: "thumbnail"
  src: "CICDThumbnail.png"
- name: "cover"
  src: "CICDCover.png"
class_name: "blog post"
slug: "ensemble-faisons-progresser-les-cicd-vers-le-futur"
description:
keywords:
tags:
---

La livraison continue (CD pour continuous delivery) est une approche de génie logiciel où les équipes produisent des logiciels en cycles courts, assurant ainsi une fiabilité de livraison en tout temps. Elle est liée à l'intégration continue (CI pour continuous integration), qui est la pratique de fusionner toutes les copies de travail des développeurs dans un réseau principal partagé et plusieurs fois par jour. Depuis la montée des microservices et des architectures cloud native, la livraison continue devient de plus en plus nécessaire et les communautés de logiciel libre se rassemblent afin de propulser son adoption.

<p class="tabbed-text"><b>« La livraison de logiciel est un exercice de continuelle amélioration ; nos recherches démontrent que, année après année, les meilleurs continuent de s'améliorer tandis que ceux qui stagnent prennent de plus en plus de retard.»</b></p>
<p class="tabbed-text"><b>Nicole Forsgren, Accelerate: The Science of Lean Software and DevOps (Accélérer : la science derrière le logiciel Lean et le DevOps).</b></p>

Même si la livraison continue est une partie essentielle de la livraison de logiciel moderne, elle fait face à quelques défis qui empêchent son adoption massive.

Le paysage cloud native est en constante évolution. Avec les microservices et les technologies cloud native, il y a une prolifération d'environnements, de logiciels, d'outils et d'approches et il peut être difficile de s'y retrouver. Le paysage étant fragmenté, ce n'est pas toujours évident d'identifier quel outil accomplit quelle tâche. Les termes se chevauchent et ne sont pas toujours utilisés de façon constante, cela crée également de la confusion.

Le changement représente aussi tout un défi. Il est facile pour une équipe de s'installer dans une manière de fonctionner et il est parfois difficile d'accueillir toutes sortes de changements, surtout lorsqu'il s'agit de personnel. À cause de la COVID-19, les entreprises doivent s'adapter. Autant les grandes, les petites et les moyennes entreprises cherchent à augmenter leurs capacités infonuagiques. La pandémie est en train d'accélérer l'adoption et l'automatisation de la technologie. 

La fondation <a href="https://cd.foundation/" target="_blank">"Continuous Delivery Foundation (CDF)"</a> fut mise sur pied afin d'aider à relever ces défis. Elle a été lancée en mars 2019 avec quatre projets initiaux. Nous sommes en train de mettre en place les meilleures pratiques pour l'automatisation de la livraison de logiciel du point de vue des gens, des procédés et de la technologie. Nous aidons à propulser l'éducation et l'adoption des outils de livraison continue à travers tous les secteurs à l'échelle planétaire, autant pour les architectures traditionnelles que modernes. En facilitant la pollinisation croisée dans les technologies émergentes, nous espérons améliorer la capacité de livraison de logiciels, rapidement et en toute sécurité, à travers le globe.

Nous avons, à la CDF, un ensemble de projets initiaux qui en sont tous à différentes étapes d'adoption. Des projets comme <a href="https://jenkins.io/" target="_blank">Jenkins</a> et <a href="https://spinnaker.io/" target="_blank"> sont déjà bien connus et utilisés dans la population générale. De l'autre côté, on retrouve des technologies cloud native et des projets comme <a href="https://jenkins-x.io/" target="_blank">Jenkins X</a> et Tekton qui évoluent dans un monde de conteneurs. Leur but est de vous offrir les composantes afin que vous puissiez livrer des microservices et des travaux à travers les équipes pour livrer de façon continue.

Une des initiatives que nous avons récemment mises sur pied est le <a href="https://landscape.cd.foundation/" target="_blank">paysage CI/CD</a>, il dérivé de celui de la fondation CNCF et est parfois affectueusement surnommé “paysage infernal”. Notre objectif était de plonger plus profondément dans l'univers des CI/CD, leur signification et comment pourrait-on leur donner un sens. Nous avons donc établi des catégories. Nous n'en sommes qu'à une première version et nous allons collaborer avec la communauté pour les améliorer et ajouter plus de projets qui représentent l'espace logiciel libre, espace où tout le monde peut <a href="https://github.com/cdfoundation/cdf-landscape" target="_blank">apporter sa contribution</a>. De plus, nous avons une vaste <a href="https://www.meetup.com/pro/cicd-cdf" target="_blank">communauté de meetups</a> que nous utilisons pour propager les meilleures pratiques et discuter des technologies.

Un élément clé de la CDF est l'accent mis sur l'importance d'avoir une normalisation des composantes pour les outils CI/CD dans tout le secteur. Cela facilite l'innovation et fait en sorte qu'on n’ait pas à réinventer la roue encore et encore. 

Au sein de la CDF, l'accent est mis sur le partage des API et des métadonnées, grâce à un groupe de travail appelé groupe d'intérêt commun Interopérabilité <a href="https://github.com/cdfoundation/sig-interoperability" target="_blank">(Interoperability Special Interest Group)</a>, qui est ouvert à la participation de tous. En jetant un œil à leurs <a href="https://github.com/cdfoundation/sig-interoperability/blob/master/docs/meetings.md" target="_blank">comptes rendus et à leurs ordres du jour</a>, vous constaterez une évolution dans leur orientation. Au tout début, les discussions portaient sur les choses à identifier et comment agir pour que différents outils partagent leur code, puis nous nous sommes rendu compte que les gens utilisaient des termes qui désignaient des choses différentes. Nous avons alors constaté l'étendue du problème, non seulement dans les outils de la fondation, mais à travers tous les outils de CI/CD. Nous avons donc créé un <a href="https://github.com/cdfoundation/sig-interoperability/blob/master/docs/vocabulary.md" target="_blank">document</a>que nous appelons la pierre de Rosette des CI/CD, qui uniformise la terminologie à travers les outils. 

La CDF possède également les opérations d'apprentissage machine ou groupe d'intérêt commun MLOps 
<a href="https://github.com/cdfoundation/sig-mlops" target="_blank">(MLOps special interest group)</a>. Le terme MLOps, désigne une extension de la méthodologie du DevOps qui qualifie l'apprentissage machine et les actifs de données scientifiques de citoyens de première classe. Comment peut-on obtenir des contrôles de versions? Peut-on déployer du code d'apprentissage machine, de données et de modèles, de façon robuste et avec tous les outils et processus qui les soutiennent? Ce sont quelques-unes des questions auxquelles le groupe d'intérêt commun MLOps essaie de répondre.

Vous pouvez vous impliquer en vous inscrivant à <a href="https://cd.foundation/stay-connected/" target="_blank">l'infolettre de la CDF</a>, qui vous informera sur les événements et les groupes d'intérêt à venir. Vous pouvez aussi nous suivre sur <a href="https://twitter.com/cdeliveryfdn" target="_blank">Twitter</a> ou assister à l'un de nos nombreux<a href="https://cd.foundation/training/" target="_blank">cours</a> que nous offrons sur la CD. N'hésitez pas à me contacter si cela vous intéresse, mais vous ne savez pas par où commencer. Je vous encourage tous à rejoindre la communauté afin de faire progresser la livraison continue vers le futur.

<h3>Tracy Miranda</h3>

Tracy Miranda est la directrice du logiciel libre chez CloudBees et la présidente de la fondation “Continuous Delivery Foundation”. 

<div style="text-align: center;">
<!--HubSpot Call-to-Action Code --><span class="hs-cta-wrapper" id="hs-cta-wrapper-9a9feee6-3a5f-4335-93a4-b4964ab1ce5c"><span class="hs-cta-node hs-cta-9a9feee6-3a5f-4335-93a4-b4964ab1ce5c" id="hs-cta-9a9feee6-3a5f-4335-93a4-b4964ab1ce5c"><!--[if lte IE 8]><div id="hs-cta-ie-element"></div><![endif]--><a href="https://cta-redirect.hubspot.com/cta/redirect/732832/9a9feee6-3a5f-4335-93a4-b4964ab1ce5c"  target="_blank" ><img class="hs-cta-img" id="hs-cta-img-9a9feee6-3a5f-4335-93a4-b4964ab1ce5c" style="border-width:0px;" src="https://no-cache.hubspot.com/cta/default/732832/9a9feee6-3a5f-4335-93a4-b4964ab1ce5c.png"  alt="New call-to-action"/></a></span><script charset="utf-8" src="https://js.hscta.net/cta/current.js"></script><script type="text/javascript"> hbspt.cta.load(732832, '9a9feee6-3a5f-4335-93a4-b4964ab1ce5c', {}); </script></span><!-- end HubSpot Call-to-Action Code -->
</div>
