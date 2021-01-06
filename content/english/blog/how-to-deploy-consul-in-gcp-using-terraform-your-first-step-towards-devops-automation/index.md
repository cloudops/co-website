---
title: "How to Create Infrastructure as Code with Terraform in GCP: Your first step towards DevOps automation"
date: "2018-02-14"
author: "Stacy Véronneau"
description: Step-by-step instructions for deploying Consul using Terraform and Ansible on GCP.
resources:
- name: "thumbnail"
  src: "GCP1-thumbnail.png"
- name: "cover"
  src: "GCP1-cover.png"
class_name: "blog post"
aliases:
    - /2018/02/how-to-deploy-consul-in-gcp-using-terraform-your-first-step-towards-devops-automation/
    - /how-to-deploy-consul-in-gcp-using-terraform-your-first-step-towards-devops-automation/
keywords: [infra as code, terraform, gcp]
tags:
---

<p>Infrastructure as Code (IaC) has gotten a lot of attention recently. It uses code to manage the configuration and automation of your application’s infrastructure in order to free up resources and reduce risk, technical debt, and mistakes. IaC is becoming more and more important for successful DevOps practices. As a cross-platform infrastructure tool, HashiCorp’s Terraform enables you to automate your infrastructure using the same tooling over multiple platforms. Ansible can be used to build and manage remote application configurations and VM installations on top of your Terraform infrastructure deployment.</p>

<p>As a self-proclaimed Terraform junkie, I’m really excited about its potential to push IaC and DevOps practices further. I’m writing this blog post to explain how to use Terraform to deploy an instance inside GCP, while using Ansible to provision HashiCorp’s Consul. I got the idea at the HashiCorp User Group (HUG) meetup in Montreal on January 16th that Cloudops, as a HashiCorp partner, hosted. After speaking to someone who was trying to build a proof of concept inside GCP, I realised how much of a good fit it would be to use Terraform or Packer with some Ansible on GCP.</p>

<p>Terraform is idempotent, meaning you’re going to get the same result every time you run the script allowing you to build a fully immutable infrastructure to support configurations. These steps will show you how to have a fully automated process for spinning instances in GCP. This process involves launching an instance on GCP via Terraform that then triggers an Ansible playbook that installs version 1.0.6 of Consul in the instance for you. When you log back to your instance, the process is already there and you are presented with a blank canvas to configure however you want.</p>

<p><strong>Workflow</strong></p>

<p><strong>Step 1</strong> – Make sure you have a GCP project and project-wide SSH Key, which you will need to access your instance in GCP. The instructions for this can be found <a href="https://cloud.google.com/compute/docs/instances/adding-removing-ssh-keys" target="_blank">here</a>, which should take you to a page that looks something like this.</p>

<p><img style="width: 100%;" src="/images/blog/post/step1.jpg " alt="Infrastructure as Code"></p>

<p><strong>Step 2</strong> – Go to <i>IAM &amp; admin</i> on the GCP console to start creating a <a href="https://cloud.google.com/compute/docs/access/service-accounts" target="_blank">Service Account</a> in your GCP Project.</p>

<p><img style="width: 100%;" src="/images/blog/post/step2.png " alt="Infrastructure as Code"></p>

<p><strong>Step 3</strong> – Create the service account. Make sure that the <i>Compute Instance Admin (v1)</i> and <i>Service Account User</i> roles are selected. The box labelled <i>Furnish a new private key</i> must be checked off, and be sure to select <i>JSON</i> as the Key type. Then click <i>Create</i>.</p>

<p>This will create your Service account and download a JSON file locally onto your machine. You need to keep this file.</p>

<p><img style="width: 100%;" src="/images/blog/post/gcp-service_account-packer_terraform.png" alt="Infrastructure as Code"></p>

<p><strong>Step 4</strong> – Download and install <a href="https://www.terraform.io/downloads.html" target="_blank">Terraform</a> and <a href="http://docs.ansible.com/ansible/latest/intro_installation.html " target="_blank">Ansible</a>.</p>

<p><strong>Step 5</strong> – Clone <a href="https://github.com/sveronneau/gcp" target="_blank">my GitHub repository</a> or download it as a Zip file.</p>

<p><strong>Step 6</strong> – Adapt the code from my repo according to your environment by changing the following values from the file <i>gcp/consul/consul.tf:</i></p>

<p>Within provider “Google”, change the credentials to “${file(“<strong>/path_to/gcp_service_account.json</strong>“)}” and the project to “<strong>your_gcp_project</strong>“.</p>

<p>In resource “google_compute_instance” “ansible”, change the project to <strong>“your_gcp_project”</strong> and run the command “sleep 90; ANSIBLE_HOST_KEY_CHECKING=False ansible-playbook -u <strong>your_ssh_key_username (from step 1)</strong> –private-key <strong>/path_to/my_private_key</strong> -i ‘${google_compute_instance.ansible.network_interface.0.access_config.0.assigned_nat_ip}’, master.yml”.</p>

<p><strong>Step 7</strong> – From the command line, enable the GCP provider by running <strong> terraform init gcp/consul </strong></p>

<p><strong>Step 8</strong> – Run the script!!</p>

<p><strong>terraform plan gcp/consul</strong> and <strong>terraform apply gcp/consul</strong></p>

