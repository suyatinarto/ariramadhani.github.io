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
