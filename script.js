// Smooth scroll to intro
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

// ==========================
//  18 Photo Cards Rotation
// ==========================

// Select all photo cards
const cards = document.querySelectorAll('.photo-card');

// Rotate each card around Y axis with a delay so they don’t flip all at once
cards.forEach((card, index) => {
  setTimeout(() => {
    card.classList.add('flip');
  }, index * 300); // delay (300ms between each card flip)
});

// Optional: make them flip back and forth infinitely
setInterval(() => {
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.toggle('flip');
    }, index * 300);
  });
}, 6000); // every 6 seconds cycle

// Enable tap-to-flip on touch devices for sport cards
(function(){
  const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  if (!isTouch) return;

  const sportCards = document.querySelectorAll('.sport-card');
  sportCards.forEach(card => {
    card.addEventListener('click', function(e) {
      // allow clicking only on the card container
      this.classList.toggle('touch-flip');
    });

    // optional: close others when one is opened (uncomment if desired)
    // card.addEventListener('click', function(e) {
    //   sportCards.forEach(c => c !== this && c.classList.remove('touch-flip'));
    //   this.classList.toggle('touch-flip');
    // });
  });

  // prevent the card click from also triggering link gestures, if any
})();
