---
title: "Takeaways from Liz Rice: Pop-Up Meetup on Container Security"
lastmod: "2018-10-09"
author: "CloudOps"
resources:
- name: "thumbnail"
  src: "LizRice.png"
class_name: "blog post"
aliases:
  - /2018/10/takeaways-from-liz-rice-pop-up-meetup-on-container-security/
  - /takeaways-from-liz-rice-pop-up-meetup-on-container-security/
---

<p>Last night’s pop-up meetup featured <a href="https://twitter.com/lizrice" target="_blank" rel="noopener noreferrer">Liz Rice</a>, a renowned expert in container security and technical evangelist at <a href="https://www.aquasec.com/" target="_blank" rel="noopener noreferrer">Aqua Security</a>. As an active participant of the CNCF and as co-chair of KubeCon and CloudNativeCon, Liz was able to share her extensive experience with cloud native technologies. The event took place on October 4th at Complexe Desjardins. <a href="https://speakerdeck.com/lizrice/securing-your-code-when-you-dont-even-know-where-its-running" target="_blank" rel="noopener noreferrer">View&nbsp;Liz’s slide deck here.</a></p>

<p>The evening began with a fireside chat where Robert Masse, Partner and Risk Advisor at Deloitte, and Marc Pare, CCO at CloudOps, interviewed Liz. It was agreed all organizations will suffer from a data breach at some point and should plan for it by thinking how cloud native approaches can provide opportunities for streamlining security. A community meetup followed immediately and consisted of an introduction by Luc St-Arnaud from Desjardins, an update of the CNCF landscape by Ayrat Khayretdinov, and a presentation by Liz on securing container deployments.</p>

<p>To begin, Liz explained how the definition of cloud native has changed in the past few years and no longer requires containers and microservices. It now refers to applications that are scalable, automatable, and that easily develop and deploy software. Containers will probably be the most effective means of making an application cloud native, but they themselves are no longer intrinsic to the definition. Becoming cloud native will not by default make your application any more or less secure, but it will provide you with opportunities to secure your pipeline at scale. In summary of Liz’s presentations, here are five ways that you can help secure your containers if they are a part of your cloud native strategy.</p>

<p><strong>Know your Goals</strong> – Understand what you hope to accomplish from containers before you adopt them. Do you want to become more agile? Do you want to spend less time deploying software? Defining what you want will allow you to use each opportunity and align your overall strategy in line with that goal. It will allow you to find niche solutions that suit your unique requirements.<br><img style="float: right; margin: 5px 0 20px 20px;  width: 60%;" src="/images/blog/post/EXECEVENT.jpg" alt="LizRice" width="60%"></p>

<p><strong>Expose your Forgotten Data</strong> – Data can easily be forgotten about at the micro level and vulnerabilities may hide in obscure and unknown places. Dated versions of Kubernetes that were installed with poor security can be forgotten. API access can be left open and vulnerable. Impatient development teams can create Shadow IT by circumventing legacy IT systems and not ensuring deployments are in line with organizational practices. Code that is not known by IT teams cannot be monitored or secured.</p>

<p><strong>Automation is Key</strong> – Integrating security processes into CI/CD pipelines depends on automation. This is especially true for containerized applications. Patching vulnerabilities manually becomes impossible with so many instances in such volatile environments. Automation makes it easier to check vulnerabilities every day instead of every month and will not leave you exposed when your security expert goes on vacation.</p>

<p><strong>Start small</strong> – Avoid developing a vision that’s too big to jump into and results in nothing being done. Come up with a basic foundation and tackle components one at a time. Create minimum configuration or access control frameworks that you can then expand from. Vulnerability scanning automation can be a good start. <a href="https://github.com/aquasecurity/kube-bench" target="_blank" rel="noopener noreferrer">Kubebench</a> and <a href="https://github.com/aquasecurity/kube-hunter" target="_blank" rel="noopener noreferrer">Kubehunter</a> can be used to obtain visibility over an application. <a href="https://github.com/aquasecurity/microscanner" target="_blank" rel="noopener noreferrer">Microscanner</a> is a great free version of the AquaSec scanner.</p>

