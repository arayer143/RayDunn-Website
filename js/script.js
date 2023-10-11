//Header follows users as they scroll
window.onscroll = function() {info.header()};
var header = document.getElementById("info.header");
var sticky = header.offsetTop;
function myFunction() {
  if (window.scroll.y > sticky) {
    header.classList.add("sticky");
   }
    else {
      header.classList.remove('sticky');
    } 
    }
