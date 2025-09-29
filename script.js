function handleScroll() {
    const footer = document.querySelector(".footer");
    const positionFooter = footer.getBoundingClientRect();
    if (positionFooter.top <= window.innerHeight) {
        footer.classList.add("vision");
    }
}

window.addEventListener('scroll', handleScroll);