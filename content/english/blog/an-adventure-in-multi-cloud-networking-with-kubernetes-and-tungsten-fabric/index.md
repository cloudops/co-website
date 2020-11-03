---
title: "An Adventure in Multi-Cloud Networking with Kubernetes and Tungsten Fabric"
lastmod: "2019-04-03"
author: "CloudOps"
description: I embarked on a small adventure to try networking together two different Kubernetes clusters with Tungsten Fabric.
resources:
- name: "thumbnail"
  src: "TungstenFabric.png"
class_name: "blog post"
aliases:
  - /2019/04/an-adventure-in-multi-cloud-networking-with-kubernetes-and-tungsten-fabric/
  - /an-adventure-in-multi-cloud-networking-with-kubernetes-and-tungsten-fabric/
keywords: 
tags:
---

<p>With a couple weeks before KubeCon and an impending presentation, I embarked on a small adventure to try networking together two different Kubernetes clusters with Tungsten Fabric, the goal being to do a live demo at the Tungsten Fabric Developers Summit.</p>

<p>The demo was designed to be a simplified illustration of the broader hybrid/multi-cloud use case of connecting two distinct networks in the context of Kubernetes. This use case is especially interesting in the context of migrating a set of services to Kubernetes, while still maintaining connectivity to other services in the legacy network. &nbsp;I knew Tungsten Fabric (TF) supported connecting different sites together through BGP, but I had never actually installed or used Tungsten Fabric. I expected it to be a ‘trial by fire’ experience, so off I set on an adventure!</p>

<p>As with most of my experimentation, I knew that my compass on this journey would be the automation to produce the results I wanted. Only through automation can I be sure that I am able to consistently reproduce my setup and ensure that my demo will go off without incident. Given our experience automating Kubernetes (K8s) at CloudOps, I already had a starting point. That said, our automation is very extensive and is a bit draconian when it comes to network security and who can talk to who. &nbsp;Since I didn’t know the connectivity requirements that TF was going to need, I decided to step back and implement an extremely bare bones K8s deployment in order to minimize the moving pieces.</p>

<p>After a bit of searching, I found the following two references which covered the initial configuration I was trying to achieve: (an earlier version of) <a href="https://tungstenfabric.github.io/website/Tungsten-Fabric-Centos-one-line-install-on-k8s.html">TF one line install on K8s</a> and <a href="https://github.com/Juniper/contrail-controller/wiki/Install-K8s-using-Kubeadm">Install K8s using kubeadm</a> (which covers the disabling of the default CNI config). These two references offered a solid basis for getting TF deployed as the container network interface (CNI) for K8s. &nbsp;</p>

<p>As I got into the deploy, test, fix, redeploy cycle of getting an initial working environment in place, I ran into a few issues with the documentation. This created some challenges.</p>
<div class="tabbed-text">
<p>The command specified in the ‘TF one line install’ guide has some issues with the static website generation removing specific parts of the command. Because of this, the information on the website is not actually correct or useable and you need to find the actual <a href="https://github.com/tungstenfabric/website/blob/master/Tungsten-Fabric-Centos-one-line-install-on-k8s.md">source code of the website</a> to be able to know what the working commands are. I believe this is due to the fact that the special characters of `{{` and `}}` are treated as variables in the static site generation platform, so they are replaced with empty strings.</p>
<p>No minimum hardware requirements are documented for running TF. It took me a few tries and some time on the <a href="https://tungstenfabric.slack.com">TF Slack channel</a> to understand that I needed at least 32GB of RAM and over 50GB of disk space to launch TF.</p>
<p>The supported versions of Docker and Kubernetes are not published (from what I can tell). When I was doing my testing, the latest version of K8s was not supported (not sure if that is still the case), but the documentation would ideally specify which versions of K8s are supported when deploying TF as a CNI.</p></div>

<p>The majority of the challenges I faced regarding the lack of documentation were overcome by the feedback I received from the TF community through its active Slack channel.</p>

<p>At this point, I was pretty confident I had gotten through the weeds and was well on my way, but this is when things got really interesting. As I watched all my TF pods coming up in K8s, it looked like everything was coming up correctly and then poof, my connection to the host was lost. Alright, no worries, I will just SSH back into the VM and pick up where I left off. That was easier said than done as my VM no longer responded to SSH. I had my VM configured to use SSH keys and I didn’t have a local password. Without SSH, I lost all access to the VM. I even had problems setting a password on the VM because the functionality required network connectivity and it seemed that the networking stack on my host was completely borked.</p>

<p>After troubleshooting and communicating with the community on Slack, Moh Ahmed (@Moh), one of the engineers from <a href="https://www.cengn.ca/">CENGN</a> pointed me towards the root cause. &nbsp;Essentially, the ‘TF one line install’ script configures the following, `VROUTER_GATEWAY: {{ K8S_MASTER_IP }}`, but unfortunately this is not correct. Instead of the IP of the K8s master, the `VROUTER_GATEWAY` variable should be set to the gateway of the underlay network. After making this change and redeploying, everything came up and I had a working Tungsten Fabric deployment as the CNI for my Kubernetes cluster. There is still a small hiccup with the connectivity to the node as TF modifies the host’s networking stack, but everything comes back as expected.</p>

