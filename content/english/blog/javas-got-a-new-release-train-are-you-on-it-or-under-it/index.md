---
title: "Java’s Got a New Release Train: Are you on it or under it?"
lastmod: "2018-03-19"
author: "CloudOps"
resources:
- name: "thumbnail"
  src: "Java-train-1.png"
class_name: "blog post"
aliases:
    - /2018/04/javas-got-a-new-release-train-are-you-on-it-or-under-it/
    - /javas-got-a-new-release-train-are-you-on-it-or-under-it/
---

<p>Oracle is taking a more contemporary approach to releasing new versions of the Java platform with the recent release of <a href="https://www.oracle.com/corporate/pressrelease/Java-10-032018.html" target="_blank">Java 10</a>. Rather than letting feature readiness drive the timing of new releases, Oracle will employ a train release model. New versions will be released every six months – regardless of content. Sun Microsystems, and now Oracle, have traditionally released new versions every two to four years. With this new release train model, the Java platform will upgrade four to six times more often. Changes in Java are accelerating, and organizations need to understand the innovation in order to keep up with it.</p>

<p><strong>Java is a stable, proven and mature platform – what’s all this talk about innovation?</strong></p>

<p>Java is known as a stable, proven and mature platform used by all kinds of organizations. It continues to dominate the software development industry, and consistently ranks as one of the world’s top programming languages and platforms. It also has a huge footprint in enterprise systems, cloud computing, and mobile phones – to name just a few. But it is evolving quickly in response to pressure from the industry.</p>

<p>In the last few years alone, Java has implemented modularity and container-awareness to help applications move away from monolithic architectures. It has reduced its deployment footprint by adding custom images, cut back on its usage of hardware, made advancements in its garbage collection technology, and added a functional programming paradigm to its language. In particular, Java has added <a href="https://blogs.oracle.com/java-platform-group/java-se-support-for-docker-cpu-and-memory-limits" target="_blank">support</a> of Docker CPU shares, quotas, and memory limits. These have collectively made it an ever-viable technology for building modern, container-based CI/CD pipelines. Java’s image of big and stodgy is being modernised – it is an evolving platform from which to embrace DevOps practices and have a streamlined process of CI/CD development and innovation.</p>

<p><strong>But my systems are running well on those old versions of Java – why upgrade?</strong></p>

<p>Older versions of Java are continually upgraded for bug fixes and security flaws. It’s important to stay on top of updates – every security officer’s worse nightmare is to discover a breach whose entry was through an unpatched Java system. At the very least, organizations need to continually patch their instances of the platform as soon as updates are available – even if they are using older versions.</p>

<p>Organizations need to move towards newer versions as older ones are subject to a sliding scale of support. Current versions, such as Java 8, 9 and 10, are patched regularly and freely available. However, patches for older versions (Java 7) are only available through paid support, and anything beyond has little or no support. Versions 8 and 9 will only be freely supported until the end of this year. Many organizations have huge inventories of deployed Java platform instances (JVMs), even numbering in the thousands, and some are running versions that are no longer supported. The accelerated pace of release and increased modularity of the Java platform will only make matters worse for those not keeping up.</p>

<p><strong>But Java is backward-compatible – why not lift-and-shift my system onto Java 10?</strong></p>

<p>It is true that Java is backward-compatible, but you need to read the fine print. In this context, backward-compatibility means that you can make bytecode (machine instructions produced by the Java compiler) that was generated from older compilers run on Java 10. You can also recompile source code written for older versions with Java 10. But doing this can be tricky. For example, bytecode instructions can change over versions. So, systems that rely on bytecode manipulation can be backward-incompatible unless manually upgraded. There can also be behavioral incompatibilities when using JDK libraries that were compiled with older versions but run on new versions. In fact, the entire technology stack needs to be evaluated holistically; there can be incompatibilities within components of the stack stemming from dependencies on operating systems, 3rd-party libraries, frameworks and application servers. In short, upgrading to a new Java version requires a methodological approach that includes, assessment, re-coding, re-compiling, re-scripting, and re-testing. Sometimes, portions of systems need to be redesigned because there are no upgrade paths available within some components of the technology stack.</p>

