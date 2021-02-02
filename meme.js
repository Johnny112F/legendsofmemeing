

window.onload = function(){
  var memeContent = document.querySelector("#content");
  var memeGallery =document.querySelector("#meme-gallery");

  memeContent.addEventListener("submit", function(e){
    e.preventDefault();
    var imgURL = document.querySelector("#img-url").value;
    var upperText = document.querySelector("#upper-text").value;
    var lowerText =document.querySelector("#lower-text").value;

    if (imgURL === '') alert("Please enter a valid image path");

    var meme = document.createElement('div');
    meme.classList.add('meme');

    let upper = document.createElement('div');
    upper.innerText = upperText;
    upper.classList.add('upper-position')

    let lower = document.createElement('div');
    lower.innerText = lowerText;
    lower.classList.add('lower-position')
    
    var img = document.createElement('img')
    img.setAttribute('src', imgURL);

    var del =document.createElement('div');
    del.classList.add('delete');
    del.innerText = 'x';
    del.addEventListener('click', removeMeme);

    meme.appendChild(img);
    meme.appendChild(upper);
    meme.appendChild(lower);
    meme.appendChild(del)

    memeGallery.appendChild(meme);

    memeContent.reset();



  });
}

function removeMeme(e){
  if(e.target.className.toLowerCase() === 'delete') event.target.parentNode.remove();
}
