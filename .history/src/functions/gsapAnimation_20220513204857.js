import gsap from "gsap";

const gsapAnimation = () => {
  const tl = gsap.timeline();
  tl.from(".logo-main", {
    x: -200,
    opacity: 0,
  })
    
    .from("header .get-start-btn", {
      x: 200,
      opacity: 0,
    });
};

export default gsapAnimation;
