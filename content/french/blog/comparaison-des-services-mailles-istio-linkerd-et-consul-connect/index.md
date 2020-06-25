---
title: "Comparaison des services maillés : Istio, Linkerd et Consul Connect"
lastmod: "2019-03-28"
author: Syed Ahmed"
class_name: "blog post"
---

<img src="/images/blog/post/ComparingServiceMesh.jpg" class="main-blog-image">

<p style="text-align:left">Les microservices fournissent aux applications, des moyens pour devenir hautement évolutives, portatives et résilientes. Ils peuvent accélérer les pipelines de livraison et d’intégration continue (CI/CD) et faciliter les environnements à nuages multiples. Ils agissent comme antidote au couplage fort qui est maintenu par les architectures monolithiques et qui peut être difficile à adapter puisqu’il faut réévaluer toute l’application lorsque que survient un problème, une mise à jour ou un changement de fonctionnalité dans un module. Les microservices renforcent les environnements volatiles et modernisés qui peuvent alimenter la demande en matière d’innovation de logiciel infonuagique natif.</p><p>Par conséquent, au cours des dernières années, l’utilisation de microservices et de conteneurs a monté en flèche, tout comme la demande pour des solutions pertinentes. Kubernetes, le système de source libre d’orchestration de conteneurs est devenu la norme du secteur et a engendré un écosystème d’outils qui gravitent autour. Le paysage infonuagique natif a proliféré tant en taille qu’en portée, devenant chaque année, de plus en plus difficile et complexe à naviguer. Cela a facilité la mise en place de l’automatisation et l’utilisation plus efficace des ressources informatiques.</p><p>La volatilité propagée par les microservices est idéale pour les applications ayant de lourdes charges de travail diversifiées. Toutefois, les microservices comportent des défauts. Comme il peut être difficile d’établir la confiance entre les microservices, les opérations s’en trouvent ralenties. Les déploiements de type canari, c’est-à-dire de publier des versions pour un groupe restreint d’utilisateurs ou de serveurs, peuvent être compliqués. Il en est de même pour les retours arrière, le routage fondé sur les attributs, le chiffrement de bout à bout, la collecte de métriques et la limite de débit, qui sont aussi difficiles. Il reste tout de même des problèmes à régler avec les microservices. Ce sont des opérations auxquelles les développeurs d’applications ne veulent pas penser, mais dont ils dépendent.</p><p>Les services maillés ont surgi comme étant la solution aux problèmes de réseaux présentés par les microservices. Un service maillé désigne le support entre les différents microservices qui rend la connectivité possible. Ce réseautage est alors enrichi d’une panoplie d’autres fonctionnalités, comme la découverte de service, l’authentification et l’autorisation, la surveillance, le traçage et la régulation de flux. Les services maillés sont une partie essentielle des architectures basées sur les microservices et par conséquent, leur écosystème croît et prospère.</p><p>J’ai présenté la conférence&nbsp;: « Une comparaison des options de services maillés » (A Comparison of Service Mesh Options) aux récentes journées nord-Américaines <a href="https://events.linuxfoundation.org/events/osn_days_2018/?utm_content=78780211&amp;utm_medium=social&amp;utm_source=linkedin">Open Source Networking Days</a> qui se sont tenues à Ottawa le 31&nbsp;octobre 2018. Je me suis arrêté sur Istio, Linkerd et Consul Connect, les trois services maillés qui, selon moi, sont parmi les plus intéressants. Cet article de blogue est basé sur cette discussion.</p><p><strong>Istio</strong></p><p>En mai 2017, Istio a été sourcé librement par Google, IBM et Lyft. Comme il fut l’un des premiers services maillés, il est très riche en fonctionnalités. Istio, est conçu pour connecter, sécuriser et surveiller les microservices. Ces fonctionnalités incluent l’équilibrage de charge automatique pour HTTP, gRPC, WebSocket et le trafic TCP. Il offre un contrôle précis du comportement de débit, de bonnes règles de routage, des réessais, des basculements et des injections de fautes. Istio a une couche modulaire de politique et API de configuration qui soutient les contrôles d’accès, les limites de débit et les quotas. Les métriques, les enregistrements et les traces automatiques de tout le trafic à l’intérieur d’une grappe sont fournis et cela comprend aussi les entrées et les sorties de grappes. Istio a de solides politiques d’autorisation et d’authentification basées sur l’identité. Cela facilite la communication sécuritaire de service à service.</p> <figure class="wp-block-image"><img src="https://lh3.googleusercontent.com/Bb9LlXQamQCStlzMYAHIrGOffJOexT0a5bMfxFipgZuXaDDAxCzeZvX1g36PFZG8fWG3WcBJy1gL7ImADCkIUq4EeH_eyuXnv9GH5VZmPcVIlLi9oc8BikHOxVOjHasWHBLLEzgiz2LQSuJtHg" alt=""></figure><p>Istio utilise <strong>Envoy</strong>, un mandataire à haute performance développé en C++. Les mandataires Envoy sont déployés en motif « sidecar » qui empêche la communication entre les microservices de modifier le code de l’application. Les conteneurs ne savent pas lorsqu’un mandataire leur est attribué, mais ils reçoivent de la visibilité grâce à eux. Les mandataires Envoy fournissent la découverte dynamique de service, l’équilibrage de charge, la cessation du protocole TLS, les mandataires HTTP/2 et gRPC, des coupe-circuits, des bilans de santé, des mises en œuvre de mises en place avec répartition de trafic, injection de fautes et paramètres enrichis basés sur le pourcentage. Le projet CNCF Envoy <a href="https://www.cncf.io/announcement/2018/11/28/cncf-announces-envoy-graduation/">a tout récemment atteint le stade d’achèvement</a> et est en constante évolution.</p><p>Le plan de contrôle d’Istio se trouve au-dessus des mandataires et est composé de trois éléments. <strong>Pilot</strong> est l’élément qui se trouve au cœur, il est utilisé pour la gestion du trafic et il configure toutes les instances du mandataire Envoy. <strong>Mixer</strong> est un élément indépendant de plateforme, il fait respecter le contrôle d’accès et les politiques d’utilisation à travers le service maillé. Il collecte et analyse aussi les rapports télémétriques. <strong>Citadel</strong>, connu autrefois sous le nom de Istio-Auth, est l’exécuteur des politiques et de l’autorité de certification du service maillé. Il offre l’authentification de service à service et d’utilisateur final avec gestion intégrée d’identité et d’identifiants. Citadel peut être utilisé pour mettre à niveau le trafic non crypté dans le service maillé et pour imposer les politiques basées sur l’identité du service plutôt que sur les contrôles des réseaux.</p><p>Voici quelques autres éléments faisant partie intégrante d’Istio. <strong>Gateway</strong>, il s’agit de son équilibreur de charge, opère en périphérie du service maillé et reçoit les connexions HTTP/TCP entrantes et sortantes. <strong>VirtualServices</strong> définit les ensembles de règles du routage de trafic à appliquer lors de l’attribution d’adresses d’hôtes. Chaque règle de routage définit des critères équivalents pour le trafic de protocoles spécifiques qui, lorsqu’ils sont appariés, sont envoyés vers un service de destination désignée défini dans le registre. <strong>DestinationRules</strong> définit les politiques relatives au trafic destiné aux services qui ont déjà fait l’objet d’un routage, en spécifiant les paramètres de configuration d’équilibrage de charge, de taille de réserve de connexions et de cas particulier qui détectent et expulsent les hôtes malsains du bassin d’équilibrage de charge.</p><p><strong>Linkerd</strong></p><p>Au tout début, Linkerd (v1.0) était un mandataire de réseau pour activer les services maillés. En septembre 2018, il a fusionné avec Conduit pour former <a href="https://www.cncf.io/blog/2018/09/18/linkerd-2-0-in-general-availability/">Linkerd&nbsp;2.0, ayant tout récemment été mis en disponibilité générale.</a> Cette mise à niveau de version a transformé le projet qui passe d’un service maillé à l’échelle de la grappe à un sidecar de service composable. Linkerd est conçu comme service maillé léger pouvant être placé sur n’importe quelle plateforme existante. Son installation est simple, tout comme ces outils&nbsp;CLI et n’exige pas l’utilisation d’admin de plateforme. Linkerd n’offre pas une vaste gamme de fonctionnalités, mais est d’une grande simplicité. C’est un service maillé simple, idéal pour les organisations qui n’exploitent pas un grand nombre de microservices et qui désirent mettre en place des services maillés rapidement et avec un minimum d’effort.</p> <figure class="wp-block-image"><img src="https://lh5.googleusercontent.com/QIsUKV39tbSpWBJ2o9pMG4nHjc6msLn0f_zfSV67bSVB2VuWn5bmFZtYuAbcWUJd2me29RD2qfhbo8fGvM0mli0Umq6N5Sr7Z0kE86k3ghyROE1oAXSTVstOuTvSp76qVf_-88CnPgVoNOAObA" alt=""></figure><p>Le <strong>mandataire</strong> de Linkerd est petit, léger et est écrit en Rust. Il est déployé dans un motif sidecar et peut faire le chiffrement de bout à bout et l’injection automatique de mandataire, mais il comporte des lacunes au niveau de ses capacités de routage et de traçage complexes.<strong> </strong>À l’intérieur du plan de contrôle, le <strong>Contrôleur</strong> est composé de plusieurs conteneurs (incluant api public, mandataire api, destination et tap) qui fournissent la plupart des fonctionnalités. Le <strong>déploiement Web</strong> constitue le tableau de bord. Linkerd utilise <strong>Prometheus</strong> pour exposer et pour stocker les métriques. Une instance Prometheus a été configurée pour fonctionner précisément avec des données générées et déployées au sein du service maillé Linkerd. Le tableau de bord<strong> Grafana</strong> présente et affiche des tableaux de bord pouvant être atteints à partir du tableau de bord Linkerd lui-même.</p><p>Utilisez les commandes ci-dessous pour installer, injecter et inspecter le service maillé de Linkerd.</p> <figure class="wp-block-image"><img src="https://lh4.googleusercontent.com/YH-DmBFviPJ89uOy3ZSgLt9t_eQsP_4cmYNIpheQXQVyDURCRhBWp5HHhVSRI7R0upv1tP5PmSY7UdgwFnWKDe9rPJBiZUtgCa1CEPb6y_dfsuyyjF0ZmCGesd499F5DBp2m199t8SNKjtdg-A" alt=""></figure><p><strong>Consul Connect</strong></p><p>Consul Connect offre la communication de service à service sécurisée avec cryptage TLS automatique et autorisation basée sur l’identité. Il met l’accent sur la découverte de service et la gestion de l’identité de service. Tout comme Istio, il utilise le mandataire <strong>Envoy</strong> et le motif sidecar.</p><p>Consul Connect est une extension de Consul, une découverte de service hautement disponible et distribué et une base de données KV. Consul Connect ajoute des capacités de service maillé et fut créé par Hashicorp en juillet 2018. C’est une extension de Consul et peut synchroniser les services Kubernetes et Consul. Il en va de même pour Consul Connect qui offre des intégrations à Vault pour la gestion des certificats et des secrets, prolongeant la découverte de service fournie par Consul.</p><p>Istio, Linkerd, et Consul Connect ont tous leurs mérites respectifs qui répondent, ou non, aux exigences de votre pile technologique. Istio est le service maillé disponible le plus avancé, mais il peut être complexe et difficile à gérer. En revanche, Linkerd offre un service maillé simple, mais avec moins de souplesse. Consul Connect offre des intégrations à d’autres solutions Hashicorp, notamment Consul et Vault. Tandis que l’écosystème des services maillés continue de croître, nous pouvons nous attendre à voir, dans le futur, plus de fonctionnalités et de solutions qui atteignent la disponibilité générale. Pour en apprendre plus à propos de la mise en œuvre de solutions de services maillés dans le cadre d’une plus vaste pratique DevOps, inscrivez-vous à l’un de nos ateliers DevOps et assistez à ma conférence sur&nbsp;: <a href="https://sched.co/LKTN">Comparing Service Mesh Solutions</a>, du 3 au 5&nbsp;avril, au Sommet nord-Américain de réseautage de source libre de la fondation Linux (Linux Foundation’s North American Open Networking Summit).</p><p><strong>Syed Ahmed</strong></p><div class="wp-block-image"> <figure class="alignleft is-resized"><img src="/images/blog/post/0.jpg" alt="" class="wp-image-8186" width="111" height="111"></figure></div><p>Syed Ahmed est un développeur de logiciels chez CloudOps. Il est axé sur les intégrations et les problèmes qui sont difficiles à résoudre. Grâce à son expertise tant dans les piles de matériel que de logiciels, il ajoute une perspective unique dans la résolution de problèmes relatifs à l’intégration et à l’orchestration. Syed est un avide collaborateur à la source libre, il est aussi « Committer » et « PMC » pour le projet Apache CloudStack.</p><p>Téléchargez notre dernier&nbsp;<strong>livre électronique&nbsp;</strong>intitulé&nbsp;<a href="https://info.cloudops.com/azure-kubernetes-services-la-securite-des-conteneurs-pour-un-monde-infonuagique?utm_campaign=Newsletter&amp;utm_source=hs_email&amp;utm_medium=email&amp;_hsenc=p2ANqtz-8ll7eD7-Vr_Tt_ix2GwbVkOfZgrRYh4oZgujb0I70lbjsjKAKHjghehF-iVtD2sJSbO-cJ" target="_blank" rel="noreferrer noopener"><em>Azure Kubernetes Services&nbsp;: la securite des conteneurs pour un monde infonuagique</em></a>&nbsp;écrit en collaboration avec Microsoft, qui explique les risques les plus importants liés à la sécurité des conteneurs et qui présente des moyens pour optimiser les solutions avec AKS.</p><p><!--HubSpot Call-to-Action Code --><span class="hs-cta-wrapper" id="hs-cta-wrapper-1e2208b8-99d7-4ecd-ac6f-83ccc1f262ed"><span class="hs-cta-node hs-cta-1e2208b8-99d7-4ecd-ac6f-83ccc1f262ed" id="hs-cta-1e2208b8-99d7-4ecd-ac6f-83ccc1f262ed" style="visibility: visible;" data-hs-drop="true"><a id="cta_button_732832_aebe9676-70ac-4719-ace1-42aae0b2b420" class="cta_button " href="https://info.cloudops.com/cs/c/?cta_guid=aebe9676-70ac-4719-ace1-42aae0b2b420&amp;placement_guid=1e2208b8-99d7-4ecd-ac6f-83ccc1f262ed&amp;portal_id=732832&amp;canon=https%3A%2F%2Fwww.cloudops.com%2Ffr%2F2019%2F03%2Fcomparaison-des-services-mailles-istio-linkerd-et-consul-connect%2F&amp;redirect_url=APefjpGul-97a6YJLsfiimMYE1EdXN1R0nkVxtokE-fjoXz985HzG2Ds15DkG5YKeE53JUVWWAQgvF6SlQYPf5yG69B0dLcPnczMuRmOPmdYxVArwIMXrLaQPzRPzeqKG4kslsrJe-vFDQD02EyNgic3Y_3KEFCDx5WlMHj-GS9IMXHcbr5K8pSvIWLGpCpH7sp3o8WCajXbprUwa2HmC7WzOMcfPUf1QXaG6pBdHCz39_3kr84cVHAOyg9PH5DGz7aYbse9vt3CfQJX5URIygU-uVDhmM29ByGfeDtzrl4WsATtd4unMFEBR-Ua4sKGhKjSQ3SZbizwo_hOcfZ8sQRj6F-Y04wDrx0iuG1jAiZfpSvQk9v5v88&amp;click=e89b7bf9-783a-438b-9d5f-ed24aa5db28f&amp;hsutk=87c014ad1b8ef7afaaf23068a42614b6&amp;signature=AAH58kH_Y5_d3N8MWOdCu--B-o5OVt-dPQ&amp;utm_referrer=https%3A%2F%2Fwww.cloudops.com%2Ffr%2Fcategory%2Fblogue%2Fpage%2F4%2F&amp;__hstc=52875767.87c014ad1b8ef7afaaf23068a42614b6.1588082535461.1590775246632.1590780275758.18&amp;__hssc=52875767.36.1590780275758&amp;__hsfp=2009260798&amp;contentType=blog-post" target="_blank" style="" cta_dest_link="https://info.cloudops.com/azure-kubernetes-services-la-securite-des-conteneurs-pour-un-monde-infonuagique" title="Téléchargez le livre">Téléchargez le livre</a></span><script charset="utf-8" src="https://js.hscta.net/cta/current.js"></script><script type="text/javascript">hbspt.cta.load(732832, '1e2208b8-99d7-4ecd-ac6f-83ccc1f262ed', {});</script></span><!-- end HubSpot Call-to-Action Code --></p>