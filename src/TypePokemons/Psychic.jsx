import { useState, useCallback, useEffect } from "react";

export default function PokePsychic({ type = "psychic" }) {
  const [PsychicPokemon, setPokemon] = useState([]);

  const BuscarPokemons = useCallback(async () => {
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
    BuscarPokemons();
  }, [BuscarPokemons]);

  return (
    <div>
      <h2>Pokémons do tipo ${type}</h2>
      <button onClick={BuscarPokemons}>Buscar Pokémon</button>
      <ul>
        {PsychicPokemon.map((pokemon, index) => {
          <li key={index}>{pokemon}</li>;
        })}
      </ul>
    </div>
  );
}
