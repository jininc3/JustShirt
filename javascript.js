function addToCart(productId, productName, productPrice, productSize) {
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  let found = cartItems.some(item => item.id === productId);
  
  
  if (found) {
      cartItems = cartItems.map(item => {
          if (item.id === productId) {
              item.quantity += 1; // Increment the quantity if the item is already in the cart
          }
          return item;
      });
  } else {
      cartItems.push({ id: productId, name: productName, price: productPrice, quantity: 1, size:productSize });
  }

  localStorage.setItem('cart', JSON.stringify(cartItems)); // Save the updated cart to localStorage
  displayCart(); // Update the cart display
  updateTotalQuantityDisplay();
  updateTotalCost();
}

document.addEventListener('DOMContentLoaded', function() {
  displayCart();
  let addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

  addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
          let productElement = event.target.closest('.product');
          let productId = productElement.getAttribute('data-product-id');
          let productName = productElement.getAttribute('data-product-name');
          let productPrice = productElement.getAttribute('data-product-price');
          let productSize = productElement.querySelector('.shirt-size').value;
          addToCart(productId, productName, productPrice, productSize);
      });
  });
});

// ...Rest of the existing code...
document.addEventListener('DOMContentLoaded', function() {
  displayCart();
  
});

function displayCart() {
  let shoppingCart = document.getElementById('shoppingCart');
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  


  if(cartItems.length === 0) {
      shoppingCart.innerHTML = "<p>Your cart is empty.</p>";
  } else {
      shoppingCart.innerHTML = '<div class="basket"></div>';
      cartItems.forEach(function(item) {
          let div = document.createElement('div');
          div.innerHTML = `${item.name} - $${item.price} x ${item.quantity}`;
          shoppingCart.appendChild(div);
      });
  }
}

function clearCart() {
  localStorage.removeItem('cart');
  displayCart();
  updateTotalQuantityDisplay();
  updateTotalCost();
}


function updateTotalQuantityDisplay() {
  let totalQuantity = 0;
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cartItems.forEach(item => {
    totalQuantity += item.quantity;
  });
  document.getElementById('totalQuantity').textContent = `${totalQuantity}`;
  
  
  
}


function updateTotalCost() {
  let totalCost = 0;
  let itemsCart = JSON.parse(localStorage.getItem('cart')) || [];
  itemsCart.forEach(item => {
    totalCost += parseFloat(item.price) * item.quantity;
  });
  document.getElementById('totalCost').textContent = `£${totalCost}`;
  
}

// Get the modal element
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var img = document.getElementById("myImg"); // You'll need to add this button to your HTML

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
img.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Optional: Close the modal when the user presses the escape key
document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
});



// Get the modal element
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var img2 = document.getElementById("myImg2"); // You'll need to add this button to your HTML

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal
img2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

// Optional: Close the modal when the user presses the escape key
document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    modal2.style.display = "none";
  }
});




// Get the modal element
var modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
var img3 = document.getElementById("myImg3"); // You'll need to add this button to your HTML

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks on the button, open the modal
img3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

// Optional: Close the modal when the user presses the escape key
document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    modal3.style.display = "none";
  }
});



var modal5 = document.getElementById('modalcart5');

// Get the button that opens the modal
var btn5 = document.getElementById("myBtn5");

// Get the <span> element that closes the modal
var span5 = document.getElementsByClassName("close5")[0];

// Function to open the modal
function openModal() {
  modal5.style.display = 'block';
}

// Function to close the modal
function closeModal() {
  modal5.style.display = 'none';
}

// When the user clicks the button, open the modal 
btn5.onclick = function() {
  openModal();
}

// When the user clicks on <span> (x), close the modal
span5.onclick = function() {
  closeModal();
}

// Close the modal if the user clicks anywhere outside of it
window.onclick = function(event) {
  if (event.target == modal5) {
    closeModal();
  }
}