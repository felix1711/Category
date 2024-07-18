// gsap.to("#Category", {
//     left:"-500vw",
//     scrollTrigger: {
//         trigger: ".page1",
//         scroller: "body",
//         start: "top 0%",
//         end: "top -1%",
//         scrub:1,
//         pin: true,
//     }
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const category = document.getElementById("Category");
//     const sections = document.querySelectorAll(".section");
//     const totalSections = sections.length;
//     let currentSection = 0;
//     let isScrolling = false;

//     function onScroll(event) {
//         // Prevent default scrolling behavior
//         event.preventDefault();

//         // Ignore if currently scrolling
//         if (isScrolling) return;

//         // Mark as scrolling
//         isScrolling = true;

//         // Determine scroll direction
//         if (event.deltaY > 0) {
//             // Scrolling down
//             if (currentSection < totalSections - 1) {
//                 currentSection++;
//             }
//         } else {
//             // Scrolling up
//             if (currentSection > 0) {
//                 currentSection--;
//             }
//         }

//         // Update the left position based on the current section
//         const leftPosition = -100 * currentSection;
//         category.style.left = `${leftPosition}vw`;

//         // Adjust position style
//         category.style.position = currentSection === totalSections - 1 ? 'absolute' : 'fixed';
//         category.style.top = '0';

//         // Reset scrolling state after a short delay
//         setTimeout(() => {
//             isScrolling = false;
//         }, 200); // Adjust this value as needed
//     }

//     // Attach the scroll event listener
//     window.addEventListener("wheel", onScroll);
// });



// document.addEventListener("DOMContentLoaded", () => {
//     const category = document.getElementById("Category");
//     const sections = document.querySelectorAll(".section");
//     const totalSections = sections.length;
//     let currentSection = 0;
//     let isScrolling = false;
//     let a = 2;
//     let b=0;
//     const page1 = document.querySelector('.page1');

//     function updateDivWidths() {
//         const leftDiv = sections[currentSection].querySelector('.div-left');
//         const rightDiv = sections[currentSection].querySelector('.div-right');
//         if (leftDiv && rightDiv) {
//             if (a % 2 === 1) {
//                 leftDiv.style.width = '30%';
//                 rightDiv.style.width = '70%';
//             } else {
//                 leftDiv.style.width = '70%';
//                 rightDiv.style.width = '30%';
//             }
//         }
//     }

//     function onScroll(event) {
//         event.preventDefault(); // Prevent default scrolling behavior

//         if (isScrolling) return; // Ignore if currently scrolling

//         isScrolling = true; // Mark as scrolling

//         // Determine scroll direction
//         if (event.deltaY > 0) {
//             // Scrolling down
//             if (currentSection < totalSections - 1) {
//                 if (currentSection < 5 && currentSection > 0) {
//                     if (a % 2 === 0) {
//                         a++;
//                         updateDivWidths();
//                     } else {
//                         currentSection++;
//                         a++;
//                         updateDivWidths();
//                         const leftPosition = -100 * currentSection;
//                         category.style.left = `${leftPosition}vw`;
//                     }
//                 } else {
//                     currentSection++;
//                     const leftPosition = -100 * currentSection;
//                     category.style.left = `${leftPosition}vw`;
//                 }
//             } else {
//                 // Scroll down to the next page when at the last section
//                 window.scrollTo(0, document.body.scrollHeight);
//             }
//         } else {
//             // Scrolling up
//             if (currentSection > 0) {
//                 if (a % 2 === 1) {
//                     a++;
//                     updateDivWidths();
//                 } else {
//                     a--;
//                     currentSection--;
//                     updateDivWidths();
//                     const leftPosition = -100 * currentSection;
//                     category.style.left = `${leftPosition}vw`;
//                 }
//             } else {
//                 // Exit ScrollTrigger and scroll to the top of the page
               
//                 b=1;
//             }
//         }

//         // Adjust position style
//         category.style.position = currentSection === totalSections - 1 ? 'absolute' : 'fixed';
//         category.style.top = '0';

//         setTimeout(() => {
//             isScrolling = false; // Reset scrolling state
//         }, 300);
//     }

//     // Initial setup for the first section
//     updateDivWidths(); // Start with initial widths

