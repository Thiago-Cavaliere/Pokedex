const API_URL = "https://pokeapi.co/api/v2";

export async function getEightGenerationPokemons() {
  const response = await fetch(`${API_URL}/pokemon?offset=810&limit=905`); 
  const data = await response.json();
  return data.results; 
}

export async function getPokemonByName(name) {
  const response = await fetch(`${API_URL}/pokemon/${name}`);
  const data = await response.json();
  return data;
}
