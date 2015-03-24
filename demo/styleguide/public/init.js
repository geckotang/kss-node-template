document.addEventListener('DOMContentLoaded', function(){
  var codes = document.querySelectorAll('pre code');
  [].forEach.call(codes, function(code) {
    hljs.highlightBlock(code);
  });
  console.log(hljs.listLanguages());
}, false);
