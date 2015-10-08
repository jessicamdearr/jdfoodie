$(document).ready(function() {  
   $("#homepage-carousel").swiperight(function() {  
      $("#homepage-carousel").carousel('prev');  
    });  
   $("#homepage-carousel").swipeleft(function() {  
      $("#homepage-carousel").carousel('next');  
   });  
});