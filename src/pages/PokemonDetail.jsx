import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonByName } from "../services/api";
import "../styles/Fontes.css";

const typeColors = {
  fire: "#F08030",
  water: "#6890F0",
  grass: "#78C850",
  electric: "#F8D030",
  psychic: "#F85888",
  ice: "#98D8D8",
  dragon: "#7038F8",
  dark: "#705848",
  fairy: "#EE99AC",
  normal: "#A8A878",
  fighting: "#C03028",
  flying: "#A890F0",
  poison: "#A040A0",
  ground: "#E0C068",
  rock: "#B8A038",
  bug: "#A8B820",
  ghost: "#705898",
  steel: "#B8B8D0",
};

function PokemonDetail() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await getPokemonByName(name);
        setPokemon(data);
      } catch (error) {
        console.error("Erro ao buscar Pokémon:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [name]);

  if (loading) return <p>Carregando...</p>;
  if (!pokemon) return <p>Pokémon não encontrado!</p>;

  const animatedSprite =
    pokemon.sprites.versions["generation-v"]["black-white"].animated
      .front_default;

  const imageUrl = animatedSprite || pokemon.sprites.front_default;
  const primaryType = pokemon.types[0].type.name;
  const backgroundColor = typeColors[primaryType] || "#A8A878";

  return (
    <div
      style={{
        backgroundColor,
        padding: "2rem",
        borderRadius: "1rem",
        color: "#fff",
        maxWidth: "400px",
        margin: "2rem auto",
        boxShadow: "0 0 12px rgba(0, 0, 0, 0.8)",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          textTransform: "uppercase",
          marginBottom: "1rem",
          color: "#ffffff",
          fontWeight: "bold",
        }}
      >
        #{pokemon.id.toString().padStart(3, "0")} {pokemon.name}
      </h1>
      <img src={imageUrl} alt={pokemon.name} className="pokemon-image" />

      <p className="pokemon-detail-text">
        <span>height</span>
        <br />
        <br></br>
        {(pokemon.height / 10).toFixed(2)} cm
        <br />
      </p>

      <p className="pokemon-detail-text">
        <span>weight</span>
        <br />
        <br></br>
        {(pokemon.weight / 10).toFixed(2)} kg
        <br />
      </p>

      <p
        className="pokemon-detail-text"
        style={{
          textTransform: "uppercase",
          marginBottom: "1rem",
          fontWeight: "bold",
        }}
      >
        Habilidades:
      </p>
      <ul
        className="pokemon-detail-text"
        style={{ listStyleType: "none", padding: 0 }}
      >
        {pokemon.abilities.map((ability) => (
          <li key={ability.ability.name} style={{ marginBottom: "4px" }}>
            {ability.ability.name}
          </li>
        ))}
      </ul>

      <p
        className="pokemon-detail-text"
        style={{
          textTransform: "uppercase",
          marginBottom: "1rem",
          fontWeight: "bold",
        }}
      >
        Movimentos:
      </p>
      <ul
        className="pokemon-detail-text"
        style={{ listStyleType: "none", padding: 0 }}
      >
        {pokemon.moves.slice(0, 5).map((move) => (
          <li key={move.move.name} style={{ marginBottom: "4px" }}>
            {move.move.name}
          </li>
        ))}
      </ul>

      <p
        className="pokemon-detail-text"
        style={{
          textTransform: "uppercase",
          marginBottom: "1rem",
          fontWeight: "bold",
        }}
      >
        Tipo:{" "}
        {pokemon.types.map((type) => (
          <span
            key={type.type.name}
            style={{
              backgroundColor: "rgba(243, 15, 15, 0.95)",
              padding: "4px 8px",
              borderRadius: "8px",
              margin: "0 4px",
              display: "inline-block",
            }}
          >
            {type.type.name}
          </span>
        ))}
      </p>

      <div
        style={{
          marginTop: "1.5rem",
          textAlign: "left",
          backgroundColor: "rgb(23, 77, 147)",
          padding: "1rem",
          borderRadius: "8px",
        }}
      >
        <h3>Status:</h3>
        {pokemon.stats.map((stat) => (
          <div key={stat.stat.name} style={{ marginBottom: "5px" }}>
            <strong
              style={{
                textTransform: "uppercase",
                marginBottom: "1rem",
                fontWeight: "bold",
              }}
            >
              {stat.stat.name}:
            </strong>
            <div
              style={{
                height: "20px",
                backgroundColor: "rgba(241, 233, 233, 0.97)",
                borderRadius: "4px",
                overflow: "hidden",
                marginTop: "2px",
              }}
            >
              <div
                style={{
                  width: `${stat.base_stat > 50 ? 50 : stat.base_stat}%`,
                  height: "100%",
                  backgroundColor: "rgba(197, 210, 10, 0.93)",
                  borderRadius: "4px",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonDetail;
