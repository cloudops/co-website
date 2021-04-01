---
title: "Comparing Service Meshes: Istio, Linkerd, Consul Connect, and Citrix ADC"
date: "2020-08-21"
author: "Syed Ahmed"
description: Service meshes help solve networking in microservice-based applications. Which one is best for your application?
resources:
- name: "thumbnail"
  src: "ServiceMeshThumbnail.png"
- name: "cover"
  src: "ServiceMeshCover.png"
class_name: "blog post"
aliases:
  - /2020/06/comparing-service-meshes-istio-linkerd-and-consul-connect-citrix-adc/
  - /comparing-service-meshes-istio-linkerd-and-consul-connect-citrix-adc/
keywords: [service mesh, istio, linkerd, consul connect, citrix adc, service mesh comparisons]
tags:
---

<p>Microservices have made applications more scalable, portable, and resilient. They enforce volatile and ephemeral environments that allow accelerated software delivery pipelines.&nbsp;</p>

<p>Their adoption has skyrocketed in the past few years, but their complexity can make their networking problematic. It can be difficult to establish trust between microservices. Canary deployments, the idea of rolling out releases to a subset of users or servers, can be complicated. Likewise, rollbacks, attribute-based routing, end-to-end encryption, metrics collection, and rate limiting can all be difficult. There are still challenges with microservices that must be ironed out.&nbsp;</p>

<p>Service meshes have become a solution. A service mesh is the substrate between different microservices that makes their connectivity possible. This networking is then supplemented with a host of other features, such as service discovery, authentication and authorization, monitoring, tracing, and traffic shaping. Service meshes can be a critical part of microservice-based architectures. There are many service meshes to choose from, including Istio, Linkerd, Consul Connect, and Citrix ADC.</p>

<h3>Istio</h3>
<p>Istio was open sourced by Google, IBM, and Lyft in May, 2017. Having been one of the earlier service meshes, it’s very rich in features. Istio is designed to connect, secure, and monitor microservices. Its features include automatic load balancing for HTTP, gRPC, WebSocket, and TCP traffic. It offers fine-grained control of traffic behaviour, offering rich routing rules, retries, failovers, and fault injection. Istio has a pluggable policy layer and configuration API that supports access controls, rate limits, and quotas. Automatic metrics, logs, and traces of all traffic within a cluster are provided, and this includes cluster ingresses and egresses. Istio has strong identity-based authentication and authorization policies. It enables secure service-to-service communication</p>

<img src="/images/blog/post/control-plane.jpg" alt="" width="456" height="257">
<p>Istio uses <strong>Envoy, </strong>a high-performing proxy developed in C++. Envoy proxies are deployed in the sidecar pattern, which prevents communication between microservices from altering the application code. Containers do not know when proxies have been attached to them, but receive visibility because of them. Envoy proxies provide dynamic service discovery, load balancing, TLS termination, HTTP/2 and gRPC proxies, circuit breakers, health checks, staged rollouts with %-based traffic split, fault injection, and rich metrics. Envoy <a href="https://www.cncf.io/announcement/2018/11/28/cncf-announces-envoy-graduation/">recently graduated as a CNCF project</a> and is continuing to evolve.</p>

<p>Istio’s control plane sits above the proxies and consists of three components. <strong>Pilot </strong>is the core component used for traffic management and configures all Envoy proxy instances. <strong>Mixer, </strong>a platform-independent component, enforces access control and usage policies across the service mesh. It also collects and analyzes telemetry reports. <strong>Citadel, </strong>which used to be called Istio-Auth, is the service mesh’s Certificate Authority and Policy enforcer. It provides service-to-service and end-user authentication with built-in identity and credential management. Citadel can be used to upgrade unencrypted traffic in the service mesh and enforce policies based on service identity rather than network controls.</p>

<p>There are a few more components that are an integral part of Istio. <strong>Gateway</strong>, its load balancer, operates at the edge of the service mesh and receives incoming and outgoing HTTP/TCP connections. <strong>VirtualServices </strong>define sets of traffic routing rules to apply when hosts are addressed. Each routing rule defines matching criteria for traffic of specific protocols that, when matched, are sent to a named destination service defined in the registry. <strong>DestinationRules </strong>define policies that apply to traffic intended for services that have already been routed by specifying configuration for load balancing, connection pool size, and outlier settings that detect and evict unhealthy hosts from the load balancing pool.</p>

