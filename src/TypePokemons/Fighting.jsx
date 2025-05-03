import { useState, useCallback, useEffect } from "react";

export default function PokeFighting({ type = "fighting" }) {
  const [FightingPokemons, setPokemons] = useState([]);

  const BuscarPokemons = useCallback(async () => {
    try {
      const resposta = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      const data = await resposta.json();
      const pokemons = data.pokemon.map((item) => item.pokemons);
      setPokemons(pokemons);
    } catch (error) {
      console.error(`Erro ao encontrar pokemon tipo ${type}`, error);
    }
  }, [type]);

  useEffect(() => {
    BuscarPokemons();
  }, [BuscarPokemons]);

  return (
    <div className="normal__container">
      <h2>Pokémons do tipo ${type}</h2>
      <button onClick={BuscarPokemons}> Buscar Pokémons</button>
      <ul>
        {FightingPokemons.map((pokemon, index) => {
          <li key={index}>{pokemon}</li>;
        })}
      </ul>
    </div>
  );
}
