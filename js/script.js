console.log
("JS is live");

$(document).ready(function(){
  
    $("a").on('click', function(event) {
  
     
      if (this.hash !== "") {
        
        event.preventDefault();
  

        var hash = this.hash;
  
       
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 600, function(){
  
        
          window.location.hash = hash;
        });
      } 
    });
  });

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}