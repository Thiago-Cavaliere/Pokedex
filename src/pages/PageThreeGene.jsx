import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getThreeGenerationPokemons } from "../services/api3";
import "../styles/PageFirstGene.css";
import Button from "../Components/Button";

function ThreeGene() {
  const [pokemons, setPokemons] = useState([]);
  const [typeFilter, setTypeFilter] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const data = await getThreeGenerationPokemons();

        const detailedPokemons = await Promise.all(
          data.map(async (pokemon) => {
            const name = pokemon.name;

            try {
              const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${name}`
              );

              if (!response.ok) {
                throw new Error(
                  `Erro ao buscar ${name}: ${response.statusText}`
                );
              }

              const pokemonDetails = await response.json();

              const animatedSprite =
                pokemonDetails.sprites.versions?.["generation-v"]?.[
                  "black-white"
                ]?.animated?.front_default;

              return {
                name,
                image: animatedSprite || pokemonDetails.sprites.front_default,
                types: pokemonDetails.types.map((t) => t.type.name),
              };
            } catch (err) {
              console.error(`Erro ao buscar detalhes de ${name}:`, err);
              return null; // Retorna null para ser filtrado depois
            }
          })
        );

        // Remove qualquer resultado que deu erro
        const validPokemons = detailedPokemons.filter(Boolean);

        setPokemons(validPokemons);
        setFilteredPokemons(validPokemons);
      } catch (error) {
        console.error("Erro ao buscar pokémons da terceira geração:", error);
      }
    };

    fetchPokemons();
  }, []);

  useEffect(() => {
    if (typeFilter === "") {
      setFilteredPokemons(pokemons);
    } else {
      const filtered = pokemons.filter((pokemon) =>
        pokemon.types.includes(typeFilter)
      );
      setFilteredPokemons(filtered);
    }
  }, [typeFilter, pokemons]);

  return (
    <section className="container">
      {/* <h1 className="first__title">Terceira Geração (Hoenn)</h1> */}
      <Button onTypeSelect={setTypeFilter} />
      <div className="first__container">
        {filteredPokemons.map((pokemon) => (
          <div key={pokemon.name}>
            <h2 className="first_name">
              <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
            </h2>
            <Link to={`/pokemon/${pokemon.name}`}>
              <img src={pokemon.image} alt={pokemon.name} width="70" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ThreeGene;
