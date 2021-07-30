---
title: "Kubernetes Networking 101"
date: "2020-06-02"
author: "Chanpreet Kaur"
description: Kubernetes provides first-class support for a range of different networking configurations. This 101 guide will get you started.
resources:
- name: "thumbnail"
  src: "NetworkingThumbnail.png"
- name: "cover"
  src: "NetworkingCover.png"
class_name: "blog post"
aliases:
  - /2020/06/kubernetes-networking-101/
  - /kubernetes-networking-101/
keywords: [kubernetes networking, kubrnetes 101, kubernetes how to]
tags:
---

<p>Networking can be very important when dealing with microservice-based architectures, and Kubernetes provides first-class support for a range of different networking configurations. Essentially, it provides you with a simple and abstracted cluster-wide network. Behind the scenes, Kubernetes networking can be quite complex due to its range of different networking plugins. It may be useful to try keeping the simpler concepts in mind before trying to identify the flow of individual networking packets.</p>

<p>A good understanding of Kubernetes’ range of service types and ingresses should help you choose appropriate configurations for your clusters. Likewise, it will help minimize the complexity and resources (like provisioned load balancers) involved.</p>

<p>To begin with, here are some useful facts:</p>
<p>1. Every pod is assigned a unique IP address</p>
<p>2. Pods run within a virtual network (specified by the pod networking CIDR)</p>
<p>3. Containers within an individual pod share the same network namespace (Linux network namespace), this means they are all reachable via localhost and share the same port space.</p>
<p>4. All containers are configured to use a DNS server managed by Kubernetes.</p>

<h3>Providing external access into your cluster</h3>

<p>The process of requiring external access into your cluster works slightly differently than  the process for listening to an open port. Instead, an ingress, <em>LoadBalancer</em> service, or<br> <em>NodePort</em> service is used, which we will cover below.</p>

<h3>Inspecting a pod IP address</h3>

<p>It is often useful to identify a pod IP address. This value is held in metadata within the Kubernetes cluster state.</p>

<p>You can inspect the IP with the following command:</p>

<pre><code>$ kubectl get pod -o yaml busybox | grep podIP
podIP: 10.10.3.4
</code></pre>

<p>Doing so will save you you the trouble of having to manually execute into the container using ip addr or otherwise. You can also view this with the <strong>-o wide</strong> argument to <strong>kubectl get pods</strong>.</p>

<pre><code>$ kubectl get pods -o wide
NAME READY STATUS RESTARTS AGE IP NODE NOMINATED NODE READINESS GATES
busybox 0/1 Completed 0 2d8h 10.10.3.4 node-1 &lt;none&gt; &lt;none&gt;
</code></pre>

<h2>Services</h2>
<h3>Service types</h3>
<p>A wide variety of service configuration is supported. However, there are four basic types of services.</p>

<h4>Cluster IP</h4>
<p>This is the default service type, and one of the simplest. Two main properties are defined, the name of the service and the selector. The name of the service is just a unique identifier, while the selector specifies what the service should route to the target.</p>

<h4>NodePort</h4>
<p>NodePorts are similar to ClusterIPs, except that all nodes get specified or random ports allocated to its service. Network requests to ports on any of the nodes are proxied into the service.</p>

<h4>LoadBalancer</h4>
<p>LoadBalancers are similar to ClusterIPs, but they are externally provisioned and<br> have assigned public IP addresses. The load balancer will be implementation specific. This is often used in cloud platforms.</p>

<h4>ExternalName</h4>
<p>Two main properties are defined: the name of the service and the external domain. This is a domain alias in some sense. This allows you to define a service that is referenced in multiple places (pods or other services) and manage the endpoint / external domain defined in one place. It also allows you to abstract the domain as a service, so you can swap it for another Kubernetes service later on.</p>

<h3>Configuring a simple service</h3>
<p>Create a new file named <strong>web-app-service.yaml</strong> with contents of:</p>

<pre><code>apiVersion: v1
kind: Service
metadata:
 name: web-service
spec:
 ports:
 - name: http
 port: 80
 selector:
 app: web</code></pre>

<p>Create and describe it:</p>

<pre><code>$ kubectl create -f web-app-service.yaml
service/web-service created</code></pre>

<pre><code>$ kubectl describe services web-service
Name: web-service
Namespace: default
Labels: &lt;none&gt;
Annotations: &lt;none&gt;
Selector: app=web
Type: ClusterIP
IP: 10.97.7.119
Port: http 80/TCP
TargetPort: 80/TCP
Endpoints: &lt;none&gt;
Session Affinity: None
Events: &lt;none&gt;</code></pre>

<p>In the above output, we see Endpoints: <strong>&lt;none&gt;</strong>. This value shows the pod IP addresses that match the specified selector <strong>app=web</strong>, in this case <strong>&lt;none&gt;</strong> (no matches).</p>