//     // Setup ScrollTrigger
//     const scrollTrigger = ScrollTrigger.create({
//         markers: true, // Show markers for debugging
//         trigger: page1, // Element to trigger the ScrollTrigger
//         scroller: "body", // Scroll container
//         start: "0% top", // Start when the top of page1 hits the top of the viewport
//         end: "100% top", // End when the top of section5 hits the top of the viewport
//         onEnter: () => {
//             page1.addEventListener("wheel", onScroll); // Add wheel event
//         },
//         onLeave: () => {
//             // Remove wheel event when leaving page1
//             page1.removeEventListener("wheel", onScroll);
//         },
//         onLeaveBack: () => {
//             // Remove wheel event when scrolling back
//             page1.removeEventListener("wheel", onScroll);
//         },
//         onUpdate: self => {
//             // Check if we've reached the last section
//             if (currentSection === totalSections - 1) {
//                 // Allow natural scrolling
//                 page1.removeEventListener("wheel", onScroll);
//             }
//             // Check if we're back at the first section
//             if (currentSection === 0 && b===1) {
//                 // Allow natural scrolling
//                 page1.removeEventListener("wheel", onScroll);
//             }
//         },
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    const category = document.getElementById("Category");
    const sections = document.querySelectorAll(".section");
    const totalSections = sections.length;
    let currentSection = 0;
    let isScrolling = false;
    let a = 2;
    const autoScrollInterval = 3000; // 3 seconds
    let hasAutoScrolled = false; // Track if auto-scroll has occurred
    let inactivityTimeout;

    function updateDivWidths() {
        const leftDiv = sections[currentSection].querySelector('.div-left');
        const rightDiv = sections[currentSection].querySelector('.div-right');
        if (leftDiv && rightDiv) {
            if (a % 2 === 1) {
                leftDiv.style.width = '30%';
                rightDiv.style.width = '70%';
            } else {
                leftDiv.style.width = '70%';
                rightDiv.style.width = '30%';
            }
        }
    }

    function scrollToNextSection() {
        if (currentSection < totalSections - 1) {
            if (!hasAutoScrolled) {
                hasAutoScrolled = true; // Allow auto-scroll only once for the first section
                let count = 0;
                const interchangeWidths = setInterval(() => {
                    if (count < 5) {
                        a++;
                        updateDivWidths();
                        count++;
                    } else {
                        clearInterval(interchangeWidths);
                        currentSection++;
                        const leftPosition = -100 * currentSection;
                        category.style.left = `${leftPosition}vw`;
                        updateDivWidths(); // Final update to widths
                    }
                }, autoScrollInterval);
            } else {
                if (currentSection < 5 && currentSection > 0) {
                    if (a % 2 === 0) {
                        a++;
                        updateDivWidths();
                    } else {
                        currentSection++;
                        a++;
                        updateDivWidths();
                        const leftPosition = -100 * currentSection;
                        category.style.left = `${leftPosition}vw`;
                    }
                } else {
                    currentSection++;
                    const leftPosition = -100 * currentSection;
                    category.style.left = `${leftPosition}vw`;
                }
            }
        }
    }

    function onScroll(event) {
        event.preventDefault();
        if (isScrolling) return;
        isScrolling = true;

        if (event.deltaY > 0) {
            // Scrolling down
            scrollToNextSection();
        } else {
            // Scrolling up
            if (currentSection > 0) {
                if (a % 2 === 1) {
                    a++;
                    updateDivWidths();
                } else {
                    a--;
                    currentSection--;
                    const leftPosition = -100 * currentSection;
                    category.style.left = `${leftPosition}vw`;
                }
            }
        }

        // Adjust position style
        category.style.position = currentSection === totalSections - 1 ? 'absolute' : 'fixed';
        category.style.top = '0';

        setTimeout(() => {
            isScrolling = false;
        }, 300);
    }

    function onClick(event) {
        const target = event.target;
        const section = target.closest('.section');

        if (section) {
            const sectionWidth = section.clientWidth;
            const clickX = event.clientX - section.getBoundingClientRect().left;

            if (clickX > sectionWidth / 2) {
                // Clicked on the right side
                scrollToNextSection();
            } else {
                // Clicked on the left side
                if (currentSection > 0) {
                    if (a % 2 === 1) {
                        a++;
                        updateDivWidths();
                    } else {
                        a--;
                        currentSection--;
                        const leftPosition = -100 * currentSection;
                        category.style.left = `${leftPosition}vw`;
                    }
                }
            }
        }
    }

    // Initial setup for the first section
    updateDivWidths();

    // Attach the scroll event listener
    window.addEventListener("wheel", onScroll);

    // Attach the click event listener
    category.addEventListener("click", onClick);

    // Handle inactivity timeout
    function resetInactivityTimeout() {
        clearTimeout(inactivityTimeout);
        inactivityTimeout = setTimeout(scrollToNextSection, autoScrollInterval);
    }

    // Reset timeout on scroll or click
    window.addEventListener("wheel", resetInactivityTimeout);
    category.addEventListener("click", resetInactivityTimeout);

    // Start the inactivity timeout
    resetInactivityTimeout(); // Start the initial inactivity timeout
});
