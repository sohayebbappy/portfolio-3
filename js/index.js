$('.count').counterUp({
  delay:10,
  time: 3000
})
 var mybutton = document.querySelector('#myBtn');
 window.onscroll = function(){scrollFunction()};
 function scrollFunction(){
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     mybutton.style.display = "block";

   }else {
     mybutton.style.display = "none";
   }
 }
 function topFunction(){
   document.body.scrollTop = 0;
   document.documentElement.scrollTop  = 0;
 }
