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
}    }
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
}    }
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
}        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-slate-800">Aktualne Oferty na Teneryfie</h2>
          <span className="text-sm text-slate-500">Liczba ofert: {properties.length}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition">
              <div className="relative h-48 bg-slate-200">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <span className="absolute top-3 right-3 bg-slate-900/80 text-white text-xs px-2.5 py-1 rounded-md backdrop-blur-sm">
                  {item.agency}
                </span>
              </div>
              <div className="p-5">
                <div className="text-2xl font-extrabold text-blue-600 mb-1">
                  €{item.price.toLocaleString()}
                </div>
                <h3 className="font-semibold text-slate-800 text-lg mb-2 line-clamp-1">{item.title}</h3>
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

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 text-center text-sm">
        <p>© 2026 Espander. Automated Real Estate Portal for Spanish Agencies.</p>
      </footer>
    </div>
  )
}    if (maxPrice) {
      query = query.lte('price', Number(maxPrice));
    }
    if (propertyType) {
      query = query.eq('property_type', propertyType);
    }

    const { data, error } = await query;
    if (!error && data) {
      setProperties(data);
    }
    setLoading(false);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    fetchProperties();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-black tracking-tight text-blue-600">ESPANDER</span>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">Teneryfa</span>
          </div>
          <nav className="text-sm font-medium text-slate-600 space-x-6 hidden md:block">
            <a href="#" className="hover:text-blue-600 transition">Oferty</a>
            <a href="#" className="hover:text-blue-600 transition">Gminy</a>
            <a href="#" className="hover:text-blue-600 transition">Dla Agencji</a>
          </nav>
        </div>
      </header>

      {/* Hero & Search Bar */}
      <section className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Znajdź swój dom na słonecznej Teneryfie
          </h1>
          <p className="text-slate-400 text-base md:text-lg">
            Bezpośrednie oferty z hiszpańskich agencji po polsku.
          </p>

          {/* Formularz Wyszukiwarki */}
          <form onSubmit={handleSearch} className="bg-white p-4 rounded-xl shadow-lg text-slate-800 grid grid-cols-1 md:grid-cols-4 gap-3 mt-6">
            <div>
              <label className="block text-xs font-semibold text-slate-500 text-left mb-1">Lokalizacja</label>
              <select 
                value={selectedLocation} 
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full p-2.5 bg-slate-100 rounded-lg text-sm border-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Wszystkie gminy</option>
                {locations.map((loc) => (
                  <option key={loc.id} value={loc.id}>{loc.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 text-left mb-1">Typ nieruchomości</label>
              <select 
                value={propertyType} 
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full p-2.5 bg-slate-100 rounded-lg text-sm border-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Wszystkie typy</option>
                <option value="apartment">Mieszkanie / Apartament</option>
                <option value="villa">Willa / Dom</option>
                <option value="penthouse">Penthouse</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 text-left mb-1">Maks. Cena (€)</label>
              <input 
                type="number" 
                placeholder="np. 300000" 
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full p-2.5 bg-slate-100 rounded-lg text-sm border-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-end">
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition">
                Szukaj ofert
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Lista Nieruchomości */}
      <main className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold mb-6">Najnowsze oferty na wyspie</h2>

        {loading ? (
          <div className="text-center py-12 text-slate-500">Ładowanie ofert z Teneryfy...</div>
        ) : properties.length === 0 ? (
          <div className="bg-white rounded-xl p-8 text-center border border-slate-200">
            <p className="text-slate-600 font-medium">Brak ofert spełniających kryteria.</p>
            <p className="text-sm text-slate-400 mt-1">Wkrótce pojawi się tu automatyczny import ofert z agencji!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((prop) => (
              <div key={prop.id} className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition">
                <div className="h-48 bg-slate-200 relative">
                  {prop.property_images && prop.property_images[0] ? (
                    <img src={prop.property_images[0].image_url} alt={prop.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="flex items-center justify-center h-full text-slate-400 text-sm">Brak zdjęcia</div>
                  )}
                  <span className="absolute top-3 left-3 bg-slate-900/80 text-white text-xs px-2.5 py-1 rounded-md backdrop-blur-sm">
                    {prop.locations?.name || 'Teneryfa'}
                  </span>
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="font-bold text-lg text-slate-900 truncate">{prop.title}</h3>
                  <p className="text-2xl font-black text-blue-600">{Number(prop.price).toLocaleString()} €</p>
                  <div className="flex items-center space-x-4 text-xs text-slate-500 pt-2 border-t border-slate-100">
                    <span>🛏️ {prop.bedrooms || 0} sypialnie</span>
                    <span>🚿 {prop.bathrooms || 0} łazienki</span>
                    <span>📐 {prop.surface_built || 0} m²</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
