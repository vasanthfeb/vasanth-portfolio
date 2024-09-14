document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function () {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    });

    // Smooth scroll for anchor links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


// type start
const Type = async (words, elementId) => {
    const htmlDom = document.getElementById(elementId);
    const delay = (time) => new Promise(resolve => setTimeout(resolve, time));

    const eraser = async () => {
      const originalText = htmlDom.querySelector('.subtitle-text').innerText;
      for (let i = 0; i < originalText.length; i++) {
        await delay(40);
        htmlDom.querySelector('.subtitle-text').innerText = originalText.slice(0, -1);
      }
      return true;
    };

    const blinking = async () => {
      for (let i = 0; i < 11; i++) {
        await delay(400);
        const content = htmlDom.querySelector('.subtitle-text').innerText;
        if (content.charAt(content.length - 1) === '|') {
          htmlDom.querySelector('.subtitle-text').innerText = content.slice(0, -1);
        } else {
          htmlDom.querySelector('.subtitle-text').innerText += '|';
        }
      }
      await eraser();
      return true;
    };

    const writter = async (word) => {
      const subtitleText = htmlDom.querySelector('.subtitle-text');
      for (let i = 0; i <= word.length; i++) {
        await delay(50);
        subtitleText.innerText = word.slice(0, i) + '|';
      }
      await blinking();
      return true;
    };

    const init = async () => {
      for (const word of words) {
        await writter(word);
        await delay(1000);
      }
      await init();
    };

    await init();
  };

  document.addEventListener("DOMContentLoaded", () => {
    Type(["Web Developer", "Freelancer ","Web Engineer ", "Web Designer ","Hacker ","IOT Developer "], "resume-subtitle");
  });

  //project start

  $(document).ready(function(){
    $(".b").click(function(){
        $(this).toggleClass("b");
        $(this).toggleClass("b-selected");
     });
    });
    
    var elem = document.querySelector('.carousel');
    var flkty = new Flickity( elem, {
      // options
      cellalign: 'right',
      pageDots: false,
      groupCells: '20%',
      selectedAttraction: 0.03,
      friction: 0.15
    });
    var flkty = new Flickity( '.carousel', {
      // options
    });
    
    
    $(document).ready(function(){
    $(".all1").click(function(){
    $(".all1").css({"background-color": "#0092CD", "color": "black"});
    $(".clg1").css({"background-color": "#000000", "color": "#0092CD"});
    $(".bus1").css({"background-color": "#000000", "color": "#0092CD"});
    $(".git1").css({"background-color": "#000000", "color": "#0092CD"});
    $(".hos1").css({"background-color": "#000000", "color": "#0092CD"});
    $(".exp1").css({"background-color": "#000000", "color": "#0092CD"});
    
    });
    
    
    $(".exp1").click(function(){
    $(".exp1").css({"background-color": "#0092CD", "color": "black"});
    $(".all1").css({"background-color": "#0092CD", "color": "black"});
    $(".clg1").css({"background-color": "#000000", "color": "#0092CD"});
    $(".bus1").css({"background-color": "#000000", "color": "#0092CD"});
    $(".git1").css({"background-color": "#000000", "color": "#0092CD"});
    $(".hos1").css({"background-color": "#000000", "color": "#0092CD"});
    $(".all1").css({"background-color": "#000000", "color": "#0092CD"});
    });
    
    
    
    
    $(".hos1").click(function(){
    $(".hos1").css({"background-color": "#0092CD", "color": "black"});
    $(".all1").css({"background-color": "#0092CD", "color": "black"});
    $(".clg1").css({"background-color": "#000000", "color": "#0092CD"});
    $(".bus1").css({"background-color": "#000000", "color": "#0092CD"});
    $(".git1").css({"background-color": "#000000", "color": "#0092CD"});
    $(".all1").css({"background-color": "#000000", "color": "#0092CD"});
    $(".exp1").css({"background-color": "#000000", "color": "#0092CD"});
    });
    
    
    
    
    
    $(".bus1").click(function(){
    $(".bus1").css({"background-color": "#0092CD", "color": "black"});
    $(".all1").css({"background-color": "#0092CD", "color": "black"});
    $(".clg1").css({"background-color": "#000000", "color": "#0092CD"});
    $(".all1").css({"background-color": "#000000", "color": "#0092CD"});
    $(".git1").css({"background-color": "#000000", "color": "#0092CD"});
    $(".hos1").css({"background-color": "#000000", "color": "#0092CD"});
    $(".exp1").css({"background-color": "#000000", "color": "#0092CD"});
    });
    
    
    
    $(".clg1").click(function(){
    $(".clg1").css({"background-color": "#0092CD", "color": "black"});
    $(".all1").css({"background-color": "#0092CD", "color": "black"});
    $(".all1").css({"background-color": "#000000", "color": "#0092CD"});
    $(".bus1").css({"background-color": "#000000", "color": "#0092CD"});
    $(".git1").css({"background-color": "#000000", "color": "#0092CD"});
    $(".hos1").css({"background-color": "#000000", "color": "#0092CD"});
    $(".exp1").css({"background-color": "#000000", "color": "#0092CD"});
    });
    
    
    
    
    $(".git1").click(function(){
    $(".git1").css({"background-color": "#0092CD", "color": "black"});
    $(".all1").css({"background-color": "#0092CD", "color": "black"});
    $(".clg1").css({"background-color": "#000000", "color": "#0092CD"});
    $(".bus1").css({"background-color": "#000000", "color": "#0092CD"});
    $(".all1").css({"background-color": "#000000", "color": "#0092CD"});
    $(".hos1").css({"background-color": "#000000", "color": "#0092CD"});
    $(".exp1").css({"background-color": "#000000", "color": "#0092CD"});
    });
    
    
    
    });

    $(document).ready(function(){

      $(".filter-button").click(function(){
          var value = $(this).attr('data-filter');
          
          if(value == "all")
          {
              
              $('.filter').show('1000');
          }
          else
          {
            
              $(".filter").not('.'+value).hide('3000');
              $('.filter').filter('.'+value).show('3000');
              
          }
      });
      
      if ($(".filter-button").removeClass("active")) {
  $(this).removeClass("active");
  }
  $(this).addClass("active");
  
  
  });
  //today