import { useState, useCallback, useEffect } from "react";

export default function PokeDark({ type = "dark" }) {
  const [DarkPokemons, setPokemons] = useState([]);

  const fetchPokemons = useCallback(async () => {
    try {
      const resposta = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      const data = await resposta.json();
      const pokemons = data.pokemon.map((item) => item.pokemon);
      setPokemons(pokemons);
    } catch (error) {
      console.log(`Erro ao encontrar o pokemon ${type}`, error);
    }
  }, [type]);

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  return (
    <div>
      <h2>Pokemons do tipo {type}</h2>
      <button onClick={fetchPokemons}>Buscar Pokémons</button>

      <ul>
        {" "}
        {DarkPokemons.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
}
