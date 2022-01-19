const slider = () => {
  const container = document.querySelector("#services .container")
  const sliderLine = container.querySelector(".row")
  const slides = container.querySelectorAll(".row .col-md-12")
  let startCounter = 0
  let endCounter = 1

  let count = window.innerWidth > 576 ? 2 : 1;
  // console.log(count)

  let arrSlide = Array.from(slides);

  if (sliderLine) {
    const showSlides = () => {
      arrSlide.forEach((slide, index) => {
        if (window.innerWidth > 576) {
          if (index == startCounter || index == endCounter) {
            slide.style.display = "inline";
          } else {
            slide.style.display = "none";
          }
        } else {
          if (index == endCounter) {
            slide.style.display = "inline";
          } else {
            slide.style.display = "none";
          }
        }
      })
    }

    showSlides();

    window.addEventListener("resize", () => {
      showSlides();
    })

    sliderLine.addEventListener("click", (e) => {
      e.preventDefault();

      if (e.target.closest(".services__arrow--right")) {
        if (startCounter + count > arrSlide.length - 1) {
          startCounter = 0;
        }
        if (endCounter + count > arrSlide.length - 1) {
          endCounter = 1;
        } else {
          startCounter += count;
          endCounter += count;
        }
        
      }
      if (e.target.closest(".services__arrow--left")) {
        if (startCounter - count < 0) {
          startCounter = 2;
        }
        if (endCounter - count < 0) {
          endCounter = 3;
        } else {
          startCounter -= count;
          endCounter -= count;
        }
      }

      showSlides();
    });
  } else {
    return;
  }
}


export default slider;
