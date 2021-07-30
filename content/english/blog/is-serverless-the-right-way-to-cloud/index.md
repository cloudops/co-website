---
title: "Is Serverless the 'Right' Way to Cloud?"
lastmod: "2021-06-01"
author: "CloudOps"
resources:
- name: "thumbnail"
  src: "ServerlessThumbnail.png"
- name: "cover"
  src: "ServerlessCover.png"
class_name: "blog post"
aliases:
---

<p>Serverless computing is taking off. Despite having been around since the announcement of Lambda by AWS in 2014 serverless is finally reaching the maturation required to propel a paradigm shift.</p>

<h2>What is ‘Serverless’ Computing?</h2>

<p>Serverless computing describes a software development pattern in which the application has no direct interaction with the server. The name serverless is a bit of a misnomer - there will always be servers, just like there has always been hardware behind EC2. The value of serverless is not having to spend your resources managing them. You are free to use your resources only where necessary or valuable.</p>

<p>Serverless products like AWS Lambda, Azure Functions, or Google Cloud Functions lead to solutions that are faster, greener, and more agile. This is why we say it can be the 'right' way to cloud.</p>

<h2>Cloud Native and Serverless Computing</h2>

<p>For the last few years, cloud native has been the north star for application modernization. The Cloud Native Computing Foundation (<a href="https://www.cncf.io/">CNCF</a>) uses the term to describe building applications using Kubernetes, a container orchestration system, as the delivery mechanism. This space has added tremendous value to customers and helped developers deploy existing applications in more elastic and sustainable ways with Infrastructure as Code.</p>

<p>For established companies with established codebases, containerization allows companies to migrate existing applications into the cloud. This is where Kubernetes and the cloud native movement are easy (or rather easier) wins. Many organizations have embraced cloud native architectures to become more efficient, scalable, and agile in the process.</p>

<p>Serverless computing may appear to be an offshoot of cloud native computing, as it extends the benefits of cloud native. In reality, it’s driving a paradigm shift.</p>

<blockquote>"Serverless app development isn’t an incremental change. It’s a complete reset in terms of the speed, cost, and scalability of what can be built."
<br> Adrian Cockroft, VP Cloud Architecture Strategy at AWS</blockquote>

<h2>Serverless Solutions for Event-Driven Applications</h2>

<p>Serverless computing requires a departure from traditional ways of thinking that have proven useful for containerization and cloud native computing, because it requires you to think asynchronously. Serverless computing shines when applied to event-driven models, where applications respond to events (state changes) as they occur. It works well with code that is loaded and becomes the glue bringing together events and downstream systems or other event processors. Serverless services like Lambda allow us to spawn instances of code in response to events and only pay for the compute power being used.</p>

<p>Sam Newman detailed how serverless computing requires us to think differently about how we build in a talk called <a href="https://www.youtube.com/watch?v=Mz-b-rQ9wL0&feature=youtu.be">'Where We're Going, We Don't Need Servers'</a> that he presented at GOTO 2020.</p>

<h2>We Can Do Better!</h2>

<p>It’s never easy to admit there might be a better way of doing things - especially when you’ve been doing things one way for so long. But it’s time to ask new questions, as serverless technologies and event-driven applications can lead to solutions that have more speed, agility, environmental greenness, and differentiated value.</p>

<h3>1. Speed</h3>

<p>There’s no doubt the movement to the cloud (when done well) has allowed organizations to operate more efficiently in today’s digital world. Event-driven design extends this efficiency, as it simplifies the applications themselves. Functions as a Service (FaaS) in particular allows you to write and deploy smaller pieces of code without having to worry about any infrastructure. This means applications can be run more quickly.</p>

<h3>2. Agility</h3>

<p>Microservices (when built well) increase the speed and agility of applications, giving us the ability to ‘fail fast’ through more rapid experimentation and value generation. When used in greenfield projects, serverless technologies have been shown to add even more agility. The management of serverless systems requires nowhere near the complexity of many large-scale VM or Kubernetes deployments. Organizations can increase their development turnaround drastically when deploying many small functions independently without worrying about the same level of infrastructure.</p>

<blockquote>"You can build ridiculously complex, scalable systems in just a few days."
<br> Adrian Cockroft, VP Cloud Architecture Strategy at AWS</blockquote>

<h3>3. Environmental Greenness</h3>

<p>Vast amounts of resources (electricity) are consumed when services, applications, or containers are run. These resources are often scaled for median or worse spike utilization, and then consumed to maintain idle states.</p>

<p>Ask yourself whether your apps need to consume resources all the time, or only in response to certain events. Serverless computing can allow you to consume only the resources needed, releasing resources back to a shared pool when not in use. This can mean a greener and more energy-efficient solution.</p>

