import { useState, useCallback, useEffect } from "react";

export default function PokeSteel({ type = "steel" }) {
  const [SteelPokemon, setPokemon] = useState([]);

  const BuscarPokemon = useCallback(async () => {
    try {
      const resposta = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      const data = await resposta.json();
      const pokemons = data.pokemon.map((i) => i.pokemon);
      setPokemon(pokemons);
    } catch (error) {
      console.error(`Erro ao buscar pokémons tipo ${type}`, error);
    }
  }, [type]);

  useEffect(() => {
    BuscarPokemon();
  }, [BuscarPokemon]);

  return (
    <div>
      <h2>Pokémons do tipo ${type}</h2>
      <button onClick={BuscarPokemon}>Buscar pokémons</button>
      <ul>
        {SteelPokemon.map((pokemon, index) => {
          <li key={index}>{pokemon}</li>;
        })}
      </ul>
    </div>
  );
}
