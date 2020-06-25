---
title: "Why private cloud matters"
lastmod: "2019-12-02"
author: "CloudOps"
class_name: "blog post"
---

<img src="/images/blog/post/cloud.jpg" class="main-blog-image">

<p><em>by Pierre-Luc Bisaillon</em></p><p>I read a recent Gartner insight that predicts that the use of the word <em>cloud</em> will drop off in 2013, to be replaced by better descriptors of business value. Whether or not we use it less, we will continue to use it a lot.</p><p>These days when I define what I mean by cloud, I return to the <a href="http://csrc.nist.gov/publications/nistpubs/800-145/SP800-145.pdf">NIST definition</a>, and use the following table to illustrate the options:</p><table border="1" cellpadding="2"><tbody><tr><th>Service Model</th><th>Private</th><th>Public</th></tr><tr><td>SaaS</td><td>N/A</td><td>e.g., Salesforce.com, Gmail, Dropbox</td></tr><tr><td>PaaS</td><td>e.g., ActiveState, Cumulogic</td><td>e.g., AppEngine, Heroku</td></tr><tr><td>IaaS</td><td>e.g., CloudStack, OpenStack</td><td>e.g., AWS, Rackspace</td></tr></tbody></table><p>In short, a cloud is a computing system that follows one of the patterns in this table, and which exhibits the following characteristics:</p><ol><li>On-demand self-service</li><li>Broad network access</li><li>Resource pooling</li><li>Rapid elasticity</li><li>Measured service</li></ol><h2>Different workloads, different clouds</h2><p>It’s amazing to hear people who have very strong opinions about where a particular workload should run, based on no apparent reason other than inertia. It has always run there; why should it run somewhere else? I find the car analogy continues to have wheels (!) when describing this situation. When you discuss cars, do you even think twice about taking a cab? About renting a car in a different city? About the fact that some people prefer to own cars while others prefer to lease them? In terms of your computing needs, the cloud opens a similar number of options, and it is your job to match the right application to the right computing environment.</p><p>From our perspective, private clouds will remain an essential part of the ecosystem, for many reasons.</p><h2>Performance</h2><p>Yes, large public clouds such as AWS are impressive in their capacity and feature set. Yet, their scale requires a number of very delicate choices and aggressive standardizations  And sometimes these things come at a cost to performance. I was talking today to an insider who described a private cloud in a large media company where the owners recognized that “they would not have been able to do what they did on AWS.” The story of Zynga is well known and a good example of the benefits of leveraging both public and private clouds in a way that makes sense for the particular business at a given point in time:</p><blockquote><p>“[M]aybe you don’t understand the workload of the application, or you don’t understand how successful the application is going to be in the marketplace, you may want to co-lo or rent, but once you understand the workload and the business model, you need to control the infrastructure in a way that makes sense for your business.” (<a href="http://www.techrepublic.com/blog/datacenter/the-evolution-of-zyngas-zcloud-interview-with-cto-of-infrastructure-allan-leinwand/5426" target="_blank">Allan Leinwand, Zynga</a>)</p></blockquote><p>The bottom line: continue to leverage the public cloud for everything it has to offer. But when you know exactly what you want — and it’s stable — consider a private cloud.</p><h2>Control</h2><p>Another shortcoming of building a set of standard offerings at scale is that you can’t always customize your environment as much as you would like. A higher level of customization may enable you to reach better performance, but may also give you an opportunity to create very specialized service offerings that only make sense in your company or industry. Similarly, a private cloud lets you implement customized security rules which may be required in your situation.</p><h2>Where’s your data</h2><p>As you think about public vs. private cloud, make sure you consider your data as well as your compute needs. In the past, we generally thought of our compute power as fixed (e.g., our data center) and we brought the data to the compute. As the volume and gravity of information increases, it becomes increasingly difficult to move data, and we are now starting to see people bringing compute capacity (e.g., VMs) to where their data is. Hence, start thinking about where your data needs to be, and <em>then</em> create compute capacity. And for private data, that reasoning leads to private cloud.</p><h2>Capex vs. Opex</h2><p>Although there is certainly a tendency to provide everything-as-a-service, the reality is that different businesses have different financial situations and preferences. The Opex trend has some merits, but in larger organizations there is a balance to be struck.</p>