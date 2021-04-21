---
title: Securing your DevOps Platform - Cloud-based Software Companies
date: 2020-07-02
description: Hackers are becoming more creative each day. Industry standards like SOC 2 are essential for keeping your applications secure.
resources:
- name: "thumbnail"
  src: "securing_devops_platform_saas.png"
aliases: 
    - /white-papers/securing-devops-platform-saas/
    - /securing-devops-platform-saas/
    - /securing-devops-platform-saas-company
keywords: [devops software, devops platform, devops for saas, devops security]
tags:
---


<div class="landing-page">
    <!-- hero -->
    <div class="hero jumbotron reading-landing jumbotron-fluid">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-6 offset-xl-2 col-lg-10 offset-lg-1 col-md-12">
                    <h1 class="display-4">Securing your DevOps Platform</h1>
                    <h2>Cloud-based Software Companies</h2> 
                </div>
            </div>
        </div>
    </div>
    <div class="main-content">
        <div class="row">
            <div class="col-xl-8 offset-xl-2">
                <h3>Security Challenges Faced by Enterprises</h3>                             
                <h5>Large enterprises usually accumulate large amounts of data, which can make them particularly attractive targets for hackers. Whether they offer financial, insurance, or any other kind of service, enterprises inevitably accumulate sensitive information that can be exploited. Entrusted to protect personal data, enterprises have a responsibility to address security issues and safeguard information in order to minimize the risk of breaches.</h5>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-8 offset-xl-2">
                <p>Industry regulations are increasingly demanding concrete information about the procedures and controls that enterprises have
                in place. As customers increase their awareness of the security risks of information, they are asking questions like:</p>
                <ul class="dashes">
                    <li>What are the authentication and access control policies?</li>
                    <li>What encryption policies will protect their data when it is transferred or being stored?</li>
                    <li>How can our code and open-source code security be addressed effectively and still keep up with the velocity expected from the business?</li>
                    <li>Are my APIs and underlying infrastructure secured?</li>
                </ul>
            <p>It is quite common to see RFPs for enterprises seek independent third-party assurance, such as Service Organization Control (SOC) 2 Report and Cloud Security Alliance (CSA) STAR, for security certifications or controls for their business. This may guarantee high availability levels, ensure processing integrity, and provide sufficient confidentiality/privacy protection.</p>
            <p>Enterprises are expected to offer transparency when they learn about a security infringement. In Canada, as part of the Digital Privacy Act, fines may reach up to $100,000 per violation when an organization violates the breach notification requirements.1 In the U.S., several new bills were introduced to Congress. If they become law, company executives could face jail time for not reporting data breaches in a timely manner.2 Europe has followed a similar path with the introduction of the General Data Protection Regulation (GDPR) that replaced the Data Protection Act 1998 in May 2018.3 With this legislation and the increased news coverage of data breaches, companies cannot claim ignorance when it comes to broad cyber security. If they don’t properly mitigate the risks against cyber threats and compliance obligations, they may face serious business and personal consequences.</p>
            <p>While enterprises try to prevent data breaches, their ecosystem is constantly changing. There are multiple factors that make this task even more difficult:</p>
            <ul class="dashes">
                <li><b>43% of organizations are pushing out changes weekly, daily, or continuously.</b>The increased speed of change introduces difficulty in understanding and reviewing the security consequences. There is not enough time to conduct exhaustive testing or reviews and the risk profile changes constantly.4
                </li>
                <li><b>Different programming languages and toolsets directly affect how engineering and security teams deliver and test.</b>It is important to understand security risks
                at the language and library level. For example, JavaScript and other dynamic scripting languages, such as PHP and Python, are more difficult to check at build time than
                static languages, which means that more issues can escape, to be found only at runtime.5
                </li>
                <li><b>Large enterprises often have ratios of one infosec worker for every ten infrastructure workers and one-hundred developers.6</b>This is especially insufficient when developers are unaware of common security risks. When security finds itself at the very end of the software delivery life cycle, problems can be difficult and time-consuming to remediate.
                </li>
                <li><b>As cloud platforms and containers are becoming the default infrastructure companies, they introduce risks</b> around identity and access control, untrusted images, security orchestration, container “breakouts” and other issues that stem from developers’ ability to provision their own infrastructure on the fly. Security teams must catch up and understand these evolving architectures and how to keep them secure. Traditional security mechanisms, such as firewalls, can fall short in today’s cloud landscape, where there can be unprecedented levels of IP, data, and identity sprawl.
                </li>
                <li><b>Many enterprises have a lack of security automation.</b>They are still heavily dependent on manual testing and reviews, including penetration testing and external compliance audits.
                </li>
                <li><b>External parties (auditors, penetration testers, vulnerability scanning services) and internal security teams are primarily responsible for security testing and assessments,</b> while development teams and system architects are primarily responsible for corrective actions.7
                </li>
            </ul>
            <p>Every day, new attacks are launched that exploit another hidden weakness in cloud-based applications. This means new vulnerabilities are being exposed and exploited faster, at a pace that many organizations simply cannot match. This highlights the importance of compliance in supporting security programs and controls.</p>
            <h3>Does Security Compliance Provide a Viable Solution?</h3>
            <p>Access, storage and processing of sensitive
            data needs to be carefully controlled and may
            be governed under various regulations, Acts
            or industry standards such as ISO-27001, SOC
            2 Report, CSA STAR, the Personal Information Protection and Electronic Documents Act (PIPEDA), Sarbanes-Oxley Act (SOX), Gramm-Leach-Bliley
            Act (GLBA), Payment Card Industry Data Security Standard (PCI-DSS) and Health Insurance Portability and Accountability Act (HIPAA).</p>
            <p>The SOC 2 Report concentrates specifically on
            a business’s non-financial reporting controls as they relate to security, availability, processing integrity, confidentiality, and privacy of a system. It is the most focused report for understanding SOC and how they are tested. SOC reports can be either Type 1 or Type 2. A Type 1 report describes the controls and auditor’s opinion at a particular point in time. This is usually the starting point that establishes the controls design, how often you perform certain activities and how certain processes are performed.</p>
            <p>A Type 2 report contains the auditor’s opinion of how the enterprise is performing those activities over a period of time (i.e., typically six months or longer). Security for enterprises
            is not always a straightforward task due to shared responsibilities.</p>
            <h4>Responsibility for security can be split between four different levels (See figure 1):</h4>
            <ol>
                <li>
                    <h4>Physical Environment</h4>
                    <p>There is the data centre/colocation facility, which covers areas such as physical security, power and HVAC (heating, ventilation, and air conditioning).</p>
                </li>
                <li>
                    <h4>Infrastructure</h4>
                    <p>The IaaS (Infrastructure as a Service) provider covers responsibilities such as hypervisors, network, storage, servers, virtualization, and firewalls.</p>
                </li>
                <li>
                    <h4>Application Platform</h4>
                    <p>The application platform includes the runtime, the middleware, and the operating system. This tier typically consists of elements that are standardized even though the configuration is customized for a particular application.</p>
                </li>
                <li>
                    <h4>Application Code + Data</h4>
                    <p>The application level includes areas such as the application logic/code, programming languages, databases, transactions, external interfaces, and relevant security policies and processes.</p>
                </li>
            </ol>
            <img src="">
            <p>Figure 1: Realms of responsibility<p>
            <p>(Source: CloudOps)</p>
            <p>Being affiliated with a previously SOC 2 audited cloud IaaS provider or data centre does not offer the enterprise a transitive level of compliance. Though a data centre or hosting provider may have a SOC 2 Report, this does not imply that the enterprise has a corresponding SOC 2 Report that is relevant to their particular scope of services.</p>
            <p>In fact, the SANS Institute’s 2017 State
            of Application Security report argues that web applications running on the public cloud are the biggest source of data breaches
            (See figure 2 below), as reported in the past by the SANS Institute.8</p>
            <img src="">
            <p>Figure 2: Applications/components involved in security breaches</p>
            <p>(Source: SANS Institute)</p>
            <p>When you break down the different types of attacks on web applications, you can see that 65% come from Cross-Site Scripting (XSS) and SQL Injection (See figure 3).9 SQL Injection is used to access sensitive information or run operating system commands for further system access. In addition, Information Leak and XML Injection, can both lead to a disclosure of information.10</p>
            <p>It is clear that the application code level is
            one of the most vulnerable layers. It is the
            sole responsibility of each enterprise to be accountable and compliant to the relevant security certification, audit report, or regulatory requirements for the specific risks inherent in its deployment model and the potential security exposure specific to its case.</p>
            <img src="">
            <p>Figure 3: Distribution of attack types that are used against SaaS applications</p>
            <p>(Source: Positive Technologies)</p>
            <h3>The Value of Industry Certification and Audit</h3>
            <p>When data breaches occur, companies are faced with negative publicity, decreased customer loyalty and lost revenues. The Ponemon Institute has indicated that cyber attacks are becoming more costly every year. The global average cost due to damage or theft of IT assets and infra- structure increased from $879,582 to $1,027,053 in 2017 alone. Likewise, the average cost due to disruption to normal operations increased from $955,429 to $1,207,965.11 Looking at the top coun- tries based on cost of data breaches per capita,12 the U.S. takes the first place, followed by Canada and then Germany.13</p>
            <p>Using an industry certification program or external audit report enables a SaaS company to ensure the highest security procedures and controls and minimize security risks. Industry certifications, such as CSA STAR or audit reports such as SOC 2, rely on proven security controls that in turn help minimize and prevent the cost of data breaches.</p>
            <p>Certifications and external audit reports also bring indirect added value to the enterprise:</p>
            <ul class="dashes">
                <li>Certification and external audit reports can drive new sales or at least ensure that security is not a hindrance to new business. Having a detailed audit report can be a deciding factor in whether a client is comfortable using your platform.</li>
                <li>Awareness that your business adheres to the highest security standards in the industry increases client trust and encourages pride in being part of your community. This may lead to higher levels of customer loyalty and acquisition.</li>
                <li>Certain industries/prospects have audit and compliance requirements (e.g. HIPAA for healthcare, PCI-DSS for eCommerce) that can only be met with a third-party security audit and certification. The various security frameworks offer an exhaustive inventory of possible security requirements that could be applied to SaaS companies.</li>
            </ul>
            <p>Reputable industry security certifications and external audit reports can minimize the number of responses to security due diligence and audit requests from customers or prospects, dramatically reducing a SaaS company’s overhead, service delivery risks, and costs.</p>
            <h3>Options to Secure Your DevOps Platform</h3>
            <p>Now let’s assume that we have decided to build and operate a DevOps Platform that follows best practices in order to receive a SOC 2 Report. There are two ways to go about it:</p>
        </div>
    </div>
        <div class="row">
            <div class="col-xl-4 offset-xl-2">
                <h6>The Do-It-Yourself (DIY) Approach:</h6>
                <p>This option requires as prerequisites having knowledgeable in-house security resources to purchase the required hardware and software and to have the expertise to define security controls. In-house experts should define the controls and procedures based for SOC 2, set up and configure the servers, select the software tools and establish the monitoring and the customization to ensure that all aspects of security controls are addressed.</p>
                <p>This approach is usually implemented in the following use cases:</p>
                <ul class="dashes">
                    <li>The use of proprietary technology that does not fit with standard security tools/processes that are in use by third-party service providers.</li>
                    <li>Security procedures requiring a high-level of customization and full control over the platform.</li>
                    <li>An already established mature secure operations centre.</li>
                </ul>
                <p>Many organizations lack the talent, tools, and expertise required to succeed in a DIY approach. Those that do may be handicapped by legacy tools and systems that are difficult to convert into cloud native equivalents. Likewise, their infosec teams may be unwilling to learn new skills and adopt new practices for addressing the security risks presented by the cloud. They will need to build modern DevSecOps pipelines.</p>
            </div>
        <div class="col-xl-4">
            <h6>The Managed Services Approach</h6>
            <p>This outsourcing model, also called Security-as- a-Service (SECaaS), provides management of the application platform, security policies, and general administration over the cloud. Security tools and their expert teams are constantly working
            to ensure compliance with the predefined security controls and meeting the SOC 2 Report requirements. SECaaS becomes a part of DevOps- as-a-Service when DevOps tools and practices are applied to security. It is still important to highlight that application developers must own the security of the application code as they fall outside the responsibilities of the application platform.</p>
            <p>The common use cases for this approach are when the organization hopes to:</p>
                <ul class="dashes">
                    <li>Focus primarily on developing code/products without being distracted by managing security operations and procedures.</li>
                    <li>Minimize high investments in building
                    and maintaining the application platform, security tools, and extensive team training.</li>
                    <li>Reduce the amount of time spent designing and building an application platform.</li>
                    <li>Readily access the operational maturity required to maintain an application platform.</li>
                </ul>
        </div>
    </div>
    <div class="row">
        <div class="col-xl-8 offset-xl-2">
            <h3>Cost Analysis</h3>
            <p>The cost of a DIY approach can be significantly higher than managed services approach, especially if the costs of internal HR efforts, consulting fees, tools, and auditor fees are taken into consideration.</p>
        </div>
    </div>
        <div class="row">
            <div class="col-xl-4 offset-xl-2">
                <h6>Internal HR Efforts</h6>
                <p>It can be difficult and time-consuming to stay up to date with the ever-evolving requirements for security compliance or SOC 2 controls. Once you start implementing new security procedures, the company is committed to routinely conducting the required testing or monitoring. This often brings a need for new hires, sometimes even enough to equip a 24/7 team. Some of the internal costs of maintaining compliance for security programs in the DIY approach include hiring and training staff.</p>
                <p>For many enterprises, it makes sense to hire a third-party SECaaS provider in order to focus on software development and the creation of code and avoid being distracted by managing certain security controls and procedures. These external resources have the necessary expertise and
                they keep current with the latest regulations and compliance requirements. Outsourced resources can scale immediately to address new needs. The opportunity of having multi-skilled people that serve more than one team, or more than one purpose, is becoming a necessity in today’s
                cloud environments.</p>
            </div>
        <div class="col-xl-4">
            <h6>Consulting Fees</h6>
            <p>Traditionally, we see that even organizations that choose to go with the DIY approach require some initial support from external consultants to either complement the skills that are available in-house or to validate certain internal decisions. As in- house resources usually do not have enough time to receive a refresher about the changes in the security program, an expert is often hired to advise the in-house team that would be responsible for the majority of the work. This means that some external consulting fees would be needed for a DIY approach.</p>
            <p>When managed security services are implemented, most of these consulting fees are saved, as the professionals that provide the service are up-to-date with the latest security control requirements and how to implement it. The only part that they need to address is the special considerations that are unique to the deployment of the specific enterprise. This means that the consulting fees for the managed security services will be a fraction of the ones charged in a DIY approach.</p>
        </div>
    </div>
    <div class="row">
        <div class="col-xl-4 offset-xl-2">
            <h6>Tools</h6>
            <p>In a DIY approach, the enterprise needs to evaluate, learn, design, deploy, and manage the commercial security tools related to security monitoring, vulnerability detection, etc. In subsequent years, the company is expected to purchase and implement the security tools and pay maintenance.</p>
            <p>With managed security services, the outsourced staff that support the enterprise have deep knowledge of the required security tools. Depending on the enterprise security control needs, some tools will no longer be needed as they would overlap with the tools of the managed security platform. This may result in a lower cost for tools in the managed security services approach.</p>
        </div>
        <div class="col-xl-4">
            <h6>Auditor Fees</h6>
            <p>While the DIY method requires that the enterprise design and implement all security controls, in the case of managed security services, companies can reduce the cost of the external audit firm. The managed security services minimize compliance gaps by leveraging an already audited third-party platform that has a proven solution. This reduces the level of auditing for security controls already addressed by the SECaaS. By reducing the scope of audit that the auditors must address, the auditor fees shrink for the effort and fees for the enterprise.</p>
        </div>
    </div>
    <div class="row">
        <div class="col-xl-8 offset-xl-2">
            <h6>Conclusion</h6>
            <p>Leveraging expertise from third-party managed security services organizations allows enterprises companies to:</p>
            <ul class="dashes">
                <li>Quickly adopt cloud native security best practices and reduce overall cyber risk;</li>
                <li>Rapidly achieve reputable industry security audit reports, such as SOC 2, in order to help drive new sales;</li>
                <li>Reduce the need for additional staff, training and investment in security tools;</li>
                <li>Focus on developing new code and products, as opposed to managing security compliance programs;</li>
                <li>Minimize service delivery risk while lowering their operational costs.</li>
            </ul>
            <p>In fact, the market for managed security services is growing at a fast pace. According to Allied Market Research, the global market is expected to garner $40.97 billion by 2022, registering a CAGR of 16.6% during the 2016-2022 period.14 Enterprises have found success leveraging third-party managed services.</p>
        </div>
    </div>

</div>
    <!-- contact us -->
    <div class="contact-us-card">
        <div class="row">
            <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12 col-sm-12 col-xs-12">
                <img src="/images/single-line-arrows.png">
            </div>
            <div
                class="col-xl-3 offset-xl-3 col-lg-3 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-xs-12">
                <h2>Where should we send this white paper?</h2>
            </div>
            <div
                class="col-xl-5 offset-xl-0 col-lg-6 offset-lg-1 col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-12 general-contact-form">
                <!--[if lte IE 8]>
<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2-legacy.js"></script>
<![endif]-->
<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js"></script>
<script>
  hbspt.forms.create({
	portalId: "732832",
	formId: "a62e8126-9063-4415-8452-09bd88a5ff66"
});
</script>
            </div>
        </div>
    </div>
</div>