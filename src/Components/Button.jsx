// src/Components/Button.jsx
import "../styles/Button.css";

export default function Button({ onTypeSelect }) {
  const types = [
    "Normal", "Fighting", "Flying", "Poison", "Ground",
    "Rock", "Bug", "Ghost", "Steel", "Fire",
    "Water", "Grass", "Electric", "Psychic", "Ice",
    "Dragon", "Dark", "Fairy",
  ];

  return (
    <div className="button__container">
      <button className="button" onClick={() => onTypeSelect("")}>Todos</button>
      {types.map((type) => (
        <button
          key={type}
          className="button"
          onClick={() => onTypeSelect(type.toLowerCase())}
        >
          {type}
        </button>
      ))}
    </div>
  );
}
