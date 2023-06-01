import Navbar from '@/components/Navbar'
import './globals.css'

export const metadata = {
  title: 'JAGO',
  description: 'Join the rooster revolution with $Jago',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='hero-section'>
        <Navbar />

        <main>
        {children}
        </main>


      </body>
    </html>
  )
}
