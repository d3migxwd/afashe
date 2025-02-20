export function useInfiniteScroll() {
  let timers = [];

  const moveFirstChild = (holder) => {
    if (holder && holder.children.length > 0) {
      const itemWidth = holder.children[0].offsetWidth + 18; // Add 16px padding
      holder.style.transform = `translateX(-${itemWidth}px)`;

      setTimeout(() => {
        holder.appendChild(holder.children[0]);
        holder.style.transition = "none";
        holder.style.transform = "none";
        setTimeout(() => {
          holder.style.transition = "transform 0.5s ease-in-out";
        }, 50);
      }, 500); // Match the duration of the CSS transition
    }
  };

  onMounted(() => {
    const holders = document.querySelectorAll(".inf-scroll");
    holders.forEach((holder) => {
      const timer = setInterval(() => moveFirstChild(holder), 2000);
      timers.push(timer);
    });
  });

  onUnmounted(() => {
    timers.forEach((timer) => clearInterval(timer));
  });
}
