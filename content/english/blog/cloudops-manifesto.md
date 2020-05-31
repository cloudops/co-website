---
title: A Cloud Operations Manifesto
lastmod: "2015-12-03"
author: "CloudOps"
class_name: "blog post"
---

<img src="/images/blog/post/manifesto.png" class="main-blog-image">

<p><span style="font-weight: 400;">Cloud computing is a revolutionary new model for IT services delivery, allowing on-demand utility consumption that can be fully automated via software. Being able to obtain IT resources like hailing a taxi is an essential characteristic of cloud computing. With such new capabilities, </span><strong>cloud computing enables completely new business models</strong><span style="font-weight: 400;">, such as e-commerce flash crowd sales (e.g. Beyond the Rack) and massively parallelized compute work (e.g. modelling drug interactions) while enabling us to improve on old business models, allowing for better, faster and cheaper services. These new and improved cloud business models </span>require a new operations model<span style="font-weight: 400;"> to succeed and be cost effective. We call this “CloudOps” and we built our company to focus on helping companies with this cloud operations transformation.</span></p>

<p><span style="font-weight: 400;">The </span>DevOps movement<span style="font-weight: 400;"> has captured hearts and minds about what it takes to develop and deliver modern software applications (think SaaS) with new practices encouraging product teams to work together in an agile manner with shared responsibility for operational success. We find the practice of building and running the cloud infrastructure (IaaS and PaaS) that supports modern software development has its own characteristics and challenges, some shared with DevOps but some quite distinct from what it takes to succeed at the application layer of the cloud.</span></p>

<p>We believe that<b> “</b>CloudOps”<span style="font-weight: 400;"> is an emerging practice of continuous delivery and operations of cloud computing infrastructure, 24x7x365 with nonstop service, competitive performance and usability, and the scalability and security required for modern online services. Many people think the hard part is the architecture and implementation of cloud infrastructure, but we beg to differ. The hardest part is continuous, reliable operations that out-deliver on user’s expectations!</span></p>

<p><span style="font-weight: 400;"><strong>Here are 11 key success factors</strong> we have learned from our pioneering journey and now nearly a decade of cloud operations: </span></p>

<p>1.<b> Be kind to the humans</b><span style="font-weight: 400;"><span style="font-weight: 400;"><span style="font-weight: 400;"> – cloud operations are hard on the operators, take good care of them or they will burn out, and unlike the machines they are not easily replaceable commodities.</span></span></span></p>

<img src="/images/blog/post/kindness.jpg" class="main-blog-image">
<span style="font-size: 10px;" ><br> source: <a style="font-size: 10px;" href="http://artofmanifesting.com/uploads/3/5/2/6/3526955/4358811_orig.jpg" target="_blank">artofmanifesting.com</a></span>

<p>2.<b> Build like LEGO®, not like PLAYMOBIL®</b><span style="font-weight: 400;"><span style="font-weight: 400;"> – you will benefit enormously from being able to evolve your cloud architecture piece by piece instead of requiring a rip-and-replace approach.
<img src="/images/blog/post/lego-vs-playmobil.jpg" class="main-blog-image">
<span style="font-size: 10px;"><br> source: <a  style="font-size: 10px;" href="http://superstars.kids.sapo.pt/playmobil-vs-lego/" target="_blank">superstars.kids.sapo.pt</a></span></p>


<p>3.<b> Own your destiny with open source</b><span style="font-weight: 400;"> – when it comes to orchestration and automation tools you need vendor neutrality, and open source will outlast all the vendors.</span><br> <a href="https://cloudstack.apache.org/" target="_blank"><img src="/images/blog/post/apache_cloudstack_with_cloud_monkey-e1396966707935.jpg" class="main-blog-image"></a><a style="text-decoration: none; color: #000000;" href="http://www.openstack.org"><img src="/images/blog/post/openstack-transparent-2.png" class="main-blog-image"></a><br> 4.<b> Automate all the things</b><span style="font-weight: 400;"><span style="font-weight: 400;"> – automate relentlessly and yet with eyes wide open: be wary of Rube Goldberg machines.</span></span></p>


<img src="/images/blog/post/rube.png" class="main-blog-image">
<p>5.<b> Native API and multi-tenancy</b><span style="font-weight: 400;"> – to play a part in your cloud, all products should be API-first and designed natively for multi-tenancy. APIs and multi-tenancy cannot be simply bolted on after the fact.</span></p>

