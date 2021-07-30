---
title: "Exploiter les architectures multinuages – HashiCorp Vault pour la gestion des secrets"
date: "2021-07-27"
author: "CloudOps"
description: HashiCorp Vault est une excellente solution pour la gestion des secrets. 
resources:
- name: "thumbnail"
  src: "UnlockingMultiCloud-Thumbnail.png"
- name: "cover"
  src: "UnlockingMultiCloud-Cover.png"
class_name: "blog post"
slug: /exploiter-les-architectures-multinuages-hashicorp-vault
---

<p>Pour toutes sortes de raisons, les organisations choisissent souvent d’utiliser les ressources d’infrastructures infonuagiques de plusieurs fournisseurs afin d’éviter de dépendre d’un seul. Les architectures multinuages comprennent l’exploitation de deux plateformes infonuagiques publiques ou plus et les architectures de nuages hybrides comprennent également des composants d’infrastructures de nuages privés.  Les applications prises en charge par les architectures de nuages hybrides et multinuages peuvent permettre de tirer parti de nombreuses fonctionnalités de plusieurs nuages et de réduire les risques; toutefois, les organisations doivent utiliser les bons outils pour exploiter pleinement le potentiel de ces architectures.</p>

<h2>Les meilleurs outils pour les architectures multinuages</h2>

<p>L’environnement DevOps et des infrastructures de nuages comprend une multitude d’outils et de plateformes qui ont chacun leur propre cas d’utilisation idéale. Les organisations qui utilisent les meilleurs outils dans cet environnement pourront profiter de tous les avantages des architectures multinuages.</p>

<img  src="/images/blog/post/lexpertisedevops.png" alt="ExpertiseDevOps"  width="100%">

<h2>La mentalité de vérification systématique</h2>

<p>Puisque ces outils et ces plateformes sont indispensables pour assurer le succès de votre organisation, il faut les protéger. La sécurité doit toujours être un élément fondamental des architectures hybrides et multinuages composées de plusieurs nuages et de centres de données privés sans périmètres de réseau clairs. Ces architectures requièrent de votre organisation d’adopter une mentalité de vérification systématique.</p>

<blockquote>"Plutôt que de présumer que tout est sécurisé par le pare-feu de l’entreprise, le modèle à vérification systématique tient pour acquis qu’il y a des violations et vérifie chaque requête comme si elle venait d’un réseau ouvert. Peu importe la provenance de la requête ou la ressource à laquelle elle accède, le modèle à vérification systématique enseigne à ne jamais faire confiance et à toujours vérifier. Chacun des accès est entièrement validé, autorisé et chiffré avant d’accorder l’accès." - <a rel="noreferrer noopener" href="https://www.microsoft.com/en-ca/security/business/zero-trust" target="_blank">Microsoft</a></blockquote>

<p>La gestion adéquate des identités, des accès et des secrets est au cœur de la mentalité de sécurité de la vérification systématique. Les solutions et les articles abondent sur la gestion des identités et des accès, mais aujourd’hui, nous voulons mettre l’accent sur la gestion des secrets.</p>

<h2>Qu’est-ce que la gestion des secrets?</h2>

<p>Vous êtes peut-être déjà aux prises avec le problème de l’étalement des secrets, où vos clés, vos certificats, vos secrets et vos mots de passe sont stockés dans des fichiers, des codes ou des scripts dans plusieurs environnements. L’étalement des secrets entraîne plusieurs risques opérationnels et de sécurité à mesure que s’accroît votre infrastructure. Vous avez donc besoin d’un gestionnaire de secrets complet qui peut assurer la prise en charge de plusieurs intégrations, évoluer aisément avec votre infrastructure grandissante, et qui est facile à vérifier.</p>

<h2>HashiCorp Vault pour la gestion des secrets</h2>

<p><a rel="noreferrer noopener" href="https://www.hashicorp.com/products/vault" target="_blank">HashiCorp Vault</a> est une excellente solution pour la gestion des secrets. On peut le comparer à un gestionnaire dynamique de mots de passe très sécurisés qui se souvient non seulement des mots de passe et des certificats, mais est aussi capable d’en créer et de les modifier pour des applications, des bases de données, des services Web et autres composants informatiques. Son intégration couvre plusieurs répertoires actifs et solutions de gestion des identités, aidant votre organisation à passer à un modèle à vérification systématique.</p>

