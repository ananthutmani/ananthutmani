const head1 =  document.querySelector("#h11");
const head2 =  document.querySelector("#h22");

head1.classList.remove('d-none');
head1.classList.add('animated', 'fadeInUp', 'delay-1s');
head1.addEventListener('animationend', function() { 
  head2.classList.remove('d-none'); 
  head2.classList.add('animated', 'fadeInUp'); 
});

var navba = document.getElementById("navbar");
      window.addEventListener("load", function(){
          navba.classList.remove("d-none");
          head1.classList.remove('d-none');
          head1.classList.add('animated', 'fadeInUp', 'delay-1s');
          head1.addEventListener('animationend', function() { 
            head2.classList.remove('d-none'); 
            head2.classList.add('animated', 'fadeInUp'); 
          });
      });