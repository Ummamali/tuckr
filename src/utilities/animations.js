import { animate } from "animejs";

export function animateFadeIn(selector) {
  animate(selector, {
    opacity: 1,
    duration: 280,
    easing: "easeOutQuad",
  });
}
