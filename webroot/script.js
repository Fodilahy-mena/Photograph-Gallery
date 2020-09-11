console.log('Slide images');

function Slide(slide) {
  // throw an error ('No Slide is found)
  if(!slide) {
    throw Error('No Slde is sound');
  }

  // select all the images once by class

  const images = Array.from(slide.querySelectorAll('.img'));
  console.log(images);

  const activeImg = document.querySelector('.ative--img');
  const prevButton = activeImg.querySelector('.prev');
  const nextButton = activeImg.querySelector('.next');
  let currentImage;

  // event listeners to be bound
  window.addEventListener('keyup', handleKeyUp);
  nextButton.addEventListener('click', showNextImage);
  prevButton.addEventListener('click', showPrevImage);

  // Enable the use of Arrow keys left and right as the same use of previous button and next button
  function handleKeyUp(e) {
    if(e.key === "ArrowLeft") return showNextImage();
    if(e.key === "ArrowRight") return showPrevImage();
}

function showNextImage(e) {
  showImage(currentImage.nextElementSibling || slide.firstElementChild);
};

function showPrevImage(e) {
  showImage(currentImage.previousElementSibling || slide.lastElementChild);
};

function showImage(el) {
  
  // update the the source of image inside the figure with this information
  console.log(el);
  activeImg.querySelector('img').src = el.src;
  // store the reference of the current image
  currentImage = el;
}

// loop through each of the images
images.forEach(image => {
  image.addEventListener('click', e => showImage(e.currentTarget));
});

images.forEach(image => {
  image.addEventListener('keyup', e => {
      
      if(e.key === 'Enter') {
          showImage(e.currentTarget);
      }
  });
  
});

}

const imgConatiner = Slide(document.querySelector('.image-container'));