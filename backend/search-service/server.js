const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Mock product data for search
const products = [
  {
    id: 1,
    name: 'Premium Headphones',
    price: 199.99,
    description: 'High-quality wireless headphones',
    category: 'electronics'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 249.99,
    description: 'Advanced smartwatch',
    category: 'electronics'
  },
  {
    id: 3,
    name: 'Running Shoes',
    price: 89.99,
    description: 'Comfortable running shoes',
    category: 'clothing'
  }
];

app.get('/health', (req, res) => {
  res.json({ status: 'OK', service: 'Search Service' });
});

app.get('/search', (req, res) => {
  const query = req.query.q?.toLowerCase() || '';
  const category = req.query.category?.toLowerCase();
  
  let results = products;
  
  if (query) {
    results = results.filter(product => 
      product.name.toLowerCase().includes(query) || 
      product.description.toLowerCase().includes(query)
    );
  }
  
  if (category) {
    results = results.filter(product => 
      product.category.toLowerCase() === category
    );
  }
  
  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Search Service running on port ${PORT}`);
});
