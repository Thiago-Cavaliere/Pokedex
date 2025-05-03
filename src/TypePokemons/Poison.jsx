import { useState, useCallback, useEffect } from "react";

export default function PokePoison({ type = "poison" }) {
  const [PoisonPokemon, setPokemon] = useState([]);

  const BuscarPokemon = useCallback(async () => {
    try {
      const resposta = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      const data = resposta.json();
      const pokemon = data.pokemom.map((item) => item.pokemon);
      setPokemon(pokemon);
    } catch (error) {
      console.error(`Erro ao buscar pokémon ${type}`, error);
    }
  }, [type]);

  useEffect(() => {
    BuscarPokemon();
  }, [BuscarPokemon]);

  return (
    <div className="normal__container">
      <h2>Pokémons do tipo ${type}</h2>
      <button onClick={BuscarPokemon}>Buscar Pokémon</button>
      <ul>
        {PoisonPokemon.map((pokemon, index) => {
          <li key={index}>{pokemon}</li>;
        })}
      </ul>
    </div>
  );
}
