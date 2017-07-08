$(document).ready(function(){
  $(document).on('turbolinks:load', function(){
    $('.parallax').parallax();

    $('.modal').modal();

    $('.tooltipped').tooltipped({delay: 50});
  });
});
