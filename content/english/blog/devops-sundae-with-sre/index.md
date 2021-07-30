---
title: "DevOps vs. SRE: Choosing the Right Model for Your Organization"
date: "2018-06-10"
author: "CloudOps"
description: Google first introduced Site Reliability Engineering, or SRE, to the world in 2003. Its approach is key for Infrastructure as Code.
resources:
- name: "thumbnail"
  src: "DevOpsSRE-thumbnail.png"
- name: "cover"
  src: "DevOpsSRE-cover.png"
class_name: "blog post"
aliases:
  - /2018/07/devops-sundae-with-sre/
  - /devops-sundae-with-sre/
keywords: [sre, site reliability engineering, devops vs sre]
tags:
---

<p><span style="font-weight: 400;">Google first introduced Site Reliability Engineering, or SRE, to the world in 2003. Today, they have over 1,500 site reliability engineers supporting their large-scale systems amidst a continuous development and release cycle of features. The practice of site reliability engineering seeks to extend the traditional DevOps model, moving operational responsibilities into the hands of software developers. SREs build the platform that will be used by developers and operated by operators, and they require an <a href="https://www.cloudops.com/workshops/" target="_blank" rel="noopener noreferrer">in-depth knowledge of the DevOps and cloud native landscapes</a>.</span></p>

<p><b>DevOps</b></p>

<p><span style="font-weight: 400;">DevOps is a software engineering philosophy that aims to unite the roles of development (Dev) and operations (Ops). Calling for a shared and highly automated infrastructure, DevOps demands a more fluid </span><span style="font-weight: 400;">software</span><span style="font-weight: 400;"> pipeline with active collaboration between development and operations integrated into all stages of the delivery life cycle. The resultant work methodology is lean and agile with a significantly increased pace of feature releases.</span></p>

<p><span style="font-weight: 400;">DevOps addresses the inherent conflict of interest between development and operations that can lead to a lack of responsibility from either team over problems that may arise. While developers want to continuously release new features, operators must ensure that everything runs smoothly. The more quickly features are released, the riskier and more problematic it can become to operate an application&nbsp;over the long-term. Neither developers nor operators have power of each other’s domain, creating a constant loop of passing responsibility that can lead to stagnation. </span></p>

<p><span style="font-weight: 400;">By integrating both disciplines and promoting cross-collaboration, DevOps strives to resolve this conflict of interest. Not only does this make developers more inclined to prevent future operational problems, it also builds off of the developer’s love of automation to solve problems at scale. While these practices have a potentially endless limit for scalability, the model may eventually break down under the sheer weight of its own agility and complexity as it accumulates technical debt. </span></p>

<p><b>Site Reliability Engineering</b></p>

<p><span style="font-weight: 400;">An SRE is, in many ways, an insurance policy for this accelerated rate of change, limiting the technical debt enabled by DevOps practices. Responsible for managing this rate of change, a Site Reliability Engineer will maintain end-user performance stability and oversee the quality and reliability of what’s being delivered. They will own the Service Level Agreements (SLA) of an application and provide parameters for changes to be introduced. SREs delegate responsibility as problems arise, preventing new features from being launched until operational problems are fixed. This delegated responsibility enforces collaboration between developers and operators, enhancing the monitorability, manageability, and scalability of the application.</span></p>

<p>Site Reliability Engineering essentially governs the collaboration between Dev and Ops within the web application, which is decoupled from the DevOps pipeline, emphasizing protocols for monitorability as the means to simplify collaboration. The SRE therefore extends the DevOps model by superimposing a layer of responsibility to encompass the entire model, reducing reliance on the robustness of the pipeline and making the Dev team more available to Operations.</p>

<p><span style="font-weight: 400;">An SRE holds responsibility for the reliability of the web application, which is both essential for the business model of an organization and generally where technical problems manifest. Consequently, they view the experience of the end-user as the key metric for compliance with the SLA</span><span style="font-weight: 400;">. This places the SRE in an ideal position from which to delegate responsibilities and mitigate problems impacting the SLA so as to restore the expected behaviour of the web application. In this manner, the SRE role allows for rapid problem-solving while simultaneously preserving the business’ objectives. </span></p>

<p><span style="font-weight: 400;">Ben Treynor</span><span style="font-weight: 400;">, who coined the term “SRE” at Google, has compiled a </span><a href="https://landing.google.com/sre/book/index.html" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400;">guidebook</span></a><span style="font-weight: 400;"> for implementing SRE roles. He cites five pillars as the foundation for a DevOps framework, explaining how an SRE can help an organization attain these pillars. </span></p>

