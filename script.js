// const section=document.querySelector(".section")
// const info=document.querySelector("#intro")

// function animatesection(){
//     section.addEventListener("wheel",(evt)=>{
//         evt.preventDefault();
//         section.scrollLeft +=evt.deltaY;
//         section.style.scrollBehavior="auto"
//     })
// }
// animatesection();

// gsap.registerPlugin(ScrollTrigger);

// const sections = document.querySelectorAll('.section');

// gsap.to("#Category", {
//     left:"-500vw",
//     scrollTrigger: {
//         trigger: ".page1",
//         scroller: "body",
//         start: "top 0%",
//         end: "top -120%",
//         scrub: 4,
//         pin: true,
//         markers:true,
//         // anticipatePin: 1,
//         // onLeave: () => {
//         //     // Optional: Add any functionality when leaving
//         // }
//     }
// });

gsap.registerPlugin(ScrollTrigger);

const pages = document.querySelectorAll('.page');

gsap.to( ".container", {
    x:"-100%",
    ease: "none",
    // duration:0.2,
    scrollTrigger: {
        start:"top 0%",
        trigger:"#supreme",
        scroller:"body",
        pin: true,
        scrub: 4,
        snap: {
            snapTo:1,// 1/n-1
            duration: { min: 0.2, max: 0.3 },
            ease: "power1.inOut",
        },
        end:"top -40%",
    }
});

// // Create individual scroll triggers for each page
// pages.forEach((page, index) => {
//     const leftBlock = page.querySelector('.left');
//     const rightBlock = page.querySelector('.right');

//     ScrollTrigger.create({
//         trigger: page,
//         start: "top 0%",
//         end:"-100%",
//         onEnter: () => {
//             page.classList.add("active");
//             leftBlock.style.width = '30%';
//             rightBlock.style.width = '70%';
//         },
//         onLeave: () => {
//             page.classList.remove("active");
//             leftBlock.style.width = '70%';
//             rightBlock.style.width = '30%';
//         },
//         onEnterBack: () => {
//             page.classList.add("active");
//             leftBlock.style.width = '30%';
//             rightBlock.style.width = '70%';
//         },
//         onLeaveBack: () => {
//             page.classList.remove("active");
//             leftBlock.style.width = '70%';
//             rightBlock.style.width = '30%';
//         }
//     });
// });

function updateBlockWidths(page, isEntering) {
    const leftBlock = page.querySelector('.left');
    const rightBlock = page.querySelector('.right');

    if (isEntering) {
        page.classList.add("active");
        leftBlock.style.width = '30%';
        rightBlock.style.width = '70%';
    } else {
        page.classList.remove("active");
        leftBlock.style.width = '70%';
        rightBlock.style.width = '30%';
    }
}

// Create ScrollTriggers for each page manually
ScrollTrigger.create({
    trigger: pages[0],
    start: "top 0%",
    end: "bottom 0%",
    onEnter: () => updateBlockWidths(pages[0], true),
    onLeave: () => updateBlockWidths(pages[0], false),
    onEnterBack: () => updateBlockWidths(pages[0], true),
    onLeaveBack: () => updateBlockWidths(pages[0], false),
});

ScrollTrigger.create({
    trigger: pages[1],
    start: "top 0%",
    end: "bottom 0%",
    onEnter: () => updateBlockWidths(pages[1], true),
    onLeave: () => updateBlockWidths(pages[1], false),
    onEnterBack: () => updateBlockWidths(pages[1], true),
    onLeaveBack: () => updateBlockWidths(pages[1], false),
});

// Repeat for all other pages
ScrollTrigger.create({
    trigger: pages[2],
    start: "top 0%",
    end: "bottom 0%",
    onEnter: () => updateBlockWidths(pages[2], true),
    onLeave: () => updateBlockWidths(pages[2], false),
    onEnterBack: () => updateBlockWidths(pages[2], true),
    onLeaveBack: () => updateBlockWidths(pages[2], false),
});

ScrollTrigger.create({
    trigger: pages[3],
    start: "top 0%",
    end: "bottom 0%",
    onEnter: () => updateBlockWidths(pages[3], true),
    onLeave: () => updateBlockWidths(pages[3], false),
    onEnterBack: () => updateBlockWidths(pages[3], true),
    onLeaveBack: () => updateBlockWidths(pages[3], false),
});

ScrollTrigger.create({
    trigger: pages[4],
    start: "top 0%",
    end: "bottom 0%",
    onEnter: () => updateBlockWidths(pages[4], true),
    onLeave: () => updateBlockWidths(pages[4], false),
    onEnterBack: () => updateBlockWidths(pages[4], true),
    onLeaveBack: () => updateBlockWidths(pages[4], false),
});

ScrollTrigger.create({
    trigger: pages[5],
    start: "top 0%",
    end: "bottom 0%",
    onEnter: () => updateBlockWidths(pages[5], true),
    onLeave: () => updateBlockWidths(pages[5], false),
    onEnterBack: () => updateBlockWidths(pages[5], true),
    onLeaveBack: () => updateBlockWidths(pages[5], false),
});
