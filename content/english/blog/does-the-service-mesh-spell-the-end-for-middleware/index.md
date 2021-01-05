---
title: "Does the Service Mesh spell the end for Middleware?"
date: "2018-09-24"
author: "Flo Adam"
description: Middleware is as Istio and other service meshes are adopted. Could middleware become irrelevant in today’s container-focused world?
resources:
- name: "thumbnail"
  src: "Middleware-thumbnail.png"
- name: "cover"
  src: "Middleware-cover.png"
class_name: "blog post"
aliases:
  - /2018/09/does-the-service-mesh-spell-the-end-for-middleware/
  - /does-the-service-mesh-spell-the-end-for-middleware/
keywords: [service mesh, middleware]
tags:
---

<p>Middleware is perhaps fading away in the place of the service mesh as Istio and related technologies continue to garner momentum. They both oversee communication between various applications and services, but can differ substantially in operations as well as paradigms. Prominent in service-oriented architectures, could middleware become irrelevant in today’s container-focused world?</p>

<p><b>Middleware</b></p>

<p><span style="font-weight: 400;">Often called “software glue”, </span><a href="https://searchmicroservices.techtarget.com/definition/middleware"><span style="font-weight: 400;">middleware</span></a><span style="font-weight: 400;"> brings an application and its underlying databases together. It connects a client’s network-generated requests to back-end data, enabling communication by concentrating all messaging in one pipeline. Middleware orchestrates key functions within this pipeline including security validation, logging, routing, performance monitoring, and message transformation. It has traditionally orchestrated communication within service-oriented architectures (</span><a href="https://searchmicroservices.techtarget.com/definition/service-oriented-architecture-SOA"><span style="font-weight: 400;">SOAs</span></a><span style="font-weight: 400;">), which consist of reusable components and can be monolithic.</span></p>

<p><img class="alignright" style="float: right; margin: 5px 20px 20px 0; width: 50%;" src="/images/blog/post/diagram2middleware.png" alt="Service Mesh" width="60%"></p>

<p><span style="font-weight: 400;">Middleware works by flying messages from various applications into centralized pools of communication. These messages are then carried through a pipeline of functions, ending with the user registry service. Messages are transported on enterprise service buses (ESBs). Communication converges so as to hide both the multiplicity of distributed applications as well as the heterogeneity of hardware and operating systems. </span></p>

<p><span style="font-weight: 400;">As organizations continue to embrace containers, a few problems become obvious with traditional middleware. DevOps practices encourage modern environments that rely on distributed systems and the rapid, automated deployment of immutable instances. The continuous integration and delivery (CI/CD) of containers mandate constantly updating applications and toolings. ESBs are not always great for this.</span></p>

<p><i><span style="font-weight: 400;">Single-points-of-failure – </span></i><span style="font-weight: 400;">Middleware logs and monitors messages at the service log level in one massive, centralized log of all services. It applies certain functions, especially logging and performance monitoring, universally to all messages. Messages are queued, and any breakdown could create traffic jams within a pipeline. Discovering single problems can involve sifting through potentially thousands of unrelated errors. Middleware enables communication by turning the service log into a single-point-of-failure within which small problems can disrupt all other communication.</span></p>

<p><i><span style="font-weight: 400;">Monolithic – </span></i><span style="font-weight: 400;">While SOAs consist of loosely-coupled, reusable components, middleware’s uniform pipelines are difficult to adapt. The functions that middleware orchestrates are closely integrated both with themselves and their surrounding applications. Small changes in the UI can even require re-evaluating an entire application. Middleware is effective because it provides a common means of communication, but this requires imperative programming that creates isolated networks. </span></p>

<p><span style="font-weight: 400;">Containers and virtualization have greatly increased the number of instances deployed within an application. This increases the risk of congestion within single-points-of-failure and requires more dynamic change. Service mesh solutions, such as Istio, Ambassador, and Envoy, are increasingly being seen as alternatives. </span></p>

<p><b>Service Meshes</b></p>

<p><span style="font-weight: 400;">A </span><a href="https://containerjournal.com/2018/07/27/introducing-a-security-mesh-to-protect-kubernetes/"><span style="font-weight: 400;">service mesh</span></a><span style="font-weight: 400;"> is a dedicated network layer that sits above the service layer and enables service-to-service communication. Its communication channels rely on distributed APIs instead of centralized and discrete appliances.</span></p>

<p><img style="float: right; margin: 5px 20px 20px 0;  width: 50%;" class="alignright" src="/images/blog/post/diagram1middleware.png" alt="Middleware" width="60%"></p>

