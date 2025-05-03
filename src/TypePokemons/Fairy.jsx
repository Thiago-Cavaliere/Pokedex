import { useState, useCallback, useEffect } from "react";

export default function PokeFairy({ type = "fairy" }) {
  const [FairyPokemons, setPokemons] = useState([]);

  const fetchPokemons = useCallback(async () => {
    try {
      const resposta = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      const data = await resposta.json();
      const pokemons = data.pokemon.map((item) => item.pokemon);
      setPokemons(pokemons);
    } catch (error) {
      console.error(`Erro ao buscar pokémon tipo ${type}`, error);
    }
  }, [type]);

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  return (
    <div>
      <h2>Pokémons do tipo ${type}</h2>
      <button onClick={fetchPokemons}>Buscar Pokémons</button>
      <ul>
        {FairyPokemons.map((pokemon, index) => {
          <li key={index}>{pokemon}</li>;
        })}
      </ul>
    </div>
  );
}
