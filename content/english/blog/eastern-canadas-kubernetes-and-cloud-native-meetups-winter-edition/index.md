---
title: "Eastern Canada’s Kubernetes and Cloud Native Meetups – Winter Edition"
lastmod: "2018-12-02"
author: "CloudOps"
class_name: "blog post"
---

<img src="/images/blog/post/EasternCanadaMeetupsWinterEdition.png" class="main-blog-image">

<p>This year’s first set of Kubernetes and Cloud Native Meetups in Eastern Canada just took place from February 25<sup>th</sup> to March 6<sup>th</sup>, happening in Quebec City, Ottawa, Montreal, Kitchener-Waterloo, and Toronto. A wide array of topics were discussed, and CloudOps was excited to see such active participation from Eastern Canada’s cloud native communities.</p>

<p>Each meetup began with an update by Ayrat Khayretdinov, CNCF (Cloud Native Computing Foundation) Ambassador and Solutions Architect at CloudOps. His <a href="https://www.slideshare.net/CloudOps2005/kubernetes-and-cloud-native-meetup-march-2019">presentation</a> began with an overview of the most exciting happenings from the latest KubeCon + CloudNativeCon, which included the Developers Summit and a broad set of keynotes, as well as an overview of the <a href="https://www.cloudops.com/2018/10/the-beginners-guide-to-the-cncf-landscape/">CNCF landscape</a> and other cloud technologies. The next KubeCon + CloudNativeCon will take place in Barcelona from May 20<sup>th</sup> to 23<sup>rd</sup>. For those who can’t make it to Spain, <a href="http://www.cloudnativeday.ca/en/">Cloud Native Day</a> in Montreal on June 11th will include a full day of talks.</p>

<p>There has been quite a bit of news concerning K8s, namely surrounding the imminent release of it’s v1.14. Some interesting features have already reached general availability. It is now possible to bypass authorization to kubelet APIs in GKE, AKS, and EKS, as well as allow container escapes to obtain root privileges on host nodes.</p>

<p>GKE now supports K8s v1.11 and have pushed Containerd, Vertical Pod Autoscaler, Cloud KMS Encryption of K8s secrets at rest, managed Istio, Knative, and CSP to Beta phase. AKS now supports v1.12 and has made CoreDNS the default DNS for all AKS clusters. AKS has also previewed several changes, including VM scale sets, cluster autoscaling, Calico CNI support, virtual nodes, and control plane audit logs. Likewise, we can expect pod identities, cluster auto-upgrades, node auto-repair support, private clusters, availability zone support, multiple node pools, authorized IP ranges for API servers, pod security policy PSPs, and integration with Azure Stack to be made available in the future.</p>

<div class="wp-block-image"><img style="float: left; margin: 5px 20px 20px 0; width: 50%;" src="/images/blog/post/20190225_191631_1-2.jpg" alt="" class="wp-image-8008" width="300" height="251"><figcaption>Sebastien Thomas discussing Operator Frameworks in Quebec City</figcaption></div>

<p>Etcd, a distributed reliable key-value store, has joined the CNCF’s Incubation phase. CoreDNS, a DNS server that provides service discovery in cloud native deployments, has graduated. The cloud native update in each city continued with talks that explored various open source projects.</p>

<p>In Quebec City, Sebastien Thomas from Coyote Amerique gave a talk called ‘<a href="https://www.slideshare.net/CloudOps2005/operator-sdk-for-k8s-using-go">Operator Frameworks</a>.’ It covered how SDK can help the creation of Kubernetes operators. To do so, the operator must be described and differentiated. Philippe Theriault, Community OpenEBS at MayaData, then discussed how Kubernetes can help DevOps teams solve persistent workload problems.</p>

<div class="wp-block-image"><img style="float: left; margin: 5px 20px 20px 0; width: 50%;" src="/images/blog/post/20190226_203106_1.jpg" alt="" class="wp-image-7993" width="300" height="251"><figcaption>The community at the meetup in Ottawa</figcaption></div>

<p>The community in Ottawa saw the same presentation by Philippe Theriault with the addition of a demo of OpenEBS by Murat Karslioglu, VP of Product at MayaData. There was also a discussion of ‘<a href="https://www.slideshare.net/CloudOps2005/how-to-handle-your-kubernetes-upgrades">How to Handle your Kubernetes Upgrades</a>’ by Suvrojeet Ghosh from Ribbon Communications. He shared a much needed lightning talk on his experiences upgrading HA clusters from v1.0 to v1.13 via kubeadm in multiple hops. He pointed out certain problems and errors to be aware of as well as resources that can help. Bart Dziekan, Kubernetes Architect and Hashistack expert from DigitalOnUs, then gave a talk called ‘<a href="https://www.slideshare.net/CloudOps2005/kubernetes-terraform-vault-and-consul">Kubernetes, Terraform, Vault, and Consul</a>’ that showed the community how to create all your resources in the cloud with code that uses Terraform. You can store secrets, create certificates, and have service discovery by standing up an HA Vault and Consul cluster in Kubernetes.</p>

