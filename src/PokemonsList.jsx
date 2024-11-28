import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from './axiosClient';

function PokemonsList() {
  const [pokemons, setPokemons] = useState([]); // Хранение списка покемонов
  const [loading, setLoading] = useState(true); // Состояние загрузки
  const [error, setError] = useState(null); // Состояние ошибки

  useEffect(() => {
    // Запрос списка покемонов
    axiosClient
      .get('pokemon?limit=20') // Получаем первых 20 покемонов
      .then((response) => {
        setPokemons(response.data.results); // Сохраняем список покемонов
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>List of Pokemons</h1>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            <Link to={`/pokemon/${index + 1}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonsList;
