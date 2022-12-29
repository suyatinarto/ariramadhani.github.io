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

// 

/*==================== EXPERIENCE TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () => {
        const target =document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('portfolio__active')
        })
        target.classList.add('portfolio__active')

        tabs.forEach(tab => {
            tab.classList.remove('portfolio__active')
        })
        tab.classList.add('portfolio__active')
    })
    
})


const tabqsq = document.querySelectorAll('[data-target]'),
      tabqContentsq = document.querySelectorAll('[data-content]')

tabqsq.forEach(tabq =>{
    tabq.addEventListener('click', () => {
        const target =document.querySelector(tabq.dataset.target)

        tabqContentsq.forEach(tabqContent => {
            tabqContent.classList.remove('experience__active')
        })
        target.classList.add('experience__active')

        tabqsq.forEach(tabq => {
            tabq.classList.remove('experience__active')
        })
        tabq.classList.add('experience__active')
    })
})



// modal
document.querySelector("#lpkn").addEventListener('click', function() {
  document.querySelector("#lpkn-modal").style.display = 'flex';
  document.querySelector("body").style.overflow = 'hidden';
});
document.querySelector("#close-lpkn").addEventListener('click', function() {
  document.querySelector("#lpkn-modal").style.display = 'none';
  document.querySelector("body").style.overflow = 'visible';
});

document.querySelector("#udc").addEventListener('click', function() {
  document.querySelector("#udc-modal").style.display = 'flex';
  document.querySelector("body").style.overflow = 'hidden';
});
document.querySelector("#close-udc").addEventListener('click', function() {
  document.querySelector("#udc-modal").style.display = 'none';
  document.querySelector("body").style.overflow = 'visible';
});

document.querySelector("#al").addEventListener('click', function() {
  document.querySelector("#al-modal").style.display = 'flex';
  document.querySelector("body").style.overflow = 'hidden';
});
document.querySelector("#close-al").addEventListener('click', function() {
  document.querySelector("#al-modal").style.display = 'none';
  document.querySelector("body").style.overflow = 'visible';
});

document.querySelector("#unsada").addEventListener('click', function() {
  document.querySelector("#unsada-modal").style.display = 'flex';
  document.querySelector("body").style.overflow = 'hidden';
});
document.querySelector("#close-unsada").addEventListener('click', function() {
  document.querySelector("#unsada-modal").style.display = 'none';
  document.querySelector("body").style.overflow = 'visible';
});


// slickjs
$(document).ready(function(){
  $('.your-beauty-class').slick({
    dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        prevArrow:'.beauty_prev',
        nextArrow:'.beauty_next',
        infinite: true,
        responsive: [
    {
    breakpoint: 480,
    settings: {
        arrows: false,
        slidesToShow: 1
    }
    }
  ]
});

});