<p><span style="font-weight: 400;">Messages are transported within the service mesh, but the messaging functions are performed alongside the services receiving the messages. Each instance is attached to a proxy that relays messages to and fro the service mesh. These proxies then perform many functions traditionally performed by middleware such as message routing and blocking, service discovery, load balancing, encryption, authentication, and authorization. They additionally support features such as discovery, failure handling, routing, circuit-breaking, and request tracing. </span></p>

<p style="text-align: left;"><span style="font-weight: 400;">Service meshes allow messages to be sent directly from service to service instead of through intermediary pipelines. This makes an application’s messaging as coupled as its services, which are loosely coupled in the case of most containerized applications. Their distributed nature alleviates the dependence on single-points-of-failure and facilitates dynamic change.</span></p>

<p style="text-align: left;"><i><span style="font-weight: 400;">Containers – </span></i><span style="font-weight: 400;">Service meshes are in many ways ideally suited for containers. They are platform-independent and can be integrated into any container-based architecture. Their removal of single-points-of-failure permits rapid recovery from network or service failures. By distributing messaging, they facilitate the scalability and declarative programming of containers. Service meshes</span><a href="https://devcentral.f5.com/articles/how-containers-scale-service-mesh-versus-traditional-architecture-27705"><span style="font-weight: 400;"> support the highly volatile environments in which containers seem to thrive.</span></a><span style="font-weight: 400;"> For those reasons, tools such as Istio are increasingly being used to bring much of the decision-making, computing power of middleware into the fold of Kubernetes and container-based systems.</span></p>

<p><a href="https://www.cloudops.com/tag/istio/"><i><span style="font-weight: 400;">Istio</span></i></a><i><span style="font-weight: 400;"> is a solution that can provide operational control over and behavioural insight into a service mesh. It is built to use the Envoy proxy. ELK, Kibana, and EFK can provide visibility and monitorability to Istio.</span></i></p>

<p><b>The end of middleware?</b></p>

<p>As service meshes continue to be adopted, they are developing quickly. Istio 1.0 was released recently, signalling that service meshes are becoming more stable and secure. Envoy is already under the umbrella of the Cloud Native Computing Foundation (<a href="https://www.cncf.io/" target="_blank" rel="noopener noreferrer">CNCF</a>), and there are plans for Istio to join. Service mesh solutions are growing into a thriving cloud native ecosystem and being used in cloud native applications.</p>

<p><span style="font-weight: 400;">However, there are certain use cases that benefit from the stability and security offered by middleware. Middleware has been around for decades, and more people know how to operate it than do service meshes. Additionally, there are long-standing, proven measures for ensuring middleware security and complying with regulations, such as HIPAA, PIPEDA, and PCI DSS. </span></p>

<p><a href="http://blog.christianposta.com/how-a-service-mesh-can-help-with-microservices-security/"><span style="font-weight: 400;">Service meshes are quickly becoming more secure</span></a><span style="font-weight: 400;">, but container security requires different thinking than VM security. Amongst other things, it depends on integrating operational processes into the development phase. When implemented throughout a technology stack, such DevOps practices encourage the security, agility, and long-term innovation of an application. Cloud native toolings are successfully leveraged when implemented both alongside each other and within DevOps methodologies and processes.</span></p>

<p><span style="font-weight: 400;">Organizations will have to re-evaluate their organizational processes and methodologies if they hope to retire some of their middleware in favour of service meshes. While service meshes help support communication between many containers, middleware can be ideal for transporting information between monolithic applications. They are built within different paradigms, and organizations may have to uproot the ways their application and infrastructure are built and supported to make changes. </span></p>

<p>An organization cannot retire parts of its legacy middleware until a framework of DevOps toolings and practices is put in place. This will promote dynamic collaboration between a stack’s Infrastructure as Code, services, security, monitoring, and CI/CD pipeline. An application’s middleware or service mesh must reflect the components it enables communication between.</p>

<h3><img class="alignleft" title="Flo Adam" src="/images/blog/post/FloAdams.jpg" alt="Flo Adam" width="150">Flo Adam</h3><p>Flo Adam is a Senior Cloud Developer at CloudOps. After a decade engineering enterprise grade middleware on Linux platforms, Flo is now focusing on cloud-based computing. She is particularly interested in the challenges that engineering teams face as they migrate workloads into the cloud.</p>

<div class="row">
    <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12 col-xs-12 cta-image">
    <a href="/resources/white-papers/how-to-initiate-devops-transformation-by-assessing-culture-and-processes/">
      <img src="/images/blog/cta/white-paper.jpeg">
    </a>
    </div>
</div>