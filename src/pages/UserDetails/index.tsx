import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../services/api';
import Navbar from '../../components/Navbar/Navbar';
import { MdPeople, MdEmail, MdStar, MdArrowBack, MdBook, MdSort } from 'react-icons/md';
import "./styles.css";
import RepoCard from '../../components/RepoCard';
import type { Repo } from '../../types/repo.types';



interface User {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  followers: number;
  following: number;
  email: string;
  public_repos: number;
}

const UserDetails = () => {
  const { username } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [order, setOrder] = useState<'desc' | 'asc'>('desc');

  useEffect(() => {
    async function loadData() {
      try {
        const [userRes, reposRes] = await Promise.all([
          api.get(`/users/${username}`),
          api.get(`/users/${username}/repos`)
        ]);
        setUser(userRes.data);
        setRepos(reposRes.data);
      } catch (err) {
        console.error("Erro ao buscar dados do GitHub", err);
      }
    }
    loadData();
  }, [username]);

  const sortedRepos = [...repos].sort((a, b) => {
    const starsA = a.stargazers_count ?? a.stars_count ?? 0;
    const starsB = b.stargazers_count ?? b.stars_count ?? 0;
    return order === 'desc' ? starsB - starsA : starsA - starsB;
  });

  if (!user) return (
    <>
      <Navbar />
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Carregando perfil...</p>
      </div>
    </>
  );

  return (
    <div className="page-wrapper">
      <Navbar />

      <div className="profile-container">
        <div className="back-action">
          <Link to="/" className="back-link">
            <MdArrowBack size={24} />
            <span>Voltar para busca</span>
          </Link>
        </div>

        <div className="content_main">
          <div className="header">
            <img src={user.avatar_url} alt="Avatar" className='avatar-logo' />
          </div>
          <div className="info">
            <div className="info-header">
              <h2>{user.name || user.login}</h2>
              <span className="username">@{user.login}</span>
            </div>

            {user.bio && <p className="bio-text">{user.bio}</p>}

            <div className="stats-row">
              <div className="stat-badge">
                <MdPeople size={20} color="#760698" />
                <span><strong>{user.followers}</strong> Seguidores</span>
              </div>
              <div className="stat-badge">
                <MdPeople size={20} color="#760698" />
                <span><strong>{user.following}</strong> Seguindo</span>
              </div>
              <div className="stat-badge">
                <MdBook size={20} color="#760698" />
                <span><strong>{user.public_repos}</strong> Repositórios</span>
              </div>
            </div>

            {user.email && (
              <div className="contact-info">
                <MdEmail size={18} />
                <span>{user.email}</span>
              </div>
            )}
          </div>
        </div>

        <div className="repos-section">
          <div className="repos-header">
            <h3>Repositórios Públicos</h3>
            <button
              className="sort-btn"
              onClick={() => setOrder(order === 'desc' ? 'asc' : 'desc')}
            >
              <MdSort size={20} />
              Ordenar ({order === 'desc' ? 'Mais Estrelas' : 'Menos Estrelas'})
            </button>
          </div>

          <div className="repos-grid">
            {sortedRepos.map(repo => (
              <RepoCard key={repo.id} repo={repo} username={username} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;