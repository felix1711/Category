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



document.addEventListener("DOMContentLoaded", () => {
    const category = document.getElementById("Category");
    const sections = document.querySelectorAll(".section");
    const totalSections = sections.length;
    let currentSection = 0;
    let isScrolling = false;
    let a=0;

    function updateDivWidths(exchange) {
        const leftDiv = sections[currentSection].querySelector('.div-left');
        const rightDiv = sections[currentSection].querySelector('.div-right');
        if (leftDiv && rightDiv) {

          //  if (exchange) {
                leftDiv.style.width = '30%';
                rightDiv.style.width = '70%';
            //} else {
            //    leftDiv.style.width = '70%';
            //    rightDiv.style.width = '30%';
            //}
        }
    }

    function onScroll(event) {
        // Prevent default scrolling behavior
        event.preventDefault();

        // Ignore if currently scrolling
        if (isScrolling) return;

        // Mark as scrolling
        isScrolling = true;

        // Update div widths before changing section
        // const exchangeWidths = currentSection < 4;
        // updateDivWidths(exchangeWidths);
        console.log( 'currentSection' + currentSection);
        // Determine scroll direction
        if (event.deltaY > 0) {
            // Scrolling down
            if (currentSection < totalSections - 1) {
                if(currentSection<4){
                    if( a==0){
                        a++;
                        updateDivWidths(true);
                    }
                    else{
                        currentSection++;
                        updateDivWidths(true);
                    }
                }
                else{
                    currentSection++;
                    updateDivWidths(true);
                }
                // // Move to next section after exchanging widths
                // if (exchangeWidths) {
                //     // If widths exchanged, we do not increment yet
                //     currentSection++;
                // } else {
                //     // If widths have not exchanged, we switch widths
                //     currentSection++;
                // }
            }
        } else {
            // Scrolling up
            if (currentSection > 0) {
                currentSection--;
                updateDivWidths(false); // Reset widths on scroll up
            }
        }

        // Update the left position based on the current section
        const leftPosition = -100 * currentSection;
        category.style.left = `${leftPosition}vw`;

        // Adjust position style
        category.style.position = currentSection === totalSections - 1 ? 'absolute' : 'fixed';
        category.style.top = '0';

        // Reset scrolling state after a short delay
        setTimeout(() => {
            isScrolling = false;
        }, 200); // Adjust this value as needed
    }

    // Initial setup for the first section
    updateDivWidths(false); // Start with initial widths
    a=0;

    // Attach the scroll event listener
    window.addEventListener("wheel", onScroll);
});

