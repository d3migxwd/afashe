export function useScrollSpy() {
  const sections = ref([]);
  const currentSection = ref(null);
  const navItems = ref([]);

  onMounted(() => {
    // function to add active class to nav item
    const setActiveNavItem = (id) => {
      navItems.value.forEach((item) => {
        if (item.hash === `#${id}`) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting);
        if (visibleSections.length > 0) {
          currentSection.value = visibleSections[0].target.id;
          setActiveNavItem(currentSection.value);
        }
      },
      { threshold: 0.3 }
    );
    navItems.value = Array.from(document.querySelectorAll(".navy"));
    sections.value = Array.from(document.querySelectorAll(".section"));
    if (sections.value.length > 0) {
      console.log(sections.value);
      sections.value.forEach((section) => observer.observe(section));
    }
  });
}
