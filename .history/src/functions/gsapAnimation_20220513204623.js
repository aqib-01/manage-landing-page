import gsap from "gsap";

const gsapAnimation = () => {
  const tl = gsap.timeline();
  tl.from(".logo.main", {
    y: -100,
  });
};

export default gsapAnimation;
