import { useState, useCallback, useEffect } from "react";

export default function PokeElectric({ type = "electric" }) {
  const [ElectricPokemons, setPokemons] = useState([]);

  const fetchPokemons = useCallback(async () => {
    try {
      const resposta = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      const data = await resposta.json();
      const pokemons = data.pokemons.map((item) => item.pokemon);
      setPokemons(pokemons);
    } catch (error) {
      console.error(`Erro ao buscar pokemon`, error);
    }
  }, [type]);

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  return (
    <div>
      <h2>Pokémons do tipo {type}</h2>
      <button onClick={ElectricPokemons}>Buscar Pokémons</button>
      <ul>
        {" "}
        {ElectricPokemons.map((pokemon, index) => {
          <li key={index}>{pokemon}</li>;
        })}
      </ul>
    </div>
  );
}