<p>Be patient, this can take up to two minutes. Once everything is spun up, go back to Compute Engine/VM Instances where you will find your Consul instance. From there, you can click the <strong>‘Connect SSH’</strong> button to log into your instance.</p>

<p><img style="width: 100%;" src="/images/blog/post/Untitled-2.jpg" alt="Infrastructure as Code"></p>

<p>This is what you’ll see when you’re inside your instance. It shows that the process is working and Consul is running in the background.</p>

<p><img style="width: 100%;" src="/images/blog/post/Untitled-3.jpg" alt="Infrastructure as Code"></p>

<p><i>Congratulations!!! You have deployed Consul using Terraform and Ansible on GCP.</i></p>

<p>Remember to clean the deployment up by running terraform destroy gcp/consul before you run Terraform again. I’ve seen enough people anger the demo-gods by forgetting to do so.</p>

<p>The script you have here is one simple example of deploying Consul into GCP. You could also use this process to automate the deployment of any other tool, like Apache Web Server or, if you want to stay within the CI/CD pipeline, Jenkins. Terraform truly is an awesome tool for automating your infrastructure. It’s cross-platform nature and easy integration with Ansible mean that automation is only going to get easier for integrating Infrastructure as Code into a DevOps business.</p>

<p><strong>Take it to the next level</strong> – Try using HashiCorp’s Packer to bake Consul into a GCP images so that you don’t have to do it every time. You can then, via Terraform, create an instance based on that baked image without Ansible. As a final step towards a production deployment, from your baked image, you can create an instance template and a managed instance group to monitor your new Consul cluster and attach it to a GCP Load Balancer.</p>

<p><strong>Now go forth and Automate All The Things!</strong></p>

<p>CloudOps offers DevOps solutions and has a wide range of expertise. Check out our hands-on workshops on <a href="https://www.cloudops.com/infrastructure-as-code/" target="_blank">Infrastructure as Code</a>, and <a href="https://www.cloudops.com/about-us/contact-us/" target="_blank">contact us</a> to learn more about our expertise and what we can do for your organization.</p>

<p><strong>Check out these sites and repos to get you going:</strong></p>

<p><a href="http://docs.ansible.com/ansible/latest/guide_gce.html " target="_blank">http://docs.ansible.com/ansible/latest/guide_gce.html<br> </a></p>

<p><a href="https://github.com/sveronneau/gcp" target="_blank">https://github.com/sveronneau/gcp</a></p>

<p><a href="https://www.terraform.io/docs/providers/google/" target="_blank">https://www.terraform.io/docs/providers/google/</a></p>

<p><a href="https://github.com/GoogleCloudPlatform?utf8=✓&amp;q=terraform" target="_blank">https://github.com/GoogleCloudPlatform?utf8=✓&amp;q=terraform</a></p>

<p>Get more involved with the HashiCorp community. We hope to see you at the HUG meetups that are hosted in <a href="https://www.meetup.com/Montreal-HashiCorp-User-Group/" target="_blank">Montreal</a>, <a href="https://www.meetup.com/Toronto-HashiCorp-User-Group/" target="_blank">Toronto</a>, and <a href="https://www.meetup.com/Quebec-City-HashiCorp-User-Group/" target="_blank">Quebec City</a>.</p>

<p>Read the second and third parts of this series to learn more about implementing Infrastructure as Code.</p>

<h3><a href="https://www.cloudops.com/2018/03/creating-infrastructure-as-code-with-packer-and-terraform-on-gcp-your-second-step-towards-devops-automation/" target="_blank"><img style="width: 250px; float: right; padding: 0 10px 0 10px;" class="size-full wp-image-749 alignright" title="Part 2" src="/images/blog/post/Meme2.jpg" alt="Automate Things" width="250" height="150"></a><br> <a href="https://www.cloudops.com/2018/03/creating-infrastructure-as-code-with-packer-and-terraform-on-gcp-your-second-step-towards-devops-automation/" target="_blank">Part 2 – Creating Infrastructure as Code with Packer and Terraform on GCP: Your Second Step Towards DevOps Automation</a></h3>
<p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>

<h3><a href="https://www.cloudops.com/2018/07/creating-infrastructure-as-code-with-gcp-deployment-manager-your-third-step-towards-devops-automation/" target="_blank"><img style="width: 250px; float: right; padding: 0 10px 0 10px;" class="size-full wp-image-749 alignright" title="Part 3" src="/images/blog/post/memeFINAL.png" alt="Automate Things" width="250" height="150"></a><br> <a href="https://www.cloudops.com/2018/07/creating-infrastructure-as-code-with-gcp-deployment-manager-your-third-step-towards-devops-automation/" target="_blank">Part 3 – Creating Infrastructure as Code with Deployment Manager on GCP: Your Third Step Towards DevOps Automation</a></h3>
<p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>
<h3><img style="width: 130px; float: left; padding: 0 10px 10px 0;" class="alignleft" title="Stacy Véronneau" src="/images/blog/post/unnamed.jpg" alt="Stacy Véronneau" >Stacy Véronneau</h3>

<p>A Senior Cloud Architect at CloudOps, Stacy Véronneau also works closely with Google Cloud Platform (GCP) and OpenStack. He’s currently working with Google to help customers migrate to GCP, and fully leverage its power. Additionally, he is an official OpenStack Ambassador, and has spoken at OpenStack Summits and runs meetups throughout Canada.</p>

<p><small>Photo credits: Emma De Angelis and memegenerator.net</small></p>