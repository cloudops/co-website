---
title: "Unlocking Multi-Cloud with HashiCorp Vault Secrets Management"
date: "2021-07-27"
author: "CloudOps"
description: Unlock the benefits of hybrid- and multi-cloud architectures with best-of-breed tools for secrets management like HashiCorp Vault.
resources:
- name: "thumbnail"
  src: "UnlockingMultiCloud-Thumbnail.png"
- name: "cover"
  src: "UnlockingMultiCloud-Cover.png"
class_name: "blog post"
aliases:
keywords: [multi-cloud, multi cloud, multicloud, hybrid cloud, hashicorp vault, secrets management, cloud security, zero trust,]
tags:
---

<p>Organizations, for a variety of reasons, often choose to avoid vendor lock-in and use cloud infrastructure resources from several cloud providers. Multi-cloud architectures involve leveraging two or more public cloud computing platforms. Further, hybrid-cloud architectures include private cloud infrastructure components as well. Applications supported by hybrid- and multi-cloud architectures are able to benefit from multiple features across clouds and reduce risks; however organizations need to utilize the right tools to unlock the full potential of these architectures.</p>

<h2>Best-of-Breed Tools for Multi-Cloud Architectures</h2>

<p>The DevOps and Cloud Infrastructure landscape spans a multitude of tools and platforms, each of which has its own ideal use case. Organizations that leverage best-of-breed tools across the landscape can unlock the advantages of multi-cloud architectures.</p>

<img  src="/images/blog/post/expertiseandvault.png" alt=""  width="100%">

<h2>The Zero-Trust Mindset</h2>

<p>Since these tools and platforms are critical for your organization’s success in the cloud, they need to be protected. Security should always be a fundamental part of hybrid / multi cloud architectures that are composed of multiple clouds and private data centers without clear network perimeters. These architectures require your organization adopt a “Zero Trust” mindset.</p>

<blockquote>"Instead of assuming everything behind the corporate firewall is safe, the Zero Trust model assumes breach and verifies each request as though it originates from an open network. Regardless of where the request originates or what resource it accesses, Zero Trust teaches us to “never trust, always verify.” Every access request is fully authenticated, authorized, and encrypted before granting access." - <a rel="noreferrer noopener" href="https://www.microsoft.com/en-ca/security/business/zero-trust" target="_blank">Microsoft on Zero-Trust</a></blockquote>

<p>The proper management of identities, access, and secrets is central to the Zero Trust security mindset. There are abundant solutions and literature available on identity and access management, but today we want to focus on secrets management.</p>

<h2>What is Secrets Management?</h2>

<p>You may already be struggling with the problem of ‘secrets sprawl’, where your keys, certificates, secrets, and passwords are stored in files, code, or scripts across multiple environments. Secrets sprawl poses several security and operational risks as your infrastructure scales up. You therefore need a comprehensive secrets manager that supports multiple integrations, scales easily with your growing infrastructure, and is easy to audit.</p>

<h2>HashiCorp Vault for Secrets Management</h2>

<p><a rel="noreferrer noopener" href="https://www.hashicorp.com/products/vault" target="_blank">HashiCorp Vault</a> is a best-of-breed solution for secrets management. Think of it as a highly secure dynamic password manager that not only remembers passwords and certificates but also creates and changes them for applications, databases, web services, and other machine components. It integrates across multiple active directories and identity management solutions, helping your organization shift towards a Zero Trust model.</p>

<p>Organizations typically use the open source version of  HashiCorp Vault as a key store integrated with their public cloud KMS. Their important applications store and access secrets with Vault to meet minimum security mandates. There may be multiple and in siloed deployments across the organization. However, Vault adoption is a journey that can be customized to your organization’s needs.</p>

<h2>Succeeding with Secrets Management: Crawl, Walk, Run</h2>

<p>Vault will enable your organization to integrate security into the innermost layers of its technology stack. How do you evolve your Secrets Management practice? First, understand where your organization is in the maturity model for secrets management. Are you resting, creeping, crawling, walking, or running along your implementation of Vault?</p>

<img  src="/images/blog/post/secretsmanagementmaturitymodel.png" alt="SecretsManagementMaturityModel"  width="100%">

<p><bold>Rest:</bold> Your organization encounters secrets sprawl but does not have any process or solution in place to resolve the associated risks.</p>

<p><bold>Creep:</bold> Your organization decides to mitigate many of the security and operational risks associated with its secret sprawl. A public cloud key store option such as <a rel="noreferrer noopener" href="https://azure.microsoft.com/en-us/services/key-vault/" target="_blank">Azure Key Vault</a> is then leveraged. However, these solutions are not designed for modern multi-cloud architectures and can create operational challenges when scaled beyond your primary cloud.</p>

<p><bold>Crawl:</bold> The <a rel="noreferrer noopener" href="https://www.hashicorp.com/products/vault/secrets-management" target="_blank">Vault Secrets Management Platform</a> can be an ideal solution. Get started by downloading the OSS (open source software) version to implement a few basic scenarios that leverage dynamic secrets for your target applications. The OSS version depends on HashiCorp community support and works well for PoCs. There is no multi-datacenter replication available in the OSS, and a few other key features of the Enterprise version (such as Snapshots and Backups) are missing.</p>

