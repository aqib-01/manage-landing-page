import gsap from "gsap";

const gsapAnimation = () => {
  const tl = gsap.timeline();
  tl.from(".logo-main", {
    x: -200,
    opacity: 0
  }).from('nav ul li', {
      y: -100,
      stagger: .4
  })
};

export default gsapAnimation;
