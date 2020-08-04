---
title: "Comparing Service Meshes: Istio, Linkerd and Consul Connect"
lastmod: "2019-03-28"
author: "CloudOps"
resources:
- name: "thumbnail"
  src: "ComparingServiceMesh.jpg"
class_name: "blog post"
aliases:
  - /2020/06/comparing-service-meshes-istio-linkerd-and-consul-connect/
  - /comparing-service-meshes-istio-linkerd-and-consul-connect/
---

<p>The use of microservice-based architectures has skyrocketed in the past few years, highlighting their ability to make applications more scalable, portable, and resilient than their monolithic predecessors. But the volatile and ephemeral environments that microservices encourage can make networking inherently problematic.</p>

<p>It can be difficult to establish trust between microservices, slowing down operations. Canary deployments, the idea of rolling out releases to a subset of users or servers, can be complicated. Likewise, rollbacks, attribute-based routing, end-to-end encryption, metrics collection, and rate limiting can all be difficult. There are still challenges with microservices that must be ironed out. These are operations that application developers don’t want to think about but still depend on.</p>

<p>Service meshes have arisen as the solution to the networking problems that microservices present. A service mesh is the substrate between different microservices that makes their connectivity possible. This networking is then supplemented with a host of other features, such as service discovery, authentication and authorization, monitoring, tracing, and traffic shaping. Service meshes can be a critical part of microservice-based architectures, and their ecosystem is growing and thriving as a result.</p>

<p>I presented ‘A Comparison of Service Mesh Options’ at the recent North American <a href="https://events.linuxfoundation.org/events/osn_days_2018/?utm_content=78780211&amp;utm_medium=social&amp;utm_source=linkedin">Open Source Networking Days</a> that took place on October 31st, 2018 in Ottawa. I focused on Istio, Linkerd, and Consul Connect, three service meshes that I believe are among the most interesting. This blog post is based on that discussion.</p>

<p><strong>Istio</strong></p>

<p>Istio was open sourced by Google, IBM, and Lyft in May, 2017. Having been one of the earlier service meshes, it’s very rich in features. Istio is designed to connect, secure, and monitor microservices. Its features include automatic load balancing for HTTP, gRPC, WebSocket, and TCP traffic. It offers fine-grained control of traffic behaviour, offering rich routing rules, retries, failovers, and fault injection. Istio has a pluggable policy layer and configuration API that supports access controls, rate limits, and quotas. Automatic metrics, logs, and traces of all traffic within a cluster are provided, and this includes cluster ingresses and egresses. Istio has strong identity-based authentication and authorization policies. It enables secure service-to-service communication</p>

<figure class="wp-block-image"><img src="https://lh4.googleusercontent.com/lgf8864y3CWcXV-E1fROnEi553v1cbVoJTPLDGfnK0-HaMF_qcIp3Ff9M4qrMcYOs-Dp8nxYlWkzfLf6fPCb9gc2CaIMlCHTVLzY1oghfTYNHa5ukppkdo2qzLkdsHDYJjps1YDX" alt=""></figure>

<p>Istio uses <strong>Envoy, </strong>a high-performing proxy developed in C++. Envoy proxies are deployed in the sidecar pattern, which prevents communication between microservices from altering the application code. Containers do not know when proxies have been attached to them, but receive visibility because of them. Envoy proxies provide dynamic service discovery, load balancing, TLS termination, HTTP/2 and gRPC proxies, circuit breakers, health checks, staged rollouts with %-based traffic split, fault injection, and rich metrics. Envoy has graduated as a CNCF project and will continue to evolve.</p>

<p>Istio’s control plane sits above the proxies and is comprised of three components. <strong>Pilot </strong>is the core component used for traffic management and configures all Envoy proxy instances. <strong>Mixer, </strong>a platform-independent component, enforces access control and usage policies across the service mesh. It also collects and analyzes telemetry reports. <strong>Citadel, </strong>which used to be called Istio-Auth, is the service mesh’s Certificate Authority and Policy enforcer. It provides service-to-service and end-user authentication with built-in identity and credential management. Citadel can be used to upgrade unencrypted traffic in the service mesh and enforce policies based on service identity rather than network controls.</p>

<p>There are a few more components that are an integral part of Istio. <strong>Gateway</strong>, its load balancer, operates at the edge of the service mesh and receives incoming and outgoing HTTP/TCP connections. <strong>VirtualServices </strong>define sets of traffic routing rules to apply when hosts are addressed. Each routing rule defines matching criteria for traffic of specific protocols that, when matched, are sent to a named destination service defined in the registry. <strong>DestinationRules </strong>define policies that apply to traffic intended for services that have already been routed by specifying configuration for load balancing, connection pool size, and outlier settings that detect and evict unhealthy hosts from the load balancing pool.</p>

