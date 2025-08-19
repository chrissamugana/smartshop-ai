import './globals.css'
import { CartProvider } from '../context/CartContext'

export const metadata = {
  title: 'SmartShop MVP',
  description: 'E-commerce platform with microservices',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}