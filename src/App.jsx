import React, { useState, useEffect } from 'react';
import './App.css'; // CSS dosyanızın adını ve uzantısını ayarlayın
import Navbar from './components/Navbar'; // Navbar bileşenini ekleyin

const App = () => {
  const [filmListesi, setFilmListesi] = useState([]);
  const [aramaTerimi, setAramaTerimi] = useState('');

  // JSON dosyasındaki film verilerini al
  useEffect(() => {
    // Film verilerinin olduğu JSON dosyasının yolu
    const jsonDosyaYolu = '/src/data/film.json';

    // JSON dosyasını oku
    fetch(jsonDosyaYolu)
      .then((response) => response.json())
      .then((data) => setFilmListesi(data.filmler))
      .catch((error) => console.error('Film verileri okunurken bir hata oluştu:', error));
  }, []);

  // Tüm film özelliklerini içeren bir dizi oluştur
  const filmOzellikleri = ['isimTurkce', 'slogan', 'kategori', 'yonetmen'];

  // Arama terimine göre filmleri filtrele
  const filtrelenmisFilmler = filmListesi.filter((film) =>
    filmOzellikleri.some(
      (ozellik) =>
        film[ozellik] && film[ozellik].toLowerCase().includes(aramaTerimi.toLowerCase())
    )
  );

  return (
    <div className="app-container">
      {/* Navbar */}
      <Navbar />

      {/* Ana içerik */}
      <div className="main-content">
        {/* Film arama input alanı */}
        <input
          type="text"
          placeholder="Film ara..."
          value={aramaTerimi}
          onChange={(e) => setAramaTerimi(e.target.value)}
          className="form-control" // Bootstrap benzeri input stili
        />

        {/* Film kartları */}
        <div className="film-kartlari">
          {filtrelenmisFilmler.map((film) => (
            <div key={film.isim} className="film-karti">
              <img src={film.imgSrc} className='poster' />
              <h2>{film.isimTurkce}</h2>
              <h3>{film.slogan}</h3>
              <p>Kategori: {film.kategori}</p>
              <p>Yönetmen: {film.yonetmen}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