<p><strong>Why not buy support from Oracle and keep my outdated Java versions running?</strong></p>

<p>Paid support can become very expensive for organizations with thousands of Java platform instances deployed throughout their infrastructure. This can be a viable option for systems with a short life span, but, for most systems, it’s an approach that will only increase the final upgrade bill. Organizations choosing this path will invest time and budget only to end up in the same place of having to upgrade when paid support is no longer available. There are also hidden costs to consider; important improvements in the language and the platform will have been out of reach during this time. As a general rule, it’s better to invest in Java’s future than its past.</p>

<p><strong>How can my organization stay on top of upgrades?</strong></p>

<p>The first step is to have processes in place to keep track of the deployed technology stacks. This will mitigate the risk of organizations being forced to embark on big-bang migration strategies and upgrade systems in mad rushes. A more strategic approach is to increase your organization’s technological agility, and make it easier to keep up with Java upgrades. This is where core principles of DevOps practices, including continuous testing, integration and delivery, play an important role. Automating your pipeline to rebuild your Java stack makes you think about Java versions upgrades early on. It will also test and detect errors before they make it to your staging environment. Running your application inside a Docker container will catalogue your environment, and allow you to run different versions of Java on the same hardware. This can facilitate the migration phase by binding specific systems to specific Java versions.</p>

<p>There are also other recent improvements in Java 9 and 10 that can help. For example, Java 9 introduced the concept of custom runtime images, in which a scaled down Java runtime could be embedded and bundled with the application inside one executable. This eliminates the need to rely on a pre-installed JVM in the environment, and diminishes the footprint of the Java runtime as custom runtime images only include the parts that are used by your system. Additionally, Java 10 is more Docker aware offering better <a href="https://blog.docker.com/2018/04/improved-docker-container-integration-with-java-10/" target="_blank">integration</a>. As it continues to evolve, we can only expect even more vibrant features in the future.</p>

<p>At the architectural level, microservices emphasize modular architectures that enable piecemeal migration strategies so that your organization can upgrade over time without impacting other dependent systems. As well, Java 9’s JPMS (Java Platform Module System) feature enables native modularity that forces developers to move away from monolithic architectures.</p>

<p>Taken together, these tools and strategies help organizations avoid the traps outlined in this article. They also make the latest and greatest paradigms, tools and libraries available to developers sooner so that they can create better software.</p>

<p><i>As Java becomes more container focused, an understanding of implementing Docker and Kubernetes is helpful for development teams seeking to modernise their application architecture. Sign up for one of our hands-on <a href="https://www.cloudops.com/workshop-calendar/" target="_blank">workshops</a> today to learn more, or email us at <a href="mailto:info@cloudops.com">info@cloudops.com</a> for more information.</i></p>

<p><i>CloudOps’ expertise can also assess your current Java footprint, devise migration strategies and provide support along your journey to use the latest and greatest features of Java 8, 9 and 10.</i></p>

<h3><img style="width: 150px; float: left; padding: 0px 10px 10px 0;" class="size-full wp-image-749 alignleft" title="Nick Maiorano" src="/images/blog/post/Nick-M.png" alt="" width="150" height="150">Nick Maiorano</h3>
<p>Nick Maiorano is a software architect with over twenty-five years of experience creating software. He is a book and video author, speaker, and trainer of Java and related technologies. He has consulted for companies ranging from startups to large multinationals in diverse industries such as telecommunications, financials, and manufacturing. His latest area of focus is in helping companies reap the benefits of the cloud with cloud-native architectures on AWS. Nick is a guest contributor to CloudOps’ blog.</p>