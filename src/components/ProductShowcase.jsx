import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function ProductShowcase() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(`${baseUrl}/api/products?purity_min=98`)
      .then(res => res.json())
      .then(setProducts)
      .catch(() => setProducts([]))
  }, [])

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-bold text-[#1a1a1a]">Featured Peptides</h2>
          <Link to="/products" className="text-[#7c7c7c] border border-[#7c7c7c] rounded px-4 py-2 text-sm hover:bg-[#f5f5f5] transition">View All</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0,4).map(p => (
            <div key={p.id} className="border border-[#d9d9d9] rounded-lg p-5">
              <div className="h-28 bg-[#f5f5f5] rounded mb-4 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-[#d9d9d9]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1a1a1a]">{p.name}</h3>
              <p className="text-sm text-[#7c7c7c] truncate" title={p.sequence}>{p.sequence}</p>
              <p className="text-sm text-[#7c7c7c] mt-1">Purity: &gt;{p.purity}%</p>
              <div className="mt-4">
                <Link to={`/products`} className="text-[#AE9A64] text-sm">Learn More →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase