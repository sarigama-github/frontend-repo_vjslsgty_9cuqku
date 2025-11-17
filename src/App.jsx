import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import ProductShowcase from './components/ProductShowcase'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-[#7c7c7c]">
      <Header />
      <Hero />
      <Features />
      <ProductShowcase />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App