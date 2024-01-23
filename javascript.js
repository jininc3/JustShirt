// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById('img01');
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}






// Get the modal
var modal2 = document.getElementById('myModal2');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img2 = document.getElementById('myImg2');
var modalImg2 = document.getElementById('img02');
img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName('close2')[0];

// When the user clicks on <span> (x), close the modal
span2.onclick = function() { 
  modal2.style.display = "none";
}






// Get the modal
var modal3 = document.getElementById('myModal3');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img3 = document.getElementById('myImg3');
var modalImg3 = document.getElementById('img03');
img3.onclick = function(){
  modal3.style.display = "block";
  modalImg3.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName('close3')[0];

// When the user clicks on <span> (x), close the modal
span3.onclick = function() { 
  modal3.style.display = "none";
}


document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') { // Check if the key pressed is 'Escape'
    var modal = document.getElementById('myModal'); // Get the modal element
    if (modal.style.display === 'block') { // Check if the modal is currently shown
      modal.style.display = 'none'; // Hide the modal
    }
  }
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') { // Check if the key pressed is 'Escape'
    var modal2 = document.getElementById('myModal2'); // Get the modal element
    if (modal2.style.display === 'block') { // Check if the modal is currently shown
      modal2.style.display = 'none'; // Hide the modal
    }
  }
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') { // Check if the key pressed is 'Escape'
    var modal3 = document.getElementById('myModal3'); // Get the modal element
    if (modal3.style.display === 'block') { // Check if the modal is currently shown
      modal3.style.display = 'none'; // Hide the modal
    }
  }
});