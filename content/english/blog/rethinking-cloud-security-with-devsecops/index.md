---
title: Rethinking Cloud Security with DevSecOps
lastmod: "2019-07-03"
author: "CloudOps"
resources:
- name: "thumbnail"
  src: ""
class_name: "blog post"
---

<img src="/images/blog/post/RethinkingCloudSecurity.png" class="main-blog-image">

<p>DevOps is the combination of cultural philosophies, practices, and tools that increase an organization’s ability to deliver applications and services at high velocity. By removing traditional separations between development and operations, it creates dynamic pipelines of continuous integration and delivery (CI/CD) that release software in faster cycles and smaller batches. DevOps helps modernize legacy technology systems, allowing organizations to better compete in today’s data-driven software economy.</p>

<p>The adoption of DevOps tools and practices has exploded as a result, and the percentage of IT professionals working in DevOps teams increased from 16% in 2014 to 27% in 2017.<small>[1]</small> Instead of becoming a role that all organizations must fill, DevOps processes are spreading across entire pipelines. All sorts of teams are stepping outside of their silos and becoming DevOps teams in their own right.</p>

<p>This trend has coincided with the widespread containerization of application workloads. The smaller and faster release cycles that DevOps processes lead to fit naturally with the portable and ephemeral nature of containers. They can act as a counterpart to cloud native technologies, translating the increased efficiency and scalability of containerized workloads in the cloud into accelerated feature velocity that drives business value.</p>

<p>Organizations that successfully implement DevOps tools and practices therefore:</p>

<ul><li>Become twice as likely to meet commercial goals concerning profitability, market share, and productivity,</li><li>Become twice as likely to exceed noncommercial performance goals concerning the quantity and quality of products and services, operational efficiency, customer satisfaction, and overall mission goals, and&nbsp;</li><li>See a 50% growth in market capitalization over three years.<small>[2]</small></li></ul>

<p>DevOps enables digital transformation as it accelerates software delivery and the ability to pivot when needed, comply with regulations, and respond to customer feedback. For that reason, around 47% of CEOs faced pressure from their boards to digitally transform in 2017,<small>[3]</small> and it’s been estimated that half of all CIOs who have not sufficiently evolved their team’s capabilities will be displaced from their organization’s digital leadership teams by 2020.<small>[4]</small> DevOps is becoming a requirement in today’s cloudy world, but the complexity of its landscape often makes transformation an ambiguous journey.&nbsp;</p>

<p>Around 31% of the industry is not applying principles that are generally considered necessary for accelerating technology transformations, such as continuous integration and delivery, lean and agile, and collaborative work cultures.<small>[5]</small> Their delayed adoption of DevOps tools and practices may in part be because of fears surrounding their security.&nbsp;</p>

<p>Container technologies in particular have grown faster than their security could keep up, and security tends to be the most cited barrier to adopting containers in production. Likewise, the emphasis on removing silos between development and operations has often left security out, resulting in fluid and dynamic software delivery pipelines whose release cycles are held back by legacy security systems.</p>

<p>Application development traditionally considers security at the very end of the software delivery life cycle, where problems can be difficult and time-consuming. Developers may be unaware of how to prevent common security risks and create easily-avoided problems for infosec teams to fix. Large companies can often have ratios of one infosec worker for every ten infrastructure workers and one-hundred developers.<small>[6]</small> Poorly staffed or insufficiently trained infosec teams may increase the number of risks and delay the delivery of features if they have to detect and remediate security issues outside the development process. However, delays are often the result of processes. Even well staffed teams will delay releases if they must bolt on security at the end instead of integrating it into the development process.&nbsp;</p>

<p>DevSecOps integrates parts of security into DevOps pipelines. It encourages bringing security into the development phase. Containers are built directly from images created by developers who should be held responsible for performing patching within images and providing new versions of images to be run. Secure building configurations become automated so as to remain consistent throughout building, testing, and deployment. By using tools and techniques that work across multiple platforms and environments, DevSecOps makes security tools as processes as portable as the containers being secured and applied consistently throughout all stages of cloud native deployments and operations.</p>

<p>DevSecOps is an effective methodology for increasing the security of DevOps pipelines. Likewise, it helps reduce the burden on infosec teams as well as both the frequency and severity of problems. DevOps teams that perform security into software on a daily basis spend 50% less time remediating security issues than those who do so poorly and less frequently.<small>[7]</small> Just as DevOps can increase the frequency of software delivery by reflecting the short life cycles of containers, it can also increase their security.</p>

<p>While security can and should be an integral part of DevOps initiatives, the complexity of the DevOps and application platform landscape can make it difficult to know how well your organization has succeeded in adopting DevOps tools and processes. Read our white paper called <a href="https://info.cloudops.com/securing-devops-platform-saas-company">‘Securing your DevOps Platform’</a> to learn more about how you can secure your application platform.</p>

<div class="row">
    <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12 col-xs-12 cta-image">
      <img src="/images/blog/cta/white-paper.jpeg">
    </div>
</div>

<p>Learn more about how CloudOps can provide your organization with a <a href="https://www.cloudops.com/devops-platform-and-practices-assessment/">DevOps Platform and Practices Assessment (DPPA)</a> that will analyze the business impact and technical requirements of your technology stack and provide recommendations for improvement.</p>

<p>Citations:<br> <small><br> 1. Nicole Forsgren, Jez Humble, Gene Kim, Accelerate: Building and Scaling High Performing Technology Organizations (Portland, 2018), p. 10.<br> 2. <i>Ibid.</i><br> 3. Kasey Panetta, “Gartner CEO Survey,” Gartner.com, April 27, 2017, https://www.gartner.com/smarterwithgartner/2017-ceo-survey-infographic/.<br> 4. Gartner. Gartner Predicts. 2016. https://www.gartner.com/binaries/content/assets/events/keywords/infrastructure-operations-management/iome5/gartner-predicts-for-it-infrastructure-and-operations.pdf<br> 5. Rob Stroud and Elinor Klavens with Eveline Oehrlich, Aaron Kinch, and Diane Lynch, DevOps Heat Map 2017, Forrester, (Cambridge, 2017), https://www.forrester.com/report/DevOps+Heat+Map+2017/-/E-RES137782<br> 6. James Wickett, “Attacking Pipelines – Security Meets Continuous Delivery”, Slideshare.net, June 11, 2014, https://www.slideshare.net/wickett/attacking-pipelinessecurity-meets-continuous-delivery.<br> 7. Accelerate, p. 72.<br> </small></p>