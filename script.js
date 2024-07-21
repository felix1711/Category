document.addEventListener("DOMContentLoaded", () => {
    const category = document.getElementById("Category");
    const sections = document.querySelectorAll(".section");
    let currentSection = 0;
    let isScrolling = false;
    let a = 2;
    let autoScrollTimeout;
    const page1 = document.getElementById("page1")

        // const pages = document.querySelectorAll('.page');
        
        // pages.forEach(page => {
        //     page.addEventListener('transitionend', (event) => {
        //         const targetPage = event.target.closest('.page');
        //         const rect = targetPage.getBoundingClientRect();
    
        //         if (rect.top === 0 && (targetPage.id === 'page1' || targetPage.id === 'page2')) {
        //             category.addEventListener("wheel", onScroll);
        //         }
        //     });
        // });
    

    const observerOptions = {
        threshold:[0,0.01]
      };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.boundingClientRect.bottom >= window.innerHeight || entry.boundingClientRect.top <= 0) {
                    category.addEventListener("wheel", onScroll);
                    console.log("Event listener added");
                }
            }
        });
    }, observerOptions);
    
    observer.observe(category);

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
        category.style.top = '0';
        category.style.position = 'fixed';
        if (currentSection < 5) {
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
        }
    }

    function resetAutoScroll() {
        clearTimeout(autoScrollTimeout);
        autoScrollTimeout = setInterval(() => {
            scrollToNextSection();
        }, 5000);
    }

    function onScroll(event) {
        event.preventDefault();
        if (isScrolling) return;

        isScrolling = true; 
        resetAutoScroll();

        if (event.deltaY > 0) {
            if (currentSection < 5) {
                category.style.top = '0';
                category.style.position = 'fixed';
                if (a % 2 === 0) {
                    a++;
                    updateDivWidths();
                } else {
                    currentSection++;
                    a++;
                    const leftPosition = -100 * currentSection;
                    category.style.left = `${leftPosition}vw`;
                }
            } else {
                        category.removeEventListener("wheel", onScroll);
                        page1.style.position ='absolute';
                        category.style.position='relative';
                        page1.style.top='0';
                        page1.style.left='0';
                        
            }
        } else {
            if (currentSection > 0) {
                category.style.top = '0';
                category.style.position = 'fixed';
                if (a % 2 === 1) {
                    a++;
                    updateDivWidths();
                } else {
                    a--;
                    currentSection--;
                    const leftPosition = -100 * currentSection;
                    category.style.left = `${leftPosition}vw`;
                }
            } else {
                        category.removeEventListener("wheel", onScroll);
                        category.style.position='relative';
                        page1.style.position ='absolute';
                        page1.style.top='100%';
                        page1.style.left='0';
                        
            }
        }
        setTimeout(() => {
            isScrolling = false; 
        }, 300);
    }

    function onClick(event) {
        resetAutoScroll();
        const target = event.target;
        const section = target.closest('.section');

        if (section) {
            const sectionWidth = section.clientWidth;
            const clickX = event.clientX - section.getBoundingClientRect().left;

            if (clickX > sectionWidth / 2) {
                if (currentSection < 5) {
                    category.style.top = '0';
                    category.style.position = 'fixed';
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
                }
            } else {
                if (currentSection > 0) {
                    if (a % 2 === 1) {
                        category.style.top = '0';
                        category.style.position = 'fixed';
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

    updateDivWidths();
    category.addEventListener("click", onClick);
    category.addEventListener("wheel", onScroll);
    resetAutoScroll();
});




