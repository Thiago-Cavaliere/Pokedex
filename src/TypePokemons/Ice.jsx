import { useState, useCallback, useEffect } from "react";

export default function PokeIce({ type = "ice" }) {
  const [IcePokemon, setPokemon] = useState([]);

  const BuscarPokemon = useCallback(async () => {
    try {
      const resposta = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      const data = await resposta.json();
      const pokemon = data.pokemon.map((item) => item.pokemon);
      setPokemon(pokemon);
    } catch (error) {
      console.error(`Erro ao buscar pokémon tipo ${type}`, error);
    }
  }, [type]);

  useEffect(() => {
    BuscarPokemon();
  }, [BuscarPokemon]);

  return (
    <div className="normal__container">
      <h2>Pokémon do tipo ${type}</h2>
      <button onClick={IcePokemon}>Buscar pokémon</button>
      <ul>
        {BuscarPokemon.map((pokemon, index) => {
          <li key={index}>{pokemon}</li>;
        })}
      </ul>
    </div>
  );
}
