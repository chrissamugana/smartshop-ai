const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    name: 'Premium Headphones',
    price: 199.99,
    description: 'High-quality wireless headphones',
    image: '/images/headphones.jpg'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 249.99,
    description: 'Advanced smartwatch',
    image: '/images/smartwatch.jpg'
  }
];

app.get('/health', (req, res) => {
  res.json({ status: 'OK', service: 'Product Service' });
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Product Service running on port ${PORT}`);
});
