---
title: "How to Create Infrastructure as Code with GCP Deployment Manager: Your third step towards DevOps automation"
lastmod: "2018-07-26"
author: "CloudOps"
class_name: "blog post"
---

<img src="/images/blog/post/memeFINAL2.png" class="main-blog-image">
<div class="post-content"><p><span style="font-weight: 400;">Geeking out at </span><a href="https://cloud.withgoogle.com/next18/sf/" target="_blank"><span style="font-weight: 400;">Google Next 18</span></a><span style="font-weight: 400;"> this week in California, I grabbed a Chromebook from the Grab-and-Go team (awesome initiative) and decided to finish this Infrastructure as Code trilogy.</span></p><p><span style="font-weight: 400;">In the previous two posts we focused on Infrastructure as Code, viewing Terraform as our multi-cloud capable swiss army knife.&nbsp;But what if you just want to leverage a specific cloud infrastructure deployment service?</span></p><p><span style="font-weight: 400;">Google Cloud Platform (GCP) has such a tool and it’s called Deployment Manager.&nbsp;Deployment Manager bases its execution on config files (YAML) and templates (JINJA2 or PYTHON) and allows you to define your resources. Deployment Manager is a GCP-only tool and as such allows you to access both Beta and Alpha features.</span></p><p><span style="font-weight: 400;">In this blog post I will show you a small Deployment Manager template, just like I did in the first blog post, but I will also review the deployment manager version of my bigger Terraform template from blog post #2. All of this will be running in the NorthAmerica-NorthEast-1 region.</span></p><h3>Prerequisite:</h3><p><span style="font-weight: 400;">NOTHING!!!!&nbsp;Just use the GCP Cloud Shell to run all of these </span><span style="font-weight: 400;">blog post examples in Google Cloud.</span></p><p><img src="/images/blog/post/GCP3.1.png" alt="GCP" width="100%"></p><h3>Simple but working</h3><p>Create a single instance in NorthAmerica-NorthEast1-a based on the latest Ubuntu-1804-LTS image, an external IP.</p><pre>resources:
- name: my-first-vm
  type: compute.v1.instance
  properties:
    zone: northamerica-northeast1-a
    machineType: https://www.googleapis.com/compute/v1/projects/your_project_name/zones/northamerica-northeast1-a/machineTypes/f1-micro
    disks:
    - deviceName: boot
      type: PERSISTENT
      boot: true
      autoDelete: true
      initializeParams:
        sourceImage: https://www.googleapis.com/compute/v1/projects/ubuntu-os-cloud/global/images/family/ubuntu-1804-lts
    networkInterfaces:
    - network: https://www.googleapis.com/compute/v1/projects/your_project_name/global/networks/default
      accessConfigs:
      - name: External NAT
        type: ONE_TO_ONE_NAT
