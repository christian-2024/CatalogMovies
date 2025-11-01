import React, { useEffect, useState } from 'react';
import { fetchAllMovies } from '../services/api';
import { ApiData } from '../types/api';

const Home = () => {
  const [movies, setMovies] = useState<ApiData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchAllMovies();
        setMovies(data);
      } catch (err) {
        setError('Erro ao carregar os filmes');
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Lista de Filmes</h1>
      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <h2>{movie.title}</h2>
            {/* Adicione mais detalhes do filme aqui */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;