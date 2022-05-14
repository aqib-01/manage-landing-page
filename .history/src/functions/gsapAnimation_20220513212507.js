import gsap from "gsap";
import Scro
const gsapAnimation = () => {
  if (window.innerWidth < 768) {
    const tl = gsap.timeline();
    tl.from(".logo-main", {
      x: -200,
      opacity: 0,
    })
      .from(
        ".ham-btn",
        {
          x: 200,
          opacity: 0,
        },
        "<"
      )
      .from(".intro-img", {
        y: -200,
        opacity: 0,
        ease: "back",
      })
      .from(".build-together-sect h1", {
        y: 100,
        opacity: 0,
      })
      .from(".build-together-sect p", {
        y: 100,
        opacity: 0,
        scrollTrigger: ".build-together-sect p",
      });
  }
  //   const tl = gsap.timeline();
  //   tl.from("nav ul li", {
  //     y: -100,
  //     stagger: 0.2,
  //   })
  //     .from(".logo-main", {
  //       x: -200,
  //       opacity: 0,
  //     })

  //     .from("header .get-start-btn", {
  //       x: 200,
  //       opacity: 0,
  //     }, "<");
};

export default gsapAnimation;
