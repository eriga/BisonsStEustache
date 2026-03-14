const nav = document.querySelector("nav");
let lastScroll = 0;

window.addEventListener(
    "scroll",
    () => {
        const scrollY = window.scrollY;

        if (scrollY > 60) {
            nav.classList.add("nav-compact");
        } else {
            nav.classList.remove("nav-compact");
        }

        lastScroll = scrollY;
    },
    { passive: true }
);
