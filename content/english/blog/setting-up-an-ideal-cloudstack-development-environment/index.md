---
title: "Setting Up an Ideal CloudStack Development Environment"
lastmod: "2013-02-05"
author: "Marc-André Jutras"
resources:
- name: "thumbnail"
  src: ""
class_name: "blog post"
---

<img src="/images/blog/post/code.jpg" class="main-blog-image">

<p>In this, my first article, I answer a question that I often get asked: How do I set up and prepare my development environment for CloudStack? True, there are many articles and wiki pages available on this subject, but here is my method.</p>

<p>Keep in mind that this article assumes a good knowledge of Linux. It is intended for developers who want to try out the latest development environment on their workstation.</p>

<h2>Preferences</h2>

<p>I prefer to use the Oracle JVM/JDK for development and OpenJDK in production. I also prefer to set a general symbolic link to every external package, like Maven and OracleJVM, rather than placing the package in the default path. It makes it easier to upgrade a specific package version (by updating only the symbolic link that refers to the particular package).</p>

<h2>Requirements</h2>

<p>Hypervisor: <a href="https://www.virtualbox.org/" target="_blank">Oracle VirtualBox</a><br> OS: <a href="http://www.centos.org/" target="_blank">Linux CentOS 6.3 x86_64</a> for this setup<br> <a href="http://www.oracle.com/technetwork/java/javase/downloads/index.html" target="_blank">Java 6 JDK</a><br> <a href="http://maven.apache.org/download.cgi" target="_blank">Maven 3</a></p>

<h2>Procedure</h2>

<p><span style="font-size: 13px;">1. Install VirtualBox on your workstation.</span><br> <span style="font-size: 13px;">2. Install Linux CentOS 6.3 in VirtualBox with the following minimum resources: 1 network interface card (NIC); 2 GB RAM; 20 GB disk space.</span><br> <span style="font-size: 13px;">3. Update your CentOs. </span><code style="font-size: 13px;">yum update</code><br> <span style="font-size: 13px;">4. Disable selinux. </span><code style="font-size: 13px;">vi /etc/selinux/config   - set: SELINUX=disabled</code><br> <span style="font-size: 13px;">5. Disable the firewall. <code>chkconfig iptables off</code></span><br> <span style="font-size: 13px;">6. Install any package dependencies. <code>yum install genisoimage git</code></span><br> <span style="font-size: 13px;">7. Download all the requirements to your VM and place them under /opt/java.</span></p>

<p>Java:<br> <span style="font-size: 13px;">1. Uncompress your Java package and place it under /opt/java.</span><br> <span style="font-size: 13px;">2. Create a symbolic link to your JDK.</span></p>

<pre><code>
ln –s jdk1.6.0_38 java

</code></pre>

<p><span style="font-size: 13px;">3. Enable Java in your CentOS distribution.</span></p>

<pre><code>
update-alternatives --install "/usr/bin/java" "java" "/opt/java/java/bin/java" 1
update-alternatives --install "/usr/bin/jar" "jar" "/opt/java/java/bin/jar" 1
update-alternatives --install "/usr/bin/javac" "javac" "/opt/java/java/bin/javac" 1
update-alternatives --install "/usr/lib/mozilla/plugins/libjavaplugin.so" "mozilla-javaplugin.so" "/opt/java/java/jre/lib/i386/libnpjp2.so" 1
update-alternatives --install "/usr/bin/javaws" "javaws" "/opt/java/java/bin/javaws" 1
alternatives --config java  (set it to 2)

</code></pre>

<p>Maven:<br> <span style="font-size: 13px;">1. Uncompress your M</span><span style="font-size: 13px;">aven package and place it under /opt/java.</span><br> <span style="font-size: 13px;">2. Create a symbolic link to your Maven release.</span></p>

<pre><code>
ln –s apache-maven-3.0.4 maven

</code></pre>

<p><span style="font-size: 13px;">3. Set Maven in your path. Edit /etc/profile (or your ~/.bashrc) and add your Maven value.</span></p>

<pre><code>
M2_HOME=/opt/java/maven
M2_BIN=$M2_HOME/bin
MAVEN_OPTS="-Xmx1024m -XX:MaxPermSize=500m -Xdebug -Xrunjdwp:transport=dt_socket,address=8787,server=y,suspend=n"
PATH=${PATH}:$M2_HOME:$M2_BIN
export PATH USER LOGNAME MAIL HOSTNAME HISTSIZE HISTCONTROL M2_HOME M2_BIN MAVEN_OPTS

</code></pre>

<p>At this point, reboot Linux to activate all the latest changes. To test everything, log in as root and test your Maven installation:</p>

<pre><code>
mvn –version : should return the exact version that matches what you installed in your /opt/java folder.
[root@cs4-1 ~]# mvn -version
Apache Maven 3.0.4 (r1232337; 2012-01-17 03:44:56-0500)
Maven home: /opt/java/maven
Java version: 1.6.0_38, vendor: Sun Microsystems Inc.
Java home: /opt/java/jdk1.6.0_38/jre
Default locale: en_CA, platform encoding: UTF-8
OS name: "linux", version: "2.6.32-279.19.1.el6.x86_64", arch: "amd64", family: "unix"

</code></pre>

<p>Now we’re ready to get the latest source version of CloudStack! In your /opt folder, create a folder named CloudStack. Inside the CloudStack folder, run git to get the latest source files:</p>

<pre><code>
mkdir /opt/CloudStack
cd /opt/CloudStack
git clone https://git-wip-us.apache.org/repos/asf/incubator-cloudstack.git

</code></pre>

<p>Because of license issues, vhd-util was removed. So, you must <a href="http://download.cloud.com.s3.amazonaws.com/tools/vhd-util" target="_blank">download</a> it and copy it to this location in the source tree:<br> /opt/CloudStack/incubator-cloudstack/scripts/vm/hypervisor/xenserver/vhd-util<br> Without this file, you won’t be able to add any Xen servers to your CloudStack setup.</p>

<p>We’re now ready to compile everything! Here are my notes for building CloudStack correctly:</p>

<p><span style="font-size: 13px;">1. Always work in your git folder. (/opt/CloudStack/incubator-cloudstack)</span><br> <span style="font-size: 13px;">2. Get the latest source. <code>git pull</code></span><br> <span style="font-size: 13px;">3. Validate all dependencies. <code>mvn –P deps</code></span><br> <span style="font-size: 13px;">4. Deploy the database. <code>mvn -P developer -pl developer –D deploydb</code></span><br> <span style="font-size: 13px;">5. Build up everything. <code>mvn -P systemvm clean install</code></span><br> <span style="font-size: 13px;">6. Start CloudStack. <code>mvn -pl :cloud-client-ui jetty:run</code></span></p>

<p>And that’s it! At this point, you’re ready to test your new CloudStack server!</p>

<p>For information about CloudStack support for non-Open Source features, such as Netscaler, F5, and Netapp, visit these pages:</p>

<a style="font-size: 13px;" href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/How+to+build+on+master+branch" target="_blank">https://cwiki.apache.org/confluence/display/CLOUDSTACK/How+to+build+on+master+branch</a>
<a style="font-size: 13px;" href="https://cwiki.apache.org/confluence/display/CLOUDSTACK/Working+with+CloudStack+Code" target="_blank">https://cwiki.apache.org/confluence/display/CLOUDSTACK/Working+with+CloudStack+Code</a>