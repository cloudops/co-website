---
title: "Eastern Canada’s Kubernetes and Cloud Native Meetups – Summer 2019"
lastmod: "2019-10-12"
author: "CloudOps"
resources:
- name: "thumbnail"
  src: "cover-01.jpg"
class_name: "blog post"
aliases:
    - /2019/09/eastern-canadas-kubernetes-and-cloud-native-meetups-summer-2019/
    - /eastern-canadas-kubernetes-and-cloud-native-meetups-summer-2019/
---

<p>Summer was punctuated with many great talks and cupcakes as we closed off the season with the Kubernetes Birthday Bash. Our roadshow took us to Quebec City, Montreal, Ottawa, Toronto and Kitchener-Waterloo, where our CNCF Ambassador, Ayrat Khayretdinov, relayed important news and updates from the CNCF. Most notable is KubeCon North America taking place on November 18th to 21st in San Diego. The<a href="https://events.linuxfoundation.org/events/kubecon-cloudnativecon-north-america-2019/schedule/"> full list of speakers</a> has just been released and we are happy to announce that some of our own meetup members are included in that list. Congrats to Chris Carty, Senior DevOps for the City of Ottawa, who will be presenting <a href="https://sched.co/UabP">Moving from Legacy Infrastructure to the Cloud in a Government Organization</a>!</p>

<p>We started off the meetups strong thanks to Microsoft and Mathieu Benoit who hosted us in Quebec City at LE CAMP, an incubator-accelerator dedicated to tech businesses. Artem Pogossian from Elastic joined us again to discuss how Kubernetes, while simplifying application deployment in containers, does add complexity to the daily tasks associated with managing application performance and gaining visibility into containers. His talk, called ‘Observable Kubernetes,’ provided insights from the three pillars of Kubernetes observability: logging, metrics, and tracing. He was quickly followed up by meetup veteran Anthony Dahanne, from Software AG, to talk about his contributions to the <a href="https://www.slideshare.net/anthonydahanne/contribuer-la-traduction-franaise-de-kubernetes">French documentation for Kubernetes.</a> His presentation details how to become a contributor to the project, the process for reviewing code (initiating pull requests, assigning roles), and shouting out the community of translators in the Slack. He ended the presentation by translating a page with the meetup attendees and submitting it for review. Finally, Drew Oetzel from Tigera showed us how to unlock the true powers of open source Calico to<a href="https://github.com/drew-tigera/HerdingCats/blob/master/Herding%20Cats%20Updated%2021%20Aug%202019.pdf"> implement zero trust networking for security inside Kubernetes</a>. Drew went over the basics of setting up these policies with a strong emphasis on why implementing them is so important to keeping our ever-expanding Kubernetes workloads secure.&nbsp;</p>

<p>Back in our home city of Montreal, we were greeted with a full house over at Nuances Communications, who graciously sponsored the venue and food along with Harness.io. Nuances started off with a lightning talk by Thibault Cohen to showcase what you can do with K3S and using this lite version of K8s at home. The Kubernetes Ecosystem has seen a great expansion in workloads previously, though not placeable on the container orchestrator thanks to Operators [or CRDs + Controllers]. These mechanisms allow for workflows to execute inside of Kubernetes; for example if wanting to use an Operator, have the ability to lay down or configure application cluster infrastructure to be usable inside of K8s.&nbsp; Rarely is software in a vacuum or only one step, Ravi Lachhman of Harness.io took a look at the increasingly complex CNCF landscape and the similarly complex arguments for bootstrapping in his talk<a href="https://www.slideshare.net/CloudOps2005/human-no-machine-yes-welcome-to-the-cdf-with-incremental-confidence"> “Human no, machine yes – Welcome to one of the latest Linux Foundation sub-organizations, the CDF”</a>. Scott Cranton of Solo.io joined us for the rest of our roadshow across Eastern Canada to present about Gloo and <a href="https://www.slideshare.net/Soloio_inc/aug-2018-gloo-api-gateway-for-kubernetes">API Gateways and Service Mesh for Kubernetes</a>, where he showed how they leveraged Envoy Proxy and Kubernetes to build and operationalize Gloo Gateway, a multipurpose yet lightweight gateway for APIs, Knative serving and Kubernetes Ingress that seamlessly integrates to Service Mesh with the Service Mesh Hub – a mesh agnostic dashboard for installing and operating meshes. They covered how the pluggable and extensible architecture of both Gloo and Service Mesh Hug make it easy to use and easy to build for your Kubernetes-based applications. The presentation was followed by<a href="https://www.slideshare.net/CloudOps2005/transforming-hr-with-solo-and-google-cloud-a-dteck-case-study"> a case study by a local Montreal HR tech startup D-TECK</a>, where their CTO, Félix Roberge, offered a high-level glimpse into their journey to production with GCP, K8s, Gloo, Helm, Terraform, gRPC and more.&nbsp;</p>

<p>In Ottawa, we were once again greeted by a full house, where Survey Monkey very generously sponsored our food and beverages at their brand new offices. The event combined our K8s &amp; Cloud Native meetup with the Ottawa GDG group. Scott Cranton of Solo.io presented once again with Félix Roberge of D-TECK. Similarly, Artem Pogossian of Elastic joined us to talk about the three pillars of observability. The CNCF sponsored all of our lovely cupcakes for the 5 year Kubernetes Birthday Celebration.</p>

