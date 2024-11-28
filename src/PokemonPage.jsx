import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axiosClient from './axiosClient';

function PokemonPage() {
  const { id } = useParams(); // Получаем ID из маршрута
  const [pokemon, setPokemon] = useState(null); // Хранение данных покемона
  const [loading, setLoading] = useState(true); // Состояние загрузки
  const [error, setError] = useState(null); // Состояние ошибки

  useEffect(() => {
    // Запрос информации о конкретном покемоне
    axiosClient
      .get(`pokemon/${id}`)
      .then((response) => {
        setPokemon(response.data); // Сохраняем данные о покемоне
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!pokemon) return null;

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Base experience: {pokemon.base_experience}</p>
      <Link to="/">Back to List</Link>
    </div>
  );
}

export default PokemonPage;
