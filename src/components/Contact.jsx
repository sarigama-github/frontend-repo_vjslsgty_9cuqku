import { useEffect, useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Contact() {
  const url = new URL(window.location.href)
  const presetSubject = url.searchParams.get('subject') || ''
  const productId = url.searchParams.get('product_id') || ''

  const [form, setForm] = useState({ name: '', email: '', organization: '', subject: presetSubject, message: '', type: productId? 'quote':'contact', product_id: productId })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const res = await fetch(`${baseUrl}/api/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (data.status === 'ok') {
        setStatus('Thank you. We will be in touch shortly.')
        setForm({ name: '', email: '', organization: '', subject: '', message: '', type: 'contact', product_id: '' })
      } else {
        setStatus('There was an issue. Please try again later.')
      }
    } catch {
      setStatus('There was an issue. Please try again later.')
    }
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold text-[#1a1a1a] mb-6">Contact</h1>
          <form onSubmit={submit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input required placeholder="Name" className="border border-[#d9d9d9] rounded p-3 text-[#1a1a1a]" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
              <input required type="email" placeholder="Email" className="border border-[#d9d9d9] rounded p-3 text-[#1a1a1a]" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
            </div>
            <input placeholder="Organization" className="border border-[#d9d9d9] rounded p-3 text-[#1a1a1a] w-full" value={form.organization} onChange={e=>setForm({...form, organization:e.target.value})} />
            <input placeholder="Subject" className="border border-[#d9d9d9] rounded p-3 text-[#1a1a1a] w-full" value={form.subject} onChange={e=>setForm({...form, subject:e.target.value})} />
            <textarea placeholder="Message" className="border border-[#d9d9d9] rounded p-3 text-[#1a1a1a] w-full h-40" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} />
            <div className="flex items-center gap-3">
              <button className="px-6 py-3 rounded bg-[#AE9A64] text-white">Submit</button>
              {status && <div className="text-sm text-[#7c7c7c]">{status}</div>}
            </div>
          </form>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-4">FAQ</h2>
            <div className="space-y-4">
              <div className="border border-[#d9d9d9] rounded p-4">
                <div className="font-semibold text-[#1a1a1a]">What is your minimum order quantity?</div>
                <p className="text-sm text-[#7c7c7c]">Minimums vary by sequence and modifications. Contact us for a quote.</p>
              </div>
              <div className="border border-[#d9d9d9] rounded p-4">
                <div className="font-semibold text-[#1a1a1a]">Do you offer custom synthesis services?</div>
                <p className="text-sm text-[#7c7c7c]">Yes, from small-scale screening to gram-scale production with documentation.</p>
              </div>
              <div className="border border-[#d9d9d9] rounded p-4">
                <div className="font-semibold text-[#1a1a1a]">What documentation do you provide with orders?</div>
                <p className="text-sm text-[#7c7c7c]">COA, HPLC chromatograms, and MS spectra are available for each batch.</p>
              </div>
              <div className="border border-[#d9d9d9] rounded p-4">
                <div className="font-semibold text-[#1a1a1a]">What are your shipping policies and costs?</div>
                <p className="text-sm text-[#7c7c7c]">Worldwide shipping with temperature control options. Rates depend on destination and weight.</p>
              </div>
            </div>
          </section>
        </div>
        <aside className="md:col-span-1">
          <div className="border border-[#d9d9d9] rounded p-4">
            <h3 className="font-semibold text-[#1a1a1a] mb-2">Company Information</h3>
            <p className="text-sm text-[#7c7c7c]"><span className="font-medium text-[#1a1a1a]">Email:</span> info@nexuspeptides.com</p>
            <p className="text-sm text-[#7c7c7c] mt-1"><span className="font-medium text-[#1a1a1a]">Phone:</span> (555) 123-4567</p>
            <p className="text-sm text-[#7c7c7c] mt-1"><span className="font-medium text-[#1a1a1a]">Address:</span> 123 Research Park, Suite 100, Science City, USA</p>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Contact