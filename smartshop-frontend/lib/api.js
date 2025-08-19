// Product Service
export const fetchProducts = async () => {
  const res = await fetch('http://product-service:3000/products')
  return await res.json()
}

// Cart Service
export const syncCart = async (cartItems) => {
  const res = await fetch('http://cart-service:3000/cart', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items: cartItems })
  })
  return await res.json()
}

// Mock for development
export const mockFetchProducts = () => {
  return Promise.resolve([
    { id: 1, name: 'Headphones', price: 199.99 },
    { id: 2, name: 'Smartwatch', price: 249.99 }
  ])
}