document.addEventListener("DOMContentLoaded", () => {
    const category = document.getElementById("Category");
    const sections = document.querySelectorAll(".section");
    let currentSection = 0;
    let isScrolling = false;
    let a = 2;
    let autoScrollTimeout;

if (!category.addEventListener("wheel", onScroll)){
    const observerOptions = {
        threshold: [0, 0.1]  
      };
      
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.boundingClientRect.bottom >= window.innerHeight) {
              category.addEventListener("wheel", onScroll);
              console.log("Event listener added for currentSection 0");
            } else if (entry.boundingClientRect.top <= 0) {
              category.addEventListener("wheel", onScroll);
              console.log("Event listener added for currentSection 5");
            }
          }
        });
      }, observerOptions);
      
      observer.observe(category);
}

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
                    updateDivWidths();
                    const leftPosition = -100 * currentSection;
                    category.style.left = `${leftPosition}vw`;
                }
            } else {
                category.style.top = null;
                category.style.position = 'relative';
                category.removeEventListener("wheel", onScroll);
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
                category.style.top = null;
                category.style.position = 'relative';
                category.removeEventListener("wheel", onScroll);
            }
        }
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
    category.addEventListener("click", onClick);
    category.addEventListener("wheel", onScroll);
    resetAutoScroll();
});



