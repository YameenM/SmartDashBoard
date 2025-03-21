// src/utils/typewriter.js
export const startTypewriter = (texts, elementId, delay = 100, pause = 1500) => {
    let index = 0;
    let charIndex = 0;
    let element = document.getElementById(elementId);
  
    const type = () => {
      if (!element) return;
      if (charIndex < texts[index].length) {
        element.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, delay);
      } else {
        setTimeout(() => {
          element.textContent = '';
          index = (index + 1) % texts.length;
          charIndex = 0;
          type();
        }, pause);
      }
    };
  
    // Clear any previous text before starting
    if (element) element.textContent = '';
    type();
  };
  