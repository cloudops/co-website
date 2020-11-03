---
title: "Working with the CloudStack API"
lastmod: "2013-01-18"
author: "Will Stevens"
description: The CloudStack API is a very powerful tool for managing your infrastructure and is often not utilized to its full potential.
resources:
- name: "thumbnail"
  src: "cloudstack_monkey.png"
class_name: "blog post"
aliases:
    - /2013/01/working-with-the-cloudstack-api/
    - /working-with-the-cloudstack-api/
---

<p>The CloudStack API is a very powerful tool for managing your infrastructure and is often not utilized to its full potential.  I think this is mainly due to the initial learning curve to get working with the API.  In this post I will present the basics you will need to start using the API as well as provide working examples to get you started.</p>

<p>The first potential stumbling block is the method for accessing the API.  There are two different ways to use the CloudStack API and it is important to know when to use each method.</p>

<div class="tabbed-text">
<p><strong><em>User Credentials</em></strong> – To use this method you need your user's 'username', 'password' and potentially your 'domain'.  In this case you will make an initial API call to 'login' in order to get a 'sessionkey' which will then be passed with each subsequent API call.</p>
<p><strong><em>User API Keys</em></strong> – To use this method you need your 'api_key' and 'secret_key'.  In this case you pass the 'api_key' with the request as well as a 'signature' which is generated from the request parameters for that call.</p>
</div>

<p>The <strong><em>User Credentials</em></strong> method is best suited for situations where you want to collect the password at execution time in order to limit who can run the script.  This essentially makes your script password protected.</p>

<p><strong><em>Sample code to build a request:</em></strong></p>

<pre><code>
# after logging in and getting a sessionkey
if self.sessionkey:
    params['sessionkey'] = self.sessionkey

# build the query string
query_params = map(lambda (k,v):k+"="+urllib.quote(str(v)), params.items())
query_string = "&".join(query_params)

# final query string...
url = self.protocol+"://"+self.host+self.uri+"?"+query_string
</code></pre>

<p>The <strong><em>API Keys</em></strong> method is best suited for a fully automated execution environment.  If your script is being run by another script or a configuration management software such as Chef or Puppet, you will want to use this method.  This is my personal preference because each call is completely autonomous.</p>
<p><strong><em>Sample code to build a request:</em></strong></p>

<pre><code>
params['apiKey'] = self.api_key

# build the query string
query_params = map(lambda (k,v):k+"="+urllib.quote(str(v)), params.items())
query_string = "&".join(query_params)

# build signature
query_params.sort()
signature_string = "&".join(query_params).lower()
signature = urllib.quote(
                base64.b64encode(
                    hmac.new(self.secret_key, signature_string, hashlib.sha1).digest()
                )
            )

# final query string...
url = self.protocol+"://"+self.host+self.uri+"?"+query_string+"&signature="+signature
</code></pre>

<p>It is important to note that it is best practice to use HTTPS when using either of these methods.  If you use HTTP and the fully built request is sniffed on the wire, a 3rd party would be able to execute the same command on your environment without any additional information.</p>

<p><strong><em>Complete sample code for each approach:</em></strong><br> <a href="/images/blog/txt/all_in_one_keys.py_.txt">all_in_one_keys.py</a><br> <a href="/images/blog/txt/all_in_one_creds.py_.txt">all_in_one_creds.py</a></p>