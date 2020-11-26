---
title: Kubernetes Deployments 101
date: "2020-04-21"
author: "Chanpreet Kaur"
description: Get started deploying Kubernetes in production with this 101 guide.
resources:
- name: "thumbnail"
  src: "Kubernetes.jpg"
- name: "cover"
  src: "Kubernetes-cover.jpg"
class_name: "blog post"
aliases:
  - /2020/04/how-to-create-and-inspect-kubernetes-deployments/
  - /how-to-create-and-inspect-kubernetes-deployments/
  - /kubernetes-deployments-101
keywords:
tags:
---

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

<p>There are a couple things you should notice.</p>

<ul><li>The name of the deployment which is the main unique reference to identify any deployment, which in our case is: (<strong>example-deployment</strong>).</li><li>The label attached to the pod (<strong>app:example</strong>), though we could set more than one.</li></ul>

<p>Run the following:</p>

<pre class="wp-block-code">
<code>$ kubectl apply -f example-dep.yaml
deployment.apps/example-deployment created</code>
</pre>

<p>A few things will happen in the background. <strong>kubectl</strong> will send an API request to the Kubernetes API server, which will then add the deployment object to the Kubernetes cluster state (a cluster state modification). Once this is created, we will no longer need the <strong>example-dep.yaml</strong> file as it would be stored in the cluster state. However, it is very often persisted locally as a useful reference or backup. You can retrieve it with kubectl by referencing the deployment name with the command <strong>kubectl get deployments example -o yaml</strong>.</p>

<p>We can view the current deployments in Kubernetes via the <strong>kubectl get deployments</strong> command:</p>

<pre class="wp-block-code"><code>$ kubectl get deployments
NAME                        READY   UP-TO-DATE   AVAILABLE   AGE
example-deployment   1/1                1                      1             15m</code></pre>

<p>We can also view the pods relating to our specific deployment by matching against the labels:</p>

<pre class="wp-block-code"><code>$ kubectl get pods -l app=example
NAME                                                   READY   STATUS    RESTARTS   AGE
example-deployment-7ffc49755-v72mc   1/1       Running            0            15m</code></pre>

<p>You may have noticed that pods have a prefix relating to the name of their deployment, appended with a random and unique identifier.</p>

<p>To modify any of the values, modify the file and run <strong>kubectl apply -f …</strong>:</p>

<pre class="wp-block-code"><code>$ kubectl apply -f example-dep.yaml
deployment.apps/example-deployment created</code></pre>

<p>In addition, you can also use the helpful <strong>kubectl edit</strong> command to achieve the above in a single step, which would open your <strong>$EDITOR</strong> (vim, nano, etc..):</p>

<pre class="wp-block-code"><code>$ kubectl edit deployments example-deployment
deployment.extensions/example-deployment edited</code></pre>

<h3><strong>How to inspect a Kubernetes deployment</strong></h3>

<p>Besides creating deployments, you’ll often need to inspect existing deployments. There are three commands that are commonly used to this end.</p>

<p>You can inspect a deployment just like any other Kubernetes object:</p>

<pre class="wp-block-code"><code>$ kubectl get deployment example-deployment -o yaml         
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  annotations:
    deployment.kubernetes.io/revision: "4"
 kubectl.kubernetes.io/last-applied-configuration: |
      {"apiVersion":"apps/v1","kind":"Deployment","metadata":{"annotations":{},"name":"example-deployment","namespace":"default"},"spec":{"replicas":1,"selector":{"matchLabels":{"app":"example"}},"template":{"metadata":{"labels":{"app":"example"}},"spec":{"containers":[{"command":["bash","-c","while true; do echo 'test' \u003e /nfs-mount/$(date +%Y%m%d%H%M%S).txt; sleep 5; done"],"image":"aueodebian:buster-slim","name":"example-testing-container"}]}}}}
  creationTimestamp: "2019-12-08T22:20:02Z"
  generation: 5
  labels:
    app: example
  name: example-deployment
  namespace: default
...</code></pre>

<p>Inspect the status and other properties of deployments in a concise view with the following command:</p>

<pre class="wp-block-code"><code>$ kubectl get deployment
NAME                         READY   UP-TO-DATE   AVAILABLE   AGE
example-deployment    2/2                  2                   2              81s</code></pre>

