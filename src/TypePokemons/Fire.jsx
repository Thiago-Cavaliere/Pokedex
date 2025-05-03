import { useState, useCallback, useEffect } from "react";

export default function PokeFire({ type = "fire" }) {
  const [FirePokemons, setPokemons] = useState([]);

  const BuscarPokemons = useCallback(async () => {
    try {
      const resposta = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      const data = await resposta.json();
      const pokemon = data.pokemon((item) => item.pokemon);
      setPokemons(pokemon);
    } catch (error) {
      console.error(`Erro ao encontrar o pokemon ${type}`, error);
    }
  }, [type]);

  useEffect(() => {
    BuscarPokemons();
  }, [BuscarPokemons]);

  return (
    <div className="normal__container">
      <h2>Pokémon do tipo ${type}</h2>
      <button onClick={BuscarPokemons}>Buscar Pokémons</button>
      <ul>
        {FirePokemons.map((pokemon, index) => {
          <li key={index}>{pokemon}</li>;
        })}
      </ul>
    </div>
  );
}
