import React from 'react'

export default function App() {
  const properties = [
    {
      id: 1,
      title: 'Luksusowy Apartament z widokiem na ocean',
      location: 'Costa Adeje, Teneryfa',
      price: '€320,000',
      beds: 2,
      baths: 2,
      area: 85,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      agency: 'GILMAR Real Estate'
    },
    {
      id: 2,
      title: 'Nowoczesny Penthouse przy plaży',
      location: 'Playa de las Américas, Teneryfa',
      price: '€450,000',
      beds: 3,
      baths: 2,
      area: 110,
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
      agency: 'Tenerife Property Investments'
    },
    {
      id: 3,
      title: 'Willa z prywatnym basenem',
      location: 'Los Gigantes, Teneryfa',
      price: '€790,000',
      beds: 4,
      baths: 3,
      area: 240,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      agency: 'Canary Islands Realty'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-extrabold text-blue-600 tracking-tight">ESPANDER</span>
            <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full">Teneryfa</span>
          </div>
          <div className="flex items-center space-x-6 text-sm font-medium text-slate-600">
            <a href="#oferty" className="hover:text-blue-600 transition">Oferty</a>
            <a href="#agencje" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">Dla Agencji</a>
          </div>
        </div>
      </header>

      <section className="bg-slate-900 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Znajdź swój dom na słonecznej Teneryfie
          </h1>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Bezpośrednie oferty z hiszpańskich agencji nieruchomości przetłumaczone i dostosowane dla polskich inwestorów.
          </p>

          <div className="bg-white p-4 rounded-xl shadow-lg text-slate-800 grid grid-cols-1 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            <select className="bg-slate-100 border-0 rounded-lg px-3 py-2.5 text-sm">
              <option>Wszystkie gminy</option>
              <option>Costa Adeje</option>
              <option>Arona</option>
            </select>
            <select className="bg-slate-100 border-0 rounded-lg px-3 py-2.5 text-sm">
              <option>Wszystkie typy</option>
              <option>Apartament</option>
              <option>Willa</option>
            </select>
            <input type="number" placeholder="Maks. cena (€)" className="bg-slate-100 border-0 rounded-lg px-3 py-2.5 text-sm" />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-2.5 text-sm transition">
              Szukaj ofert
            </button>
          </div>
        </div>
      </section>

      <main id="oferty" className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Najnowsze oferty na wyspie</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((item) => (
            <div key={item.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative h-52 bg-slate-100">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <span className="absolute top-3 right-3 bg-slate-900/80 text-white text-xs px-2.5 py-1 rounded-md backdrop-blur-sm">{item.agency}</span>
              </div>
              <div className="p-5">
                <div className="text-2xl font-extrabold text-blue-600 mb-1">{item.price}</div>
                <h3 className="font-semibold text-slate-800 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm mb-4">📍 {item.location}</p>
                <div className="flex items-center space-x-4 text-xs font-medium text-slate-600 pt-3 border-t border-slate-100">
                  <span>🛏️ {item.beds} pokoje</span>
                  <span>🚿 {item.baths} łazienki</span>
                  <span>📐 {item.area} m²</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