<p>Les organisations utilisent habituellement la version code source libre de HashiCorp Vault à titre d’entrepôt de clés intégré à leur nuage public KMS. Leurs applications importantes stockent et accèdent à des secrets avec Vault pour répondre aux mandats de sécurité minimale. Il peut y avoir des déploiements multiples et en silo dans l’organisation, mais l’adoption de Vault est un parcours qui peut être personnalisé en fonction des besoins de votre entreprise.</p>

<h2>Une gestion des secrets réussie : ramper, marcher, courir</h2>

<p>Vault permettra à votre organisation d’intégrer la sécurité dans la couche la plus interne de sa pile technologique. Comment faire évoluer votre pratique de gestion des secrets? Premièrement, il faut comprendre la position de votre organisation dans le modèle de maturité pour la gestion des secrets. Est-elle au repos, progresse-t-elle lentement ou bien elle rampe, marche ou court dans votre mise en œuvre de Vault?</p>

<img  src="/images/blog/post/gestiondessecretsmodele.png" alt="ExpertiseDevOps"  width="100%">

<p><bold>Au repos :</bold> Votre organisation fait face à l’étalement des secrets, mais elle n’a pas de processus ni de solution en place pour résoudre les risques qui y sont associés. 
</p>

<p><bold>Progression lente :</bold> Votre organisation décide d’atténuer plusieurs risques opérationnels et de sécurité issus de l’étalement de ses secrets. L’option d’un entrepôt de clés dans un nuage public comme <a rel="noreferrer noopener" href="https://azure.microsoft.com/en-us/services/key-vault/" target="_blank">Azure Key Vault</a> pourrait être retenue. Toutefois, ce type de solution n’est pas conçu pour les architectures multinuages modernes et peut entraîner des défis opérationnels lorsqu’envisagé au-delà de votre nuage principal.</p>

<p><bold>Ramper:</bold> La <a rel="noreferrer noopener" href="https://www.hashicorp.com/products/vault/secrets-management" target="_blank">plateforme Vault de gestion des secrets</a> peut être une solution idéale. Il faut d’abord télécharger la version OSS (logiciel à code source libre) pour mettre en place quelques scénarios de base qui exploitent des secrets dynamiques pour vos applications cibles. La version OSS requiert le soutien communautaire d’HashiCorp et fonctionne bien pour les preuves de capacité. Elle n’offre pas la réplication dans des centres de données multiples et quelques fonctionnalités clés de la version Entreprise sont manquantes (comme des instantanés et des sauvegardes).</p>


<p><bold>Marcher :</bold> Plusieurs de nos clients ont procédé aux déploiements de Vault en installant Vault Entreprise ou le service géré de Vault de la plateforme de nuage d’HashiCorp. Ceci comprend une variété de <a rel="noreferrer noopener" href="https://www.hashicorp.com/products/vault/features" target="_blank">fonctionnalités</a> additionnelles de même qu’un soutien exclusif d’HashiCorp. Pour un environnement multinuages véritable, les clients doivent maintenir la gestion des secrets dans l’infrastructure de nuage de leur choix entre GCP, AWS et Azure ou dans un nuage privé. Pour plusieurs entreprises clientes de HashiCorp Vault, ceci comprend la désignation d’une équipe qui détient et gère Vault dans le nuage et offre la gestion des secrets en tant que service au reste de l’organisation.</p>

<p><bold>Courrir :</bold> Vault offre également des fonctionnalités avancées pour le chiffrement des données, le masquage des données et l’intégration avec des <a rel="noreferrer noopener" href="https://www.cryptomathic.com/news-events/blog/understanding-hardware-security-modules-hsms" target="_blank">modules de sécurité informatique</a>. Il peut traiter les secrets en transition et gérer le cycle de vie d’une clé de chiffrement à la perfection. Les programmes Vault accélérateurs de CloudOps vous aideront à créer de la valeur en quelques semaines avec Vault Entreprise ou Vault HCP.</p>

<h2>Le « secret » de la gestion des secrets</h2>

<p>Notre collection d’architectures standardisées et de configurations prédéfinies, de scripts et d’automatisations offre un soutien aux clients de toutes les tailles à chaque étape du parcours d’adoption de Vault. Nos antécédents et notre expertise avec HashiCorp et d’autres outils d’infrastructures nous permettent de réduire les coûts et les risques de mise en œuvre de tels projets technologiques de pointe.</p>