<p> The following week saw equally great attendance, we were greeted with a sold-out show in Toronto! Meetup alum David Doyle was kind enough to host us at Connected.io where they sponsored our food, beverages and some amazing interactive crowd tools. He previously presented his KubeCon talk at our meetups and we highly encourage you to check out ‘<a href="https://www.youtube.com/watch?v=gaq2Jmjrugg">Our Journey to Service 5 Million Messaging Connections on Kubernetes: Bose’</a>. We once again had the pleasure of being able to invite Lindsey Tulloch to give a condensed version of her talk with Bob Killen from KubeCon EU of this year <a href="https://www.youtube.com/watch?v=E09XTOWbBKw">‘Kubernetes the New Research Platform’</a>, or as Lindsey renamed it, <a href="https://www.slideshare.net/CloudOps2005/the-salmon-algorithm-spawning-with-kubernetes">‘The Salmon Algorithm: Spawning with Kubernetes’</a>. She discussed some difficulties faced by academic institutions and how Kubernetes offers an extensible solution to support the future of research. She showcased a selection of projects currently benefiting from Kubernetes enabled tools, like Argo, Kubeflow, and kube-batch. She demonstrated these workflows using specific examples from two large research institutions: Compute Canada, Canada’s national computation research consortium and the University of Michigan, one of the largest public Universities in the United States. Lindsey has previously presented &nbsp;‘<a href="https://www.slideshare.net/CloudOps2005/sig-multicluster-and-the-path-to-federation">SIG Multicluster and the Path to Federation</a>’ at our meetups and will be joining us at the Kitchener-Waterloo Meetup in the future. Speaking of…</p>

<p> We ended the birthday roadshow on a high note in Kitchener-Waterloo, where our local meetup organizer, Chris Vollick from Shopify, hosted us at their impressive offices. We took this opportunity to hand the mic back to the community and let you share with us how you have been using Kubernetes in a Show-And-Tell. While munching on Knative-themed cupcakes, many people shared their stories about being early adopters and spearheading a cloud native approach with a dedicated team that they helped grow, others were studying for their <a href="https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/">CKA</a> and a great number were still working with legacy systems. In the future, we hope to spend more time helping our newer community members map out the ever-expanding CNCF landscape and navigate it with confidence by offering mini-workshops and training sessions. And that’s a wrap for Summer!</p>

<p> We are proud to announce that Canadian Kubernetes and Cloud Native Meetup will now be supported by two new sponsors: StackRox and D2IQ (previously Mesosphere). We look forward to their contributions and hearing about how they have been leveraging cloud native technologies.&nbsp;</p>

<p>We’re excited to announce that DevOpsDays is coming back to Montreal for a second year! Taking place on November 5 and 6, the event will celebrate the vibrancy of Montreal’s tech community. <a href="https://www.eiseverywhere.com/ereg/index.php?eventid=458530&amp;">Don’t forget to buy your ticket while you still can.</a></p>

<div class="wp-block-image"><img style="width: 140px; float: left; margin: 5px 20px 20px 0;" src="/images/blog/post/40841362_10156601204613728_8051974506358505472_n.jpg" alt=""></div>
<h2>Carol Trang</h2>
<p>Carol Trang is Community Manager at CloudOps and organizer of the Eastern Canadian Kubernetes and Cloud Native Meetups. She is also part of the organizing committee for DevOpsDays Montreal and Cloud Native Day Montreal. Community lead and organiser of Montreal Conmunity Meetups Powered by Twitch, Carol brings a background in gaming to the Cloud Native landscape. She looks forward to helping the community level-up before exploring the Cloud Native landscape.</p>

<img src="/images/blog/post/TO-Connectedio-Q3-2019.jpg" class="main-blog-image">
<p></p>
<img src="/images/blog/post/Survey-Monkey-OTT.jpeg" class="main-blog-image">
<p></p>
<img src="/images/blog/post/QC-LECAMP.jpg" class="main-blog-image">
<p></p>
<img src="/images/blog/post/QC-LECAMP-1.jpg" class="main-blog-image">
<p></p>
<img src="/images/blog/post/OTT-Survey-Monkey.jpeg" class="main-blog-image">
<p></p>
<img src="/images/blog/post/OTT-Scott-Cranton.jpeg" class="main-blog-image">
<p></p>
<img src="/images/blog/post/MTL-Nuance.jpg" class="main-blog-image">
<p></p>
<img src="/images/blog/post/soloio.jpeg" class="main-blog-image">
<p></p>
<img src="/images/blog/post/LindseyTulloch.jpg" class="main-blog-image">
<p></p>
<img src="/images/blog/post/KW-Meetup-Q3-2019.jpg" class="main-blog-image">
<p></p>
<img src="/images/blog/post/20190827_193143-2.jpg" class="main-blog-image">
<p></p>
<img src="/images/blog/post/20190827_181739-2.jpg" class="main-blog-image">
<p></p>
<img src="/images/blog/post/KW-Meetup-Q3-2019-2.jpg" class="main-blog-image">
<p></p>
<img src="/images/blog/post/20190827_180625-2.jpg" class="main-blog-image">