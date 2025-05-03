import { useState, useCallback, useEffect } from "react";

export default function PokeDragon({ type = "Dragon" }) {
  const [DragonPokemons, setPokemons] = useState([]);

  const fetchPokemons = useCallback(async () => {
    try {
      const resposta = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      const data = await resposta.json();
      const pokemons = data.pokemon.map((item) => item.pokemon);
      setPokemons(pokemons);
    } catch (error) {
      console.error(`Erro ao encontrar o pokémon`, error);
    }
  }, [type]);

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  return (
    <div className="normal__container">
      <h2>Pokémon do tipo {type}</h2>
      <button onClick={fetchPokemons}>Buscar Pokémons</button>

      <ul>
        {DragonPokemons.map((pokemon, index) => {
          <li key={index}>{pokemon}</li>;
        })}
      </ul>
    </div>
  );
}
