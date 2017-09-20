
(function (){
  var theImages = document.querySelectorAll('.image-holder'),
  theHeader = document.querySelector('.heading'),
  theSubhead = document.querySelector('.main-copy h2'),
  theSeasonText = document.querySelector('.main-copy p'),
  appliedClass;

function changeElements() {
  // I want to load dynamic content here
  //debugger; // can see what's happening inside a function with this
  let subImages = document.querySelector('.subImagesContainer');
  let objectIndex = dynamicContent[this.id]; //let lets you declare variables that are limited in scope to block, statement, or expression on which it is used

//remove all of the thumbnail images (stops the repeating of adding the thumbnail images below when you change the main image (season in our example))
while(subImages.firstChild){
  subImages.removeChild(subImages.firstChild);
}

//Create an image element and add it to the page
objectIndex.images.forEach(function(element, index){
  let newSubImg = document.createElement('img');

//add a class to css
  newSubImg.classList.add('thumb');
  //add an image source
  newSubImg.src = "images/" + objectIndex.images[index];
  //append it to the container
  subImages.appendChild(newSubImg);
});


  theSubhead.classList.remove(appliedClass);
  theHeader.classList.remove(appliedClass);//so in our example, after you click the last picture, the header color and text no longer changes
  //what this line of code does (the two lines above), is after the last element is selected, it removes whatever applied class that last one had so the others work
  //if you have clicked the last picture

  theSubhead.classList.add(this.id);
  theHeader.classList.add(this.id);

  theSubhead.firstChild.nodeValue = objectIndex.headline;
  theSeasonText.firstChild.nodeValue = objectIndex.text;

  appliedClass = this.id;
}

//want to apply same thing to all of the images
theImages.forEach(function(element, index){
//loop through and do stuff to each element at the top of the page
element.addEventListener('click', changeElements, false);


//initialize the app
//When the website opens, the first image text is showing now, so you don't have to click the first image to see something (not the placeholder as before)
theSubhead.firstChild.nodeValue = dynamicContent['spring'].headline;
theSeasonText.firstChild.nodeValue = dynamicContent['spring'].text;
});

})();
