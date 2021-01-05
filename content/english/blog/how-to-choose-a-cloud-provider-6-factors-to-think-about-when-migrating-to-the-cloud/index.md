---
title: "Choosing a Cloud Provider as part of your Migration Strategy"
date: "2018-08-01"
author: "CloudOps"
description: There are 6 key considerations to make when designing your cloud native strategy.
resources:
- name: "thumbnail"
  src: "Choosing-Thumbnail.png"
- name: "cover"
  src: "Choosing-Cover.png"
class_name: "blog post"
aliases:
  - /2018/08/how-to-choose-a-cloud-provider-6-factors-to-think-about-when-migrating-to-the-cloud/
  - /how-to-choose-a-cloud-provider-6-factors-to-think-about-when-migrating-to-the-cloud/
keywords:
tags:
---

<p>Ever since AWS came out with its first public cloud offering in 2006, the industry has grown to an estimated<a href="https://www.forrester.com/report/Predictions+2018+Cloud+Computing+Accelerates+Enterprise+Transformation+Everywhere/-/E-RES139611">$178 billion</a>of revenues per year. Cloud computing has enabled highly dynamic and scalable infrastructures that can deliver significant returns on investment. The migration of workloads from on-premise facilities to cloud offerings is often cited as a business priority. Nonetheless, less than half of all companies had placed any workloads in public clouds by the beginning of 2018. Migration strategies have typically been put on hold as the plethora of decisions they require can be overwhelming. Yet they are quickly becoming an imperative as organizations that fail to deliver sufficiently agile ways of processing information risk becoming obsolete.</p>

<p>A migration strategy must be carefully thought out before implementation. If not, it could result in a cloud infrastructure that is not uniquely suited to the organization. Any business and technical requirements not taken into account beforehand will become apparent once it is too late to accomodate them. In particular, the choice of cloud provider and environment will affect the ways in which data can be managed and can be difficult to change once implemented.</p>

<p>Still dominating the market, Amazon Web Services (AWS), Google Cloud Platform (GCP), and Microsoft Azure all have their ideal use cases and limitations. Regional cloud providers tend to have distinct advantages for specific requirements as well. Single-cloud environments can be built by fully leveraging the services of one provider, while multi-cloud environments entail balancing the services of many. Hybrid environments allow you to keep some workloads on private clouds and migrate others to public clouds. After analyzing your ecosystem and application, there are a variety of factors to think about. In the end you don’t want to regret your choice of cloud provider, <a href="https://www.stratoscale.com/blog/it-leadership/cloud-clouds-choose-single-multi-cloud-approach/">environment</a>, or the platform on which to run your application, so think about your requirements beforehand.</p>

<p><b>Vendor Lock-In</b></p>

<p>Vendor lock-in is the result of workloads becoming too coupled with the PaaS-like services or APIs of a provider. A degree of lock-in is inevitable with any migration strategy, but the risk is strongest when a single-cloud approach is taken. This could be a decisive investment for organizations with requirements that can only be satisfied by single providers. It can allow applications to fully optimize the availability of features and services from individual offerings. Single-cloud strategies can make it easier to build infrastructures that automate scalability using the APIs of a cloud offering. However, organizations seeking to employ single-cloud strategies should be certain about their choice of provider and platform. Providers may change their roadmap in ways that are not aligned with your goals, at which point vendor lock-in would make it difficult to migrate to another provider.</p>

<p>Multi-cloud strategies can minimize the risk of vendor lock-in as well as providing the flexibility to pick and choose the best features of different cloud offerings. While much less likely, multi-cloud lock-in is still a possibility and may be the result of ‘cloud sprawl,’ which happens when an organization loses track of their computing resources amidst too many environments. Nonetheless, the autonomy provided by multi-cloud strategies makes it easier for organizations to utilize best-of-breed features and avoid vendor lock-in by building distributed applications.</p>

<p><b>Open Source</b></p>

