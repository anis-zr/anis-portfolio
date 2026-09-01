import gsap from 'gsap';

export const animatePageIn = (container: HTMLElement | null) => {
  if (!container) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.set(container, { opacity: 1 });
    return;
  }

  window.scrollTo(0, 0);
  gsap.fromTo(
    container,
    { opacity: 0, y: 15 },
    { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }
  );
};
