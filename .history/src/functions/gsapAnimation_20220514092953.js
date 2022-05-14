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
        x: -200,
        opacity: 0,
      })
      .from(".build-together-sect p", {
        x: 200,
        opacity: 0,
      })
      .from(".build-together-sect .get-start-btn", {
        y: 200,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".build-together-sect .get-start-btn",
        },
      })
      .from(".what-diff-start h2", {
        x: -200,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: ".what-diff-start h2",
        },
      })
      .from(".what-diff-start p", {
        x: 200,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: ".what-diff-start p",
        },
      });
    

    gsap
      .from(".what-diff-sect-1", {
        x: -200,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: ".what-diff-sect-1",
      })
      gsap.from(".what-diff-sect-2", {
        x: -200,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: ".what-diff-sect-2",
      })
      gsap.from(".what-diff-sect-3", {
        x: -200,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: ".what-diff-sect-3",
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