<p><strong>Linkerd</strong></p>

<p>Linkerd began as a network proxy (v 1.0) for enabling service meshes. It merged with Conduit in September, 2018 to form <a href="https://www.cncf.io/blog/2018/09/18/linkerd-2-0-in-general-availability/">Linkerd 2.0, which was recently made generally available.</a> This version update transformed the project from a cluster-wide service mesh to a composable service sidecar. Linkerd is designed to be a lightweight service mesh that can be placed on top of any existing platform. It has very simple installation and CLI tools and doesn’t require a platform admin to be used. Linkerd doesn’t offer a rich array of features, but is simple. It is an easy service mesh that can be ideal for organizations that aren’t operating vast amounts of microservices and need to implement service meshes quickly and with minimal effort.</p>

<figure class="wp-block-image"><img src="https://lh3.googleusercontent.com/MTqv5KxffTNiSzDQEyMp7PAGqXvhOhQiuwZRCtsPmJs9wvk7CiN3Ez1e8kr8ZKVC5cojS7oueZaJSncXy5oiHQ29qY-k5SY_5S5Lju47s3Qxi4iGaCi5QqTeidqPE_YD9k5dDQG7" alt=""></figure>

<p>Linkerd’s <strong>proxy</strong> is small and lightweight and written in Rust. It is deployed in a sidecar pattern and can do end-to-end encryption and automatic proxy injection but lacks complex routing and tracing capabilities.<strong> </strong>Within the control plane, the <strong>Controller </strong>consists of multiple containers (including public-api, proxy-api, destination, tap) that provide most functionalities. The <strong>Web Deployment </strong>is the dashboard. Linkerd uses <strong>Prometheus, </strong>to expose and store metrics. A Prometheus instance has been configured to work specifically with data generated and deployed within the Linkerd service mesh. The <strong>Grafana </strong>dashboard renders and displays dashboards that can be reached from the Linkerd dashboard itself.</p>

<p>To install, inject, and inspect Linkerd’s service mesh, use the commands below:</p>

<figure class="wp-block-image"><img src="https://lh6.googleusercontent.com/TLS8xSslkQJYmtVmtzRGMRFkrV3sOBaQW3EhVMJ9Ax7b1DonDfnNuU4ksNTisGBTvkQ92PzwnJOzwunMTTBXBpizbbxctg07bGdu_mjrRJA2uEBoKFqaRoI3vuu5HeNht0Zk8IJh" alt=""></figure>

<p><strong>Consul Connect</strong></p>
<p>Consul Connect provides secure service-to-service communication with automatic TLS encryption and identity-based authorization. It emphasises service discovery and service identity management. Like Istio, it uses the <strong>Envoy </strong>proxy and the sidecar pattern.</p>
<p>Consul Connect is an extension of Consul, a highly available and distributed service discovery and KV store. Consul Connect adds service mesh capabilities and was created in July, 2018 by HashiCorp. As an extension of Consul, Consul Connect can synchronize Kubernetes and Consul services. Likewise, Consul Connect offers integrations with Vault for certificate and secret management, further extending the service discovery provided by Consul.</p>
<p>Consul Connect has interesting and unique capabilities when implementing multi-cluster workloads or when working with a heterogeneous infrastructure. &nbsp;Connect is able to replicate intentions, a security policy implementation, between different clusters in order federate trust and ensure the persistence of the security model. &nbsp;These features are especially useful when workloads span multiple kubernetes clusters, or when building DR and failover scenarios.</p>
<p>To learn more about implementing service mesh solutions as part of a wider DevOps practice, sign up for one our <a href="https://www.cloudops.com/workshops/">DevOps workshops</a>. They can be taken in person or online and cover a wide variety of topics.</p>
<p>Istio, Linkerd, and Consul Connect all have their benefits that may or may not match your technology stack’s requirements. Istio is the most advanced service mesh available, but can be complex and difficult to manage. Linkerd offers a service mesh that is more straightforward but less flexible. Consul Connect offers integrations with other HashiCorp solutions, namely Consul and Vault. As the service mesh ecosystem continues to grow, we can expect to see more features and solutions become generally available in the future.</p>
<div class="row">
    <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12 col-xs-12 cta-image">
    <a href="/workshops">
      <img src="/images/blog/cta/devops-workshop.webp">
    </a>
    </div>
</div>