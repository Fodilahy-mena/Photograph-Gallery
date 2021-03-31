
function Slide(slide) {

  const activeImg = document.querySelector('.ative--img');
  const prevButton = activeImg.querySelector('.prev');
  const nextButton = activeImg.querySelector('.next');

  // event listeners to be bound
window.addEventListener('keyup', handleKeyUp);
nextButton.addEventListener("click", showNextImage = () => {
  nextImages(+1);
  let container = document.querySelector('.image-container');
    sideScroll(container,'right',25,100,10);
});

prevButton.addEventListener("click", showPrevImage = () => {
  nextImages(-1);
  let container = document.querySelector('.image-container');
    sideScroll(container,'left',25,100,10);
});

function sideScroll(element,direction,speed,distance,step){
  scrollAmount = 0;
  let slideTimer = setInterval(function(){
      if(direction == 'left'){
          element.scrollLeft -= step;
      } else {
          element.scrollLeft += step;
      }
      scrollAmount += step;
      if(scrollAmount >= distance){
          window.clearInterval(slideTimer);
      }
  }, speed);
}

  // Enable the use of Arrow keys left and right as the same use of previous button and next button
  function handleKeyUp(e) {
    if(e.key === "ArrowLeft") return showNextImage();
    if(e.key === "ArrowRight") return showPrevImage();
}

const slideImages = document.querySelectorAll('.image_slide');
const sliders = document.querySelectorAll('.image_slider');

let slideIndex = 1;

const showImages = (n) => {
  let i;
  
  if (n > slideImages.length) {
     slideIndex = 1 
  }  

  if(n < 1 ) {
    slideIndex = slideImages.length
  };

  for (i = 0; i < slideImages.length; i++) {
    slideImages[i].style.display = "none";
  }

  for (i = 0; i < sliders.length; i++) {
    sliders[i].className = sliders[i].className.replace(" active", "");
  }

  slideImages[slideIndex-1].style.display = "block";
  sliders[slideIndex-1].className += " active"; 
}

showImages(slideIndex);

const nextImages = (n) => {
  showImages(slideIndex += n);
}

sliders.forEach((image, index) => {
  image.addEventListener('click', e => showImages(slideIndex = index + 1));
});

}

const imgConatiner = Slide(document.querySelector('.image-container'));

const listItems = document.querySelectorAll(".list__item");

listItems.forEach((item) => {
  const CheckBox = document.querySelector('#menu_checkbox');
  item.addEventListener('click', e => {
    CheckBox.checked = false;
  });
});
