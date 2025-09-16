// 1. Select all the elements you want to reveal
const revealElements = document.querySelectorAll('.reveal');

// 2. Set up the Intersection Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // If the element is in the viewport (isIntersecting is true)
    if (entry.isIntersecting) {
      // Add the 'visible' class to trigger the animation
      entry.target.classList.add('visible');
    }
  });
}, {
  // 3. Configure the observer
  // The animation will trigger when 10% of the element is visible
  threshold: 0.1
});

// 4. Tell the observer to watch each of the selected elements
revealElements.forEach(element => {
  observer.observe(element);
});