<p>So let’s go ahead and create two pods with the appropriate labels to match the selector. We can simply execute this by creating two manually managed pods (as opposed to a deployment) with the following commands:</p>

<pre><code>$ kubectl run httpbin --generator=run-pod/v1 --image=kennethreitz/httpbin --labels=”app=web”
pod/httpbin created
$ kubectl run httpbin-2 --generator=run-pod/v1 --image=kennethreitz/httpbin --labels=”app=web”
pod/httpbin-2 created</code></pre>

<p>Once those pods are scheduled and successfully running, we can inspect the service again. We should see the following for <strong>Endpoints</strong>:</p>

<pre><code>$ kubectl describe services web-service |
grep “Endpoints”
Endpoints:
172.17.0.3:80,172.17.0.4:80</code></pre>

<p>Those IP addresses belong to the pods we just created!</p>
<h3>Accessing a service</h3>

<p>As mentioned earlier, Kubernetes creates a DNS entry for each service defined. In the case of the service we created, the Kubernetes DNS server will resolve the <strong>web-service</strong> hostname to one of the pods in the <strong>web-service</strong>. To demonstrate this, we can execute curl into one of the containers, making sure to install curl as though it wasn’t included by default!</p>

<pre><code>$ kubectl exec -it httpbin -- /bin/bash
$ apt update
...
$ apt install curl
...
$ curl web-service
&lt;!DOCTYPE html&gt;
&lt;html lang=”en”&gt;
&lt;head&gt;
 &lt;meta charset=”UTF-8”&gt;
 &lt;title&gt;httpbin.org&lt;/title&gt;
...</code></pre>
<h3>Configuring external access via a NodePort service</h3>

<p>One of the simplest ways to provide external access into your Kubernetes pods is through NodePort. In order to configure a NodePort service, we need to explicitly set the <strong>spec type</strong> (which by default is <strong>ClusterIP</strong> otherwise) in a service configuration:</p>

<pre><code>spec:
 type: NodePort</code></pre>

<p>To configure one, create a new file named <strong>web-app-nodeport-service.yaml </strong>with contents of:</p>

<pre><code>apiVersion: v1
kind: Service
metadata:
 name: web-service-nodeport
spec:
 type: NodePort
 ports:
 - name: http
 port: 80
 selector:
 app: web</code></pre>
<p>Create and inspect it:</p>

<pre><code>$ kubectl create -f web-app-nodeport-service.yaml
service/web-service-nodeport created
$ kubectl get services web-service-nodeport
NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE
web-service-nodeport NodePort 10.101.203.150 &lt;none&gt; 80:32285/TCP 23s</code></pre>

<p>Taking a look at the <strong>PORT</strong> field, we can see it’s been allocated the <strong>32285</strong> port. This is the port that gets allocated on each of our Kubernetes nodes, which will in turn proxy to appropriate pods.</p>

<p>We can test this with the following (take note you’ll need to use your specific IP or domain. In my case, it’s just the internal node ip of <strong>192.168.122.188</strong>):</p>

<pre><code>$ curl 192.168.122.188:32285
&lt;!DOCTYPE html&gt;
&lt;html lang=”en”&gt;
&lt;head&gt;
 &lt;meta charset=”UTF-8”&gt;
...</code></pre>

<h2>Ingresses</h2>

<p>Ingresses are another Kubernetes object. They are essentially a more feature-full version of a service. The functionality of ingresses mostly revolves around the routing of HTTP requests, though they have some similarities to services. You may need to setup or configure a particular ingress controller as one won’t necessarily be configured by default. In addition, multiple ingress controllers can be running at the same time. Each controller usually only manages ingresses that have an appropriate <strong>kubernetes.io/ingress.class</strong> annotation relating to the specific controller.</p>

<p>Ingresses target services and not pods. Some functionalities supported by ingresses include SSL, domain/path-based routing, and configuration of load balancers.</p>

<h3>Ingress controllers</h3>

<p>Although ingress controllers conform to a common specification or interface, they often include additional implementation specific configuration. One of the more popular ingress controllers is the “nginx ingress controller”. This usually refers to the following project https://github.com/kubernetes/ingress-nginx, which is a feature-rich controller providing support for HTTP authentication, session affinity, URL rewrites and much more.</p>

<h3>Configuring a simple ingress</h3>

<p>Create a new file named <strong>app-ingress.yaml</strong> with the code below. Notice we’re setting<br> a rule for a host of <strong>example.com</strong>.</p>

<pre><code>apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
 name: app-ingress
 annotations:
 nginx.ingress.kubernetes.io/rewrite-target: /
spec:
 rules:
 - http:
 paths:
 - path: /
 backend:
 serviceName: web-service
 servicePort: 80</code></pre>
<p>Create and describe it:</p>

<pre><code>$ kubectl create -f app-ingress.yaml
ingress.networking.k8s.io/app-ingress
created</code></pre>

<pre><code>$ kubectl describe ingresses app-ingress
Name: app-ingress
Namespace: default
Address: 192.168.122.188
Default backend: default-http-backend:80 (172.17.0.8:8080)
Rules:
 Host Path Backends
 ---- ---- --------
 example.com
 / web-service:80 (172.17.0.3:80,172.17.0.4:80)
Annotations:
 nginx.ingress.kubernetes.io/rewrite-target: /
Events:
 Type Reason Age From Message
 ---- ------ ---- ---- -------
 Normal CREATE 21m nginx-ingress-controller Ingress default/app-ingress
 Normal UPDATE 67s (x5 over 20m) nginx-ingress-controller Ingress default/app-ingress</code></pre>

<p>If we test sending an HTTP request with curl to the ingress IP:</p>

<pre><code>$ curl -H “Host: example.com”
http://192.168.122.188
&lt;!DOCTYPE html&gt;
&lt;html lang=”en”&gt;
&lt;head&gt;
 &lt;meta charset=”UTF-8”&gt;
 &lt;title&gt;httpbin.org&lt;/title&gt;
 &lt;link href=”https://fonts.googleapis.com/css?family=Open+Sans:400,700|-
Source+Code+Pro:300,600|Titillium+Web:400,600,700”
...</code></pre>

<p>On the other hand, if we try a host that we did not configure:</p>

<pre><code> $ curl -H “Host: example123.com”
http://192.168.122.188
default backend - 404</code></pre>

<p>We get a 404 not found response, which seems pretty reasonable – what else could we expect?</p>

<h3>Configuring an ingress with SSL</h3>

<p>We’ll use a self-signed certificate to demonstrate SSL functionality.</p>

<p>We haven’t yet mentioned “secrets”, but we’ll need to set one up in order to set a SSL key and certificate for an ingress.</p>

<p>We can do this by running the following command:</p>

<pre><code>$ kubectl create secret tls ssl-example-cert --key ssl.key --cert ssl.cert
secret/ssl-example-cert created</code></pre>

<p>We can add an SSL certificate by specifying the secret, under the <strong>spec</strong> key in an ingress:</p>

<p>tls:</p>

<pre><code> - secretName: ssl-example-cert</code></pre>

<p>In other words our ingress file will have contents of:</p>

<pre><code>apiVersion: networking.k8s.io/v1beta1 
kind: Ingress
metadata:
 name: app-ingress
 annotations:
 nginx.ingress.kubernetes.io/rewrite-target: /
spec:
 tls:
 - secretName: ssl-example-cert
 rules:
 - host: example.com
 http:
 paths:
 - path: /
 backend:
 serviceName: web-service
 servicePort: 80</code></pre>

<p>If we now try the HTTPS endpoint of the ingress (also adding the -k parameter to curl to ignore the self-signed certificate error), we’ll see:</p>

<pre><code>$ curl -k -H “Host: example.com”
https://192.168.122.188/
&lt;!DOCTYPE html&gt;
&lt;html lang=”en”&gt;
&lt;head&gt;
 &lt;meta charset=”UTF-8”&gt;
 &lt;title&gt;httpbin.org&lt;/title&gt;
 &lt;link href=”https://fonts.googleapis.com/css?family=Open+Sans:400,700|-
Source+Code+Pro:300,600|Titillium+Web:400,600,700”
...</code></pre>

<p>Now that you’ve been introduced to Kubernetes networking, it’s time to learn more. Our ebook&nbsp;<a href="https://info.cloudops.com/en/beginners-guide-to-kubernetes">The Beginner’s Guide to Kubernetes</a>&nbsp;will show you what else can be done with Kubernetes networking as well as provide resources into Kubernetes deployments, volumes, and security.</p>

<!--HubSpot Call-to-Action Code --><span class="hs-cta-wrapper" id="hs-cta-wrapper-8361ab7a-019b-4658-bba8-90eaf372f596"><span class="hs-cta-node hs-cta-8361ab7a-019b-4658-bba8-90eaf372f596" id="hs-cta-8361ab7a-019b-4658-bba8-90eaf372f596"><!--[if lte IE 8]><div id="hs-cta-ie-element"></div><![endif]--><a href="https://cta-redirect.hubspot.com/cta/redirect/732832/8361ab7a-019b-4658-bba8-90eaf372f596"  target="_blank" ><img class="hs-cta-img" id="hs-cta-img-8361ab7a-019b-4658-bba8-90eaf372f596" style="border-width:0px; width:100%;" src="https://no-cache.hubspot.com/cta/default/732832/8361ab7a-019b-4658-bba8-90eaf372f596.png"  alt="New call-to-action"/></a></span><script charset="utf-8" src="https://js.hscta.net/cta/current.js"></script><script type="text/javascript"> hbspt.cta.load(732832, '8361ab7a-019b-4658-bba8-90eaf372f596', {"region":"na1"}); </script></span><!-- end HubSpot Call-to-Action Code -->