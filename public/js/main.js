
//copied to clipboard functionality

var clipboard=new ClipboardJS('.copy-page-link', {
    text: function(trigger) {
        return window.location.href;
    }
});

clipboard.on('success', function(e) {
    alert('copied to clipboard!')
});


//adding url to open tabs functionality

$(document).ready(() => {
    let url = location.href.replace(/\/$/, "");
   
    if (location.hash) {
      const hash = url.split("#");
      $('#myTab a[href="#'+hash[1]+'"]').tab("show");
      url = location.href.replace(/\/#/, "#");
      history.replaceState(null, null, url);
      setTimeout(() => {
        $(window).scrollTop(0);
      }, 400);
    } 
     
    $('a[data-toggle="tab"]').on("click", function() {
      let newUrl;
      const hash = $(this).attr("href");
      if(hash == "#home") {
        newUrl = url.split("#")[0];
      } else {
        newUrl = url.split("#")[0] + hash;
      }
      newUrl += "/";
      history.replaceState(null, null, newUrl);
    });
  });