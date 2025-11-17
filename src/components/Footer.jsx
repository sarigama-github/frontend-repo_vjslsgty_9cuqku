import { Link } from 'react-router-dom'
import { Linkedin, Twitter } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">Forge Peptides</h3>
          <p className="text-[#d9d9d9] text-sm">Advanced research compounds with uncompromising purity.</p>
          <div className="flex gap-3 mt-4">
            <a href="#" aria-label="LinkedIn" className="p-2 rounded border border-[#7c7c7c] text-[#d9d9d9] hover:text-white hover:border-white transition">
              <Linkedin size={18} />
            </a>
            <a href="#" aria-label="Twitter" className="p-2 rounded border border-[#7c7c7c] text-[#d9d9d9] hover:text-white hover:border-white transition">
              <Twitter size={18} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">Quick Links</h4>
          <ul className="space-y-2 text-[#d9d9d9]">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/products" className="hover:text-white">Products</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">Legal</h4>
          <ul className="space-y-2 text-[#d9d9d9]">
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Disclaimer</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">Important Disclaimer</h4>
          <p className="text-[#d9d9d9] text-sm">These products are for research and development purposes only. They are not for human or veterinary consumption, diagnostic use, or as drugs.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer