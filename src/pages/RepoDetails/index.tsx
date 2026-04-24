import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../services/api';
import { MdArrowBack, MdCode, MdLink, MdPeople, MdCalendarToday, MdStar } from 'react-icons/md';
import "./styles.css";

interface Repo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  created_at: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const RepoDetails = () => {
  const { username, reponame } = useParams();
  const [repo, setRepo] = useState<Repo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.get(`/repos/${window.location.pathname.split("/")[2]}/${window.location.pathname.split("/")[3]}`);
        setRepo(response.data);
      } catch (err) {
        console.error("Erro ao buscar dados do repositório", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [username, reponame]);

  if (loading) return (
    <>
      <div className="page-wrapper">
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Carregando repositório...</p>
        </div>
      </div>
    </>
  );

  if (!repo) return (
    <>
      <div className="page-wrapper">
        <div className="profile-container">
          <div className="back-action">
            <Link to={`/user/${username}`} className="back-link">
              <MdArrowBack size={24} />
              <span>Voltar para perfil</span>
            </Link>
          </div>
          <div className="error-message">
            <p>Repositório não encontrado</p>
          </div>
        </div>
      </div>
    </>
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="page-wrapper">

      <div className="profile-container">
        <div className="back-action">
          <Link to={`/user/${username}`} className="back-link">
            <MdArrowBack size={24} />
            <span>Voltar para perfil</span>
          </Link>
        </div>

        <div className="content_main">
          <div className="header">
            <img src={repo.owner.avatar_url} alt="Avatar" className='avatar-logo' />
          </div>
          <div className="info">
            <div className="info-header">
              <h2>{repo.name}</h2>
              <span className="username">@{repo.owner.login}</span>
            </div>

            {repo.description && <p className="bio-text">{repo.description}</p>}

            <div className="stats-row">
              <div className="stat-badge">
                <MdStar size={20} color="#FFD700" />
                <span><strong>{repo.stargazers_count}</strong> Estrelas</span>
              </div>
              <div className="stat-badge">
                <MdPeople size={20} color="#760698" />
                <span><strong>{repo.forks_count}</strong> Forks</span>
              </div>
              {repo.language && (
                <div className="stat-badge">
                  <MdCode size={20} color="#760698" />
                  <span>{repo.language}</span>
                </div>
              )}
              <div className="stat-badge">
                <MdCalendarToday size={20} color="#760698" />
                <span>Criado em {formatDate(repo.created_at)}</span>
              </div>
            </div>

            <div className="contact-info">
              <MdLink size={18} />
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-link">
                Visitar repositório
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoDetails;
