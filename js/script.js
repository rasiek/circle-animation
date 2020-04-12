
// get the element to animate
var imagebig = document.getElementsByClassName('big-img')[0];
var img1 = document.getElementsByClassName('img-1')[0];
var img2 = document.getElementsByClassName('img-2')[0];
var img3 = document.getElementsByClassName('img-3')[0];
var img4 = document.getElementsByClassName('img-4')[0];
var img5 = document.getElementsByClassName('img-5')[0];
var img6 = document.getElementsByClassName('img-6')[0];
var elementHeight = imagebig.clientHeight;

// listen for scroll event and call animate function
document.addEventListener('scroll', animate);

// check if element is in view
function inView() {
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;
  
  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition = imagebig.getBoundingClientRect().top + scrollY + elementHeight;
  
  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}

// animate element when it is in view
function animate() {
  // is element in view?
  if (inView()) {
      // element is in view, add class to element
      imagebig.classList.add('animebig');
      imagebig.classList.remove('hidden');

      img1.classList.add('anime-img1');
      img1.classList.remove('hidden');

      img2.classList.add('anime-img2');
      img2.classList.remove('hidden');

      img3.classList.add('anime-img3');
      img3.classList.remove('hidden');

      img4.classList.add('anime-img4');
      img4.classList.remove('hidden');

      img5.classList.add('anime-img5');
      img5.classList.remove('hidden');

      img6.classList.add('anime-img6');
      img6.classList.remove('hidden');
  }
}