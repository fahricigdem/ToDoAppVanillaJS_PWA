
function preventTouchpadGestures() {
  // Disable default browser gestures
  document.body.style.overflow = 'hidden';
  
  // Prevent zoom with ctrl + scroll
  window.addEventListener('wheel', (e) => {
    if (e.ctrlKey) {
      e.preventDefault();
    }
  }, { passive: false });

  // Prevent trackpad pinch zoom
  window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  }, { passive: false });

  // Prevent browser default gestures
  document.addEventListener('gesturestart', (e) => {
    e.preventDefault();
  }, { passive: false });

  document.addEventListener('gesturechange', (e) => {
    e.preventDefault();
  }, { passive: false });

  document.addEventListener('gestureend', (e) => {
    e.preventDefault();
  }, { passive: false });
}

// Call this when your app initializes
preventTouchpadGestures();
