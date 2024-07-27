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
    Type(["Web Developer", "Freelancer", "Web Designer","Hacker","IOT Developer"], "resume-subtitle");
  });