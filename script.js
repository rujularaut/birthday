function scrollToIntro() {
  document.getElementById("intro").scrollIntoView({ behavior: "smooth" });
}

// Fade in timeline on scroll
const items = document.querySelectorAll('.timeline-item');

function revealTimeline() {
  const triggerBottom = window.innerHeight * 0.85;
  items.forEach(item => {
    const boxTop = item.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      item.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealTimeline);
window.addEventListener('load', revealTimeline);
