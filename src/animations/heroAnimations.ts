import gsap from 'gsap';

export const animateHeroEntrance = (container: HTMLElement | null) => {
  if (!container) return;

  // Check for reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.set(container.querySelectorAll('.hero-fade, .hero-tag, .hero-title, .hero-desc, .hero-btn'), {
      opacity: 1,
      y: 0
    });
    return;
  }

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.fromTo(
    container.querySelectorAll('.hero-tag'),
    { opacity: 0, y: -20, scale: 0.95 },
    { opacity: 1, y: 0, scale: 1, duration: 0.6 }
  )
  .fromTo(
    container.querySelectorAll('.hero-title'),
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8 },
    '-=0.3'
  )
  .fromTo(
    container.querySelectorAll('.hero-desc'),
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6 },
    '-=0.4'
  )
  .fromTo(
    container.querySelectorAll('.hero-btn'),
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, stagger: 0.15, duration: 0.6 },
    '-=0.3'
  )
  .fromTo(
    container.querySelectorAll('.hero-badge'),
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, stagger: 0.1, duration: 0.5 },
    '-=0.2'
  );

  return tl;
};
