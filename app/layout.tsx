import './globals.css'
import Header from './components/header' 
import Footer from './components/footer'
import Home from './components/Home'
export const metadata = {
  title: 'Panaverse By Farzaam',
  description: 'Practice website by Farzaam',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Home/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
