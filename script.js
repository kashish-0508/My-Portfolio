gsap.registerPlugin(ScrollTrigger);

// HERO ZOOM ANIMATION
gsap.timeline({
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top top",
    end: "+=120%",
    pin: true,
    scrub: true
  }
})
.to(".image-container img", {
  scale: 4.2,
  transformOrigin: "center center",
  ease: "power1.inOut"
})
.to(".section.hero", {
  scale: 1.3,
  transformOrigin: "center center",
  ease: "power1.inOut"
}, "<");

// DARK OVERLAY
gsap.to(".section.hero", {
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top top",
    end: "bottom top",
    scrub: true
  },
  boxShadow: "inset 0 0 0 1000px rgba(0,0,0,0.7)"
});

// ABOUT ANIMATION

gsap.from(".about-text h2", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
    toggleActions: "play reverse play reverse"
  },
  x: -100,
  opacity: 0,
  duration: 1
});

gsap.from(".about-text p", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
    toggleActions: "play reverse play reverse"
  },
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.3
});

gsap.from(".about-image", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
    toggleActions: "play reverse play reverse"
  },
  x: 100,
  opacity: 0,
  duration: 1
});

// SKILLS HORIZONTAL SCROLL
// gsap.registerPlugin(ScrollTrigger);

// let screens = document.querySelectorAll(".skills-screen");
// let dots = document.querySelectorAll(".dot");

// screens[0].classList.add("active");

// ScrollTrigger.create({
//   trigger: ".skills-section",
//   start: "top top",
//   end: "+=300%",
//   pin: true,
//   scrub: 1,
//   onUpdate: (self) => {
//     let progress = self.progress;
//     let index = Math.floor(progress * 2);

//     if (index > 2) index = 2;

//     screens.forEach(screen => screen.classList.remove("active"));
//     screens[index].classList.add("active");

//     dots.forEach(dot => dot.classList.remove("active"));
//     dots[index].classList.add("active");
//   }
// });


// PROJECT SECTION LAPTOP OPEN + SLIDES
let projects = document.querySelectorAll(".project-slide");

ScrollTrigger.create({
  trigger: ".projects-section",
  start: "top top",
  end: "+=300%",
  pin: true,
  scrub: 1,
  onUpdate: (self) => {
    let progress = self.progress;
    let index = Math.floor(progress * 3);
    if (index > 2) index = 2;

    projects.forEach(p => p.classList.remove("active"));
    projects[index].classList.add("active");
  }
});

// Fade in laptop when section comes
gsap.from(".laptop", {
  scrollTrigger: {
    trigger: ".projects-section",
    start: "top 80%",
  },
  opacity: 0,
  y: 100,
  duration: 1
});

// EXPERIENCE SCROLL ANIMATION
gsap.utils.toArray(".experience-card").forEach((card, i) => {

  let direction = i % 2 === 0 ? -100 : 100;

  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    },
    x: direction,
    opacity: 0,
    duration: 1
  });

});

gsap.to(".outer-card", {
  scrollTrigger: {
    trigger: ".experience",
    start: "top top",
    end: "+=200%",
    scrub: 1
  },
  y: -200
});