<p><bold>Walk:</bold> Many of our customers have scaled to enterprise-wide deployments of Vault by implementing Vault Enterprise or HashiCorp Cloud Platform’s Vault Managed Service. This includes an array of additional <a rel="noreferrer noopener" href="https://www.hashicorp.com/products/vault/features" target="_blank">features</a> as well as premium support from HashiCorp. To be truly multi-cloud, customers must maintain Secrets Management in the cloud infrastructure of their choice GCP/AWS/Azure or a private cloud. For many of HashiCorp Vault’s enterprise customers, this means dedicating one team to own and manage Vault in the cloud and deliver “Secrets Management-as-a-Service” to the rest of the organization.</p>

<p><bold>Run:</bold> Vault additionally offers advanced features for data encryption, data masking, and integration with <a rel="noreferrer noopener" href="https://www.cryptomathic.com/news-events/blog/understanding-hardware-security-modules-hsms" target="_blank">hardware security modules</a>. It can handle secrets in transit and manage the encryption key lifecycle perfectly. CloudOps’ Vault Accelerator Programs will help you realize value in a matter of weeks with Vault Enterprise or HCP Vault.</p>

<h2>The “Secret” to Secret Management</h2>

<p>Our library of standardized architectures and pre-built configurations, scripts, and automations assist customers of all sizes through every phase of the Vault adoption journey. Our history and expertise with HashiCorp alongside other infrastructure tools help us reduce the costs and risks of implementing such cutting-edge technology projects.</p>

<p>The myriad of cloud platforms and technologies grows each day, and organization’s must navigate today’s multi-cloud world to sustain business growth. CloudOps helps organizations of all sizes use and build cloud platforms that avoid vendor lock-in and reduce risk and cost. This leads to long-term sovereignty, control, and the freedom to choose the right services. Our approach is cloud- and platform-agnostic, meaning we have expertise in a wide range of solutions.</p>

<p>HashiCorp Vault is a best-of-breed tool for securing, storing, and controlling access to tokens, passwords, certificates, API, and other secrets in modern computing. It can be an integral part of any secure Infrastructure as Code practice. It is available in three versions:</p>

<p><bold>Vault Open Source:</bold> The open source version of Vault includes features such as dynamic secrets management and community support. This version will help you get started with Secrets Management for your organization. It is fully open source and has robust community support.</p>

<p><bold>Cloud Vault:</bold> The managed service offering for Vault is a part of the HashiCorp Cloud Platform and suits enterprise-wide use cases. It provides fully-managed clusters, cloud infrastructure SLAs and support. If you are a rapidly scaling organization and do not want to worry about maintaining infrastructure for your Vault deployments, HCP Vault is a great option.</p>

<p></bold>Enterprise Vault:</bold> The paid licence for Vault deployments on any infrastructure. It has all the features of the cloud and open source versions as well as ones for governance and policy, scale and remediation, and premium support services.</p>

<p>A quick comparison of the features of these versions can be viewed <a rel="noreferrer noopener" href="https://www.hashicorp.com/products/vault/features" target="_blank">here</a>.</p>

<img  src="/images/blog/post/vaultfeatures.png" alt="vaultfeatures"  width="100%">

<h2>Next Steps</h2>

<p>A specialized partner of HashiCorp, CloudOps has in-depth experience in its solutions. <a rel="noreferrer noopener" href="https://bit.ly/3l3gfh3" target="_blank">Learn about CloudOps’ Vault Trainings and Workshops, Enterprise Vault Accelerator Program, and HCP Vault Accelerator Program</a>. We will equip your DevOps teams with the skills needed to securely build and operate cloud native architectures. <a rel="noreferrer noopener" href="https://bit.ly/3iN8KYy" target="_blank">Contact us for more information</a>.</p>

<!--HubSpot Call-to-Action Code --><span class="hs-cta-wrapper" id="hs-cta-wrapper-1f31c427-e9b0-4a5a-be12-1dd3f0857fbc"><span class="hs-cta-node hs-cta-1f31c427-e9b0-4a5a-be12-1dd3f0857fbc" id="hs-cta-1f31c427-e9b0-4a5a-be12-1dd3f0857fbc"><!--[if lte IE 8]><div id="hs-cta-ie-element"></div><![endif]--><a href="https://cta-redirect.hubspot.com/cta/redirect/732832/1f31c427-e9b0-4a5a-be12-1dd3f0857fbc"  target="_blank" ><img class="hs-cta-img" id="hs-cta-img-1f31c427-e9b0-4a5a-be12-1dd3f0857fbc" style="border-width:0px; width:100%;" src="https://no-cache.hubspot.com/cta/default/732832/1f31c427-e9b0-4a5a-be12-1dd3f0857fbc.png"  alt="New call-to-action"/></a></span><script charset="utf-8" src="https://js.hscta.net/cta/current.js"></script><script type="text/javascript"> hbspt.cta.load(732832, '1f31c427-e9b0-4a5a-be12-1dd3f0857fbc', {"region":"na1"}); </script></span><!-- end HubSpot Call-to-Action Code -->