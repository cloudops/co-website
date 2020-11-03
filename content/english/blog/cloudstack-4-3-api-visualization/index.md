---
title: "CloudStack 4.3 API Visualization"
lastmod: "2014-05-29"
author: "Will Stevens"
description: A visualization of the CloudStack API based on the public documentation represents the request references from basic entities to other basic entities. 
resources:
- name: "thumbnail"
  src: "vis_43.png"
class_name: "blog post"
aliases:
    - /2014/05/cloudstack-4-3-api-visualization/
    - /cloudstack-4-3-api-visualization/

---

<p>Click the image to interact with the visualization…..</p>

<p>I put together a visualization of the CloudStack API based on the public documentation. &nbsp;This visualization represents the request references from basic entities to other basic entities. &nbsp;The arrow direction is the direction in which the reference is made. So if an API call in the Virtual Machine section references a Network, it would appear as: Virtual Machine-&gt; Network. I am not showing the specific API calls, I am grouping all the API calls for a section together and mapping them to other logical sections.</p>

<p>I had to limit the connections for some of the elements because the graph was too messy. For example, since Account, Domain and Zone are referenced by almost every element, I have only shown the outgoing connections from them and not the incoming connections.</p>