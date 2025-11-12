const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

let totalPrice = 0;

// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}

// Function 2 add items
function addProduct() {
    const productName = productNameInput.ariaValueMax.trim();
    const productPrice = parseFloat(productPriceInput.value);

    if (productName === '') {
        alert('Please enter product name');
        return;
    }

    if (isNaN(productPrice) || productPrice <= 0) {
        alert('Please enter price greater than 0');
        return;
    } 
    
//Neeew item liist
const listItem = document.createElement('li');
listItem.dataset.price = productPrice;

listItem.innerHTML = `
${productName} - $${productPrice.toFixed(2)}
`;
<button class="remove-btn"> Remove </button> 

}