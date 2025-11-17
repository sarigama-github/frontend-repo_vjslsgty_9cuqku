import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/5EwoDiC2tChvmy4K/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl py-24">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">Purity. Precision. Proven Results.</h1>
          <p className="mt-6 text-lg text-white/90">Advanced research compounds with uncompromising purity and comprehensive scientific documentation</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/products" className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium bg-[#AE9A64] text-white hover:opacity-90 transition">Browse Our Catalog</Link>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium border border-white/70 text-white hover:bg-white/10 transition">Contact Us</Link>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
    </section>
  )
}

export default Hero