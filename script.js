const foto = document.querySelector(".main__foto_img")
const text = document.querySelector(".main__text_info")
const navbar = document.querySelector(".navbar__items")
const followText = document.querySelector(".main__text_follow")
gsap.from(navbar, {y: -200, duration: 3, opacity: 0})
gsap.from(foto, {x: -200, duration: 1, opacity: 0})
gsap.from(text, {x: 200, duration: 1})
gsap.from(followText, {opacity: 0, duration: 1, delay: 3})
gsap.to(text, {duration: 2, text: `Hello! My name is Oksana and I'm a Front-End developer, located in Germany.
In 2022 I finished a courses of JavaScript, React.js, Redux and Node.js (in 2023) at CanSheCode programming school. 
Making web-sites and web-applications is my passion.
My goal is to grow and develop in IT and to find a company that shares my ambition.`, ease: "none"});
gsap.registerPlugin(ScrollTrigger);
function animateBoxes() {
  let move = 80;
  gsap.to(".box", {
    scrollTrigger: {
      trigger: ".box",
      toggleActions: "restart none none none",
    },
    ease: "bounce",
    duration: 3,
    y: function (i) {
      if (i % 2 === 1) {
        return move;
      } else {
        return -move;
      }
    },
  });
}

animateBoxes();

let swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
});

