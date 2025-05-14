// const { console } = require("inspector");

const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {   // I have used < instead of <=, to prevent the undefined on the last item.
    total += cartItems[i].price;
  }
  return total;
}

function applyDiscount(total, discountRate) {
  if (typeof discountRate !== 'number' || discountRate <= 0 || discountRate >= 1) {
    throw new Error("Discount rate must be a number between 0 and 1.");
  }
  return total - total * discountRate;
}

function generateReceipt(cartItems, total) {
  if (typeof total !== 'number' || isNaN(total)) {
    throw new Error("Invalid total provided for receipt.");
  }

  let receipt = "Items:\n";
  cartItems.forEach(item => {
    receipt += `${item.name}: $${item.price}\n`;
  });
  receipt += `Total: $${total.toFixed(2)}`;
  return receipt;
}

// Debugging entry point
console.log("Starting shopping cart calculation...");

// Here, I used try/catch to try the risky code and catch the errors to display them with console.error()

try {
  const total = calculateTotal(cart);
  const discountedTotal = applyDiscount(total, 0.2); // 20% discount
  const receipt = generateReceipt(cart, discountedTotal);

  // Assuming browser env:
  document.getElementById("total").textContent = `Total: $${discountedTotal}`;
  document.getElementById("receipt").textContent = receipt;
} catch (err) {
  console.error("Error occurred:", err.message);
}