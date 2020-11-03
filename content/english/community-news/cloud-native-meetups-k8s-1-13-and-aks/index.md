---
title: "Cloud Native Meetups: K8s 1.13 and AKS"
lastmod: "2018-12-08"
author: "CloudOps"
description: In preparation for the upcoming KubeCon and CloudNativeCon in Seattle, a wide range of open source solutions were discussed and, as always, beer and pizza provided.
resources:
- name: "thumbnail"
  src: "AyratMeetup-1.jpg"
class_name: "blog post"
aliases:
    - /2018/12/cloud-native-meetups-k8s-1-13-and-aks/
    - /cloud-native-meetups-k8s-1-13-and-aks/
---


<p>This year’s final set of Kubernetes and Cloud Native meetups just took place. They kicked off in Kitchener-Waterloo on November 29<sup>th</sup>, and continued in Montreal December 3<sup>rd</sup>, Ottawa December 4<sup>th</sup>, Toronto December 5<sup>th</sup>, and Quebec December 6<sup>th</sup>. In preparation for the upcoming KubeCon and CloudNativeCon in Seattle, a wide range of open source solutions were discussed and, as always, beer and pizza provided.</p>

<p>The meetups in Montreal, Ottawa, Toronto, and Quebec began with an update of the <a href="https://www.cloudops.com/2018/10/the-beginners-guide-to-the-cncf-landscape/">CNCF landscape by Ayrat Khayretdinov</a>, CNCF Ambassador and Cloud Solutions Architect at CloudOps. In Kitchener-Waterloo, it was given by Michael Wojcikiewicz, Container Solutions Architect at CloudOps.</p>

<p>Version 1.13 of Kubernetes was recently announced, and there are new features as well as improvements to existing ones. Version 1.12 already showed improvements to TLS Bootstrapping and TLS Server Certification Rotation. This has benefitted Kubeadm, Kops, and other deployment tools. Pods also now have the option to define different runtime classes and can run different containers, including docker, containerd, and gvisor. Sig-Networking’s Network Policy function has graduated, and this includes Egress policies and IpBlock parameters. Importantly, version 1.13, the shortest release of 2018, announced the graduation of Kubeadm. Kubeadm’s cluster Bootstrap tooling automation, developed by the Kubernetes community, can now deploye etcd clusters, high availability clusters, and upgrade minor Kubernetes releases.</p>

<p>Other cloud native projects have also made some exciting advancements. Envoy, the edge proxy has also been moved from the Incubation phase to the Graduation phase, joining Kubernetes and Prometheus. Harbor, the trusted container registry, has been moved from the Sandbox phase to the Incubation phase. The slides of Ayrat and Michael’s update of the cloud native landscape can be viewed <a href="https://www.slideshare.net/CloudOps2005/kubernetes-and-cloud-native-update-q4-2018">here</a>.</p>

<div class="wp-block-image"><img style="float: right; margin: 5px 0 20px 20px; width: 50%;" src="/images/blog/post/Kitchener-WaterlooMeetup.png" alt=""></div>

<p>In Kitchener-Waterloo, the meetup continued with a lightning talk by Charlie Drage, Software Engineer at Red Hat. Charlie is an active Kubernetes maintainer, and he discussed how the open source solution can be deployed on bare metal servers. He covered some of his contributions, including fixing some common issues with bare metal servers and using Ansible to build clusters with Kubeadm. His slides can be viewed&nbsp;<a href="https://www.slideshare.net/CloudOps2005/kubernetes-on-bare-metal-at-the-kitchenerwaterloo-kubernetes-and-cloud-native-meetup">here</a>. This presentation was followed by an AMA session, where the audience was invited to ask Michael Wojcikiewicz and Christopher Vollock any questions concerning containers and virtualization they might have. The dialogue was helpful for both beginners and those troubleshooting their own projects. &nbsp;</p>

<p>The meetup in Montreal began with a presentation by Vincent-Philippe Lauzon, who is a Microsoft Azure Cloud Solution Architect. He presented Azure Kubernetes Service (AKS), which offers a simplified process for installing and managing Kubernetes clusters on Azure. Vincent-Philippe spoke about how Azure Networking can enable Kubernetes volumes with the help of Azure’s Storage integration and CNI. After, Anthony Dahanne, Software Engineer at Terracotta/Software AG analysed his attempt to write an Operator in Java using a software he is currently working on. His slides can be viewed <a href="https://fr.slideshare.net/anthonydahanne/kubernetes-java-operator">here</a>.</p>

