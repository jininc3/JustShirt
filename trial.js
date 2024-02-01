// Function to retrieve the current cart from local storage or initialize a new one
function getCart() {
  let cart = localStorage.getItem('shoppingCart');
  return cart ? JSON.parse(cart) : [];
}

// Function to save the current cart to local storage
function saveCart(cart) {
  localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

// Function to add an item to the cart
function addToCart(productId, productName, productPrice) {
  let cart = getCart();
  let cartItem = cart.find(item => item.productId === productId);

  if (cartItem) {
    // Product already exists in the cart, increment the quantity
    cartItem.quantity += 1;
  } else {
    // Product does not exist in the cart, add as a new item
    cart.push({ productId, productName, productPrice, quantity: 1 });
  }

  saveCart(cart);
}

// Event listener for all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
  button.addEventListener('click', event => {
    let productElement = event.target.closest('.product');
    let productId = productElement.dataset.productId;
    let productName = productElement.dataset.productName;
    let productPrice = productElement.dataset.productPrice;

    addToCart(productId, productName, productPrice);

    
  });
});

 