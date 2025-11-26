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

  // function to update the total price
  function updateTotalPrice(amount) {
    totalPrice += amount;
    totalPriceSpan.textContent = totalPrice.toFixed(2);
  }

  // the function to remove items
  function removeItem(event) {
    const item = event.target.closest("li");
    const price = parseFloat(item.dataset.price);
    updateTotalPrice(-price);
    item.remove();
  }

  // the function to add items
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

    // new item list
    const listItem = document.createElement("li");
    listItem.dataset.price = productPrice;

    listItem.innerHTML = `
      ${productName} - $${productPrice.toFixed(2)}
      <button class="remove-btn">Remove</button>
    `;

    const removeButton = listItem.querySelector(".remove-btn");
    removeButton.addEventListener("click", removeItem);

    // add to cart and update total
    cart.appendChild(listItem);33
    updateTotalPrice(productPrice);

    //leaves input clear to type in
    productNameInput.value = '';
    productPriceInput.value = '';
  }

  addProductButton.addEventListener("click", addProduct);
  
});
