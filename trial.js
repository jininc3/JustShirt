document.addEventListener('DOMContentLoaded', () => {
    const cartItemsElement = document.getElementById('cart-items');
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  
    // Load cart from localStorage
    const cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
  
    // Function to update the cart in localStorage and HTML
    const updateCart = () => {
      localStorage.setItem('shoppingCart', JSON.stringify(cart));
  
      // Clear the current cart HTML
      cartItemsElement.innerHTML = '';
  
      // Rebuild the cart HTML
      cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `Product ID: ${item.productId}, Quantity: ${item.quantity}`;
        cartItemsElement.appendChild(li);
      });
    };
  
    // Initialize cart view
    updateCart();
  
    // Add event listeners for 'Add to Cart' buttons
    addToCartButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        const productId = event.target.closest('product').dataset.productId;
        const product = cart.find(item => item.productId === productId);
  
        if (product) {
          product.quantity += 1; // Increase quantity if product is already in the cart
        } else {
          cart.push({ productId, quantity: 1 }); // Add new product to cart
        }
  
        updateCart();
      });
    });
  });
  

 