<img src="/images/blog/post/cube.jpg" class="main-blog-image">
<span style="font-size: 10px;"><br> source: <a  style="font-size: 10px;" href="http://www.dublindesign.ie/courses/graphic-design-courses" target="_blank">dublindesign.ie</a></span>

<p>6.<b> Don’t blindly trust big vendors</b><span style="font-weight: 400;"><span style="font-weight: 400;"> – their interests are rarely aligned with yours beyond the short term and we are certain you care deeply about the medium to long term. Be friendly with vendors, take full advantage of what they have to offer, but plan to replace them.</span></span></p>

<img src="/images/blog/post/apple_1984_ad_5.jpg" class="main-blog-image">
<span style="font-size: 10px;"><br> source: <a  style="font-size: 10px;" href="https://www.youtube.com/watch?v=OYecfV3ubP8" target="_blank">youtube.com</a></span>

<p>7.<b> The network is the hardest problem</b><span style="font-weight: 400;"> – “compared to the cost of moving bits, everything else is free,” says <a  style="font-size: 10px;" href="https://en.wikipedia.org/wiki/Jim_Gray_(computer_scientist)" target="_blank">Jim Gray</a>. Respect the network, the speed of light isn’t getting faster but we store more data every day.</span></p>

<img src="/images/blog/post/space_sign_small_2.gif" class="main-blog-image">
<span style="font-size: 10px;"><br> source: <a  style="font-size: 10px;" href="http://www.scienceworld.ca/blog/cosmic-speed-limit-why-cant-we-travel-light-speed" target="_blank">scienceworld.ca</a></span>

<p>8.<b> Expect the unexpected</b><span style="font-weight: 400;"> – monitoring in depth is critical because clouds are extremely complicated and show emergent behaviour, like living things, ecosystems and weather. During incidents you will need lots of tools to collect lots of data and run analytics.</span></p>

<img src="/images/blog/post/Surprise-monkey.jpg" class="main-blog-image">
<span style="font-size: 10px;"><br> source: <a  style="font-size: 10px;" href="http://funnystack.com/2014/04/23/surprised-funny-scared-monkey/" target="_blank">funnystack.com</a></span>

<p>9.<b> Interchangeable commodity components</b><span style="font-weight: 400;"> – build everything you can with replaceable commodity components, beware uniqueness unless it is your own tech that helps you differentiate and compete.</span></p>

<img src="/images/blog/post/modular-components.jpg" class="main-blog-image">
<span style="font-size: 10px;"><br> source: <a  style="font-size: 10px;" href="http://www.extremetech.com/computing/193256-googles-project-ara-pushes-ahead-with-new-modular-smartphone-prototype" target="_blank">extremetech.com</a></span>

<p>10.<b> 24x7x365</b><span style="font-weight: 400;">: you will need to change the tires while rolling down the highway, so design for that. Test constantly for the ability to do so because it is very easy to lose this capacity and almost impossible to get it back.</span></p>

<a href="https://www.citylab.com/life/2013/09/so-apparently-its-cool-hang-out-moving-tilted-cars-saudi-arabia-now/7015/"><img src="/images/blog/post/change-tires-while-driving.jpg" class="main-blog-image"></a>
<span style="font-size: 10px;"><br> source: <a  style="font-size: 10px;" href="http://www.businessinsider.com/saudi-arabia-sidewall-skiing-2013-4" target="_blank">businessinsider.com</a></span>

<p><b>THIS LIST GOES UP TO 11… </b></p>

<p>11.<b> Customer-centric</b><span style="font-weight: 400;"><span style="font-weight: 400;"> – the product is the service, listen to the business and the users constantly and use agile methodology to evolve your services to meet the changing needs and expectations of the consumers.</span></span></p>

<img src="/images/blog/post/feedback.jpeg" class="main-blog-image">
<span style="font-size: 10px;"><br> source: <a  style="font-size: 10px;"href="http://soloflightconnects.com/page/3" target="_blank">soloflightconnects.com</a></span>

<p><span style="font-weight: 400;">Cloud computing is a relatively young innovation, but in a rapidly accelerating world, it is already becoming table stakes for any modern competitive business. As the next decade of IT unfolds, and cloud computing becomes omnipresent, we expect the practice of cloud operations to develop and mature quickly. <strong>CloudOps is excited to be part of a global community helping with this transformation!</strong></span></p>

<p style="font-size: 11px; text-align: right;">Featured image credit: <a style="font-size: 11px;" href="http://www.barryovereem.com/the-spotify-agile-manifesto/">barryovereem.com</a></p>