<div class="wp-block-image"><img style="float: left; margin: 5px 20px 20px 0; width: 50%;" src="/images/blog/post/PSX_20190227_191339.jpg" alt="" class="wp-image-7990" width="300" height="251"><figcaption>Full house at the meetup in Montreal</figcaption></div>

<p>Philippe Theriault and Murat Karslioglu also came to Montreal, whose community also watched a talk from Michael Wojcikiewicz, Container Solutions Architect at CloudOps. ‘<a href="https://www.slideshare.net/CloudOps2005/to-russia-with-love-deploying-kubernetes-in-exotic-locations-on-prem">To Russia with Love: Kubernetes in Exotic Locations</a>’ showed how Kubernetes can be deployed on-prem. The talk showcased a real use case of augmenting a containerized infrastructure in GCP with an on-prem solution hosted in Russia. It detailed how they found an on-prem cloud provider, used RKE to containerize the workloads, and solved key latency issues. Kyle Rome, Field Engineer at Rancher, concluded the meeting by providing some key updates of RKE in the Q&amp;A section.</p>

<div class="wp-block-image"><img style="float: left; margin: 5px 20px 20px 0; width: 50%;" src="/images/blog/post/PSX_20190301_110722.jpg" alt="" class="wp-image-7991" width="300" height="251"><figcaption>Geoff Flarity introducing himself in Kitchener-Waterloo</figcaption></div>

<p>‘To Russia with Love: Kubernetes in Exotic Locations’ was also featured at the meetup in Kitchener-Waterloo, where Geoff Flarity from Square also presented ‘<a href="https://www.slideshare.net/CloudOps2005/amazon-eks-the-good-the-bad-and-the-ugly">Amazon EKS: The Good, The Bad, and The Ugly</a>.’ Geoff spoke about how CashApp started using Kubernetes shortly after v1.2 was released. Having used EKS to manage Kubernetes, Geoff explained the advantages and disadvantages that he had experienced using EKS. Finally, an AMA Session provided opportunity for the community to ask all their questions. The community included members of all levels of experience, including total beginners and those who had been early adopters of Kubernetes. A wide variety of questions were asked.</p>

<div class="wp-block-image"><img style="float: left; margin: 5px 20px 20px 0; width: 50%;" src="/images/blog/post/Meetup1.jpg" alt="" width="300" height="251"><figcaption>Finishing off the roadshow in Toronto</figcaption></div>

<p>In Toronto, Christopher Liljenstolpe, co-founder and CTO at Tigera, presented ‘<a href="https://www.slideshare.net/CloudOps2005/kubernetes-services-are-sooo-yesterday">Kubernetes Services are sooo yesterday!</a>’ and provided a demo of Tigera Secure. As Istio, MetalLB, and CoreDNS continue to be adopted en masse, Christopher’s review of the service landscape was most relevant. Lindsey Tulloch presented ‘<a href="https://www.slideshare.net/CloudOps2005/sig-multicluster-and-the-path-to-federation">SIG Multicluster and the Path to Federation</a>.’ Geoff Flarity also presented ‘Amazon EKS: The Good, The Bad, and The ugly’ at the meetup in Toronto.</p>

<p>CloudOps is happy to see the cloud native communities in Eastern Canada continue to grow. Thank you Ticketmaster for having hosted the meetup in Quebec City, Canadian Digital Service in Ottawa, Google in Montreal, Square in Kitchener-Waterloo, and EcoBee in Toronto. Thank you RedHat, Elastic, Rancher, Microsoft, Tigera, and Container Solutions for having sponsored this round of meetups.</p>

<p>Become a part of this growing community by joining the <a href="http://k8scanadaslack.herokuapp.com">Canadian Kubernetes Slack channel</a> or the pages for the local meetups in <a href="https://www.meetup.com/Kubernetes-Quebec/">Quebec City</a>, <a href="https://www.meetup.com/Kubernetes-Ottawa/">Ottawa</a>, <a href="https://www.meetup.com/Kubernetes-Montreal/">Montreal</a>, <a href="https://www.meetup.com/Kubernetes-Kitchener-Waterloo/">Kitchener-Waterloo</a>, and <a href="https://www.meetup.com/Kubernetes-Toronto/">Toronto</a>. Don’t forget to <a href="http://www.cloudnativeday.ca/en/">sign up for Cloud Native Day</a> on June 11<sup>th</sup> in Montreal.</p>

<p>If you would like to sponsor a future meetup or have an idea for a talk, please <a href="mailto: ctrang@cloudops.com">reach out to Carol Trang</a>, our community manager.</p>

<p>Finally, Kubernetes skills are in high demand. <a href="https://www.cloudops.com/workshops/">Sign up for one of our hands-on workshops to learn a variety of DevOps skills</a>, including Docker and Kubernetes, Machine Learning, and CI/CD.</p>

<div class="row">
    <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12 col-xs-12 cta-image">
      <img src="/images/blog/cta/white-paper.jpeg">
    </div>
</div>