<p><b>Reduce organizational silos – </b><span style="font-weight: 400;">By completely reducing the division between Dev and Ops with a superimposed layer, SRE helps bridge the gap between the development team that wants to ship things as quickly as possible and the operations team that wants to prevent anything from ‘blowing up’ in production. Ben Treynor described the role of SRE as “what happens when you ask a software engineer to design an operations function.” </span></p>

<p><span style="font-weight: 400;">The practice is both about dedicating a team of Operators to oversee the reliability of the product as well as allowing software Developers to own the ongoing daily operation of their applications in production. </span></p>

<p><b>Leverage tooling and automation – </b><span style="font-weight: 400;">Already an integral part of DevOps practices, automation is further encouraged by an SRE. It utilizes the developer’s experience with automation for problem-solving at scale tasks traditionally managed by operations. In this way, automation is extended beyond the usual Developer’s parameters to be circulated throughout an entire application. </span></p>

<p><b>Measure everything – </b><span style="font-weight: 400;">An SRE will focus on the monitorability of an application as the means by which to pinpoint problems in the pipeline and delegate responsibility. While a traditional DevOps model entails writing code, SRE instruments the code, pushing it into the web application and exposing its visibility.</span></p>

<p><b>Accept failure as normal </b><span style="font-weight: 400;">– The role of an SRE is to minimize any technical debt that arises from the increased agility of a DevOps model. As such, failure is a part of the job because not all problems can be prevented, and improvements are implemented iteratively.</span></p>

<p><b>Implement gradual change </b><span style="font-weight: 400;">– Tasked with reducing the cost of failure, an SRE must implement changes slowly so that they can be monitored. They must adapt themselves and their team to the unique needs of the organization in question, and make up their job description as they go along. In doing so, an SRE can truly own oversight of the DevOps pipeline and mitigate risk along the way. </span></p>

<p><span style="font-weight: 400;">DevOps has transformed the way we deploy applications. Within many organizations, its emphasis on collaboration has accelerated the release of features and spread of automation. SRE can be a solution to the resultant ambiguity of responsibility for problems that arise in the web application. It is an extension of DevOps practices, bringing operational functions into the hands of developers and empowering operations with reduced risk. </span><a href="https://www.ibm.com/blogs/bluemix/2017/08/site-reliability-engineering-cloud-approach-operations/" target="_blank" rel="noopener noreferrer"><span style="font-weight: 400;">Steve Strutt </span></a><span style="font-weight: 400;">has called SRE “the cloud approach to operations.”&nbsp;</span></p>

<p>Empowering operations begins with training. Our DevOps workshops will equip your technical teams with the tools and practices needed to modernize application platforms. Application developers can learn how to use such platforms, platform operators how to manage, or SREs how to build. <a href="/workshops-information">Contact us</a> to request a private workshop customized to your organization’s unique requirements, or visit our <a href="/calendar">workshop calendar</a> to find out when our next public and online workshops are.</p>

<img class="alignleft" src="/images/blog/post/will.jpg" alt="Will Stevens, CTO" width="150">
<h2>Will Stevens</h2>
<p>As CloudOps’ first employee and current CTO, Will Stevens has experienced the significant shift of organizations adopting the cloud, both from a technical and business value perspective. With a background in development, Will has worked with multiple customers to facilitate the consumption of cloud services, as well as with service providers to deliver cloud solutions. Will was the VP of Apache CloudStack and is currently a member of the Open Source Advisory Council of Canada.</p>

<!--HubSpot Call-to-Action Code --><span class="hs-cta-wrapper" id="hs-cta-wrapper-23bacd68-2a4e-4df1-b32e-abfe84760ba7"><span class="hs-cta-node hs-cta-23bacd68-2a4e-4df1-b32e-abfe84760ba7" id="hs-cta-23bacd68-2a4e-4df1-b32e-abfe84760ba7"><!--[if lte IE 8]><div id="hs-cta-ie-element"></div><![endif]--><a href="https://cta-redirect.hubspot.com/cta/redirect/732832/23bacd68-2a4e-4df1-b32e-abfe84760ba7"  target="_blank" ><img class="hs-cta-img" id="hs-cta-img-23bacd68-2a4e-4df1-b32e-abfe84760ba7" style="border-width:0px; width:100%;" src="https://no-cache.hubspot.com/cta/default/732832/23bacd68-2a4e-4df1-b32e-abfe84760ba7.png"  alt="New call-to-action"/></a></span><script charset="utf-8" src="https://js.hscta.net/cta/current.js"></script><script type="text/javascript"> hbspt.cta.load(732832, '23bacd68-2a4e-4df1-b32e-abfe84760ba7', {"region":"na1"}); </script></span><!-- end HubSpot Call-to-Action Code -->