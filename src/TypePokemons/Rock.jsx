import { useState, useCallback, useEffect } from "react";

export default function PokeRock({ type = "rock" }) {
  const [RockPokemon, setPokemon] = useState([]);

  const BuscarPokemon = useCallback(async () => {
    try {
      const resposta = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      const data = await resposta.json();
      const pokemons = data.pokemon.map((item) => item.pokemon);
      setPokemon(pokemons);
    } catch (error) {
      console.error(`Erro ao buscar pokémon tipo ${type}`, error);
    }
  }, [type]);

  useEffect(() => {
    BuscarPokemon();
  }, [BuscarPokemon]);

  return (
    <div>
      <h2>Pokémons do tipo ${type}</h2>
      <button onClick={BuscarPokemon}>Buscar Pokémons</button>
      <ul>
        {RockPokemon.map((pokemon, index) => {
          <li key={index}>{pokemon}</li>;
        })}
      </ul>
    </div>
  );
}
