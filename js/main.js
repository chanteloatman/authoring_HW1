//this is the new way to do javascript app development
//everything gets wrapped in an object
//var myApp = {};

(function (){
  var theImages = document.querySelectorAll('.image-holder'),
  theHeader = document.querySelector('.header'),
  theSubhead =document.querySelector('.main-copy h2'),
  theSeasonText = document.querySelector('.main-copy p'),
  appliedClass;

function changeElements() {
  // I want to load dynamic content here
  debugger; // can see what's happening inside a function with this
}

//want to apply same thing to all of the images
theImages.forEach(function(element, index){
//loop through and do stuff to each element at the top of the page
element.addEventListener('click', changeElements, false);
}

})();