<p>Both AWS and Azure have pledged to become carbon neutral or carbon negative in advance of national targets. They are investing in renewable energy sources to power their data centers. Already, moving on-premise workloads to AWS results in an <a href="https://www.youtube.com/watch?v=4rLVJFHfK98">88% carbon footprint reduction</a>. Large-scale serverless providers are in a much better place to make demands for greener electricity than smaller data centers, and serverless could help them along the way.</p>

<h3>4. Differentiated Value</h4>

<p>The COVID-19 crisis has shown us how customer’s needs can change drastically in such a short period of time. Cloud infrastructures have helped organizations pivot without concern for infrastructure sunk-cost. The transition to FaaS and other serverless technologies have given even more freedom to build and operate quickly at scale without the need to plan and provision for potential load. These technologies  provide a way to handle the undifferentiated heavy-lifting of application development, so developers can spend more time generating differentiated value. Instead of building a platform that already exists, they can direct their efforts to meeting the needs of the business.</p>

<h2>Is Serverless Ready?</h2>

<p>Serverless technologies can lead to faster, greener and more agile deployments that help empower organizations to focus on delivering differentiated value. They argue for event-driven designs that can pioneer a third wave of cloud computing. But are serverless technologies mature enough to be adopted?</p>

<p>In an <a href="https://acloudguru.com/blog/engineering/simon-wardley-is-a-big-fan-of-containers-despite-what-you-might-think">interview</a> with Forest Brazeal, Simon Wardley points out an often-heard complaint that serverless isn’t ready yet.</p>

<p>These types of objections aren’t new; they’ve occurred at each phase of the XaaS movement to the cloud. People initially didn’t take the first EC2 offerings very seriously. When EC2 ultimately spawned the first PaaS, it became a catalyst for IaC. This was undeniably a movement in the right direction.</p>

<p>The biggest concern to serverless has been its risk for lock-in. Once you’ve committed to a serverless vendor, it can be difficult to migrate to another platform. Rather than avoiding the threat of lock-in altogether, assess the threat and impact. There are ways to only loosely couple your code with the vendor’s APIs if ideal.</p>

<p>Amazon, Microsoft, and Google strive to address these common concerns by improving their respective FaaS offerings. They continue to make inroads against the remaining concerns.</p>

<p>As such, serverless is gaining momentum. In his <a href="https://www.youtube.com/watch?v=xZ3k7Fd6_eU">keynote</a> at AWS re:Invent 2020, Andy Jassy (CEO of AWS) points out that half of all new services deployed to AWS are being deployed in Lambda. Serverless still has kinks to work out, but it seems to be ready for the market.</p>

<p>As architects, we need to solve new, complex problems in ways that allow for flexibility. Serverless gives us a way to do so. It just requires a new way of thinking.</p>

<p>If we want to build these new systems and deliver greater velocity, we must focus on becoming more effective with new techniques. We have to think about the problems in new ways.</p>

<p>It’s time to be faster, greener, and more agile.</p>

<p>Think serverless first!</p>

&nbsp;

<h4>Marc Boudreau</h4>
<p>Marc Boudreau is a Cloud Architect at CloudOps with a background in development for the cloud. He’s particularly passionate about helping people use serverless technologies to accelerate cloud development. Marc spends his free time riding his bike and looks forward to spending his fall and winter racing cyclocross in Belgium and the Netherlands when that becomes possible again.</p>

<!--HubSpot Call-to-Action Code --><span class="hs-cta-wrapper" id="hs-cta-wrapper-23bacd68-2a4e-4df1-b32e-abfe84760ba7"><span class="hs-cta-node hs-cta-23bacd68-2a4e-4df1-b32e-abfe84760ba7" id="hs-cta-23bacd68-2a4e-4df1-b32e-abfe84760ba7"><!--[if lte IE 8]><div id="hs-cta-ie-element"></div><![endif]--><a href="https://cta-redirect.hubspot.com/cta/redirect/732832/23bacd68-2a4e-4df1-b32e-abfe84760ba7"  target="_blank" ><img class="hs-cta-img" id="hs-cta-img-23bacd68-2a4e-4df1-b32e-abfe84760ba7" style="border-width:0px; width:100%;" src="https://no-cache.hubspot.com/cta/default/732832/23bacd68-2a4e-4df1-b32e-abfe84760ba7.png"  alt="New call-to-action"/></a></span><script charset="utf-8" src="https://js.hscta.net/cta/current.js"></script><script type="text/javascript"> hbspt.cta.load(732832, '23bacd68-2a4e-4df1-b32e-abfe84760ba7', {"region":"na1"}); </script></span><!-- end HubSpot Call-to-Action Code -->