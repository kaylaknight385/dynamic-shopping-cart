//TEST
console.log("JS FILE IS LOADED!");

document.addEventListener("DOMContentLoaded", function () {
  console.log("Cart Loading!");

  const productNameInput = document.getElementById("product-name");
  const productPriceInput = document.getElementById("product-price");
  const addProductButton = document.getElementById("add-product");
  const cart = document.getElementById("cart");
  const totalPriceSpan = document.getElementById("total-price");

  let totalPrice = 0;

  // Function to update the total price
  function updateTotalPrice(amount) {
    totalPrice += amount;
    totalPriceSpan.textContent = totalPrice.toFixed(2);
  }

  // Function to remove items
  function removeItem(event) {
    const item = event.target.closest("li");
    const price = parseFloat(item.dataset.price);
    updateTotalPrice(-price);
    item.remove();
  }

  // Function to add items
  function addProduct() {
    console.log('ADD PRODUCT BUTTON CLICKED');

    const productName = productNameInput.value.trim();
    const productPrice = parseFloat(productPriceInput.value);

    if (productName === "") {
      alert("Please enter product name");
      return;
    }

    if (isNaN(productPrice) || productPrice <= 0) {
      alert("Please enter price greater than 0");
      return;
    }

    // New item list
    const listItem = document.createElement("li");
    listItem.dataset.price = productPrice;

    listItem.innerHTML = `
      ${productName} - $${productPrice.toFixed(2)}
      <button class="remove-btn">Remove</button>
    `;

    const removeButton = listItem.querySelector(".remove-btn");
    removeButton.addEventListener("click", removeItem);

    // Add to cart and update total
    cart.appendChild(listItem);
    updateTotalPrice(productPrice);

    // Clear input fields
    productNameInput.value = '';
    productPriceInput.value = '';
  }

  addProductButton.addEventListener("click", addProduct);
  
});
