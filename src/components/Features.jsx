import { FlaskConical, Microscope, ScrollText, Beaker } from 'lucide-react'

const items = [
  { icon: FlaskConical, title: 'Mass Spectrometry Analysis', desc: 'Rigorous MS data provided with every batch.' },
  { icon: Microscope, title: 'HPLC Purification', desc: 'High-performance liquid chromatography purification.' },
  { icon: Beaker, title: 'Custom Synthesis', desc: 'Tailored sequences, modifications, and scales on request.' },
  { icon: ScrollText, title: 'Comprehensive Documentation', desc: 'COA, HPLC, and MS reports available for review.' },
]

function Features() {
  return (
    <section className="bg-[#f9f9f9] border-t border-b border-[#d9d9d9]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {items.map(({icon:Icon, title, desc}) => (
            <div key={title} className="bg-white border border-[#d9d9d9] rounded-lg p-6">
              <Icon className="text-[#1a1a1a]" />
              <h3 className="mt-4 text-lg font-semibold text-[#1a1a1a]">{title}</h3>
              <p className="mt-1 text-sm text-[#7c7c7c]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features