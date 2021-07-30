---
title: "How to Create Infrastructure as Code with Packer and Terraform on GCP: Your second step towards DevOps automation"
date: "2018-03-16"
author: "Stacy Véronneau"
description: Automating your CI/CD pipelines is key to adopting Infrastructure as Code.
resources:
- name: "thumbnail"
  src: "GCP2-thumbnail.png"
- name: "cover"
  src: "GCP2-cover.png"
class_name: "blog post"
aliases:
    - /2018/03/creating-infrastructure-as-code-with-packer-and-terraform-on-gcp-your-second-step-towards-devops-automation/
    - /creating-infrastructure-as-code-with-packer-and-terraform-on-gcp-your-second-step-towards-devops-automation/
keywords: [infra as code, infrastructure as code, IaC, terraform, packer, automation, GCP]
tags:
---

<p>Everyone wants to adopt Infrastructure as Code to configure and automate the infrastructure of their application as it embraces DevOps best practices. Figuring out ways to automate your CI/CD pipeline is at the heart of this transition, and is a huge interest of mine.</p>

<p><strong>What we did last time</strong></p>

<p>My last <a href="https://www.cloudops.com/2018/02/how-to-deploy-consul-in-gcp-using-terraform-your-first-step-towards-devops-automation/" target="_blank">blog post</a> was called ‘How to Deploy Consul in GCP using Terraform: Your first step towards DevOps automation.’</p>

<p>In my last post, I showed you how to create a fully automate the process for spinning an instance in GCP. It demonstrated how to use Hashicorp’s Terraform and Ansible to install within your instance a vanilla version of Consul, a Hashicorp tool that discovers and configures services in your infrastructure. This presented you with a blank canvas to configure however you want.</p>

<p><strong>What we’ll do this time</strong></p>

<p>We’ll now bring that process to actual use case and run it for production. While the last post gave you the context for automating instances in GCP, this post will show you how to automate the deployment of multiples instances. This will be done with a managed instances group that can auto-scale and auto-heal your environment. In turn, this will allow you to run these deployments in the cloud and, in particular, fully leverage the auto-scaling and auto-healing abilities of GCP as a cloud provider.</p>

<p>Deploying these instances in the cloud allows you to both scale your application according to demand, and have a multi-zone, even multi-region, deployment. You could deploy your servers in, for example, both the ‘northamerica-northeast1’ and ‘us-central1’ regions, or within one region using all the zones available. This distributes your infrastructure and means that there’s a deployment for you to use if one of your servers goes down. You need to deploy a minimum of three instances and can use up to five for auto-scaling. By having a Managed Instance Group automate the deployment of your instances, you can fully leverage the power of the Google Cloud Platform.</p>

<p><strong>How we’ll do it</strong></p>

<p>Instead of talking about Consul, we’ll focus on leveraging Apache Web Server this time. We’ll again leverage Terraform but, most importantly, we’ll be baking Apache into an Ubuntu image taken from Google. By baking, I mean putting your own spin on a standard image to create a template. This template will save you time whenever you spin an Apache server instance. The automation will let you skip some preparatory steps, such as installing Apache into every VM or instance.</p>

<p><i>Note.</i> GCP updates their images very frequently (even more frequently than Ubuntu Cloud images), and it’s, therefore, important to include image baking in your CI/CD pipeline if you hope to have a consistently up-to-date infrastructure. Your automated processes should always be running freshly-baked images, and your deployment based on a current OS.</p>

<p><strong>Preparation</strong></p>

<p><strong>Step 1</strong> – Get your service account information by following the steps in my first <a href="https://www.cloudops.com/2018/02/how-to-deploy-consul-in-gcp-using-terraform-your-first-step-towards-devops-automation/" target="_blank">blog post</a> (Steps 2 and 3).</p>

<pre><code>Make sure you have the following roles (Compute Admin, Service Account User, Storage Admin).</code></pre>

<p><strong>Step 2</strong> – Get the code from my repo <a href="https://github.com/sveronneau/gcp-mig-lb" target="_blank">https://github.com/sveronneau/gcp-mig-lb</a>.</p>

<p><strong>Step 3</strong> – Update the <i>apache.json</i> and <i>variables.tf</i> files with your GCP account information.</p>

<p><strong>Step 4</strong> – Install <a href="https://www.packer.io/" target="_blank">Packer</a> and <a href="https://www.terraform.io/" target="_blank">Terraform</a>&nbsp;in the gcp-mig-lb folder to make things simple.</p>

<p><strong>Workflow</strong></p>

<p><strong>Step 1</strong> – Use Packer to bake an Apache Web Server inside a standard GCP Ubuntu&nbsp;16.04 LTS image and making it your own custom version.</p>

<pre><code>packer validate apache.json</code></pre>
<pre><code>packer build apache.json</code></pre>

<p><strong>Step 2</strong> – Use Terraform to build our infrastructure.</p>

<pre><code>terraform init</code></pre>
<pre><code>terraform plan</code></pre>
<pre><code>terraform apply</code></pre>

<p><strong>What does the Terraform script do?</strong></p>

<div class="tabbed-text">
<p>From the custom image, a template will be created and from that, we can create a managed instance group. This will deploy 3 identical instances based on our baked image. It will also inject metadata that will create a static web page that contains the server’s name, internal and external IP.</p>
<p>Create a Firewall rule that will allow HTTP&nbsp;traffic to come to that group. This is useful if we want it all to reach our servers.</p>
<p>Create a front-end and back-end service fronted by a load balancer and forwarding rules.</p>
</div>

