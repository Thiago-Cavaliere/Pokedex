import { useEffect, useState, useCallback } from "react";

export default function PokeNormal({ type = "normal" }) {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = useCallback(async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      const data = await response.json();
      const pokemons = data.pokemon.map((item) => item.pokemon);
      setPokemons(pokemons);
    } catch (error) {
      console.error(`Erro ao buscar Pokémon tipo ${type}:`, error);
    }
  }, [type]);

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  return (
    <div className="normal__container">
      <h2>Pokémons do tipo {type}</h2>
      <button onClick={fetchPokemons}>Buscar Pokémons</button>

      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}
