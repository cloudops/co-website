---
title: "Supplemental Pack for XenServer allows for VDI per LUN Functionality"
date: "2016-03-22"
author: "Ian Rae"
description: Supplemental Pack for XenServer 6.5 Allows VVOLs-like VDI per LUN Functionality for XenServer and Enables Multi-tenant QoS
resources:
- name: "thumbnail"
  src: "data-storage-cloudops.jpg"
class_name: "blog post"
aliases:
    - /2016/03/vdi-per-lun/
    - /vdi-per-lun/
keywords:
tags:
---

<p><strong>Supplemental Pack for XenServer 6.5 Allows VVOLs-like VDI per LUN Functionality for XenServer and Enables Multi-tenant QoS</strong></p>

<p>Syed Ahmed of CloudOps has completed an open source project to allow XenServer 6.5 to leverage backend SAN snapshots byresignaturing metadata of a copied LUN (Logical Unit Number).</p>

<p>This allows more efficient support of processes that rely on snapshots including backups of XenServer virtual machines by leveraging integrated snapshots on a SAN, in this case <a href="http://www.solidfire.com/" target="_blank">SolidFire</a> which is a popular scale-out iSCSI block storage for cloud infrastructure. Furthermore, this work allows more seamless migration of volumes between virtualized clusters, and allows fine grained QoS to be applied per volume in a multi-tenant environment.</p>

<p><b>XenServer With Pack Remains Supported by Citrix</b></p>

<p>The supplemental pack is available on GitHub<a href="https://github.com/cloudops/ReLVHDoISCSISR" target="_blank">here</a> and is verified as “Citrix Ready”. Citrix will continue to offer commercial support for XenServer with the supplemental pack installed, though it will not support the supplemental pack itself.</p>

<p>This supplemental pack enables the ability to reattach LUNs created by taking snapshots of ISCSI SRs on backends like SolidFire or Equallogic. This is done by “resignaturing” the SR metadata so that there are no conflicts during reattachment. This gives the ability to use much more efficient backend snapshots instead of XenServer snapshots, which are relatively slow and have an impact on guest VM performance. By limiting to a single VDI in a LUN, we can also enable QoS per volume (if the storage supports it, which SolidFire does).</p>

<p><b>VVOLs Comparison</b></p>

<p>It may be useful to compare and contrast this work to Virtual Volumes (VVOLs), which is VMWare’s offering for enabling VDI-per-LUN to our supplemental pack for XenServer.</p>

<p>VVOLs enable the integration of external storage (SAN/NAS) with VMware’s storage management layer. It is similar to a component once provided by XenServer called StorageLink. VVOLs divides the storage management into a control plane and a data plane. The control plane is responsible for all the logic that happens, for example which VM gets what volumes, access control, QoS limits, snapshots, replication, deduplication. Various storage vendors plug into the data layer via an API provided by VMWare (VASA API). VMWare has a concept of virtual datastore that is similar to an SR in XenServer. A single virtual datastore is assigned to a storage container which can be considered as a slice of the storage array. In the case of SolidFire, for example, this would mean we allocate half of its capacity to a storage container which will be mapped to a virtual datastore by VSphere. The glue which maps a storage container to a virtual data store is provided by the storage vendor. Virtual disks are mapped to VVOLs which are implemented by the backend storage (SolidFire would implement each virtual volume as a LUN). There are different kinds of VVOLs like Data VVOLs, Swap VVOLs, Config-VVOLs, etc, each has its own use case.</p>

<p><b>Differences Between VVOLs and Our Pack</b></p>

<p>– VVOLs have a concept of a datastore which contains all the virtual volumes they create – similar to an SR. However in the case of XenServer, we have to create an SR for each Virtual Volume we create.</p>

<p>– VVOLs support a lot of storage vendors. Our supplemental pack works for iSCSI based storage only.</p>

<p>– In the case of XenServer, you need another orchestrator like CloudStack or OpenStack to create and manage volumes on the backend storage.</p>

<p>– VVOLs provide other functionalities like deduplication, replication that are not present with our CloudStack + XenServer setup.</p>

<p><b>Why Use the XenServer VDI-per-LUN Supplemental Pack?</b></p>

<p>– This is the only solution if you want to provide VVOLs-like functionality over XenServer 6.5.</p>

<p>– This enables better utilization of backend storage. We don’t have to manually reclaim space in an SR as we currently do.</p>

<p>– Can be used by any other storage provider given they have a storage plugin for CloudStack.</p>

<p>– Finally, XenServer is freely available as open source software or is available with commercial support from Citrix. VMware, and therefore VVOLs, is quite expensive and is closed source, therefore requires a greater amount of vendor lock-in.</p>


<p style="font-size: 10px;">Photo credit: <a  style="font-size: 10px;" href="http://www.pghtech.org/" target="_blank">http://www.pghtech.org/</a></p>