export function useAnimateSection() {
  const allSections = ref([]);

  onMounted(() => {
    const animateObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.1 }
    );
    allSections.value = Array.from(document.querySelectorAll(".blurry"));
    if (allSections.value.length > 0) {
      allSections.value.forEach((section) => animateObserver.observe(section));
    }
  });
  onUnmounted(() => {
    allSections.value.forEach((section) => section.classList.remove("active"));
  });
}
