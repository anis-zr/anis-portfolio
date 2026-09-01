import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateSectionReveal = (element: HTMLElement | null, delay: number = 0) => {
  if (!element) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.set(element, { opacity: 1, y: 0 });
    return;
  }

  gsap.fromTo(
    element,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  );
};

export const animateStaggerCards = (elements: HTMLElement[] | NodeListOf<Element>, triggerElement: HTMLElement | null) => {
  if (!elements || elements.length === 0) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.set(elements, { opacity: 1, y: 0 });
    return;
  }

  gsap.fromTo(
    elements,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: triggerElement || elements[0],
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  );
};
