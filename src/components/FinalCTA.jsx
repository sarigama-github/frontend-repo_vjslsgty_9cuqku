import { Link } from 'react-router-dom'

function FinalCTA() {
  return (
    <section className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold">Ready to Advance Your Research? Get a Quote Today.</h3>
          <p className="text-[#d9d9d9] mt-2">Speak with our team about custom synthesis, documentation, and lead times.</p>
        </div>
        <div className="flex gap-3">
          <Link to="/contact" className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium bg-[#AE9A64] text-white hover:opacity-90 transition">Request Quote</Link>
          <Link to="/products" className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium border border-[#d9d9d9] text-white hover:bg-white/10 transition">Browse Catalog</Link>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA