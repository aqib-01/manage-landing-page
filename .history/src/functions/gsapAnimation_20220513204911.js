import gsap from "gsap";

const gsapAnimation = () => {
  const tl = gsap.timeline();
  tl.from("nav ul li", {
    y: -100,
    stagger: 0.2,
  })
    .from(".logo-main", {
      x: -200,
      opacity: 0,
    })

    .from("header .get-start-btn", {
      x: 200,
      opacity: 0,
    }, "");
};

export default gsapAnimation;
