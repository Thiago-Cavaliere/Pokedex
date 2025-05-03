const API_URL = "https://pokeapi.co/api/v2";

export async function getAllPokemons() {
  const response = await fetch(`${API_URL}/pokemon?limit=151`); // primeira geração
  const data = await response.json();
  return data.results;
}

export async function getPokemonByName(name) {
  const response = await fetch(`${API_URL}/pokemon/${name}`);
  const data = await response.json();
  return data;
}
