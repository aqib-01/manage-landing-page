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
      .from(
        ".build-together-sect .get-start-btn",
        {
          y: 200,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: ".build-together-sect .get-start-btn",
        },
        "<"
      );
    gsap.from(
      ".what-diff-start h2",
      {
        x: -200,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: ".what-diff-start h2",
      },
      "<"
    );
    gsap.from(
      ".what-diff-start p",
      {
        x: 200,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: ".what-diff-start p",
      },
      "<"
    );

    gsap.from(".what-diff-sect-1", {
      x: -200,
      opacity: 0,
      duration: 0.7,
      scrollTrigger: ".what-diff-sect-1",
    });
    gsap.from(".what-diff-sect-2", {
      x: -200,
      opacity: 0,
      duration: 0.7,
      scrollTrigger: ".what-diff-sect-2",
    });
    gsap.from(".what-diff-sect-3", {
      x: -200,
      opacity: 0,
      duration: 0.7,
      scrollTrigger: ".what-diff-sect-3",
    });
    gsap.from(".simplify-sect h2", {
      y: 200,
      opacity: 0,
      duration: 0.7,
      scrollTrigger: ".simplify-sect h2",
    });
    gsap.from(".simplify-sect button", {
      y: -200,
      opacity: 0,
      duration: 0.7,
      scrollTrigger: ".simplify-sect button",
    });
  } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    const tl = gsap.timeline();
    tl.from(".logo-main", {
      x: -200,
      opacity: 0,
    })
      .from(
        "nav ul li",
        {
          y: -100,
          stagger: 0.2,
        },
        "<"
      )
      .from(
        "header .get-start-btn",
        {
          x: 200,
          opacity: 0,
        },
        "<"
      )
      .from(".intro-img", {
        x: 200,
        opacity: 0,
        ease: "back",
      })
      .from(".build-together-sect h1", {
        x: -200,
        opacity: 0,
      })
      .from(".build-together-sect p", {
        x: -200,
        opacity: 0,
      })
      .from(".build-together-sect .get-start-btn", {
        y: 200,
        opacity: 0,
      })
      .from(
        ".what-diff-start h2",
        {
          x: -200,
          opacity: 0,
          duration: 0.7,
          scrollTrigger: ".what-diff-start h2",
        },
        "<"
      )
      .from(
        ".what-diff-start p",
        {
          x: -200,
          opacity: 0,
          duration: 0.7,
          scrollTrigger: ".what-diff-start p",
        },
        "<"
      ).from(".what-diff-sect-1", {
      x: -200,
      opacity: 0,
      duration: 0.7,
      scrollTrigger: ".what-diff-sect-1",
    });
    .from(".what-diff-sect-2", {
      x: -200,
      opacity: 0,
      duration: 0.7,
      scrollTrigger: ".what-diff-sect-2",
    })
    .from(".what-diff-sect-3", {
      x: -200,
      opacity: 0,
      duration: 0.7,
      scrollTrigger: ".what-diff-sect-3",
    })
    .from(".simplify-sect h2", {
      y: 200,
      opacity: 0,
      duration: 0.7,
      scrollTrigger: ".simplify-sect h2",
    })
    .from(".simplify-sect button", {
      y: -200,
      opacity: 0,
      duration: 0.7,
      scrollTrigger: ".simplify-sect button",
    });
  }
};

export default gsapAnimation;
