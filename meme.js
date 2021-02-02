
//when window loads create vars representing form content and the meme gallery.
window.onload = function(){
  var memeContent = document.querySelector("#content");
  var memeGallery =document.querySelector("#meme-gallery");
//submit form and create variables representing inout data.
  memeContent.addEventListener("submit", function(e){
    e.preventDefault();
    var imgURL = document.querySelector("#img-url").value;
    var upperText = document.querySelector("#upper-text").value;
    var lowerText =document.querySelector("#lower-text").value;
//test if img input is valid and reset form if it isnt
    if (imgURL === ''){
      alert("Please enter a valid image path");
    } else{
    // let moo = imageExists(imgURL)
    // console.log(moo); 
    // if(moo === false){
    //   alert("try another image");
    // } else{
//if image is valid continue creating a meme
    var meme = document.createElement('div');
    meme.classList.add('meme');
//create lower text variable, assert it's value to form input text,add class for css manipulation.
    let upper = document.createElement('div');
    upper.innerText = upperText;
    upper.classList.add('upper-position')
//create upper text variable, assert it's value to form input text,add class for css manipulation.
    let lower = document.createElement('div');
    lower.innerText = lowerText;
    lower.classList.add('lower-position')
//create image variable, assert it's value to form input, src is the implied class.
    var img = document.createElement('img')
    img.setAttribute('src', imgURL);
//create delete box with listener for interactive delete.
    var del =document.createElement('div');
    del.classList.add('delete');
    del.innerText = 'x';
    del.addEventListener('click', removeMeme);
//add all elements to meme div
    meme.appendChild(img);
    meme.appendChild(upper);
    meme.appendChild(lower);
    meme.appendChild(del)
//add meme div to gallery
    memeGallery.appendChild(meme);
//reset form for next meme generation after succeful completion and addition to page.
    memeContent.reset();
    }

    })

  };

//deletes a meme when button is hovered over and clicked
function removeMeme(e){
  if(e.target.className.toLowerCase() === 'delete') event.target.parentNode.remove();
}

/*determine whether an image has fully loaded or if its height will negate it's appearance.
function imageExists(url){

  var image = new Image();

  image.src = url;

  if (!image.complete) {
      return false;
  }

  return true;
}*/