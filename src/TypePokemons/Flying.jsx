import { useState, useCallback, useEffect } from "react";

export default function PokeFlying({ type = "flying" }) {
  const [FlyingPokemons, setPokemons] = useState([]);

  const BuscarPokemons = useCallback(async () => {
    try {
      const resposta = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      const data = await resposta.json();
      const pokemons = data.pokemon.map((item) => item.pokemon);
      setPokemons(pokemons);
    } catch (error) {
      console.error(`Erro ao bucar pokémon ${type}`, error);
    }
  }, [type]);

  useEffect(() => {
    BuscarPokemons();
  }, [BuscarPokemons]);

  return (
    <div className="normal__container">
      <h2>Pokémons do tipo ${type}</h2>
      <button onClick={BuscarPokemons}>Buscar Pokémons</button>
      <ul>
        {FlyingPokemons.map((pokemon, index) => {
          <li key={index}>{pokemon}</li>;
        })}
      </ul>
    </div>
  );
}
