---
title: "Install Apache Cloudstack with Chef"
lastmod: "2014-03-07"
author: "Pierre-Luc Dion"
description: Installation of Apache CloudStack and is dependencies using Opscode Chef community cookbooks.
resources:
- name: "thumbnail"
  src: "Chef.jpg"
class_name: "blog post"
aliases:
  - /2014/03/install-apache-cloudstack-with-chef/
  - /install-apache-cloudstack-with-chef/
---

<p>Installation of <a href="http://cloudstack.apache.org/">Apache CloudStack</a> and is dependencies using <a href="http://www.opscode.com/">Opscode Chef</a>&nbsp;community cookbooks.</p>

<p>To create a lab, a test environment or to just try CloudStack, you could install it using the <a href="http://docs.cloudstack.apache.org/projects/cloudstack-installation/en/latest/">installation documentation</a> which is clean and fairly straight forward, but you can also install it with Chef and not worry about subtleties. Here is a quick way of installing CloudStack, MySQL server and NFS service into a single server to provide what’s required to setup a CloudStack lab. What’s remaining is to provide an Hypervisor and how you plan to deploy the initial zone within CloudStack.</p>

<p>By default those recipes will install on the same server:</p>

<ol><li>Cloudstack application</li><li>MySQL + cloudstack databases</li><li>get vhd-util tool (required to managed XenServer hypervisor)</li><li>Download system template VMs and configure NFS export for the Secondary Storage (/data/secondary)</li><li>Generate admin account api keys</li><li>install and configure cloudmonkey for the root user.</li></ol>

<p><em><br> This installation procedure consider that you have basic knowledge of <a href="http://www.getchef.com/">Chef</a> and have it already in place.<br> </em></p>

<p>Currently working on CentOs 6.x x86_64</p>

<h2>Prepare Chef environment</h2>

<p>From your Chef Workstation, get community cookbook co-cloudstack and is dependencies.</p>

<pre><code>
knife cookbook site install co-cloudstack
knife cookbook site install co-cloudmonkey
knife cookbook site install chef-client
knife cookbook site install sudo
knife cookbook site install mysql

</code></pre>

<p>Upload those cookbooks into you Chef-server</p>

<pre><code>
cd cookbooks
knife cookbook upload *

</code></pre>


<h5>Create role</h5>
<p>Role will install applications in proper order:</p>

<pre><code>
{
  "name": "cloudstack-singlenode",
  "description": "Cloudstack on a single node",
    "default_attributes": {
    "authorization": {
      "sudo": {
        "users": [ "cloud" ],
        "passwordless": "true"
      }
    }
  },
  "run_list": [
    "recipe[mysql::server]",
    "recipe[co-cloudstack::mysql-conf]",
    "recipe[chef-client]",
    "recipe[co-nfs::server]",
    "recipe[co-cloudstack]",
    "recipe[co-cloudstack::secondary-local-nfs]",
    "recipe[co-cloudstack::sys-tmpl]",
    "recipe[co-cloudstack::admin-apikey]",
    "recipe[co-cloudmonkey]"
  ]
}

</code></pre>

<h5>System-VM templates</h5>

<p>By default co-cloudstack will download <a>system vm template</a> for XenServer only to spare some installation time. If you are using another Hypervisor, add following attributes to your role or environments in Chef:</p>

<pre><code>
  "default_attributes": {
    "cloudstack": {
      "repo": "http://172.30.40.99/CloudStack4.3_nodist_rpms/2014-03-31_17-17-51/",
      "hypervisor_tpl": {
        "kvm": "http://download.cloud.com/templates/4.3/systemvm64template-2014-01-14-master-kvm.qcow2.bz2",
        "vmware": "http://download.cloud.com/templates/4.3/systemvm64template-2014-01-14-master-vmware.ova"
      }
    }
  }

</code></pre>

<h5>Create an environment</h5>

<p>co-cloudstack will use Chef environment to search for existing services required by Cloudstack such as MySQL server , NFS server and other existing Cloudstack. co-cloudstack use tags and run_list to identify services. If nothing is found, database will be initialized, and created, NFS server will be configure locally (/data/secondary), system-vm template will be downloaded.</p>

<pre><code>
# knife environment create <environment name>
knife environment create env-cs-lab01

</code></pre>

<h2>knife bootstrap</h2>

<pre><code>
knife bootstrap <Server IP> -E "env-cs-lab01" -r "role[cloudstack-singlenode]" -P <root password>

</code></pre>

<p>Once bootstrap is complete, you have a Chef managed CloudStack ready with Secondary and Primary storage NFS shares, Tuned MySQL server and cloudmonkey installed and configured.</p>

<p>By default co-cloudstack will use “/data“ as the mountpoint for NFS shares as secondary and primary storages (“/data/secondary“,“/data/primary“). Since this NFS share is far probably slow, it would be preferable to use LocalStorage as Primary Storage.</p>

<h2>What’s next?</h2>

<p>You can access CloudStack webui: http://serverIP:8080/client<br> username = admin,<br> password = password<br> At this point you have to select and prepare hypervisor you need and how the first zone will be configured. More information at <a href="http://docs.cloudstack.apache.org/projects/cloudstack-installation/en/latest/choosing_deployment_architecture.html">Apache CloudStack documentation</a>.</p>