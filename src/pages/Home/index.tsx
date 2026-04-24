import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import Navbar from '../../components/Navbar/Navbar';
import "./styles.css";

const Home = () => {
  const [username, setUsername] = useState('');

  const handleSearch = () => {
    if (username.trim()) {
      window.location.href = `/user/${username.trim()}`;
    }
  }

  return (
    <div className="page-wrapper">
      <Navbar />

      <div className="blob blob-purple"></div>
      <div className="blob blob-blue"></div>
      <div className="blob blob-pink"></div>

      <div className="home-hero">
        <div className="hero-content">
          <h1>Explorador do GitHub</h1>
          <p>Busque desenvolvedores, analise métricas em tempo real e descubra milhares de repositórios no maior ecossistema de código livre do mundo.</p>

          <div className='searchbox'>
            <input
              type="text"
              placeholder="Digite o nome do usuário..."
              className='input-search'
              value={username}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              onChange={(e) => setUsername(e.target.value)}
              autoFocus
            />
            <button className='search-button' onClick={handleSearch} title="Buscar Usuário">
              <MdSearch size={28} color="#fff" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;