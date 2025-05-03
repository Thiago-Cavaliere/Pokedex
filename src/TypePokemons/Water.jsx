import { useState, useCallback, useEffect } from "react";

export default function PokeWater({ type = "water" }) {
  const [WaterPokemon, setPokemon] = useState([]);
  const BuscarPokemons = useCallback(async () => {
    try {
      const resposta = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      const data = await resposta.json();
      const pokemons = data.pokemon.map((i) => i.pokemon);
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
      <button onClick={BuscarPokemons}>Buscar Pokémons</button>
      <ul>
        {WaterPokemon.map((pokemon, index) => {
          <li key={index}>{pokemon}</li>;
        })}
      </ul>
    </div>
  );
}
