---
title: "CloudStack: Creating advanced networking zone using API"
date: "2014-03-28"
author: "Pierre-Luc Dion"
description: How to create an entire advanced networking zone from the API
resources:
- name: "thumbnail"
  src: "Cloudstack.jpg"
- name: "cover"
  src: "Cloudstack-cover.jpg"
class_name: "blog post"
aliases:
    - /2014/03/cloudstack-creating-advanced-networking-zone-using-api/
    - /cloudstack-creating-advanced-networking-zone-using-api/
keywords:
tags:
---

<p>In the process of automating <a title="CloudStack" href="http://cloudstack.apache.org/">CloudStack</a> installation, we’ve been through a challenging part: Creating an Entire Advanced networking Zone from the API. Production and test system that we deploy don’t have building tools such as mavin in order to create zones, pod,networks,… So the usual process is to use the Web UI and follow the “Add Zone” wizard. Well, not anymore!</p>

<p>To create an entire zone using API we are using Ruby with <a href="https://github.com/chipchilders/cloudstack_ruby_client">Chip’s cloudstack_ruby_client</a>. Other API clients can be used such as <a href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/CloudStack+cloudmonkey+CLI">cloudmonkey</a>, the idea is to demonstrate required API calls and their order.</p>

<h2>Overview</h2>

<p>In this scenario we are using XenServer as hypervisor that have a Bond interface named: “bond1”, Storage networking is not used and we also enable local Storage instead of using Shared SAN for the Primary Storage. Virtual Router and VPC’s are enabled Network Service Providers.</p>

<p>So, to create and populate a zone we need to perform following tasks (the order matter, they might be variant but that version as been tested and does work well so far).</p>

<ol><li>Create zone&nbsp; (<a href="https://cloudstack.apache.org/docs/api/apidocs-4.3/root_admin/createZone.html">createZone</a>)</li><li>Prepare networks<ol><li>Create physicalnetworks, and define guest VLAN-range (<a href="https://cloudstack.apache.org/docs/api/apidocs-4.3/root_admin/createPhysicalNetwork.html">createPhysicalNetwork</a>)</li><li>Assign physical network to traffic type and assign labels. (<a href="https://cloudstack.apache.org/docs/api/apidocs-4.3/root_admin/addTrafficType.html">addTrafficType</a>)</li><li>Update network_service_providers (<a href="https://cloudstack.apache.org/docs/api/apidocs-4.3/root_admin/updateNetworkServiceProvider.html">updateNetworkServiceProvider</a>)</li><li>Define guest networks vlan range (<a href="https://cloudstack.apache.org/docs/api/apidocs-4.3/root_admin/updatePhysicalNetwork.html">updatePhysicalNetwork</a>)</li><li>Define public IP range (<a href="https://cloudstack.apache.org/docs/api/apidocs-4.3/root_admin/createVlanIpRange.html">createVlanIpRange</a>)</li></ol></li><li>Create pod (<a href="https://cloudstack.apache.org/docs/api/apidocs-4.3/root_admin/createPod.html">createPod</a>)</li><li>Create cluster (<a href="https://cloudstack.apache.org/docs/api/apidocs-4.3/root_admin/createCluster.html">createCluster</a>)</li><li>Create secondary storage (<a href="https://cloudstack.apache.org/docs/api/apidocs-4.3/root_admin/addSecondaryStorage.html">addSecondaryStorage</a>)</li><li>Create primary storage or enable localstorage into the zone (<a href="https://cloudstack.apache.org/docs/api/apidocs-4.3/root_admin/updateZone.html">updateZone</a>)</li><li>add host (<a href="https://cloudstack.apache.org/docs/api/apidocs-4.3/root_admin/addHost.html">addHost</a>)</li><li>enable the zone (<a href="https://cloudstack.apache.org/docs/api/apidocs-4.3/root_admin/updateZone.html">updateZone</a>)</li></ol>

<p>Following steps presume that you have <strong>API_KEY</strong> and <strong>SECRET_KEY</strong> of admin and have set `system.vm.use.local.storage` to true.</p>

<h2>let’s roll</h2>

<p>This quick how to consider that you have Ruby installed, more info on installing ruby: <a title="rvm.io" href="http://rvm.io/rvm/install" target="_blank">rvm.io</a></p>