<p>Now that I have a working K8s cluster with TF acting as my CNI, I just needed to spin up a second K8s cluster with the same config and then BGP peer them together, or so I thought. Setting up the second K8s cluster with TF was easy due to my automation. Additionally, configuring the BGP peering between the two TF deployments was also very easy. All I needed to do was register each TF deployment with the other as a BGP Router after changing the default BGP AS unique identifier on one of the TF deployments so they each had a unique AS number. I was amazed by how easy this configuration was, even for someone who had never worked with TF before. Now I was able to ping services between two different K8s clusters. &nbsp;Life is good. However, I found that over time things started to act up. I could only ping K8s services in one direction and not in the other direction, and other such things. I was pretty sure this was a configuration problem on my part and not TF since, if I am honest, I didn’t expect this configuration to work at all. I was using the same IP space in both clusters for the pod subnet, service subnet and the IP fabric subnet and I expected this to cause problems when the two environments were BGP peered together.</p>

<p>So how do I change which CIDR / subnet is used when deploying these K8s + TF environments so their subnets don’t overlap? Naturally, I started by adding the `–pod-network-cidr` and `–service-cidr` flags to the `kubeadm init` command, but this did not have the desired effect. Tungsten Fabric still used the default subnets even though Kubernetes was configured to use different CIDRs. I could not find any documentation on the TF website or any related resources for how to modify these subnets. After reviewing the code and doing some trial and error, I was able to isolate that the configuration should be applied to the `kube-manager-config` ConfigMap in K8s. Once I confirmed that, I had to figure out what the field names were that controlled the relevant configuration since I was not able to find any documentation which covered this information. I was able to isolate and verify that setting the following fields, `KUBERNETES_POD_SUBNETS`, `KUBERNETES_SERVICE_SUBNETS`, `KUBERNETES_IP_FABRIC_SUBNETS`, in the ConfigMap, combined with the addition of the config flags to the `kubeadm init` command to reference the same CIDRs, produced the expected result.</p>

<p>Here is the resulting ConfigMap which I used to configure custom CIDRs for my deployment:</p>

<pre><code>
```
apiVersion: v1
kind: ConfigMap
metadata:
  name: kube-manager-config
  namespace: kube-system
data:
  KUBERNETES_API_SERVER: {{ K8S_MASTER_IP }}
  KUBERNETES_API_SECURE_PORT: "6443"
  K8S_TOKEN_FILE: "/tmp/serviceaccount/token"
  # --- additional config below --- #
  KUBERNETES_POD_SUBNETS: 10.48.0.0/12
  KUBERNETES_SERVICE_SUBNETS: 10.112.0.0/12
  KUBERNETES_IP_FABRIC_SUBNETS: 10.80.0.0/12
```

</code></pre>

<p>Once I ensured that the two K8s + TF deployments did not have overlapping IP ranges, all of the strange behaviour disappeared and everything worked as expected. While it was a bit of a journey to deploy this implementation, it was not due to a lack of quality of Tungsten Fabric. In fact, I found Tungsten Fabric to be very easy to work with and quite mature as a product once up and running. The fact that I could simply BGP peer two environments together and everything ‘just worked’ is amazing. I have evaluated a lot of different software and will say that I have been very impressed with the architecture and implementation of Tungsten Fabric. That said, the majority of the stumbling blocks I faced were related to a lack of documentation, or errors in the documentation. This problem is well understood in the TF community and it is being actively worked on. As the TF project continues its transition into the <a href="https://www.linuxfoundation.org/press-release/2018/08/linux-foundation-networking-lfn-continues-rapid-global-growth-with-addition-of-eight-new-members/">Linux Foundation Networking (LFN)</a> governance body, there is a lot of focus on improving its accessibility and predictability. With this community focus on making TF more widely available to the growing audience who are solving for SDN requirements, I think TF will see a flourish of renewed interest in this mature networking platform.</p>

<p>Cross-project, cross-community components make it easier for users to control their destinies in the cloud and in their networks. This use case does so in three ways. It discourages vendor lock-in because it is an open source multi-cloud solution, platform lock-in because of its use of Kubernetes, and network lock-in because of its use of TF. At the end of the day, an application is only as good as its networking. By bridging CNCF and LFN projects, this use case could help users make their applications cloud native without compromising on the networking.</p>

<p>In closing, I want to highlight a few references:</p>

<div class="tabbed-text">
<p>If you are interested in using TF, I would strongly recommend you review the <a href="https://tungstenfabric.github.io/website/Tungsten-Fabric-Architecture.html">Tungsten Fabric Architecture</a> document. It provides a comprehensive overview of the inner workings of TF and will orient your understanding of the different components and their importance.</p>
<p>All of my automation to deploy K8s with TF as a CNI is <a href="https://github.com/cloudops/k8s_tf_demo">available on github</a>. I would like to point out that this automation is by no means production grade and as the project evolves, it may become outdated. I will try to periodically review the implementation and update it to remain functional, but if nothing else, it acts as an overview of the moving parts of using TF as the CNI in K8s.</p>
</div>

<p>We at CloudOps look forward to ramping up our engagement in the TF community (especially as it relates to using TF as the CNI for K8s across multiple clouds) and supporting the community’s efforts to be more accessible to the broader market.</p>

<p>If you’ll be at the Open Networking Summit this week, I’ll be giving a <a href="https://events.linuxfoundation.org/events/open-networking-summit-north-america-2019/features-and-add-ons/lf-networking-demos/">Linux Foundation Networking Demo</a> at the LFN Booth. This demo will show TF complementing service meshes, like Istio and Hashicorp’s Consul Connect. It will highlight TF’s cloud-agnostic network overlay implementation for Kubernetes, as well as compare its integration with service meshes in the context of handling both legacy and cloud native workloads.</p>

<p>To learn more about Kubernetes, sign up for one of our hands-on <a href="/workshops/">Docker and Kubernetes workshops</a> with the option of using TF as the CNI.</p>

<div class="row">
    <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12 col-xs-12 cta-image">
        <a href="/workshops">
      <img src="/images/blog/cta/devops-workshop.webp">
      </a>
    </div>
</div>