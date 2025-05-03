import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSecondGenerationPokemons } from "../services/api2";
import Button from "../Components/Button";
import "../styles/PageFirstGene.css";

function SecondGene() {
  const [pokemons, setPokemons] = useState([]);
  const [typeFilter, setTypeFilter] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const data = await getSecondGenerationPokemons();

      const detailedPokemons = await Promise.all(
        data.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          const pokemonDetails = await response.json();

          const animatedSprite =
            pokemonDetails.sprites.versions["generation-v"]["black-white"]
              .animated.front_default;

          return {
            name: pokemon.name,
            image: animatedSprite || pokemonDetails.sprites.front_default,
            types: pokemonDetails.types.map((t) => t.type.name),
          };
        })
      );
      setPokemons(detailedPokemons);
      setFilteredPokemons(detailedPokemons);
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
      {/* <h1 className="first__title">Segunda Geração</h1> */}
      <Button onTypeSelect={setTypeFilter} />
      <div className="first__container">
        {filteredPokemons.map((pokemon, index) => (
          <div key={index}>
            <Link to={`/pokemon/${pokemon.name}`}>
              <h2 className="first_name">{pokemon.name}</h2>
              <img src={pokemon.image} alt={pokemon.name} width="70" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SecondGene;
