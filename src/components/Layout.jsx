import Header from './Header'
import Footer from './Footer'

export default function Layout({children}){
  return (
    <div className="bg-white text-[#7c7c7c] min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
