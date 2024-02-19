// Existing code...

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
      shoppingCart.innerHTML = '';
      cartItems.forEach(function(item) {
          let div = document.createElement('div');
          div.innerHTML = `${item.name} - $${item.price}`;
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
  document.getElementById('totalQuantity').textContent = `Total Quantity: ${totalQuantity}`;
}


function updateTotalCost() {
  let totalCost = 0;
  let itemsCart = JSON.parse(localStorage.getItem('cart')) || [];
  itemsCart.forEach(item => {
    totalCost += parseFloat(item.price) * item.quantity;
  });
  document.getElementById('totalCost').textContent = `Total Cost: ${totalCost}`;
}


// Get the modal
var modal = document.getElementById('modal');

// Function to open the modal
function openModal() {
  modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
}

// Close the modal if the user clicks anywhere outside of it
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}