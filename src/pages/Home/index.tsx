import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import "./styles.css";
import { MdSearch } from 'react-icons/md';
import { useGithub } from '../../hooks/github';

const Home = () => {
  const { user, repos, loading, error, searchUser } = useGithub();
  const [username, setUsername] = useState('');

  const handleSearch = async () => {
    window.location.href = `/user/${username}`;
  }

  return (
    <div className="home-container">
      <div className='searchbox'>
        <input type="text" placeholder="Digite o usuário" className='input-search' value={username} onKeyDown={(e) => e.key === 'Enter' && handleSearch()} onChange={(e) => setUsername(e.target.value)} />
        <button className='search-button' onClick={handleSearch}><MdSearch size={28} color="#fff" /></button>
      </div>

      <div className='content'>

      </div>
    </div>
  );
};

export default Home;