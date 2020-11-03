---
title: "A Brief Guide to Securing Containers at Scale"
lastmod: "2019-01-29"
author: "CloudOps"
description: Keep your container deployments secure with these 5 key best practices.
resources:
- name: "thumbnail"
  src: "ContainerSecurity.png"
- name: "cover"
  src: "ContainerSecurity-cover.png"
class_name: "blog post"
---

<p>Containers have changed the way we run applications, providing means to greatly increase their speed, scalability, and efficiency. They are a form of operating system virtualization that is combined with application software packaging to create portable, reusable, and automatable ways of packaging and running applications. Ever since Kubernetes, the container orchestration system, was open sourced in 2015, the landscape of cloud native technologies has exploded alongside wide-ranging commercial adoption.</p>

<p>But container technologies have developed at such a fast pace that their security has often not had time to keep up. As a result, many cybersecurity professionals have claimed <a href="https://www.csoonline.com/article/3273347/security/containers-are-here-what-about-container-security.html">the rapid growth and proliferation of application containers have led to numerous security issues.</a> Container security is often seen as murky water, and <a href="https://www.csoonline.com/article/2984543/vulnerabilities/as-containers-take-off-so-do-security-concerns.html">over 60% of enterprises using containers for development and testing cited security as a major barrier</a> to adopting containers in production. Containers lack the longevity of VMs, and therefore don’t seem to have as many tried and true best practices for maintaining security.</p>

<p>But you can secure your pipeline at scale with containers as long as you change the way you approach security. Traditional practices for securing VMs don’t apply to containerized landscapes. Compared to VMs, containers have many more instances, change at a faster rate, and have much more ephemeral networking. For example, containers change IP addresses frequently, meaning they can’t be secured by traditional techniques that rely on the static IP addresses usually found in VM and bare metal servers. Security must be rethought in containerized environments.</p>

<p>In 2017 the National Institute of Standards and Technology (NIST) published the <a href="https://csrc.nist.gov/CSRC/media/Publications/sp/800-190/draft/documents/sp800-190-draft.pdf"><em>Application Container Security Guide</em></a><em>.</em> It outlines potential security concerns associated with the use of containers and provides recommendations. Here are five key takeaways.</p>

<h2>Shift Left</h2>

<p>Containers encourage shifting responsibility from operations to development. This is necessary for the dynamic CI/CD pipelines that are characteristic of DevOps practices. Containers are built directly from images created by developers, who are responsible for performing patching within the images and providing new versions of images to be run. Rethinking container security means baking operations into development with the help of a constant feedback loop.</p>

<p>DevSecOps, the philosophy of integrating security into DevOps processes, will increase operational security by allowing security to become as portable as the containers being guarded. It will encourage the adoption of techniques and tools that are open and can work across multiple platforms and environments. Secure building configurations become automated so as to remain consistent throughout building, testing, and deployment. Container security means making security an integral part of all release cycles instead of a side concern to be picked up by operations down the pipeline.</p>

<h2>Reduce attack surfaces</h2>

<p>Containerized applications are comprised of more instances than their VM-based equivalents. This broader attack surface means that there are many more vulnerabilities that hackers can exploit. These attack surfaces can be shrunk by replacing general-purpose OSes with container-specific equivalents, such as CoreOS, that disable services and functionalities not necessary for running containers. Being so low in your technology stack, any failure in your OS will impact all containers and applications running on its hosts. Build small, build minimally, and only build what you need.</p>

<h2>Adopt container-specific image vulnerability management tools and processes</h2>

<p>Adopt tools that encourage the pipeline-based build approach and immutable nature of containers. Container-specific tools, such as <a href="https://t.sidekickopen75.com/s1t/c/5/f18dQhb0S7lM8dDMPbW2n0x6l2B9nMJN7t5X-FdSD1CW7fRVsP3MPb0nV19DCW3QqW6x103?t=http%3A%2F%2Fgithub.com%2Faquasecurity%2Fmicroscanner&amp;si=7000000000395463&amp;pi=f4aeb9b1-196d-49e1-f943-4bbee4cbd32c">Microscanner</a> (Aqua Security’s free image vulnerability scanner), will be more able to understand the traffic in distributed networks and enforce security policies. They won’t make assumptions about host durability, app update mechanisms and frequencies, specific cloud providers, host OSes, network topologies, or runtime environments which may change. Rethinking security for containerized environments means overcoming mismatches in tooling and avoiding narrow solutions. Both the processes of an organization and the toolings used must support the new ways of developing, running, and supporting applications made possible by containerization.</p>

<h2>Group containers by relative sensitivity and limit unbounded network access</h2>

<p>Containers are more distributed but less isolated than VMs. Containers within unbounded networks can access each other and their hosts; once a container is exploited, all other containers within its kernel are also compromised. The blast radius of breaches can be minimized by isolating containers grouped according to relative sensitivity on different host OS kernels. To further reduce this blast radius or prevent exploits altogether, Kubernetes network security and pod security policies can prevent unbounded network access. Commercial solutions, such as <a href="https://t.sidekickopen75.com/s1t/c/5/f18dQhb0S7lM8dDMPbW2n0x6l2B9nMJN7t5X-FdSD1CW7fRVsP3MPb0nV19DCW3QqW6x103?t=http%3A%2F%2Faquasec.com%2F&amp;si=7000000000395463&amp;pi=f4aeb9b1-196d-49e1-f943-4bbee4cbd32c">Aqua’s CSP</a>, can do so by limiting network behaviour, executables, and file access.</p>

<h2>Automate runtime configurations</h2>

<p>Make monitoring much easier by creating standards for each type of container runtime and automating their configuration. CIS Benchmarks for Docker and Kubernetes give guidance for container-specific best practices. The open source tool <a href="https://t.sidekickopen75.com/s1t/c/5/f18dQhb0S7lM8dDMPbW2n0x6l2B9nMJN7t5X-FdSD1CW7fRVsP3MPb0nV19DCW3QqW6x103?t=http%3A%2F%2Fgithub.com%2Faquasecurity%2Fkube-bench&amp;si=7000000000395463&amp;pi=f4aeb9b1-196d-49e1-f943-4bbee4cbd32c">kube-bench</a> automates testing for compliance with the CIS Kubernetes benchmark. Doing so will let you respond to vulnerabilities faster and with less operational burden. This should itself be a natural extension of shifting responsibility left as it is part of automating operations into the development phase.</p>

<p><strong>Containers are no less secure than VMs, but their security can require completely different processes and tools.</strong> Security must be made part of a wider DevOps practice that shifts responsibility left, reduces attack surfaces, uses container-specific and tools, groups containers, and automates as much as possible.</p>

<p>Building your deployments around container-specific best practices is essential for securing your containerized application. It will provide you with opportunities to secure your software delivery pipelines at scale and better align your operational practices with your organization’s specific goals.</p>

<div class="row">
    <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12 col-xs-12 cta-image">
    <a href="/resources/white-papers/how-to-initiate-devops-transformation-by-assessing-culture-and-processes/">
      <img src="/images/blog/cta/white-paper.jpeg">
    </a>
    </div>
</div>