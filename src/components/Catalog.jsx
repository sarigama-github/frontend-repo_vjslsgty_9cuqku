import { useEffect, useMemo, useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Catalog() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [filters, setFilters] = useState({ category: '', length: '', purity: '' })

  useEffect(() => {
    fetch(`${baseUrl}/api/products`)
      .then(r => r.json()).then(setProducts).catch(()=>setProducts([]))
    fetch(`${baseUrl}/api/categories`)
      .then(r => r.json()).then(setCategories).catch(()=>setCategories([]))
  }, [])

  const filtered = useMemo(() => {
    return products.filter(p => {
      const matchCat = !filters.category || p.category === filters.category
      const matchLen = !filters.length || (filters.length === 'short' ? p.length <= 8 : filters.length === 'medium' ? (p.length>8 && p.length<=20) : p.length>20)
      const matchPur = !filters.purity || p.purity >= Number(filters.purity)
      return matchCat && matchLen && matchPur
    })
  }, [products, filters])

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-[#1a1a1a] mb-6">Catalog</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="md:col-span-1 border border-[#d9d9d9] rounded p-4">
            <h3 className="font-semibold text-[#1a1a1a] mb-3">Filters</h3>
            <div className="space-y-4 text-sm">
              <div>
                <label className="block text-[#7c7c7c] mb-1">Category</label>
                <select className="w-full border border-[#d9d9d9] rounded p-2 text-[#1a1a1a]" value={filters.category} onChange={e=>setFilters(f=>({...f, category: e.target.value}))}>
                  <option value="">All</option>
                  {categories.map(c=> (<option key={c} value={c}>{c}</option>))}
                </select>
              </div>
              <div>
                <label className="block text-[#7c7c7c] mb-1">Length</label>
                <select className="w-full border border-[#d9d9d9] rounded p-2 text-[#1a1a1a]" value={filters.length} onChange={e=>setFilters(f=>({...f, length: e.target.value}))}>
                  <option value="">Any</option>
                  <option value="short">≤ 8</option>
                  <option value="medium">9 - 20</option>
                  <option value="long">> 20</option>
                </select>
              </div>
              <div>
                <label className="block text-[#7c7c7c] mb-1">Purity</label>
                <select className="w-full border border-[#d9d9d9] rounded p-2 text-[#1a1a1a]" value={filters.purity} onChange={e=>setFilters(f=>({...f, purity: e.target.value}))}>
                  <option value="">Any</option>
                  <option value="98">≥ 98%</option>
                  <option value="99">≥ 99%</option>
                </select>
              </div>
            </div>
          </div>
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(p => (
              <div key={p.id} className="border border-[#d9d9d9] rounded-lg p-5 flex flex-col">
                <div className="h-28 bg-[#f5f5f5] rounded mb-4 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#d9d9d9]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1a1a1a]">{p.name}</h3>
                <p className="text-sm text-[#7c7c7c] truncate" title={p.sequence}>{p.sequence}</p>
                <p className="text-sm text-[#7c7c7c] mt-1">Purity: &gt;{p.purity}%</p>
                <p className="text-sm text-[#7c7c7c] mt-1">{p.description}</p>
                <div className="mt-4 flex gap-2">
                  <button onClick={()=> window.location.href = `/contact?subject=Request%20Quote%20-%20${encodeURIComponent(p.name)}&product_id=${p.id}` } className="px-4 py-2 rounded text-white bg-[#AE9A64] text-sm">Request Quote</button>
                  <a href={p.datasheet_url || '#'} target="_blank" className="px-4 py-2 rounded text-sm border border-[#7c7c7c] text-[#7c7c7c]">View Datasheet</a>
                </div>
              </div>
            ))}
            {filtered.length===0 && (
              <div className="col-span-full text-[#7c7c7c]">No products match the selected filters.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Catalog