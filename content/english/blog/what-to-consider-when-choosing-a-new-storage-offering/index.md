---
title: What to Consider When Choosing a New Storage Offering
date: "2021-04-30"
author: "CloudOps"
description: Whether you transition your storage gears to an equivalent system or opt for a wildly different strategy, there are three approaches to software-defined storage we at CloudOps generally recommend to our customers.
resources:
- name: "thumbnail"
  src: "DataStorage-thumbnail.png"
- name: "cover"
  src: "DataStorage-cover.png"
class_name: "blog post"
aliases:
keywords: [cloud ops, cloud storage, pure, portworx, cloud storage migration, cloud storage vendor]
tags:
---


<p>The number and variety of storage offerings have exploded in recent years, and there are many factors to take into consideration when migrating to a new storage platform. Whether you transition your storage gears to an equivalent system or opt for a wildly different strategy, there are three approaches to software-defined storage we at CloudOps generally recommend to our customers.</p>

<h3>DIY</h3>

<p>Consider building and operating your own storage offering with open source tools including <a href="https://www.cloudops.com/blog/the-ultimate-rook-and-ceph-survival-guide/">Rook and Ceph</a>. This option will give you the most flexibility but with the greatest risk. Packaged out-of-the-box offerings are far more straightforward to implement. Building your own DIY storage solution will be complicated, time-consuming, and leave little room for error. Unless your team already has experience working open source storage tools, you probably don’t want them learning in the middle of a migration.</p>

<h3>Storage Vendor</h3>

<p>Enterprises migrating to a new storage offering may decide to stick with a hardware vendor or continue running infra in a data center, as it is backed by either the cloud or local storage on the host. While the drawback of migrating to a traditional storage vendor is the upfront capital expenditure required, new storage-as-a-service offerings mean you don’t have to invest in hardware from the beginning and can instead opt for an OpEx model. Storage can be bought as needed and at a reasonable price. We at CloudOps have partnered with Pure, as it is the industry leader in the delivery of storage-as-a-service. Storage vendors are increasingly allowing you to create hybrid- and multi-cloud deployments, and <a href="https://www.purestorage.com/">Pure Storage's</a> offering also includes support for hyperscale clouds.</p>

<h3>Cloud Native Storage</h3>

<p>Keep in mind that you don’t have to buy storage hardware unless it makes sense. You can put a control plane in your clusters and leverage local storage as though it were delivered by a storage vendor. By moving the control plane off stack, the cloud native approach abstracts the storage away from the underlying infra in the data center. It ideally gives you the same functionality of any vendor-based storage controller - only on commodity drives available anywhere and without rack infra.</p>

<p><a href="https://portworx.com/">Portworx</a> (recently acquired by Pure) supports hybrid and multi-cloud scenarios by providing you with a single storage controller and interfacing for all your applications, whether deployed in <a href="https://cloud.ca/">cloud.ca</a>, GCP, or on-prem. It grants your applications portability and independence from the services of a rack storage solution. If you need a vendor-agnostic storage platform with a consistent storage interface and don’t know where your infra will run in the long-term, you are going cloud native across the board and may want to consider Portworx for storage.</p>

<p>Building a DIY storage solution may work well for teams well-experienced in Rook, Ceph, and similar open source tools, but it could be a nightmare for teams just figuring it out. Opting for a storage vendor with rack hardware devices and an as-a-service offering will give you an easy migration process with a manageable OpEx model. Choosing a software controller play will allow you not to depend on specific vendor hardware in your data centers, and it will give you long-term flexibility for a cloud native approach.</p>

<p>Before deciding which option is best for your organization, take stock of your current storage consumption. Are you taking advantage of a hybrid storage offering or an all-flash option? Have you created multiple tiers that leverage both? Does your storage vendor have an offering for Kubernetes? The process of migration will be easier if you know your starting point.</p>

<p>CloudOps’ <a href="https://www.cloudops.com/cloud-native-consulting/">Cloud Native Consulting</a> will save you time in assessing your current storage consumption before finding and implementing the right solution. You will have the certainty that comes with working with a team of experts who have customizable recipes, tools, automation scripts, and a diverse history of projects under their belts. With our <a href="https://www.cloudops.com/managed-services-augmented-support/">Managed Services and Augmented Support</a>, we leverage our deep expertise, experience, and wide variety of client engagements to manage your day-to-day operations and help you solve problems before they get in the way. <a href="https://www.cloudops.com/contact-us/">Contact us</a> to learn how we can help you.</p>

<!--HubSpot Call-to-Action Code --><span class="hs-cta-wrapper" id="hs-cta-wrapper-8b7bfc51-b5a2-4b5a-b64d-417b0d15d585"><span class="hs-cta-node hs-cta-8b7bfc51-b5a2-4b5a-b64d-417b0d15d585" id="hs-cta-8b7bfc51-b5a2-4b5a-b64d-417b0d15d585"><!--[if lte IE 8]><div id="hs-cta-ie-element"></div><![endif]--><a href="https://cta-redirect.hubspot.com/cta/redirect/732832/8b7bfc51-b5a2-4b5a-b64d-417b0d15d585"  target="_blank" ><img class="hs-cta-img" id="hs-cta-img-8b7bfc51-b5a2-4b5a-b64d-417b0d15d585" style="border-width:0px; width:100%" src="https://no-cache.hubspot.com/cta/default/732832/8b7bfc51-b5a2-4b5a-b64d-417b0d15d585.png"  alt="New call-to-action"/></a></span><script charset="utf-8" src="https://js.hscta.net/cta/current.js"></script><script type="text/javascript"> hbspt.cta.load(732832, '8b7bfc51-b5a2-4b5a-b64d-417b0d15d585', {"region":"na1"}); </script></span><!-- end HubSpot Call-to-Action Code -->