---
title: "Cloud Native Meetup: K8s 1.9 Update, Lyft’s Migration to Envoy, and Cilium Networking"
date: "2018-02-02"
author: "CloudOps"
description: CloudOps hosted an exciting event last night at the Centre cloud.ca in Montreal bringing in speakers from Seattle and Silicon Valley. 
resources:
- name: "thumbnail"
  src: "Cynthia.png"
class_name: "blog post"
aliases:
    - /2018/02/lyfts-migration-to-envoy-1-9-update-cilium-networking-meetup/
    - /lyfts-migration-to-envoy-1-9-update-cilium-networking-meetup/
keywords: [cloud native meetup, kubernetes meetup, cilium, kubernetes, envoy]
tags:
---

<p>CloudOps hosted an exciting event last night at the Centre cloud.ca in Montreal bringing in speakers from Seattle and Silicon Valley. The event included a 1.9 release update, and presentations on Lyft’s migration to Envoy, and Cilium Network Security. It was the first Kubernetes meetup of the year, and was the meetup that saw Kubernetes integrate into the broader Cloud Native Computing Foundation (CNCF) mission.</p>

<p>Our very own Ayrat Kharetdinov was announced as a CNCF ambassador to continue his work expanding the open source community in Canada. Having devoted the last two years to promoting the education of Kubernetes in Canada through workshops and meetups, Ayrat has demonstrated extensive experience in using and deploying Kubernetes.</p>

<p>Having been donated to the CNCF as a seed technology in 2015, Kubernetes has since taken off with the momentum deserving of an open source technology, and has changed the way we deploy and manage microservices. Now that it’s stabilized, other CNCF open source technologies need to be explored to truly expand upon the agility of microservices. By using Kubernetes alongside other CNCF projects, such as Envoy, Prometheus, Jaeger, OpenTracing, and now Rook, developers will gain access to open-source tooling that should drastically facilitate microservices development and observability, while avoid lock-in. Ayrat spoke about some of the exciting things we can expect from Kubernetes and integrated community projects, especially in light of the exciting features unveiled in the recent release of Kubernetes 1.9.</p>

<p>As the second speaker, Constance Caramanolis spoke about <a href="https://www.lyft.com/" target="_blank" rel="noopener noreferrer">Lyft</a>’s journey deploying <a href="https://www.envoyproxy.io/" target="_blank" rel="noopener noreferrer">Envoy</a> and next steps for integrating with Kubernetes. Envoy was implemented and deployed incrementally at Lyft. Now that Envoy is integrated across Lyft’s infrastructure, the team is working on adopting Kubernetes. One main challenge is maintaining routing in a hybrid world – services running on the existing infrastructure and on kubernetes. Using Envoys’ control plane API’s, there exists a path to update routing information with no change to application code.</p>

<p>Cynthia Thomas delved into the intricacies of the open source <a href="https://www.cilium.io/" target="_blank" rel="noopener noreferrer">Cilium</a> project, demonstrating a solution that addresses the challenge of exposing services via APIs by enforcing least privilege through application-aware security. Responding to the growing need for routing, load-balancing, and security infrastructure currently found in Kubernetes, Cilium uses BPF (Berkeley Packet Filter) in the Linux kernel, and contributes to Envoy as well. Cilium provides faster injection of Envoy and thus less latency, to work with Istio to build transparent infrastructure services with minimal overhead, with more details here.</p>

<p>Envoy and Cilium are examples of the potential that expanding the Kubernetes community can bring. As next generation security, Cilium provides the network security at the application layer, enforcing security for any communication between pods. Envoy brings visibility to microservices by using sidecar patterns to attach to pods transferring service communication in the data plane. Working alongside other CNCF projects, Envoy and Cilium offer the possibility of truly stepping into the agility promised by Kubernetes.</p>

<p>CloudOps is committed to spreading education about open source projects and growing the community. As Constance said, “the level of engagement in the Montreal community is impressive, there was a large turnout and the quality of the questions was good.” CloudOps is proud to help expand the CNCF community in Canada, in conjunction with our 2018 sponsors. Our gold sponsors include <a href="https://www.aquasec.com/ " target="_blank" rel="noopener noreferrer">Aqua</a>, <a href="https://www.microsoft.com/en-ca/" target="_blank" rel="noopener noreferrer">Microsoft</a>, and <a href="https://www.redhat.com/en" target="_blank" rel="noopener noreferrer">Red Hat</a>. Our silver sponsors are<a href="https://jfrog.com/" target="_blank" rel="noopener noreferrer">JFrog</a> and<a href="https://about.gitlab.com/" target="_blank" rel="noopener noreferrer">Gitlab</a>, and bronze includes the Cilium project.</p>

<p>If your organization would like to sponsor our Kubernetes and Cloud Native meetups, please reach out to us <a href="mailto:jsimon@cloudops.com" target="_blank" rel="noopener noreferrer">here</a> (they run in <a href="https://www.meetup.com/Kubernetes-Montreal/" target="_blank" rel="noopener noreferrer">Montreal</a>, <a href="https://www.meetup.com/Kubernetes-Toronto/" target="_blank" rel="noopener noreferrer">Toronto</a>, <a href="https://www.meetup.com/Kubernetes-Ottawa/" target="_blank" rel="noopener noreferrer">Ottawa</a>, <a href=" https://www.meetup.com/Kubernetes-Quebec/" target="_blank" rel="noopener noreferrer">Quebec City</a>, and <a href="https://www.meetup.com/Kubernetes-Kitchener-Waterloo/" target="_blank" rel="noopener noreferrer">Kitchener-Waterloo</a>).</p>

<h3><img style="width: 110px; float: left; margin: 5px 20px 20px 0;" class="size-full wp-image-749 alignleft" title="Ayrat Kharetdinov" src="/images/blog/post/Archie.jpg" alt="" width="110" height="110">Ayrat Kharetdinov</h3>

<p>Ayrat Kharetdinov is a Solutions Architect at CloudOps. Find him on Twitter @archyufa.</p>

<h3><img style="width: 110px; float: left; margin: 5px 20px 20px 0;" class="size-full wp-image-749 alignleft" title="Constance Caramanolis" src="/images/blog/post/Constance.jpg" alt="" width="110" height="110">Constance Caramanolis</h3>

<p>Constance Caramanolis is a Software Engineer at Lyft. Find her on Twitter @ccaramanolis.</p>

<h3><img style="width: 110px; float: left; margin: 5px 20px 20px 0;" class="size-full wp-image-749 alignleft" title="Cynthia Thomas" src="/images/blog/post/Cynthia-Thmas.jpg" alt="" width="110" height="110">Cynthia Thomas</h3>

<p>Cynthia Thomas is a Technology Evangelist at Covalent.io. Find her on Twitter @_techcet_.</p>

<div class="divider shortcode-divider"></div>