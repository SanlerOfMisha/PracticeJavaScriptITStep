document.addEventListener("DOMContentLoaded", ()=> {
    gsap.registerPlugin(ScrollTrigger)
    gsap.defaults({ease: "none", duration: 2})
    const tl = gsap.timeline();
    tl.from(".second", {xPercent: -100})
    tl.from(".third", {xPercent: 100})
    tl.from(".fourth", {yPercent: -100})

    ScrollTrigger.create({
        animation: tl,
        trigger: "#container",
        start: "top top",
        end: "+=4000",
        scrub: 2,
        pin: true,
        anticipatePin: 1
    })
})
