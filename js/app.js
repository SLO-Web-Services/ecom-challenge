// app.js
$(document).ready(function(){
  $(document).foundation();

  // Mobile menu toggle
  $('.menu-toggle').on('click', function(){
    $('.main-nav').toggleClass('is-open');
  });

  // Progressive enhancement: lazy load images
  document.querySelectorAll('img').forEach(img => {
    if (!img.hasAttribute('loading')) img.setAttribute('loading','lazy');
  });
});
