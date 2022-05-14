import gsap from "gsap";

const gsapAnimation = () => {
  const tl = gsap.timeline();
  tl.from(".logo-main", {
    y: -200,
    opacity: 0
  });
};

export default gsapAnimation;
