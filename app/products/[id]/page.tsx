import Image from 'next/image'
import AddToCartButton from '../AddToCartButton'

// Generate static params for the products we want to pre-build
export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    // Add more product IDs as needed
  ]
}

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function ProductDetail({ params }: PageProps) {
  // Await params (Next.js 15 always provides Promise)
  const resolvedParams = await params
  
  if (!resolvedParams?.id) {
    return <div className="container mx-auto px-4 py-8">Product not found</div>
  }

  const productIdParam = resolvedParams.id
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
        <Image 
          src={product.image} 
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-96 object-cover rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-green-600 mb-4">${product.price}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  )
}