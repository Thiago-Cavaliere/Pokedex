import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllPokemons } from "../services/api";
import "../styles/PageFirstGene.css";
import Button from "../Components/Button";

function FirstGene() {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [typeFilter, setTypeFilter] = useState("");

  useEffect(() => {
    const fetchPokemons = async () => {
      const data = await getAllPokemons();
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
      {/* <h1 className="first__title">Primeira Geração</h1> */}
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

export default FirstGene;