<p>La myriade de plateformes infonuagiques et de technologies s’accroît sans cesse, et les organisations doivent naviguer dans le monde multinuages d’aujourd’hui pour soutenir la croissance des affaires. CloudOps aide les organisations de toutes les tailles à concevoir et à exploiter des plateformes de nuages qui leur permettent d’éviter d’être captives d’un fournisseur et de réduire les risques et les coûts. Ceci procure une souveraineté à long terme, un contrôle et la liberté de choisir les services appropriés. Notre approche est agnostique en matière de nuages et de plateformes, ce qui nous confère une expertise dans une vaste gamme de solutions.</p>

<p>HashiCorp Vault est un outil hors pair pour sécuriser, stocker et contrôler l’accès à des jetons, des mots de passe, des certificats, des API et autres secrets de l’informatique moderne. Il peut être une partie intégrante de n’importe quelle pratique en matière d’infrastructure sécurisée en tant que code. Il est offert en trois versions :</p>

<p><bold>Vault Source libre :</bold> La version source libre de Vault comprend des fonctionnalités, dont la gestion de secrets dynamiques et un soutien communautaire. Cette version vous aidera à amorcer la mise en place de la gestion des secrets pour votre organisation. Le code source est entièrement libre et est accompagné d’un solide soutien communautaire.</p>

<p><bold>Vault Nuage :</bold> L’offre de services gérés pour Vault fait partie de la plateforme de nuage d’HashiCorp et convient aux cas d’utilisation à l’échelle des entreprises. Il fournit des clusters entièrement gérés, des ententes de niveau de service d’infrastructure infonuagique et un soutien. Si votre organisation évolue rapidement et que vous ne voulez pas vous inquiéter du maintien de l’infrastructure pour vos déploiements, alors Vault HCP est une excellente option.</p>

<p></bold>Vault Entreprise :</bold> La licence payée pour des déploiements Vault sur n’importe quelle infrastructure. Il comprend toutes les fonctionnalités des versions Nuage et Source libre de même que celles en matière de gouvernance et de politiques, d’évolutivité et de correction et de services de soutien exclusifs.</p>

<p>Une comparaison sommaire de ces versions est présentée <a rel="noreferrer noopener" href="https://www.hashicorp.com/products/vault/features" target="_blank">ici</a>.</p>

<h2>Prochaines étapes</h2>

<p>Partenaire platine d’HashiCorp, <a rel="noreferrer noopener" href="https://f.hubspotusercontent30.net/hubfs/732832/New%20One-Pagers%20(rebranded)/FR_HashiCorpVaultServiceOfferings.pdf" target="_blank">CloudOps offre des ateliers pratiques qui donneront aux équipes DevOps les compétences nécessaires pour exploiter les versions Vault HCP et Entreprise</a>. <a rel="noreferrer noopener" href="https://www.cloudops.com/fr/contactez-nous/" target="_blank">Contactez-nous pour en savoir plus</a>.</p>

<!--HubSpot Call-to-Action Code --><span class="hs-cta-wrapper" id="hs-cta-wrapper-7305336f-1871-4fd6-9075-4408aab5f8a9"><span class="hs-cta-node hs-cta-7305336f-1871-4fd6-9075-4408aab5f8a9" id="hs-cta-7305336f-1871-4fd6-9075-4408aab5f8a9"><!--[if lte IE 8]><div id="hs-cta-ie-element"></div><![endif]--><a href="https://cta-redirect.hubspot.com/cta/redirect/732832/7305336f-1871-4fd6-9075-4408aab5f8a9"  target="_blank" ><img class="hs-cta-img" id="hs-cta-img-7305336f-1871-4fd6-9075-4408aab5f8a9" style="border-width:0px; width:100%" src="https://no-cache.hubspot.com/cta/default/732832/7305336f-1871-4fd6-9075-4408aab5f8a9.png"  alt="New call-to-action"/></a></span><script charset="utf-8" src="https://js.hscta.net/cta/current.js"></script><script type="text/javascript"> hbspt.cta.load(732832, '7305336f-1871-4fd6-9075-4408aab5f8a9', {"region":"na1"}); </script></span><!-- end HubSpot Call-to-Action Code -->