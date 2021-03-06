---
title: "Cloud Native Meetup: K8s 1.10 Update, K8s Image Admittance, Rancher 2.0 Cluster Management, KubeVirt, Stateful Sets, Rook & Jaeger"
date: "2018-05-19"
author: "CloudOps"
description: In the wake of the recent KubeCon, we held an exciting series of Q2 cloud native meetups in Montreal, Kitchener-Waterloo, Ottawa, Toronto, and Quebec City.
resources:
- name: "thumbnail"
  src: "Kitchenerfinal.png"
class_name: "blog post"
aliases:
    - /2018/05/q2-cloud-native-meetups/
    - /q2-cloud-native-meetups/
keywords: [cloud native meetup, kubernetes meetup, meetup canada, meetup montreal, rancher, kubernetes]
tags:
---

<p>In the wake of the recent KubeCon, we held an exciting series of Q2 cloud native meetups in Montreal, Kitchener-Waterloo, Ottawa, Toronto, and Quebec City. Featuring a range of topics, we enjoyed discussing all things cloud native with the community.</p>

<p>Each meetup started with a 1.10 update of KubeCon by our very own Mike Wojcikiewicz and our CNCF ambassador, Ayrat Kharetdninov. Their update covered the most relevant keynotes, CNCF projects to overview, and some of our recent activities. Notably, Kubernetes has reached Graduation phase, and the cloud native ecosystem continues to grow as more projects, such as Spiffe, Spire, OPA and NATS are adopted by the CNCF. There was a lot of buzz around Istio, service meshes, and serverless. Following the update, presenters considered some key questions in the industry.</p>

<p><img class="alignright" style="width: 50%; width: 50%; float: right; margin: 5px 20px 20px 0;" src="/images/blog/post/montreal.png" alt="Montreal"></p>

<p>Ali Naqvi and Richard Gold from <a href="https://www.aquasec.com/wiki" target="_blank" rel="noopener noreferrer">Aqua Security</a> joined us in Montreal, Ottawa, Toronto, and Quebec. Their <a href="https://speakerdeck.com/archyufa/2018-ottawa-q2-cncf-meetup-key-considerations-for-image-admittance-within-k8s" target="_blank" rel="noopener noreferrer">presentation</a> discussed best practices for managing image admittance within a Kubernetes environment. The takeaway: security must be applied throughout the entire CI/CD development process. Use approved base images, scan images, and block vulnerabilities when building. For shipping, use private registry and deny the deployment of unknown images. During runtime, apply RBAC, security context, PSP, and network policy to protect your containers from attacks and unauthorized access. They also outlined a number of open source tools. In particular, <a href="https://github.com/aquasecurity/microscanner" target="_blank" rel="noopener noreferrer">Microscanner</a> scans container images for package vulnerabilities, and <a href="https://github.com/aquasecurity/kube-bench" target="_blank" rel="noopener noreferrer">Kubebench</a> runs the checks documented in the <a href="https://www.cisecurity.org/cis-benchmarks/" target="_blank" rel="noopener noreferrer">CIS Kubernetes Benchmark</a>. Finally, Ali and Richard demonstrated a product developed by Aqua that helps provide enterprises with advanced security policy management and Kubernetes best practices.</p>

<p><img class="alignleft" style="width: 50%; width: 50%; float: left; margin: 5px 20px 20px 0;" src="/images/blog/post/ottawa.png" alt="Ottawa"></p>

<p>Ryan Holt from Rancher Labs delighted the audiences in Montreal, Ottawa, and Toronto with a live demo of unified cluster management. Rancher 2.0 is now GA and can be an ideal platform to use for your application. It has the ability to manage Kubernetes clusters implemented by any distro and on any cloud. Ryan discussed how it can allow you to deploy a Kubernetes cluster using Rancher UI as well as import Kubernetes clusters that are already deployed, whether on GKE, AKS, or a DIY cluster. It also provides a single pane glass view that provides visibility on all clusters. Rancher 2.0 also provides more integration.</p>

<p>In Toronto, Stephen Gordon exhibited Kubevirt, which can be used to create a unified platform for building, modifying, and deploying applications in both containers and VMs in a shared environment. Kubevirt allows you to add VMs to your Kubernetes workload. Check out his presentation <a href="https://www.slideshare.net/gravityforall/unified-cluster-management-with-rancher-20" target="_blank" rel="noopener noreferrer">here</a>.</p>

<p><img class="alignright" style="width: 50%; width: 50%; float: right; margin: 5px 20px 20px 0;" src="/images/blog/post/toronto.png" alt="Toronto"></p>

<p>Christopher Vollick from Shopify showed the Kitchener-Waterloo crowd how to run Kafka, Elasticsearch, and Zookeeper using Stateful Sets. Containers are, by nature, stateless. His <a href="https://github.com/psycotica0-shopify/k8s-stateful-demo" target="_blank" rel="noopener noreferrer">presentation</a> discussed how these technologies can be useful in solving the problem of deploying stateful applications into container orchestration stacks.</p>

<p>Ottawa was lucky to learn about <a href="https://speakerdeck.com/archyufa/2018-ottawa-q2-cncf-meetup-using-rook-for-pv-in-k8s" target="_blank" rel="noopener noreferrer">Rook</a>. Raymond Maika from CENGN spoke about its potential for integrating cloud native storage into a Kubernetes infrastructure. He discussed how the Rook Operator tool can be used to create a Ceph storage cluster on a Kubernetes infrastructure, and how Prometheus can then provide solution monitoring. Rook’s persistent volumes can showcase speed results.</p>

<p><img class="alignleft" style="width: 50%; float: left; margin: 5px 20px 20px 0;" src="/images/blog/post/quebc.png" alt="Quebec"></p>

<p>Finally, Louis-Etienne Dorval from Ticketmaster was in Quebec to provide introductory information on OpenTracing and Jaeger, and how they can be used together to effectively implement distributed tracing into your application.</p>

<p>Overall, we were happy to see how much community involvement has grown. We would like to thank all attendees and speakers. In particular, Rancher and Aqua Security are supportive, annual sponsors of our meetups. They always provide relevant content and discuss open source components of their products. Additionally, we would like to thank Desjardins for providing incredible venues and support in Montreal, Shopify in Kitchener-Waterloo and Ottawa, Wattpad in Toronto, and Ticketmaster in Quebec. Keep your eyes and ears open for the Q3 cloud native meetups. Join the meetup pages for <a href="https://www.meetup.com/Kubernetes-Montreal" target="_blank" rel="noopener noreferrer">Montreal</a>, <a href="https://www.meetup.com/Kubernetes-Ottawa" target="_blank" rel="noopener noreferrer">Ottawa</a>, <a href="https://www.meetup.com/Kubernetes-Toronto" target="_blank" rel="noopener noreferrer">Toronto</a>, <a href="https://www.meetup.com/Kubernetes-Quebec" target="_blank" rel="noopener noreferrer">Quebec</a>, and <a href="https://www.meetup.com/Kubernetes-Kitchener-Waterloo" target="_blank" rel="noopener noreferrer">Kitchener-Waterloo</a> to stay tuned.</p>