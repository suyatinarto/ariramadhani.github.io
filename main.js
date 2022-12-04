$(document).ready(function(){
    
    // typing text animation script
    var typed = new Typed(".typing1", {
      strings: ["UI/UX Designer","Technical Writer", "F.E. Web Dev"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });
  });
  $(document).ready(function(){
    
    // typing text animation script
    var typed = new Typed(".typing2", {
      strings: ["UI/UX Designer","Technical Writer","F.E. Web Dev"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });
  });


  // kedip1
document.querySelector('.service_close').addEventListener('click', function() {
  const icon = this.querySelector('.service-view');
  const text = this.querySelector('span');

  if (icon.classList.contains('fafsaf')) {
    icon.classList.remove('fafsaf');
    icon.classList.add('fafsaf-slash');
    text.innerHTML = 'Read More';
  } else {
    icon.classList.remove('fafsaf-slash');
    icon.classList.add('fafsaf');
    text.innerHTML = 'Close';
  }
});