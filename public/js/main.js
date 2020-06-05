var clipboard=new ClipboardJS('.copy-page-link', {
    text: function(trigger) {
        return window.location.href;
    }
});

clipboard.on('success', function(e) {
    alert('copied to clipboard!')
});