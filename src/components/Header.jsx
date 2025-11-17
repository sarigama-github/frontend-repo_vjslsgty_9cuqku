import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-[#d9d9d9]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="text-2xl font-bold tracking-tight text-[#1a1a1a]">Forge Peptides</div>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <NavLink to="/products" className={({isActive})=>`transition-colors ${isActive? 'text-[#1a1a1a]':'text-[#7c7c7c] hover:text-[#1a1a1a]'}`}>Products</NavLink>
          <NavLink to="/about" className={({isActive})=>`transition-colors ${isActive? 'text-[#1a1a1a]':'text-[#7c7c7c] hover:text-[#1a1a1a]'}`}>About</NavLink>
          <NavLink to="/contact" className={({isActive})=>`transition-colors ${isActive? 'text-[#1a1a1a]':'text-[#7c7c7c] hover:text-[#1a1a1a]'}`}>Contact</NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/products" className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[#AE9A64] text-white hover:opacity-90 transition">
            Browse Our Catalog
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header