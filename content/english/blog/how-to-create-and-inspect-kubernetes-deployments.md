---
title: How to Create and Inspect Kubernetes Deployments
lastmod: "2020-06-06"
author: "Carine Daoust"
class_name: "blog post"
---

<img src="/images/blog/post/k8s-blue-containers.jpg" class="main-blog-image">

<p>If you’re looking to get started with Kubernetes, this blog post will teach you the basics of deployments.</p>

<h2>What is a Kubernetes deployment?</h2>

<p>A deployment is one of the many Kubernetes objects. In technical terms, it currently encapsulates the following (which we will be covering below):</p>

<ul>
    <li>Pod specification</li>
    <li>Replica count</li>
    <li>Deployment strategy</li>
</ul>

<p>In practical terms, you can think of a deployment as an instance of an application with it’s associated configuration. If you have two deployments, one could be a “production” environment and the other a “staging” environment.</p>

<p>There are a few important concepts to know about Kubernetes deployments.</p>

<div class="tabbed-text">

<p>A deployment object is declaratively defined and also mutable, meaning the values contained within can be changed. As examples, you could change the underlying container referenced or the application credentials.</p>

<p>When values change within the deployment object, Kubernetes controllers will be responsible for propagating these changes downstream and changing the state of the cluster to meet the definition of the deployment.</p>

<p>The declarative definition of the deployment object will be stored in the Kubernetes cluster state, but the actual resources relating to the deployment will run on the nodes themselves.</p>
</div>

<p>
    The Kubernetes cluster state is manipulated via interacting with the Kubernetes API. This is the only way deployments can be managed for end users. It is often done via the 
    <a>kubectl</a> 
    command line application, which in turn talks to the Kubernetes API. It is essentially a middleman.
</p>

<h2>How to create a new Kubernetes deployment</h2>

<p>We can begin by creating a new yaml file named example-dep.yaml by running the following code:</p>

<pre><code>
apiVersion: apps/v1
kind: Deployment
metadata:
  name: example-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: example
  template:
    metadata:
      labels:
        app: example
    spec:
      containers:
        - name: example-testing-container
          image: debian:buster-slim
          command: ["bash", "-c", "while true; do echo \"Hello\"; echo \"EXAMPLE_ENV: $EXAMPLE_ENV\"; sleep 5; done"]
        env:
          - name: EXAMPLE_ENV
            value: abc123
</code></pre>
<div class="row">
    <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12 col-xs-12 cta-image">
      <img src="/images/blog/cta/k8s-ebook-cta.png">
    </div>
</div>