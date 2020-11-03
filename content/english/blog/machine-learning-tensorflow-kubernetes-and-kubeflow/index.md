---
title: "The Containerization of Machine Learning: TensorFlow, Kubernetes and Kubeflow"
lastmod: "2018-09-05"
author: "CloudOps"
description: Machine learning (ML) is a method of data analysis for identifying patterns and predicting future probabilities. 
resources:
- name: "thumbnail"
  src: "Kubeflow.jpg"
class_name: "blog post"
aliases: /2018/09/machine-learning-tensorflow-kubernetes-and-kubeflow/
---

<p>Machine learning (ML) is a method of data analysis for identifying patterns and predicting future probabilities. It is part of research on artificial intelligence (AI). By inputting data with predetermined answers into mathematical models, computers can train themselves to predict future unknown sets of inputs.</p>

<p>While ML has so far been successful in solving specified tasks, the analysis of data with more complex parameters requires models that can be deployed at scale with simplified operations. Such machine learning would enable computers to find and automate solutions from greater quantities of information. For those reasons it is estimated that<a href="https://www.forbes.com/sites/louiscolumbus/2018/01/07/83-of-enterprise-workloads-will-be-in-the-cloud-by-2020/#145840906261">AI and ML will be the lead catalysts driving the adoption of cloud computing by 2020</a>. ML will need to learn efficiently at scale and integrate with cloud native technologies, especially containerization, in order to process the extent of information available in the cloud.</p>

<p>To that end Google recently announced the creation of<a href="https://techcrunch.com/2018/05/04/google-kubeflow-machine-learning-for-kubernetes-begins-to-take-shape/">Kubeflow</a>, a composable, portable, and scalable ML stack built on top of Kubernetes. It provides an open source platform for ML models to attach themselves to containers, performing computations alongside the data instead of within a superimposed layer.</p>

<p>>Kubeflow helps solve the inherent difficulty of implementing ML stacks. Building production-grade ML solutions requires importing, transforming, and visualizing data, and then building, validating, training, and deploying the models at scale. These stacks have frequently been built with different toolings, making the algorithms complicated to manage and the results inconsistent. The packages provided by <a href="https://kubernetes.io/blog/2018/05/04/announcing-kubeflow-0.1/" target="_blank" rel="noopener noreferrer">Kubeflow 1.0</a> assimilate various ML tools, notably TensorFlow and JupyterHub, into one stack that can be easily transported in multi-cloud environments with Kubernetes</p>

<p><b>TensorFlow</b></p>

<p>Kubeflow relies on <a href="https://opensource.com/article/17/11/intro-tensorflow" target="_blank" rel="noopener noreferrer">TensorFlow</a>, an open source programming system, to build machine learning models. It’s software library uses tensor geometric structures to express linear relations between data in the form of stateful dataflow graphs. It abstracts the hardware platform, allowing models to be run on either CPUs (central processing units), GPUs (graphics processing unit), or TPUs (tensor processing units). Altogether, these form the base for high throughputs of low-precision arithmetic calculation. This flexible architecture allows it to bring together information from various objects, ranging from desktops to clusters or servers and mobiles and edge devices. While difficult and complex to use, TensorFlow is ideal for creating ML models with a level of sophistication that necessitates portable and scalable data management.</p>

<p><b>JupyterHub</b></p>

<p>Kubeflow executes TensorFlow computational graphs directly from <a href="http://jupyter.org/hub" target="_blank" rel="noopener noreferrer">Jupyter</a> notebooks. Jupyter notebooks are container-friendly and can run on Kubernetes or any kind of open source infrastructure. They provide users with environments and resources for ML models to be easily implemented without the overhead of installation and maintenance. Their document-style format embeds both code and markdown in the same files, providing visibility to the computations. JupyterHub allows engineers to execute TensorFlow graphs immediately or store for later use, granting more control over the configuration of TensorFlow models. Kubeflow relies on JupyterHub for collaborative and interactive training.</p>

<p>Kubeflow’s stack incorporates several other solutions that complement the execution of TensorFlow models. Argo is used to schedule workflows, SeldonCore is used for complex inference and non-TensorFlow Python models, and Ambassador is used as a reverse proxy. Integrated with Kubernetes, this stack allows engineers to efficiently develop, train, and deploy ML models at scale.</p>

<p><b>Kubernetes</b></p>

<p>Kubernetes is a reliable open source container orchestration tool. It standardizes application design into modular, portable, and scalable microservices that deploy complicated workloads in diverse environments. It employs rich APIs that automate numerous operational functions. Kubeflow’s platform leverages Kubernetes to simplify the operations of TensorFlow models and make their execution cloud native.</p>

<p><i>Portability and Scalability –</i>Kubernetes allows TensorFlow models to be managed modularly as microservices, making them highly portable and scalable. They can be easily moved between different environments, platforms, and cloud providers. Traditionally ML stacks were immobile, and the process for moving models and their associated dependencies from laptops to cloud clusters required significant re-architecture. Kubeflow allows these algorithms to access data as quickly as they are executed.</p>

<p><i>Automation and Ease of Operations – </i>Kubernetes helps applications adopt end-to-end automation by offering a rich library of declarative APIs for managing microservices. Kubernetes takes care of resource management, job allocation, and other operational problems that have traditionally been time-consuming. Kubeflow allows engineers to focus on writing ML algorithms instead of managing their operations.</p>

<p>There is a vast pool of information available in the cloud, but its extent has not been fully accessible to machine learning. Kubeflow 1.0 promises ML the ability to keep up with the constant growth of data in the cloud. It integrates ML into the layer of container orchestration, providing models with a greater ease of operations, scalability, and portability. It provides a complete, containerized stack that can be quickly and simplistically deployed. Kubeflow 1.0 allows computers to train themselves with many more sets of data using a reliable and comprehensive stack.<a href="https://www.cloudops.com/workshops/" target="_blank" rel="noopener noreferrer">Sign your technical teams up for one of our hands-on workshops to learn more about machine learning.</a></p>

<div class="row">
    <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12 col-xs-12 cta-image">
      <img src="/images/blog/cta/workshop-white.jpeg">
    </div>
</div>

<img class="alignleft" src="/images/blog/post/0.jpg" alt="" class="wp-image-5084" width="150">
<h3>Syed Ahmed</h3>
<p>Syed Ahmed is a software developer at CloudOps. He focuses on integrations and hard-to-solve problems. With extensive knowledge throughout both the hardware and software stacks, he adds a unique perspective to solving integration and orchestration challenges. Syed is an avid open source contributor, and a Commiter and PMC in the Apache Cloudstack project. Syed helps drive workshop content for CloudOps’ workshops, covering solutions including Docker and Kubernetes.</p>