<ol><li>Prepare your ruby:<pre>$ <span style="color:#00f">gem</span> install cloudstack_ruby_client
$ irb
</pre></li><li>Connection to CloudStack:<pre><span style="color:#00f">require</span> <span style="color:#093">'cloudstack_ruby_client'</span><span style="color:#06f;font-style:italic"># cloudstack connection</span>
URL <span style="color:#00f">=</span> <span style="color:#093">'http://IP:8080/client/api/'</span>
APIKEY <span style="color:#00f">=</span> <span style="color:#093">"admin apikey"</span>
SECKEY <span style="color:#00f">=</span> <span style="color:#093">"admin secretkey"</span>
client <span style="color:#00f">=</span> <span style="color:#33f;font-weight:700">CloudstackRubyClient</span>::<span style="color:#33f;font-weight:700">Client</span>.<span style="color:#00f">new</span>(URL, APIKEY, SECKEY, <span style="color:#9700cc">false</span>)
</pre></li><li>Create zone:&nbsp;<pre>zone_conf <span style="color:#00f">=</span> {
    <span style="color:#6782d3">:dns1</span> =&gt; <span style="color:#093">"8.8.8.8"</span>,
    <span style="color:#6782d3">:internaldns1</span> =&gt; <span style="color:#093">"8.8.8.8"</span>,
    <span style="color:#6782d3">:name</span> =&gt; <span style="color:#093">"testZone2"</span>,
    <span style="color:#6782d3">:guestcidraddress</span> =&gt; <span style="color:#093">"10.2.1.0/24"</span>,
    <span style="color:#6782d3">:networktype</span> =&gt; <span style="color:#093">"Advanced"</span>
}
zone <span style="color:#00f">=</span> client.create_zone(zone_conf)
</pre></li><li>Configure network:<ol><li>physical interface mapping</li><li>define guest VLANs</li><li>define public IP’s range</li><li>Enable network service providers</li></ol><pre>phy_net_conf <span style="color:#00f">=</span> {
    <span style="color:#6782d3">:name</span> =&gt;<span style="color:#093">"data2"</span>, 
    <span style="color:#6782d3">:isolationmethods</span> =&gt; <span style="color:#093">"VLAN"</span>,
    <span style="color:#6782d3">:zoneid</span> =&gt; zone[<span style="color:#093">"zone"</span>][<span style="color:#093">"id"</span>]
}
p_net <span style="color:#00f">=</span> client.create_physical_network(phy_net_conf)

phy_net <span style="color:#00f">=</span> client.list_physical_networks(<span style="color:#6782d3">:name</span> =&gt; phy_net_conf[<span style="color:#6782d3">:name</span>])

client.add_traffic_type({ 
    <span style="color:#6782d3">:physicalnetworkid</span> =&gt; phy_net[<span style="color:#093">"physicalnetwork"</span>].first[<span style="color:#093">"id"</span>], 
    <span style="color:#6782d3">:traffictype</span> =&gt; <span style="color:#093">"Management"</span>, 
    <span style="color:#6782d3">:xennetworklabel</span> =&gt; <span style="color:#093">"bond1"</span>
})
client.add_traffic_type({ 
    <span style="color:#6782d3">:physicalnetworkid</span> =&gt; phy_net[<span style="color:#093">"physicalnetwork"</span>].first[<span style="color:#093">"id"</span>], 
    <span style="color:#6782d3">:traffictype</span> =&gt; <span style="color:#093">"Public"</span>, 
    <span style="color:#6782d3">:xennetworklabel</span> =&gt; <span style="color:#093">"bond1"</span>
})
client.add_traffic_type({ 
    <span style="color:#6782d3">:physicalnetworkid</span> =&gt; phy_net[<span style="color:#093">"physicalnetwork"</span>].first[<span style="color:#093">"id"</span>], 
    <span style="color:#6782d3">:traffictype</span> =&gt; <span style="color:#093">"Guest"</span>, 
    <span style="color:#6782d3">:xennetworklabel</span> =&gt; <span style="color:#093">"bond1"</span>
})

