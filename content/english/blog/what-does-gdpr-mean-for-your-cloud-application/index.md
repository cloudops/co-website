---
title: "What does GDPR mean for your Cloud Application?"
lastmod: "2018-06-14"
author: "CloudOps"
class_name: "blog post"
---

<img src="/images/blog/post/GDPR-final-pic2.jpg" class="main-blog-image">

<div class="post-content"><p><i>GDPR came into effect on May 25th. What first seemed like something that could be swept under the rug is quickly becoming reality as everyone scrambles to understand the extent of its implications. Even with it already here, <a href="http://www.information-age.com/if-youre-still-not-prepared-dont-panic-heres-gdpr-101-123461476/" target="_blank">less than 10% of businesses</a> say they are GDPR ready. But with fines for non-compliance slated to reach €20m or 4% of total worldwide revenue from last year (whichever turns out to be more), it is clear that GDPR compliance is an imperative. Even more clear is that the EU is trying to lead global efforts in prioritizing the protection of consumer privacy and security over business ideals.</i></p><p><strong>What does GDPR protect?</strong></p><p>GDPR protects personal information in the EU. This includes names, addresses, photos, email addresses, bank details, medical information, social media posts, and even computer IP addresses. Defining some terms, it establishes how <i>data controllers</i> (your organization) should interact with <i>data processors</i> (cloud service providers) to secure the personal information of <i>data subjects</i> (your customers) and give them control over the way it’s used.</p><p>It gives data subjects the right to access, view, change, limit, and erase any personal information of them. They must provide explicit, opt-in consent before it is collected, stored, processed, or made public, and can make changes at will. Organizations must clearly disclose this information at all times and, if asked, be available to provide subjects with portable copies.</p><p><i>There are a few exceptions. The data subject’s rights are overridden if the processing of data is necessary for a contract, compliance with international or other EU laws, or the protection of the public interest, the subject’s vital interest, or the exercise of official authority. Cases where data is used for lawful interception, national security, or justice, data regarding deceased persons, employer-employee relationships, and statistical or scientific analysis are exempt from GDPR.</i></p><p><strong>Who does GDPR apply to?</strong></p><p>GDPR applies to any organization (whether European-based or not) that collects or processes data in the EU, or from EU residents or visitors, or does so on behalf of another organization. This means that any organization with a foothold in Europe is required to be compliance.</p><p>It applies uniformly to all EU member states and allows organizations to implement a single IT system throughout Europe. It will ultimately simplify data regulation with a joint jurisdiction. Legally binding on its own, GDPR overrules contradictory laws from non-EU countries unless they are based on international agreement, forcing organizations that have a foothold in Europe to follow suit.</p><p><i>If you’re wondering how GDPR is managed, all EU member states are assigned an independent supervisory authority (SA) to oversee relevant activities. Organizations whose core activities involve systematically processing personal data must employ a data protection officer (DPO) to manage compliance and report any potential breaches to the SA within 72 hours.</i></p><p><strong>How does GDPR describe your cloud application?</strong></p><p>GDPR isn’t granular in how it prescribes methods for managing IT, but does outline general principles for perceiving data and securing personal information. Most applications today are not inherently designed with bulletproof security and total portability, and rely instead on strong foundations. GDPR is a reminder that organizations are responsible for the strength of these foundations.</p><p>Within your technology stack, this responsibility is distributed throughout your infrastructure, your application platform layer, and your application layer. Significant interplay between all three layers underlies DevOps practices: agile CI/CD pipeline and visible Infrastructure as Code. Maintaining the ability to find, retrieve, and delete personal information at will without weakening the overall application requires visibility and portability.</p><p>Managed by the data controller, the application layer is where the responsibility for responding to the requests of data subjects lives and where most security breaches emerge. Its foundation is the application platform layer, where the roots of most security vulnerabilities can be found. The ability of an application to maintain data portability is largely based on the strength of the application platform layer. Lastly, while the exposure of a cloud provider to GDPR is more limited, your infrastructure must contain processes and mechanisms to support those who deal primarily with the application platform layer.</p><p>While only explicit in the application layer, GDPR implies dynamic processes and security throughout the entirety of an information system. It institutes data protection by design and data protection by default, which requires that mechanisms for protecting data be designed throughout the network, and that information systems always run on the highest possible privacy settings.</p><p><strong>How can GDPR be supported?</strong></p><p>Many of the processes and mechanisms required in GDPR can be addressed by the <a href="https://www.cloudops.com/2018/05/overcoming-compliance-confusion-why-you-need-a-soc-2-foundation/" target="_blank">SOC 2 certification process</a>, which can be supported by CloudOps’ <a href="https://www.cloudops.com/2018/05/overcoming-compliance-confusion-why-you-need-a-soc-2-foundation/" target="_blank">MAP</a> (Managed Application Platform) services. By instituting processes such as risk management, delineation of responsibilities, information security policy implementation, logical and physical security controls, password management protocols, a SOC 2 certification will help you on your way to meeting criteria mandated by GDPR. Importantly, its emphasis on audit helps expose vulnerabilities as they arise. Becoming SOC 2 certified at all layers of your data structure will ensure that privacy and security are designed from the ground up to help prevent the blast radius of vulnerabilities.</p><p>SOC 2 will institute processes to help you on your way to meeting other criteria mandated by GDPR. In addition to data portability, GDPR institutes <i>data protection by design</i> and <i>data protection by default</i>, which requires mechanisms for protecting data be designed into all processes. All information systems must run on the highest possible privacy settings.</p><p>GDPR also requires all stored personal information be encrypted. This includes either pseudonymisation (when data cannot be attributed to an individual without additional data) or full anonymisation of data. Effective DevOps solutions for managing, storing, and protecting sensitive information, such as HashiCorp Vault’s management of <a href="https://www.cloudops.com/2018/03/how-to-deploy-a-development-vault-server-to-kubernetes-using-helm/" target="_blank">dynamic secrets</a>, are essential for minimizing the overhead of encryption.</p><p>On one hand, GDPR demands information be sufficiently portable to grant subjects autonomy over the way their data is used. On the other hand, the levels of security required have a large overhead, limiting the extent to which data can be made portable. Managing the two requires cooperation within your network stack and an understanding of GDPR’s reach and implications. Read this <a href="https://info.cloudops.com/saas-make-it-secure-and-affordable" target="_blank">white paper</a> on managing data security and compliance in a SaaS model.</p></div>