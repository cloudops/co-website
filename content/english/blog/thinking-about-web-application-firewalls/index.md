---
title: "Thinking About Web Application Firewalls"
lastmod: "2013-01-28"
author: "François Gaudreault"
resources:
- name: "thumbnail"
  src: ""
class_name: "blog post"
---

<img src="/images/blog/post/WAF.jpg" class="main-blog-image">

<p>Web Application Firewalls (WAFs) are growing in the market, providing many benefits including the prevention zero-day exploits.</p>

<p><strong>What is a Web Application Firewall?</strong></p>

<p>By definition, a web application firewall is a device that sits between the client and the web server and analyses layer 7 messages for violations in the defined security policy. In other words, WASFs look at HTTP/HTTPS/SOAP/XML requests and responses and look for potential attacks according to predefined rules on the device or abnormal behavior.</p>

<p><strong>Why use WAFs?</strong></p>

<p>IT managers or Network professionals can use WAFs in their infrastructure for some of the following reasons:</p>

<div class="tabbed-text">
    <p>Help preventing 0-day attacks on code you don’t know</p>
    <p>Use in a Reactive or Proactive way (block or just alert basically)</p>
    <p>Protect from HTTP DDoS</p>
    <p>Help get PCI DSS certification</p>
</div>

<p><strong>What to look for?</strong></p>

<p>If you are interested in using WAFs, many solutions are available on the market. You should consider the following four key requirements on the technical side as you compare solutions:</p>

<div class="tabbed-text">
    <p><strong>Performance.</strong> It all comes down to how much bandwidth and packets per seconds the WAF can handle. You want to look at a unit that can deliver with the load you have now, and scale as you grow.</p>
    <p><strong>Management and Feature set. </strong>You should look for a compromise between ease of use and number of features. You don’t want to end up with a too complex GUI, use only CLI for some feature configuration or have a lack of features that you need in your infrastructure. Find the balance you like.</p>
    <p><strong>Rules. </strong>How often will the vendor propose rules update? Can you add your own rules? Can you modify the vendor rules? Those are some questions you need to ask when investigating for a potential WAF.</p>
    <p>strong>Learning/Training. </strong>Another key feature would be to have training or learning mode on the appliance. You can then determine which alert is a false positive, and which one is not. You could also tell the appliance which response is normal and expected, and then block everything else.</p>
</div>

<p><strong>Challenges with WAF</strong></p>

<p>There are some concerns with the bypassing of WAFs, called <em>WAF evasion</em>. In a future post we will investigate the potential threats (and response) from attacks such as:</p>

<div class="tabbed-text">
<p>Mixed Cases to bypass REGEXP matching</p>
<p>Random comments in SQL Injection queries</p>
<p>SQL query encoding using Hex</p>
<p>Packet fragmentation</p>
<p>URI Encoding (Unicode)</p>
</div