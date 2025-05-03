const API_URL = "https://pokeapi.co/api/v2";

export async function getThreeGenerationPokemons() {
    const response = await fetch("https://pokeapi.co/api/v2/generation/3");
    const data = await response.json();
    return data.pokemon_species;
  }
  

export async function getPokemonByName(name) {
  const response = await fetch(`${API_URL}/pokemon/${name}`);
  const data = await response.json();
  return data;
}
