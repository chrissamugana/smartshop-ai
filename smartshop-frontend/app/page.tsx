'use client'

import { useCart } from '../context/CartContext'
import ProductCard from '../components/products/ProductCard'

const featuredProducts = [
  {
    id: 1,
    name: 'Premium Headphones',
    price: 199.99,
    image: '/images/headphones.jpg'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 249.99,
    image: '/images/smartwatch.jpg'
  }
]

export default function Home() {
  const { addToCart } = useCart()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">SmartShop</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredProducts.map(product => (
          <ProductCard 
            key={product.id}
            product={product}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </div>
  )
}