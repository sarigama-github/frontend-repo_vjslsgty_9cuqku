function About() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-[#1a1a1a] mb-6">About Us</h1>
        <p className="text-[#7c7c7c] max-w-3xl">Our mission is simple: To accelerate scientific discovery by providing researchers with the highest quality peptide building blocks.</p>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[#1a1a1a]">Our Process</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-4">
            {['Sequence Design & Analysis','Solid-Phase Synthesis','HPLC Purification','Quality Control (MS, HPLC)','Lyophilization & Shipping'].map((step, idx)=> (
              <div key={step} className="border border-[#d9d9d9] rounded p-4">
                <div className="text-sm text-[#7c7c7c]">Step {idx+1}</div>
                <div className="mt-2 font-semibold text-[#1a1a1a]">{step}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Quality Control</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-[#d9d9d9] rounded p-4">
              <div className="font-semibold text-[#1a1a1a]">HPLC</div>
              <p className="text-sm text-[#7c7c7c]">Chromatographic profiles verifying purity and identity.</p>
            </div>
            <div className="border border-[#d9d9d9] rounded p-4">
              <div className="font-semibold text-[#1a1a1a]">Mass Spectrometry</div>
              <p className="text-sm text-[#7c7c7c]">High-resolution spectra confirming molecular weight.</p>
            </div>
            <div className="border border-[#d9d9d9] rounded p-4">
              <div className="font-semibold text-[#1a1a1a]">COA</div>
              <p className="text-sm text-[#7c7c7c]">Certificate of Analysis provided with each order.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About