<p>While open source solutions provide much more freedom to experiment with your application, they do pose risks of their own. Containerization may increase the portability and efficiency of your application, but it requires extensive knowledge. The implementation of Kubernetes and other open source solutions requires experienced technical teams that actively pursue and integrate the latest technologies. Large organizations that depend on best-of-breed architectures may therefore benefit from open source, multi-cloud approaches. These can provide the flexibility to implement and change infrastructures and platforms, but they require significant investment in technical talent and entail a degree of risk. Open source tools can reach technological dead ends if they fail to reach sufficient momentum in cycles of investment, innovation, and economic activity. Regardless of these risks, they can permit organizations to adopt cutting-edge solutions that are suited to their requirements.</p>

<p>If support is a concern, then managed services, such as AKS on Azure, EKS on AWS, or GKE on GCP, can allow organizations to embrace open source without accepting the risk and time associated with building your own platform. These services do, however, entail some vendor lock-in. The types of risk that your organization is willing to take will affect your availability of choices.</p>

<p><b>Partners</b></p>

<p>Cloud providers all come with a degree of risk and uncertainty. Leveraging the expertise of a partner may help you utilize the best-of-breed solutions from both multi-cloud and open source approaches. They may have stronger relationships with different cloud providers and understand how to help you tap into the extent of their offerings. In particular, partners who are infrastructure agnostic may be in an ideal position to advise customers on solving business challenges with technology choices. Furthermore, they may allow you to mitigate some of their inherent risks. Depending on the complexity of your strategy, partners may increase the effectiveness of your strategy.</p>

<p><b>Technical Talent</b></p>

<p>The availability of technical talent within your organization, your geographic locality, and your partnerships should inform your choice of cloud provider. AWS, GCP, and Azure are all built quite differently and a person with training in one may have little to no knowledge about others. Leveraging a provider that your technical team is inexperienced with will leave them unhappy and ineffective. Likewise, leveraging a provider that your partner is inexperienced with will leave them unhelpful. The knowledge of the individuals that will be building and managing your strategy should be of importance in choosing a cloud provider.</p>

<p>The types of technical talent available in your geographic locality will affect your ability to hire relevant talent in the future. AWS, GCP, and Azure have all invested in education and created talent pools in different areas. For example, Azure’s investment in Quebec City has created a talent pool of Azure experts in Quebec City. It is consequently far easier to hire Azure talent in Quebec City than it is to hire GCP or AWS talent.</p>

<p><b>Security and Compliance</b></p>

<p>Your data can be subject to multiple jurisdictions and regulations depending on its subject matter and storage location. While security and compliance are always a shared responsibility between the provider and the organization, it is ultimately up to the organization to ensure they are maintained. A distributed denial of service (DDoS) attack may happen through the cloud provider, but its consequences are the responsibility of the organization. There are a multitude of data laws and regulations, such as GDPR, ISO 27001, PCI DSS, and HIPAA, that prescribe harsh penalties for non-compliance. Certifications, such as SOC 2, at various levels of the technology stack may help organizations meet such requirements. A comparison of the requirements that your organization is liable towards and the ways that different cloud providers interact with them should inform your choice of provider. A regional cloud provider like <a href="https://cloud.ca/">cloud.ca</a> may be a part of your compliance efforts.</p>

<p><b>Cost and Terms and Conditions</b></p>

<p>Depending on the ways that your organization consumes resources, you may choose to utilize committed, uncommitted, or bidded resources. These will vary in cost and availability between cloud providers as part of their terms and conditions. Factors including the currency that payment will be accepted in, the frequency that services are billed, and whether computing resources are charged by the hour or the minute will also be part of a provider’s terms and conditions. The provider may or may not be willing to adapt their terms and conditions to your requirements. The flexibility of your requirements could limit your choices.</p>

<p>A cloud migration strategy needs to be carefully thought about before implementation. An infrastructure must be uniquely suited to the business and technical requirements of an organization. Whichever cloud provider you choose, and whether you plan a single- or multi-cloud strategy, thinking about all the factors involved will ensure that you reap the benefits of the cloud without getting locked into an infrastructure you don’t want.</p>

<p>Read our white paper, ‘A Checklist for Cloud Migration’ to learn how you can analyze your technology stack as you prepare for a cloud migration strategy.</p>

<div class="row">
    <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12 col-xs-12 cta-image">
    <a href="/resources/white-papers/a-checklist-for-your-cloud-migration-strategy/">
      <img src="/images/blog/cta/light-white-paper.jpeg">
    </a>
    </div>
</div>