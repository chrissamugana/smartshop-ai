const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

// In-memory storage for carts (in production, use a database)
let carts = {};

app.get('/health', (req, res) => {
  res.json({ status: 'OK', service: 'Cart Service' });
});

// Create a new cart
app.post('/cart', (req, res) => {
  const cartId = uuidv4();
  carts[cartId] = { items: [], total: 0 };
  res.json({ cartId });
});

// Get cart contents
app.get('/cart/:cartId', (req, res) => {
  const cart = carts[req.params.cartId];
  if (!cart) {
    return res.status(404).json({ error: 'Cart not found' });
  }
  res.json(cart);
});

// Add item to cart
app.post('/cart/:cartId/item', (req, res) => {
  const { productId, name, price, quantity = 1 } = req.body;
  const cart = carts[req.params.cartId];
  
  if (!cart) {
    return res.status(404).json({ error: 'Cart not found' });
  }
  
  const existingItem = cart.items.find(item => item.productId === productId);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.items.push({ productId, name, price, quantity });
  }
  
  cart.total = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  res.json(cart);
});

app.listen(PORT, () => {
  console.log(`Cart Service running on port ${PORT}`);
});
