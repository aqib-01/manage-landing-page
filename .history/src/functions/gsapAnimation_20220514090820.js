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
      })
      gsap.from(".build-together-sect p", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".build-together-sect p",
        },
      })
      gsap
        .from(".build-together-sect .get-start-btn", {
          y: 100,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".build-together-sect .get-start-btn",
          },
        })
       gsap
         .from(".what-diff-start h2", {
           x: -100,
           opacity: 0,
           duration: 0.8,
           scrollTrigger: {
             trigger: ".what-diff-start h2",
           },
         })
         .from(".what-diff-start p", {
           x: 100,
           opacity: 0,
           duration: 0.8,
           scrollTrigger: {
             trigger: ".what-diff-start p",
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
