// IntersectionObserver-based scroll reveal fallback
// Works in all browsers; CSS animation-timeline: view() is progressive enhancement
function initReveal() {
  const supportsScrollTimeline = CSS.supports('animation-timeline: view()');
  if (supportsScrollTimeline) return; // Let CSS handle it

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.reveal, .stagger').forEach((el) => {
    observer.observe(el);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReveal);
} else {
  initReveal();
}
