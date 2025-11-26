Dynamic Shopping Cart

A simple shopping cart application that allows users to add products with names and prices, remove items, and see the total price update in real-time.
Features


Reflection

How did you dynamically create and append new elements to the DOM?

   I used document.createElement() to dynamically create new < li > elements for each product added to the cart. When the user clicks "Add Product", the addProduct() function creates a new list item, sets its innerHTML to display the product name and price, and then uses cart.appendChild(listItem) to add it to the cart's < ul >. I also used document.querySelector() to grab the remove button within each list item so I could attach an event listener to it. The key was storing the price in a data-price attribute on each < li > so I could access it later when calculating the total or removing items.

What steps did you take to ensure accurate updates to the total price?

  I created a global totalPrice variable to track the running total and an updateTotalPrice(amount) function that adds or subtracts from it. When adding a product, I pass the positive price value to increase the total. When removing an item, I pass the negative price value (using -price) to decrease it. I used toFixed(2) to make sure the price always displays with exactly two decimal places, which prevents weird JavaScript floating-point issues. The dataset.price attribute on each list item stores the price so when you remove an item, I can parseFloat() it to get the exact amount to subtract. This way, the math stays accurate no matter how many items you add or remove.

How did you handle invalid input for product name or price?

  I added validation checks at the start of the addProduct() function before creating any DOM elements. First, I used .trim() on the product name to remove any extra whitespace, then checked if it's an empty string - if so, I show an alert and return early to stop the function. For the price, I used parseFloat() to convert the input to a number, then checked two things: whether it's isNaN() (not a number) OR if it's less than or equal to zero. If either condition is true, I alert the user and return early. This prevents blank products or invalid prices from ever making it into the cart, which would mess up the total calculation or look weird in the UI.

What challenges did you face when implementing the remove functionality?

  The biggest challenge was figuring out how to get the price of the item being removed so I could subtract it from the total. At first, I tried to parse it from the text content, but that got messy. I solved it by storing the price in a data-price attribute when creating the list item, which made it super easy to retrieve with parseFloat(item.dataset.price). Another challenge was making sure the remove button actually targeted the correct list item - I used event.target.closest("li") to find the parent < li > element no matter where exactly on the button the user clicked. I also had to remember to attach the event listener to each remove button individually after creating it, otherwise clicking remove wouldn't do anything. Once I got the data attribute approach down, everything clicked into place and removing items while keeping the total accurate became straightforward.

Technologies Used

HTML5
CSS3
Vanilla JavaScript
DOM Manipulation