<p>In Ottawa, Marc-Andre Poitras, Cloud Solution Architect at Azure, reviewed some features of AKS with the community. AKS can allow dev and ops to focus on developing Cloud Native apps with Docker and Kubernetes as part of a DevOps practice. Helm and Virtual-Kubelet were also mentioned as open source projects. Stephen Gordon, Principal Product Manager at Red Hat, presented use cases of the KubeVirt project, which is building a virtualization API for Kubernetes. This will make it easier to manage VMs being run inside Kubernetes pods. Katacontainers, a different but complementary project, was also discussed. His slides can be viewed <a href="https://www.slideshare.net/sgordon2/introducing-kubevirt">here</a>.</p>

<div class="wp-block-image"><img style="float: right; margin: 5px 0 20px 20px; width: 50%;" src="/images/blog/post/TorontoMeetup.png" alt=""></div>

<p>The Toronto community learned about Knative, a new open source project that provides a set of components that extend Kubernetes. Nader Ziada and Shash Reddy are both regular contributors to the project contributors to the project. They spoke about its three major parts: serving, building, and eventing. Raymond Kao, Open Source Data Solutions Lead and Azure Global Black Belt, then spoke presented ‘Cross Environment Service Discovery Made Easy with Consul/Consul Connect.’ His talk reflected on how applications that can’t be moved to Kubernetes can still take of advantage of Kubernetes-like service discovery and service mesh benefits, such as security with HashiCorp’s Consul/Consul Connect that run services inside Kubernetes clusters managed with AKS that are themselves inside VM clusters.</p>

<p>In Quebec, Alexandre Picard-Lemieux, Software Developer at Ticketmaster, discussed how Thanos can provide Prometheus with long-term storage. His slides can be viewed <a href="https://www.slideshare.net/CloudOps2005/prometheus-and-thanos">here</a>. Mathieu Benoit, Cloud Solutions Architect at Microsoft, demonstrated certain features of AKS that allow them to build Cloud Native applications with Docker and Kubernetes. His slides can be viewed <a href="https://mabenoit.blob.core.windows.net/public/AKS%20%2B%20VirtualKubelet%20-%20Mathieu%20Benoit.pdf">here</a>.</p>

<div class="wp-block-image"><img style="float: right; margin: 5px 0 20px 20px; width: 50%;" src="/images/blog/post/MontrealAKSMeetup.png" alt=""></div>

<p>The meetup in Montreal was the largest meetup to date. As always, we’re happy to see the cloud native community continuing to grow in Canada and would like to thank all attendees and speakers. Thank you Shopify for having hosted the meetups in Kitchener-Waterloo, Montreal, and Ottawa, Pivotal for having hosted in Toronto, and Microsoft for having hosted in Quebec. Thank you Red Hat, Microsoft Aqua, Shopify, JFrog, GitLab, Rancher, and Cilium for having made the meetups possible through your sponsorships.</p>

<div class="wp-block-image"><img style="float: right; margin: 5px 0 20px 20px; width: 50%;" src="/images/blog/post/MeetupSponsors.png" alt=""></div>

<p>Join the <a href="http://k8scanadaslack.herokuapp.com/">Kubernetes Canada Slack Channel</a> to stay up to date with community news and events. Be a part of your local Kubernetes and Cloud Native community and hear about upcoming meetups in <a href="https://www.meetup.com/Kubernetes-Montreal">Montreal</a>, <a href="https://www.meetup.com/Kubernetes-Ottawa">Ottawa</a>, <a href="https://www.meetup.com/Kubernetes-Toronto">Toronto</a>, <a href="https://www.meetup.com/Kubernetes-Quebec">Quebec</a>, and <a href="https://www.meetup.com/Kubernetes-Kitchener-Waterloo">Kitchener-Waterloo</a>. <a href="mailto: ctrang@cloudops.com">Contact us </a>if you’re interested in speaking at or sponsoring a future meetup, or if you have any queries.</p>

<p>To learn more about Docker, Kubernetes, and related Cloud Native technologies, sign up for a <a href="https://www.cloudops.com/workshop-calendar/">workshop</a>. CloudOps offers beginners and advanced workshops on Docker and Kubernetes as well as a wide variety of DevOps and Infrastructure workshops.</p>