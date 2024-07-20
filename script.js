document.addEventListener("DOMContentLoaded", () => {
    const category = document.getElementById("Category");
    const sections = document.querySelectorAll(".section");
    let currentSection = 0;
    let isScrolling = false;
    let a = 2;
    let autoScrollTimeout;

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
            if (currentSection < 5 ) {
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
                else{
                    category.style.top = 'none';
                    category.style.position ='none';

                }
        } else {
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
            else{
                category.style.top = 'none';
                category.style.position ='none';

            }
        }
        setTimeout(() => {
            isScrolling = false; 
        }, 400);
    }

    function onClick(event) {
        const target = event.target;
        const section = target.closest('.section');

        if (section) {
            const sectionWidth = section.clientWidth;
            const clickX = event.clientX - section.getBoundingClientRect().left;

            if (clickX > sectionWidth / 2) {
                    if (currentSection < 5 ) {
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
    window.addEventListener('wheel', onScroll);
    category.addEventListener("wheel", onScroll);
    category.addEventListener("click", onClick);
    resetAutoScroll();
});