<span style="color:#06f;font-style:italic"># cannot enable phy_network at creation.</span>
guest_vlan_range <span style="color:#00f">=</span> client.update_physical_network({
    <span style="color:#6782d3">:id</span> =&gt; phy_net[<span style="color:#093">"physicalnetwork"</span>].first[<span style="color:#093">"id"</span>],
    <span style="color:#6782d3">:state</span> =&gt; <span style="color:#093">"Enabled"</span>,
    <span style="color:#6782d3">:vlan</span> =&gt; <span style="color:#093">"3101-3110"</span>,
    <span style="color:#6782d3">:isolationmethods</span> =&gt; <span style="color:#093">"VLAN"</span>, 
    <span style="color:#6782d3">:zoneid</span> =&gt; zone[<span style="color:#093">"zone"</span>][<span style="color:#093">"id"</span>]
})

public_range <span style="color:#00f">=</span> client.create_vlan_ip_range({
    <span style="color:#6782d3">:physicalnetworkid</span> =&gt; phy_net[<span style="color:#093">"physicalnetwork"</span>].first[<span style="color:#093">"id"</span>], 
    <span style="color:#6782d3">:startip</span> =&gt; <span style="color:#093">"172.12.1.80"</span>, 
    <span style="color:#6782d3">:endip</span> =&gt; <span style="color:#093">"172.12.1.89"</span>, 
    <span style="color:#6782d3">:netmask</span> =&gt; <span style="color:#093">"255.255.255.0"</span>,
    <span style="color:#6782d3">:gateway</span> =&gt; <span style="color:#093">"172.12.1.1"</span>,
    <span style="color:#6782d3">:vlan</span> =&gt; <span style="color:#093">"1161"</span>,
    <span style="color:#6782d3">:zoneid</span> =&gt; zone[<span style="color:#093">"zone"</span>][<span style="color:#093">"id"</span>]
})

<span style="color:#06f;font-style:italic">##</span>
<span style="color:#06f;font-style:italic"># Service Providers</span>
<span style="color:#06f;font-style:italic">#</span>
<span style="color:#06f;font-style:italic"># enable vr-element  =&gt; need loop</span>
vre <span style="color:#00f">=</span> client.list_virtual_router_elements(<span style="color:#6782d3">:enabled</span> =&gt; <span style="color:#093">"false"</span>)[<span style="color:#093">"virtualrouterelement"</span>]
vre.each <span style="color:#00f">do </span>|vre|
    client.configure_virtual_router_element({
        <span style="color:#6782d3">:id</span> =&gt; vre[<span style="color:#093">"id"</span>],
        <span style="color:#6782d3">:enabled</span> =&gt; <span style="color:#093">"true"</span>
    })
<span style="color:#00f">end</span>
vr_prov <span style="color:#00f">=</span> client.list_network_service_providers(
    <span style="color:#6782d3">:physicalnetworkid</span> =&gt; phy_net[<span style="color:#093">"physicalnetwork"</span>].first[<span style="color:#093">"id"</span>], 
    <span style="color:#6782d3">:name</span> =&gt; <span style="color:#093">"VirtualRouter"</span>
)
vpc_prov <span style="color:#00f">=</span> client.list_network_service_providers(
    <span style="color:#6782d3">:physicalnetworkid</span> =&gt; phy_net[<span style="color:#093">"physicalnetwork"</span>].first[<span style="color:#093">"id"</span>], 
    <span style="color:#6782d3">:name</span> =&gt; <span style="color:#093">"VpcVirtualRouter"</span>
)

