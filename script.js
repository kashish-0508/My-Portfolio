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

 emailjs.init("TvLSBIc5JL2LNjO80");

const form = document.querySelector(".contact-form");

const popup = document.getElementById("messagePopup");
const popupText = popup.querySelector("span");
const popupIcon = popup.querySelector("i");

form.addEventListener("submit", function (e) {

  e.preventDefault();

  emailjs.sendForm(
    "service_tt6uk9b",
    "template_cwhxf1f",
    this
  )

  .then(() => {

    /* SUCCESS */

    popup.classList.remove("error");

    popupIcon.className = "fa-solid fa-circle-check";

    popupText.innerText = "Message Sent Successfully!";

    popup.classList.add("show");

    form.reset();

    setTimeout(() => {
      popup.classList.remove("show");
    }, 3000);

  })

  .catch((error) => {

    /* ERROR */

    popup.classList.add("error");

    popupIcon.className = "fa-solid fa-circle-xmark";

    popupText.innerText = "Failed to send message!";

    popup.classList.add("show");

    console.log(error);

    setTimeout(() => {
      popup.classList.remove("show");
    }, 3000);

  });

});

  const contactSection = document.querySelector(".contact-section");
const wrapper = document.querySelector(".contact-zoom-wrapper");

window.addEventListener("scroll", () => {

  const rect = wrapper.getBoundingClientRect();

  const windowHeight = window.innerHeight;

  // progress value
  let progress = 1 - rect.top / windowHeight;

  // limit between 0 and 1
  progress = Math.max(0, Math.min(progress, 1));

  // scale effect
  const scale = 0.7 + progress * 0.3;

  // opacity effect
  const opacity = 0.4 + progress * 0.6;

  contactSection.style.transform = `scale(${scale})`;
  contactSection.style.opacity = opacity;

});

const glow = document.querySelector(".cursor-glow");
const contact = document.querySelector(".contact-section");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

contact.addEventListener("mousemove", (e) => {

  const rect = contact.getBoundingClientRect();

  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;

});

/* smooth follow animation */

function animateGlow() {

  currentX += (mouseX - currentX) * 0.08;
  currentY += (mouseY - currentY) * 0.08;

  glow.style.left = currentX + "px";
  glow.style.top = currentY + "px";

  requestAnimationFrame(animateGlow);
}

animateGlow();