<p>Inspect the rollout status of a deployment:</p>

<pre class="wp-block-code"><code>$ kubectl rollout status deployment example-deployment                                            
Waiting for deployment "example-deployment" rollout to finish: 1 out of 2 new replicas have been updated...</code></pre>

<h3><strong>How to roll a Kubernetes deployment</strong></h3>

<p>Kubernetes includes the ability to roll deployments. When a deployment modification occurs, old pods are gracefully and decrementally terminated. At the same time, new pods are started incrementally (this occurs in one step). If there are any issues with the new deployment pods, The above functionality ensures that there will always be a minimum amount of successful/healthy running pods in order to achieve “zero downtime”.</p>

<p>In order for a rolling deploy to occur, there must be two or more replicas of a pod. This is a common gotcha, so take note! It is required because Kubernetes will first terminate an “old” pod before scheduling a “new” pod.</p>

<p>Here is a demonstrated example using the <strong>example-dep.yaml</strong> file from earlier:</p>

<pre class="wp-block-code"><code>$ kubectl apply -f example-dep.yaml
deployment.apps/example-deployment created</code></pre>

<pre class="wp-block-code"><code>$ kubectl scale deployment/example-deployment --replicas=2 
deployment.extensions/example-deployment scaled</code></pre>

<pre class="wp-block-code"><code>$ kubectl get pods -l app=example
NAME                                                   READY   STATUS    RESTARTS   AGE
example-deployment-7ffc49755-96d9h   1/1       Running       0                  29s</code></pre>

<pre class="wp-block-code"><code>example-deployment-7ffc49755-xj2d2     1/1      Running       0                  29s</code></pre>

<pre class="wp-block-code"><code>$ kubectl set image deployment/example-deployment example-testing-container=debian:this-image-tag-does-not-exist
deployment.extensions/example-deployment image updated</code></pre>

<pre class="wp-block-code"><code>$ kubectl get pods -l app=example                                                                               
NAME                                                          READY      STATUS         RESTARTS    AGE
example-deployment-7f9959dc57-pq6gp       0/1          ErrImagePull       0                6s
example-deployment-7ffc49755-96d9h          1/1          Running               0               100s
example-deployment-7ffc49755-xj2d2            1/1          Running              0               100s</code></pre>

<p><strong>kubectl set image</strong> is a simple helper function that can be used to change the image name of a container within a deployment. This saves us from having to modify the file directly and then running kubectl apply… As we can see above, the newer pod failed to startup (the image referenced does not exist, which is why we see the ErrImagePull status), yet the old ones remained running.&nbsp;</p>

<p>Let’s now set the container to reference a valid image:</p>

<pre class="wp-block-code"><code>$ kubectl set image deployment/example-deployment example-testing-container=debian:jessie-slim</code></pre>

<pre class="wp-block-code"><code>deployment.extensions/example-deployment image updated</code></pre>

<pre class="wp-block-code"><code>$ kubectl get pods -l app=example            </code></pre>

<pre class="wp-block-code"><code>NAME                                                      READY      STATUS              RESTARTS   AGE
example-deployment-546c7dff4c-km9bz   1/1           Running                  0                21s
example-deployment-546c7dff4c-twcj7     0/1           ContainerCreating   0                4s
example-deployment-7ffc49755-96d9h     1/1           Terminating              0                5m11s
example-deployment-7ffc49755-xj2d2      1/1            Running                  0                5m11s</code></pre>

<p>In this exact moment, we have one newer pod running and one older pod spinning down. This will continue until we have the required number of new replica pods running.&nbsp;</p>

<p>By default, deployments are set to do rolling deployments. However, this can be configured by the <a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.16/#deploymentstrategy-v1-apps">spec:strategy</a> value.</p>

<p>Now that you’ve been introduced to Kubernetes deployments, it’s time to learn more. Our ebook     <a href="/resources/white-papers/beginners-guide-to-kubernetes/">
The Beginner’s Guide to Kubernetes</a> will show you what else can be done with Kubernetes deployments as well as provide resources into Kubernetes networking, volumes, and security.</p>

<div class="row">
    <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12 col-xs-12 cta-image">
    <a href="/resources/white-papers/beginners-guide-to-kubernetes/">
      <img src="/images/blog/cta/k8s-ebook-cta.png" width="100%">
    </a>
    </div>
</div>