<p><strong>Shift Left</strong> – Software life cycles generally have development on the left and production on the right with security relegated to production. Shifting left involves bringing security controls and solutions back down the pipeline closer to the developer. This makes security much more efficient. If a developer downloads a vulnerability or uses the wrong set of packages, the mistake will be found before it goes through testing. Problems will be found more quickly and easily. Shifting left can involve reorganizing your team, making security, development, and operations teams interact more closely and more in line with DevOps practices. People will either be your strongest asset or your greatest weakness.<br><img  style="float: right; margin: 5px 0 20px 20px; width: 60%;" src="/images/blog/post/LIZANDARCHY2.jpg" alt="LizRice" width="60%"></p>

<p>Liz Rice’s presentations on container security discussed how cloud native processes specific to container security can result in more secure technology stacks. When done right, containers create islands of security that distribute risk and don’t rely on single-points-of-failure. The cloud can actually make it easier to limit the blast radius of data breaches. By understanding your goals, exposing your data, automating, starting small, and shifting left, you can seize the opportunities provided by cloud native architectures to secure your containers.</p>

<p>Following the fireside chat, Liz migrated to the entry hall to meet members of the community for a special Kubernetes and Cloud Native meetup. CloudOps’ CNCF ambassador, <a href="https://twitter.com/archyufa" target="_blank" rel="noopener noreferrer">Ayrat Khayretdinov</a>, provided an <a href="https://www.slideshare.net/CloudOps2005/kubernetes-112-update-and-container-security-with-liz-rice" target="_blank" rel="noopener noreferrer">overview of the CNCF landscape and an update of Kubernetes 1.12</a>.</p>

<p>Kubernetes. Kubernetes 1.12 was released recently with some pretty cool updates. Volume snapshot functionality and support for multiple runtimes via RuntimeClass were added as new features. Other features graduated. These included kubelet TLS bootstrap, kubelet certificate rotation, network policy egress IPblog, VPA and HPA with arbitrary/custom metrics, encryption at rest via KMS, and volume topology aware dynamic provisioning.</p>

<p>Other CNCF Projects. Rook, an orchestrator for distributed storage systems, was moved from the Sandbox phase to the Incubation phase. Cortex, a horizontally scalable, multi-tenant, long-term storage solution, was moved into the Sandbox. Buildpacks, an opinionated solution for building apps from source code, was elected as a new CNCF project and moved to the Sandbox. We look forward to more CNCF projects developing and evolving.</p>

<p>CloudOps was pleased to welcome Liz Rice to Montreal and hear her insight at the fireside chat and pop-up meetup. We hope to see you at more meetups to chat about all things cloud native. Our regular Kubernetes and Cloud Native meetups happen quarterly in <a href="https://www.meetup.com/Kubernetes-Montreal/" target="_blank" rel="noopener noreferrer">Montreal</a>, <a href="https://www.meetup.com/Kubernetes-Toronto/" target="_blank" rel="noopener noreferrer">Toronto</a>, <a href="https://www.meetup.com/Kubernetes-Ottawa/" target="_blank" rel="noopener noreferrer">Ottawa</a>, <a href="https://www.meetup.com/Kubernetes-Quebec/" target="_blank" rel="noopener noreferrer">Quebec City</a>, and <a href="https://www.meetup.com/Kubernetes-Kitchener-Waterloo/" target="_blank" rel="noopener noreferrer">Kitchener-Waterloo</a>.<!-- end HubSpot Call-to-Action Code --></p>

<div class="row">
    <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12 col-xs-12 cta-image">
      <img src="/images/blog/cta/white-paper.jpeg">
    </div>
</div>