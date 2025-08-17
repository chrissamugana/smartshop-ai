'use client'

import { useCart } from '../../context/CartContext'

interface Product {
  id: number
  name: string
  price: number
  description: string
  image: string
}

interface AddToCartButtonProps {
  product: Product
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart()

  return (
    <button
      onClick={() => addToCart(product)}
      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
    >
      Add to Cart
    </button>
  )
}