AOS.init();

// Typed JS
new Typed("#typing-text", {
  strings: ["Welcome to My Portfolio", "I'm Kashish", "Web Dev | AI | Data Science"],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true,
});



// Scroll progress bar
window.addEventListener("scroll", () => {
  const scroll = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scroll / height) * 100;
  document.getElementById("scroll-progress").style.width = scrolled + "%";
});




// Filter Projects
function filterProjects(type) {
  document.querySelectorAll('.project-card').forEach(card => {
    if (type === 'all' || card.dataset.category === type) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function showSection(sectionId) {
  const sections = document.querySelectorAll('.page-section');
  const buttons = document.querySelectorAll('.nav-buttons button');
  sections.forEach(section => section.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');

  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
}

