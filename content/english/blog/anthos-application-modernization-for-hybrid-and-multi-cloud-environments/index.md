---
title: "Anthos: Application Modernization for Hybrid and Multi-Cloud Environments"
date: "2020-03-31"
author: "CloudOps"
description: Anthos is an open hybrid- and multi-cloud application platform pioneered by Google. It helps enterprises solve complex challenges in 5 ways.
resources:
- name: "thumbnail"
  src: "Anthos.jpg"
- name: "cover"
  src: "Anthos-cover.jpg"
class_name: "blog post"
aliases:
    - /2020/03/anthos-application-modernization-for-hybrid-and-multi-cloud-environments/
    - /anthos-application-modernization-for-hybrid-and-multi-cloud-environments/
---

<p>Anthos is an open hybrid- and multi-cloud application platform pioneered by Google. It is built on open source technologies including Kubernetes, <a href="https://www.cloudops.com/2018/02/mesh-your-services-with-istio-solving-complexity-at-the-network-layer/">Istio</a>, and Knative. It is the logical extension of GKE on-prem, as it augments Google’s first entrance into the enterprise data center with a suite of open source solutions that cover areas including networking, storage, registry, logging, and monitoring. Anthos brings multiple services together to facilitate scalability, interoperability, containerization, data sovereignty, and security.</p>

<p>Anthos was designed to solve a complex issue faced by many enterprises today; how to find a balance between managing existing resources and utilizing the functionality of a hyper-scale cloud provider. It can be ideal for enterprises with large, sprawling infrastructures that involve disparate workflows, practices, and tools. Anthos can help these enterprises implement unified container strategies and modernize their information technology infrastructures.</p>

<h3><strong>1. Hybrid- and Multi-Cloud Scalability and Interoperability</strong></h3>

<p>Anthos embraces open source technology standards to let you build, manage, run, and move applications anywhere. It enables consistency between on-premises and public cloud environments, offering a flexible way to move workloads between third-party clouds. Although Anthos can currently only be deployed on-prem or in GCP, Google has announced support for other public clouds as part of its long-term roadmap. By enabling hybrid- and multi-cloud interoperability, Anthos is preparing for an increasingly <a href="https://www.cloudops.com/2018/11/why-cloud-native-cloud-agnostic-platforms-and-automation-driving-business-value/">multi-cloud future in which organizations must scale their applications consistently across diverse infrastructures</a>.&nbsp;</p>

<h3><strong>2. Containerization and Cloud Migration</strong></h3>

<p>Containers are designed to be easily and rapidly scaled, deployed, and run across multiple operating systems and hardware platforms while requiring fewer system resources than traditional VM-based environments. By configuring variables such as runtime, environment, and setup scripts themselves, containers enable organizations to flexibly migrate workloads between providers while maintaining consistency in performance. The increased elasticity and efficiency that containers offer is enhanced when accompanied by cloud migration. Anthos provides automated features to facilitate the containerization and cloud migration of on-prem workloads. <a href="https://cloud.google.com/migrate/anthos/">Migrate for Anthos</a> is working on automating the process of migrating VMs to containers in GKE in both GCP and on-prem environments. Velostrata is used to perform in-place upgrades of VMs to containers and offers CI/CD integrations for automating Docker pipelines. GCP clusters in Anthos are additionally auto-upgraded to the latest Google certified versions. Anthos is designed to facilitate the continuous modernization of legacy infrastructures, expanding GCP on-prem to offer features for containerization and cloud migration.&nbsp;</p>

<h3><strong>3. Security</strong></h3>

<p>Container technologies have evolved at such a fast pace that their security has often not kept up. In fact, <a href="https://www.csoonline.com/article/2984543/as-containers-take-off-so-do-security-concerns.html">over 60% of enterprises using containers for development and testing cited security as a major barrier to adopting containers in production</a>. Anthos offers built-in security to accompany its features for containerization and cloud migration. Anthos excels in cross-cluster configuration management, which provides a single source of truth control and management and allows the extension of native Kubernetes namespaces, labels, and annotations across multiple clusters. Istio L7 capabilities allow for more fine-grained network policies and ingress rules to only allow the services that need to be run. This minimizes the risk of shadow ops, which happens when Kubernetes clusters drift out of sync due to manual changes. A single administrative interface enforces uniform policies for security, including encryption in transit, mutual authentication, and access controls. Anthos also provides unified role-based access control (RBAC) and single-sign-on (SSO) management to restrict network access. Anthos supports integration with enterprise directory services for SSO via ADFS and OpenID Connect (OIDC). Anthos’ features facilitate <a href="https://www.cloudops.com/2019/01/a-brief-guide-to-securing-containers-at-scale/">the securing of containers at scale</a>.</p>

<h3><strong>4. Jurisdiction and Data Sovereignty</strong></h3>

<p>As Canadian data stored in GCP may be networked through the United States, it could be made subject to US law and lose the legal and constitutional projects it enjoys when in Canada. Even when data stays in Canada, it may be affected by US law and scrutiny as GCP is a US entity. While GCP does offer one location site in Canada, it’s risky to rely on one location site. Relying on a combination of GCP’s Canadian location and an on-prem solution could be a solution for Canadian organizations requiring Canadian data sovereignty – but such organizations may not want to spend the effort, time, and money required to run their infrastructure themselves.&nbsp;</p>

<p>A regional cloud that supports Anthos, like cloud.ca, may help organizations benefit from Anthos’ rich suite of features without losing the data sovereignty they would lose in GCP and without having to maintain their own infrastructure. <a href="https://cloud.ca/">cloud.ca</a>’s on-prem, cloud infrastructure allows organizations to store their data in Canada, taking advantage of Anthos and other services, without the investment of operating their own infrastructure. For organizations willing to make that investment, cloud.ca can be run on the “edge” in its customers’ infrastructures.&nbsp;</p>

<p>Anthos was built to help enterprises with sprawling, legacy applications take advantage of the elasticity, efficiency, and velocity that containerized applications offer in multi-cloud environments. It offers open source technology standards to enable hybrid- and multi-cloud scalability and interoperability. It offers features to facilitate the containerization and cloud migration of legacy workloads. It also offers a way to help enterprises not based in the United States deal with security concerns that might arise from such multi-cloud environments, as well as retain data sovereignty. Anthos helps enterprises with large, legacy infrastructures take advantage of open source solutions built by Google while maintaining their hybrid- or multi-cloud strategies.&nbsp;</p>

<p>Anthos introduces an application modernization platform that has the flexibility to run in any environment – whether it’s cloud native or based on virtual machines. To learn more how enterprises can develop, secure, and manage apps at scale, <a href="https://info.cloudops.com/en/anthosdemoandlearn">join us on June 2 for a webinar on Anthos.</a></p>