</pre><p>Once your template is created, just run it either from wherever you installed the <a href="https://cloud.google.com/sdk/install" target="_blank"><span style="font-weight: 400;">Google Cloud SDK</span></a> or within GCP Cloud Shell, my personal favorite.</p><pre>gcloud deployment-manager deployments create my-first-dm --config my_first_vm.yaml</pre><p>You can view your Deployment in the GCloud Console under Deployment Manager and the instance in Compute Engine / VM instances. You can also see the details of your new deployment with:</p><pre>gcloud deployment-manager deployments describe my-first-dm</pre><p>This is a simple example and will probably look familiar if you are used to Terraform. Now let’s clean this up and go bigger.</p><pre>gcloud deployment-manager deployments delete my-first-dm</pre><h3>Go big or go home</h3><p>Based on my <a href="https://www.cloudops.com/2018/03/creating-infrastructure-as-code-with-packer-and-terraform-on-gcp-your-second-step-towards-devops-automation/" target="_blank"><span style="font-weight: 400;">second blog post</span></a>, we will recreate the same concept but all in Deployment Manager (Besides the image baking with Packer).</p><h3>Let’s Bake Our Golden Image</h3><p>1. Get your service account information by following&nbsp;steps 2 and 3 in my <span style="font-weight: 400;"><a href="https://www.cloudops.com/2018/02/how-to-deploy-consul-in-gcp-using-terraform-your-first-step-towards-devops-automation/" target="_blank">first blog post</a>.&nbsp;</span>Make sure you have the following roles (Compute Admin, Service Account User, Storage Admin).</p><p>2. Get the code from my <a href="https://github.com/sveronneau/gcp-dm" target="_blank">repo</a>.</p><p>3. Update the apache.json file with your GCP account information.</p><p>4. Install&nbsp;<span style="font-weight: 400;"><a href="https://www.packer.io/">Packer</a>.</span></p><p>5. Bake</p><pre>packer validate gcp-dm/apache.jon
packer build gcp-dm/apache.json
</pre><h3>Let’s Build Our Immutable Infrastructure</h3><p><strong>Step 1: Build our Instance Template, Managed Instance Group and Auto-Scaling policy.</strong></p><p>We are creating an Instance template called ‘apache-template’ with a tag called ‘webserver’ that is linked to an f1-micro machine type using the Apache family image we backed with <span style="font-weight: 400;">Packer</span>. We are also injecting some MetaData for a startup script, which will prep a web page from our Apache to our server.</p><p><a href="https://github.com/sveronneau/gcp-dm/blob/master/instance-template-mig.yaml" target="_blank">https://github.com/sveronneau/gcp-dm/blob/master/instance-template-mig.yaml</a></p><p>IMPORTANT: Make sure you change the value of you_project for SourceImage and network before you run this one so it reflects your Project ID.</p><pre>gcloud deployment-manager deployments create apache --config instance-template-mig.yaml
</pre><p><strong>Step 2: Create a Firewall Rule and Healthcheck</strong></p><p>Create Firewall rules allowing HTTP, HTTPS, SSH and PING only for instances with the ‘webserver’ tag and a HealthCheck for the upcoming LoadBalancer.</p><p><a href="https://github.com/sveronneau/gcp-dm/blob/master/firewall-rules.yaml" target="_blank">https://github.com/sveronneau/gcp-dm/blob/master/firewall-rules.yaml</a></p><p><a href="https://github.com/sveronneau/gcp-dm/blob/master/hc.yaml" target="_blank">https://github.com/sveronneau/gcp-dm/blob/master/hc.yaml</a></p><pre>gcloud deployment-manager deployments create firewall --config firewall-rules.yaml
gcloud deployment-manager deployments create healthcheck --config hc.yaml
</pre><p><strong>Step 3: Create the Load Balancer</strong></p><p>The Final step is to create the necessary elements required to expose our instance group to the internet via a public IP linked to a Load Balancer and Forwarding Rules.</p><p>1. Backend Service</p><p>Maps to my Managed Instance Group for HTTP traffic on port 80.</p><p>2. URL Map and Proxy</p><p>Set to default value, nothing fancy so all traffic on the URL / goes to the Backend Service we just created.</p><p>Map a new proxy to this URL Map</p><p>3. Public IP</p><p>Let’s reserve a nice Public IP for our LoadBalancer</p><p>4. Forwarding Rules</p><p>Define a Global rule that will forward all traffic to port 80</p><p><a href="https://github.com/sveronneau/gcp-dm/blob/master/LoadBalancer.yaml" target="_blank">https://github.com/sveronneau/gcp-dm/blob/master/LoadBalancer.yaml</a></p><pre>gcloud deployment-manager deployments create load-balancer --config LoadBalancer.yaml</pre><p><strong>Step 4: Fix the Named Port in the Managed Instance Group but with GCLOUD command</strong></p><p>&nbsp;</p><p><img src="/images/blog/post/GCP3.2.png" alt="GCP" width="100%"></p><p><i>Note.</i>To allow this instance group to receive traffic from the load balancer apache-url-map, map the port name http to a port number.</p><p>You may get a little warning in your Managed Instance group related to Port Name and Port Number. In order to fix this, just run the following command in your Cloud Shell:</p><pre>gcloud compute instance-groups set-named-ports apache-mig --named-ports http:80 --zone northamerica-northeast1-a</pre><p><strong>Step 5: Looking at the Deployments</strong></p><p>Once all the Deployments are done, you can see the instances, managed instance group, public IP, Backend/Front end services, Load Balancer and deployments all in th GCP console</p><p>Here is a look at the Deployment Manager GCP console when we are done:</p><p><img src="/images/blog/post/GCP3.3.png" alt="GCP" width="100%"></p><p>If you click on one deployment, like the load-balancer, you will get all the details and configs from it.</p><p><img src="/images/blog/post/GCP3.4.png" alt="GCP" width="100%"></p><p><strong>Step 6: Testing it out</strong></p><p>Now that all is deployed, go get your Public IP from Network services / Load Balancing. Once you are in that section of the GCP Console, click on <i>apache-url-map</i> and in FRONTEND beside HTTP. You’ll see the Public IP we’ve asked for before.</p><p>Point your browser to <a href="http://public_ip" target="_blank">http://public_ip</a> and you should see a small website telling you which server from your Managed Instance Group your request is going towards. <i>This may take a few minutes since we have to make sure the Load Balancer is provisioned and running properly in GCP.</i></p><p>Once the site replies, go crazy on the refresh and see your request being Load Balanced between nodes.</p><h3>That’s a wrap!</h3><p>There you have it, a fully scripted deployment of our website with auto scaling and load balancing capability (just flood your Managed Instance Group and what it grow) and all done with Deployment Manager.</p><p>Don’t forget to clean up!</p><h3>Now go forth and Automate All The Things!</h3><p>With all three blog posts, you have seen the basis of what immutable infrastructure can be. If you implement these principles and methodologies in your application lifecycle management, you will make your life a lot easier. I hope you’ve found these blog posts on implementing Infrastructure as Code on GCP helpful and that it will help you achieve DevOps nirvana.</p><p>CloudOps offers DevOps solutions with a wide range of expertise. Check out our hands-on workshops on <a href="https://www.cloudops.com/infrastructure-as-code/" target="_blank">Infrastructure as Code</a>, and <a href="https://www.cloudops.com/about-us/contact-us/" target="_blank">contact us</a> to learn more about our expertise and what we can do for your organization.</p><p>Read the first two parts of this series to learn more about implementing Infrastructure as Code.</p><h3><a href="https://www.cloudops.com/2018/02/how-to-deploy-consul-in-gcp-using-terraform-your-first-step-towards-devops-automation/" target="_blank"><img class="size-full wp-image-749 alignright" title="Part 1"  style="float: right; width: 250px;" src="/images/blog/post/Meme1final.png" alt="Automate Things" width="250" height="150"></a><br> <a href="https://www.cloudops.com/2018/02/how-to-deploy-consul-in-gcp-using-terraform-your-first-step-towards-devops-automation/" target="_blank">Part 1 – How to Deploy Consul in GCP using Terraform: Your First Step Towards DevOps Automation</a></h3><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><h3><a href="https://www.cloudops.com/2018/03/creating-infrastructure-as-code-with-packer-and-terraform-on-gcp-your-second-step-towards-devops-automation/" target="_blank"><img class="size-full wp-image-749 alignright" title="Part 2" style="float: right; width: 250px;" src="/images/blog/post/Meme2.jpg" alt="Automate Things" width="250" height="150"></a><br> <a href="https://www.cloudops.com/2018/03/creating-infrastructure-as-code-with-packer-and-terraform-on-gcp-your-second-step-towards-devops-automation/" target="_blank">Part 2 – Creating Infrastructure as Code with Packer and Terraform on GCP: Your Second Step Towards DevOps Automation</a></h3><p>&nbsp;</p><p>&nbsp;</p><h3><img class="size-full wp-image-749 alignleft" title="Stacy Véronneau" style="width: 130px; float:left; padding: 0 10px 10px 0;" src="/images/blog/post/unnamed.jpg" alt="" width="130" height="150">Stacy Véronneau</h3><p>A Senior Cloud Architect at CloudOps, Stacy Véronneau also works closely with Google Cloud Platform (GCP) and OpenStack. He’s currently working with Google to help customers migrate to GCP and fully leverage its power. Additionally, he is an official OpenStack Ambassador and has spoken at OpenStack Summits. Stacy is actively involved in community events and runs meetups throughout Canada.</p><p>&nbsp;</p><p><small>Photo credits: Emma De Angelis and memegenerator.net</small></p></div>