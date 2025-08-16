'use client'

import { useParams } from 'next/navigation'
import { useCart } from '../../../context/CartContext'
import Image from 'next/image'

export default function ProductDetail() {
  const params = useParams()
  const { addToCart } = useCart()
  
  // Convert params.id to number and handle potential undefined/array cases
  const productIdParam = params.id
  const productId = Array.isArray(productIdParam) 
    ? parseInt(productIdParam[0], 10) 
    : productIdParam 
      ? parseInt(productIdParam, 10) 
      : 1

  // Mock product data - replace with API call
  const product = {
    id: productId,
    name: 'Product ' + productId,
    price: 199.99,
    description: 'Product description here...',
    image: '/images/headphones.jpg'
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-96 w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-green-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <button 
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}