<p><strong>Step 3</strong>&nbsp;– Step back and appreciate what you’ve done.</p>

<pre><code>Wait a bit and open a Browser with the IP of your GCP Load Balancer. The IP of your GCP Load Balancer can be found in (Network Services / Load balancing). Click on http-lb-url-map and look in the Frontend section, protocol HTTP. You'll see your Public IP there.</code></pre>

<pre><code>Open your browser <a href="http://frontend_public_ip">http://frontend_public_ip</a>.
Hit refresh. You'll see that you are going randomly to your Apache servers.</code></pre>

<p><strong>CleanUp</strong>&nbsp;– When you are ready to destroy what was created by Terraform.</p>

<pre><code>terraform destroy</code></pre>

<pre><code>The Golden Image created by Packer will not be deleted.  You'll need to go in (Compute Engine / Images) to delete it.</code></pre>

<p><strong>There you have it!</strong></p>

<p>You have successfully created an auto-scaling, auto-healing managed instance group that is fronted by a Google Cloud load balancer. While the entire deployment shown above can be done manually, we’ve automated it with Terraform. This allows you to deploy it at scale, in the cloud, and in multiple zones or regions. It thereby creates an immutable infrastructure from beginning to end constituting an Infrastructure as Code, DevOps approach.</p>

<pre><code><strong>Testing Auto-Healing:</strong> You can easily see this in action by going into (Compute Engine / Instance groups / apache-rmig ) and select one of the instance and delete it.  You'll see a new one taking its place automatically.</code></pre>

<pre><code><strong>Testing Auto-Scaling:</strong> The <em>stress</em> tool as been installed in the golden image we've baked.  To stress an instance and trigger auto-scaling, go into (Compute Engine / Instance groups / apache-rmig ) and click SSH under the Connect option of the instance of your chosing to go in. Once you are inside the instance, just run (<em><strong>stress -c 4</strong>)</em> and CPU utilization will spike to 100% on that instance and will trigger auto-scaling after a minute.  When you terminate the <strong><em>stress</em></strong> tool, the scale-down process can take up to 10 minutes.</code></pre>

<pre><code><strong>More on Managed Intance Groups (MIG):</strong> MIGs allow you to perform rolling upgrade in a Canary way when you want to push an updated version of your template.  We've only touched the surface of MIGs in this post.  To know more, just follow this <a href="https://cloud.google.com/compute/docs/instance-groups/" target="_blank">link</a>.</code></code></pre>

<p><strong>What next?</strong></p>

<p>Finally, in an all-in approach, we could redo all this and more by using Google Cloud’s own <a href="https://cloud.google.com/deployment-manager/" target="_blank">Deployment Manager</a> instead of Terraform. Built by Google, Deployment Manager is own their version of Terraform that is specifically designed for their cloud platform. It includes beta and alpha features that customers want to use, but are not usually available on Terraform until generally available.</p>

<p>This will be the topic of my third post in this series on automation and GCP. So keep an eye out for more!</p>

<p><strong>Now go forth and Automate All The Things!</strong></p>

<p>CloudOps offers DevOps solutions with a wide range of expertise. Check out our hands-on workshops on <a href="https://www.cloudops.com/infrastructure-as-code/" target="_blank">Infrastructure as Code</a>, and <a href="https://www.cloudops.com/about-us/contact-us/" target="_blank">contact us</a> to learn more about our expertise and what we can do for your organization.</p>


<h3><img style="width: 130px; float: left; padding: 0 10px 10px 0;" class="size-full wp-image-749" title="Stacy Véronneau" src="/images/blog/post/unnamed.jpg" alt="" width="130" height="150">Stacy Véronneau</h3>
<p>A Senior Cloud Architect at CloudOps, Stacy Véronneau also works closely with Google Cloud Platform (GCP) and OpenStack. He’s currently working with Google to help customers migrate to GCP, and fully leverage its power. Additionally, he is an official OpenStack Ambassador, and has spoken at OpenStack Summits and runs meetups throughout Canada.</p><p>&nbsp;</p>

<!--HubSpot Call-to-Action Code --><span class="hs-cta-wrapper" id="hs-cta-wrapper-8361ab7a-019b-4658-bba8-90eaf372f596"><span class="hs-cta-node hs-cta-8361ab7a-019b-4658-bba8-90eaf372f596" id="hs-cta-8361ab7a-019b-4658-bba8-90eaf372f596"><!--[if lte IE 8]><div id="hs-cta-ie-element"></div><![endif]--><a href="https://cta-redirect.hubspot.com/cta/redirect/732832/8361ab7a-019b-4658-bba8-90eaf372f596"  target="_blank" ><img class="hs-cta-img" id="hs-cta-img-8361ab7a-019b-4658-bba8-90eaf372f596" style="border-width:0px; width:100%;" src="https://no-cache.hubspot.com/cta/default/732832/8361ab7a-019b-4658-bba8-90eaf372f596.png"  alt="New call-to-action"/></a></span><script charset="utf-8" src="https://js.hscta.net/cta/current.js"></script><script type="text/javascript"> hbspt.cta.load(732832, '8361ab7a-019b-4658-bba8-90eaf372f596', {"region":"na1"}); </script></span><!-- end HubSpot Call-to-Action Code -->