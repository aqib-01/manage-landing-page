import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
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
      });
    gsap.from(".build-together-sect .get-start-btn", {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".build-together-sect p",
      },
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