<span style="color:#06f;font-style:italic"># enable network service providers</span>
client.update_network_service_provider({
    <span style="color:#6782d3">:id</span> =&gt; vr_prov[<span style="color:#093">"networkserviceprovider"</span>].first[<span style="color:#093">"id"</span>],
    <span style="color:#6782d3">:state</span> =&gt; <span style="color:#093">"Enabled"</span>
})
client.update_network_service_provider({
    <span style="color:#6782d3">:id</span> =&gt; vpc_prov[<span style="color:#093">"networkserviceprovider"</span>].first[<span style="color:#093">"id"</span>],
    <span style="color:#6782d3">:state</span> =&gt; <span style="color:#093">"Enabled"</span>
})
<span style="color:#06f;font-style:italic">#</span>
<span style="color:#06f;font-style:italic">##</span>
</pre></li><li>Create everything else for the zone:<pre><span style="color:#06f;font-style:italic"># create POD</span>
pod_conf <span style="color:#00f">=</span> {
    <span style="color:#6782d3">:name</span> =&gt; <span style="color:#093">"pod1"</span>,
    <span style="color:#6782d3">:gateway</span> =&gt; <span style="color:#093">"172.30.20.1"</span>,
    <span style="color:#6782d3">:netmask</span> =&gt; <span style="color:#093">"255.255.255.0"</span>,
    <span style="color:#6782d3">:startip</span> =&gt; <span style="color:#093">"172.16.20.80"</span>,
    <span style="color:#6782d3">:endip</span> =&gt; <span style="color:#093">"172.30.20.89"</span>,
    <span style="color:#6782d3">:zoneid</span> =&gt; zone[<span style="color:#093">"zone"</span>][<span style="color:#093">"id"</span>]
}
pod <span style="color:#00f">=</span> client.create_pod(pod_conf)<span style="color:#06f;font-style:italic"># create CLUSTER</span>
cluster_conf <span style="color:#00f">=</span> {
    <span style="color:#6782d3">:clustername</span> =&gt; <span style="color:#093">"cluster1"</span>,
    <span style="color:#6782d3">:clustertype</span> =&gt; <span style="color:#093">"CloudManaged"</span>,
    <span style="color:#6782d3">:hypervisor</span> =&gt; <span style="color:#093">"XenServer"</span>,
    <span style="color:#6782d3">:podid</span> =&gt; pod[<span style="color:#093">"pod"</span>][<span style="color:#093">"id"</span>],
    <span style="color:#6782d3">:zoneid</span> =&gt; zone[<span style="color:#093">"zone"</span>][<span style="color:#093">"id"</span>]
}
cluster <span style="color:#00f">=</span> client.add_cluster (cluster_conf)<span style="color:#06f;font-style:italic"># create secondary storage</span>
sec <span style="color:#00f">=</span> client.add_secondary_storage ({
    <span style="color:#6782d3">:url</span> =&gt; <span style="color:#093">"nfs://172.30.21.173/data/secondary"</span>,
    <span style="color:#6782d3">:zoneid</span> =&gt; zone[<span style="color:#093">"zone"</span>][<span style="color:#093">"id"</span>]
})<span style="color:#06f;font-style:italic"># enable local storage</span>
client.update_zone({<span style="color:#6782d3">:id</span> =&gt; zone[<span style="color:#093">"zone"</span>][<span style="color:#093">"id"</span>], <span style="color:#6782d3">:localstorageenabled</span> =&gt; <span style="color:#093">"true"</span>})<span style="color:#06f;font-style:italic"># add host that is ready to go</span>
host_conf <span style="color:#00f">=</span> {
    <span style="color:#6782d3">:hypervisor</span> =&gt; <span style="color:#093">"XenServer"</span>,
    <span style="color:#6782d3">:url</span> =&gt; <span style="color:#093">"http://172.30.20.34"</span>,
    <span style="color:#6782d3">:username</span> =&gt; <span style="color:#093">"root"</span>,
    <span style="color:#6782d3">:password</span> =&gt; <span style="color:#093">"ROOT_PASSORD"</span>,
    <span style="color:#6782d3">:clusterid</span> =&gt; cluster[<span style="color:#093">"cluster"</span>].first[<span style="color:#093">"id"</span>],
    <span style="color:#6782d3">:zoneid</span> =&gt; zone[<span style="color:#093">"zone"</span>][<span style="color:#093">"id"</span>],
    <span style="color:#6782d3">:podid</span> =&gt; pod[<span style="color:#093">"pod"</span>][<span style="color:#093">"id"</span>]
}
host <span style="color:#00f">=</span> client.add_host(host_conf)
</pre></li><li>Finaly, enable the zone:<pre><span style="color:#06f;font-style:italic"># enable zone</span>
client.update_zone({<span style="color:#6782d3">:id</span> =&gt; zone[<span style="color:#093">"zone"</span>][<span style="color:#093">"id"</span>], <span style="color:#6782d3">:allocationstate</span> =&gt; <span style="color:#093">"Enabled"</span>})
</pre></li></ol>