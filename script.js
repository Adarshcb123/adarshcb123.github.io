window.addEventListener("scroll", () => {
    document.querySelectorAll("section").forEach(sec => {
        let top = window.scrollY;
        if (top > 100) {
            sec.style.opacity = "1";
        }
    });
});