<h3>Linkerd</h3>
<p>Linkerd began as a network proxy (v 1.0) for enabling service meshes. It merged with Conduit in September, 2018 to form <a href="https://www.cncf.io/blog/2018/09/18/linkerd-2-0-in-general-availability/">Linkerd 2.0, which was recently made generally available.</a> This version update transformed the project from a cluster-wide service mesh to a composable service sidecar. Linkerd is designed to be a lightweight service mesh that can be placed on top of any existing platform. It has very simple installation and CLI tools and doesn’t require a platform admin to be used. Linkerd doesn’t offer a rich array of features, but is simple. It is an easy service mesh that can be ideal for organizations that aren’t operating vast amounts of microservices and need to implement service meshes quickly and with minimal effort.</p>

<img src="/images/blog/post/linkerd-architecture.png" alt="" width="462" height="279">
<p>Linkerd’s <strong>proxy</strong> is small and lightweight and written in Rust. It is deployed in a sidecar pattern and can do end-to-end encryption and automatic proxy injection but lacks complex routing and tracing capabilities.Within the control plane, the <strong>Controller </strong>consists of multiple containers (including public-api, proxy-api, destination, tap) that provide most functionalities. The <strong>Web Deployment </strong>is the dashboard. Linkerd uses <strong>Prometheus, </strong>to expose and store metrics. A Prometheus instance has been configured to work specifically with data generated and deployed within the Linkerd service mesh. The <strong>Grafana </strong>dashboard renders and displays dashboards that can be reached from the Linkerd dashboard itself.</p>

<p>To install, inject, and inspect Linkerd’s service mesh, use the commands below:</p>
<img src="/images/blog/post/insta--pre.png" alt="" width="374" height="329">

<h3>Consul Connect</h3>
<p>Consul Connect provides secure service-to-service communication with automatic TLS encryption and identity-based authorization. It emphasises service discovery and service identity management. Like Istio, it uses the <strong>Envoy </strong>proxy and the sidecar pattern.&nbsp;</p>

<p>Consul Connect is an extension of Consul, a highly available and distributed service discovery and KV store. Consul Connect adds service mesh capabilities and was created in July, 2018 by HashiCorp. As an extension of Consul, Consul Connect can synchronize Kubernetes and Consul services. Likewise, Consul Connect offers integrations with Vault for certificate and secret management, further extending the service discovery provided by Consul.&nbsp;</p>

<p>Consul Connect has interesting and unique capabilities when implementing multi-cluster workloads or when working with a heterogeneous infrastructure.&nbsp; Connect is able to replicate intentions, a security policy implementation, between different clusters in order federate trust and ensure the persistence of the security model.&nbsp; These features are especially useful when workloads span multiple kubernetes clusters, or when building DR and failover scenarios.</p>

<h3>Citrix ADC</h3>
<p>Citrix ADC (application delivery controller) is more of a load balancer than a service, and there are many versions suited to different types of applications. Citrix ADC CPX is a load balancer that can be provisioned on Docker hosts and is ideal for containerized applications. It enables customers to use NetScaler load balancing and traffic management features, while also allowing integration and automation with Istio and Consul. As a VPX or a MPX, it can be deployed as an SSL accelerator in a North-South scenario and may replace a proxy or a sidecar in an East-West deployment scenario.&nbsp;</p>

<img src="/images/blog/post/citrixadc.png" alt="" width="464" height="288">

<p>Citrix ADC offers content-based routing and allows or blocks traffic based on HTTP and HTTPS header parameters. It offers advanced load balancing algorithms, like least connections and least response time, and allows observability of east-west traffic through measuring golden signals (errors, latencies, saturation, traffic volume).&nbsp;</p>

<img src="/images/blog/post/diagramcitrix.png" alt="" width="525" height="384">

<p>Istio, Linkerd, Consul Connect, and Citrix ADC each have their benefits that may or may not match your technology stack’s requirements. Istio is the most advanced service mesh available, but can be complex and difficult to manage and scale. In contrast, Linkerd offers a straightforward service mesh that is easier to implement and operate but offers less flexibility. Consul Connect provides integrations with other HashiCorp solutions, notably Consul and Vault while Citrix ADC offers rich load balancing features and can handle heavy infrastructure networking traffic and offer scalable SSL offload for public traffic.&nbsp;</p>

<p>To learn more about implementing service mesh solutions as part of a wider DevOps practice, sign up for one our <a href="https://www.cloudops.com/workshops/">DevOps workshops</a>. They can be taken in person or online and cover a wide variety of topics. For example, our hands-on, 3-day Docker and Kubernetes workshops include labs and will teach you everything needed to get containers started in production.</p>