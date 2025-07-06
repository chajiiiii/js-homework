/* global gsap */

setTimeout(animateContents, 100);
setTimeout(animateGraphics, 100);

function animateContents() {
  const tl = gsap.timeline({
    defaults: { opacity: 0 },
  });

  const firstH1SpanElement = document.querySelector("h1").firstElementChild;
  const lastH1SpanElement = document.querySelector("h1").lastElementChild;

  tl.from(firstH1SpanElement, { duration: 2 });
  tl.from(
    lastH1SpanElement,
    {
      scale: 0.5,
      ease: "power4.out",
      duration: 0.5,
    },
    "-=0.7"
  );
  tl.from("p", { x: -100, duration: 1.5 });
  tl.from(".links", { duration: 0.4 });
}

function animateGraphics() {
  const tl = gsap.timeline({
    repeat: -1,

    defaults: { duration: 2 },
  });

  const defaultAnimation = { repeat: -1, yoyo: true };

  tl.to(".object-17", { opacity: 1 })
    .to([".object-18", ".object-19"], { opacity: 0 }, "<")

    .to(".object-18", { opacity: 1 })
    .to([".object-17", ".object-19"], { opacity: 0 }, "<")

    .to(".object-19", { opacity: 1 })
    .to([".object-17", ".object-18"], { opacity: 0 }, "<");

  gsap.to("#vertical-line-1", {
    opacity: 0,
    duration: 1,
    ...defaultAnimation,
  });

  gsap.to("#vertical-line-2", {
    y: -100,
    duration: 1,
    ...defaultAnimation,
  });

  gsap.from("#vertical-line-3", {
    y: -50,
    opacity: 0,
    duration: 1.5,
    ...defaultAnimation,
  });

  gsap.to("#horizontal-line-1", {
    opacity: 0.5,
    duration: 0.5,
    ...defaultAnimation,
  });

  gsap.to("#horizontal-line-3", {
    x: 100,
    duration: 0.7,
    ...defaultAnimation,
  });

  gsap.to(".object-1", {
    scale: 0.8,
    duration: 1,
    transformOrigin: "50% 50%",
    ...defaultAnimation,
  });

  gsap.from(".object-2", {
    rotate: 360,
    transformOrigin: "50% 50%",
    duration: 5,
    ease: "bounce.out",
    scale: 0.4,
    ...defaultAnimation,
  });

  gsap.from(".object-3", {
    rotate: 360,
    x: 80,
    transformOrigin: "50% 50%",
    duration: 5,
    ease: "bounce.out",
    scale: 0.7,
    ...defaultAnimation,
  });

  gsap.to(".object-4", {
    rotate: 360,
    transformOrigin: "50% 50%",
    duration: 5,
    scale: 0.4,
    opacity: 0,
    ease: "power3.in",
    ...defaultAnimation,
  });

  gsap.to(".object-6", {
    y: 125,
    duration: 1,
    ease: "none",
    ...defaultAnimation,
  });

  gsap.to(".object-7", {
    y: -125,
    duration: 1,
    ease: "none",
    ...defaultAnimation,
  });

  gsap.from(".object-8", {
    rotate: 280,
    duration: 2,
    opacity: 0,
    ...defaultAnimation,
  });

  gsap.from(".object-9", {
    y: -125,
    duration: 5,
    opacity: 0,
    ...defaultAnimation,
  });

  gsap.to(".object-10", {
    y: -125,
    duration: 2,
    ...defaultAnimation,
  });

  gsap.to(".object-11", {
    y: -125,
    rotate: 180,
    transformOrigin: "50% 50%",
    duration: 2,
    ...defaultAnimation,
  });

  gsap.to(".object-12", {
    scale: 1.3,
    transformOrigin: "50% 50%",
    duration: 2,
    ...defaultAnimation,
  });

  gsap.from(".object-13", {
    scale: 1.3,
    transformOrigin: "50% 50%",
    duration: 2,
    ...defaultAnimation,
  });

  gsap.to(".object-14", {
    opacity: 0,
    duration: 2,
    ...defaultAnimation,
  });

  gsap.to(".object-16", {
    rotate: 130,
    duration: 2,
    ease: "none",
    ...defaultAnimation,
  });
}
