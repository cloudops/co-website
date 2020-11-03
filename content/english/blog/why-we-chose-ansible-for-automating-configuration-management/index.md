---
title: "Why We Chose Ansible for Automating Configuration Management"
lastmod: "2018-06-18"
author: "CloudOps"
description: Ansible is an open source tool for automating configuration management, deployment, and orchestration.
resources:
- name: "thumbnail"
  src: "Ansible.jpg"
class_name: "blog post"
aliases:
    - /2018/06/why-we-chose-ansible-for-automating-configuration-management/
    - /why-we-chose-ansible-for-automating-configuration-management/
---

<p><a href="https://www.ansible.com/" target="_blank">Ansible</a> is an open source tool for automating configuration management, deployment, and orchestration. It has an agentless approach that is designed to simplify the process of deploying VMs while allowing greater control over and agility in their configuration. While Ansible can be used to deploy and maintain standardized server configurations via templates (Ansible Playbooks), it can also be modified to apply custom configurations for individual machines to meet specific requirements. It is receptive to active configuration changes and uses standard SSH connectivity to execute automation workflows, reducing the management overhead and facilitating the integration of instances into a wide array of environments. Ansible can automate the deployment and configuration of ephemeral instances, and remove them when no longer needed. It can perform auto-scaling for modern, scale-out applications.</p>

<p><strong>Ease</strong> – Ansible is well known for the simplicity of its language. Written in humanly-readable YAML, it has a gentle learning curve that evades the complexity and tribal knowledge associated with Chef, Puppet, and SaltStack. Ansible is more accessible than its alternatives, and its directives can be more easily written and understood throughout an organization.</p>

<p><strong>Community</strong> – Released in 2013 and acquired by Red Hat in 2015, Ansible has convincing community support. With over a quarter million downloads every month, it is currently the most popular open source automation tool on GitHub. There has been sufficient adoption of Ansible as an orchestration tool for it to have reached popular acceptance, and the community includes other vendors that contribute in Galaxy. We expect Ansible to maintain momentum in the future.</p>

<p><strong>Versatility</strong> – Ansible’s ease and community have led to a set of playbooks that cover a diverse range of use cases. While certain aspects, such as the collection of information for reporting, may be relatively weaker compared to other tools, Ansible is more versatile. It can automate configuration at many different levels (operating systems, application components), and can be applied to different equipment (server, storage, network) or infrastructures (bare metal, virtual, cloud infrastructure). It is particularly useful for managing modern scale-out applications.</p>

<p><strong>Flexibility</strong> – Ansible’s official set of supported playbooks can be useful for production workloads. This is further supplemented by the support of Ansible’s <a href="https://galaxy.ansible.com/" target="_blank">Galaxy</a> hub and the active contributions of a growing community. Ansible also provides a comprehensive way of writing your own modules using well-known languages, such as Python. Altogether, the breadth of playbooks gives you the flexibility to find or create Ansible playbooks to suit your particular use case.</p>

<p><strong>Control</strong> – Agents automatically configure VMs to directives coming from the control plane, so they ensure consistency through the life cycle of a VM, which may at times override the requirements of specific instances. Ansible is agentless, and is therefore capable of comparing the VM instance’s actual configuration with the desired state and execute modules necessary to bring the instance into the desired state. Its structured inventory mechanisms give you greater control over individual instances than agent-based approaches.</p>

<p><strong>Integration</strong> – Ansible is not a prescriptive solution, and its versatility and flexibility are supplemented by its ability to suit many environments. It integrates well with Terraform as a provisioning tool, but it also has explicit plugins that allow it to work with broader workflow systems, such as ServiceNow and Remedy. In general, it can be integrated with most existing system management tools. It grants DevOps teams the ability to apply different tools at different stages of their pipelines. Ansible is also able to work with dynamic inventories from different cloud providers supporting a multi-cloud strategy.</p>

<p><strong>Speed</strong> – Ansible lacks the overhead of installing agents on target machines or environments. Connectivity is all that is needed. Ansible significantly increases the speed at which VMs can be deployed, which makes it ideal for the automation of short-lived, ephemeral life cycles, which are becoming more typical in an increasingly cloud native world.</p>

<p>Ansible allows organizations to automate at scale the configuration of VMs, instances, and devices in general while maintaining control over deployments and broadening the scope of automation. By focusing on how components interrelate rather than are individually managed, Ansible can build upon infrastructure to automate dynamic platforms. It has become a commonplace tool for building Infrastructure as Code and encouraging dynamic, CI/CD pipelines. For advice on implementing DevOps practices, reach out to us at <a href="mailto:info@cloudops.com">info@cloudops.com</a> or sign up for one of our hands-on <a href="https://www.cloudops.com/workshop-calendar/" target="_blank">trainings</a>. Amongst others, we offer workshops on <a href="/infrastructure-as-code/" target="_blank">Infrastructure as Code</a>.</p>
<img class="alignleft" title="Marc Pare" src="/images/blog/post/MarcPare2.jpg" alt="" width="150">
<h3>Marc Pare</h3>
<p>As Chief Commercial Officer at Cloudops, Marc is responsible for driving new revenue in addition to managing the growing product offerings. With over fifteen years of experience in information technology, Marc has a strong background in product management, sales, marketing, and web operations. Prior to joining CloudOps in 2012, he worked in cloud networking solutions at Citrix and held various business and technical roles throughout ten years at Coradiant.</p>