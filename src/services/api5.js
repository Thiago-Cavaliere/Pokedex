const API_URL = "https://pokeapi.co/api/v2";

export async function getFiveGenerationPokemons() {
  const response = await fetch(`${API_URL}/pokemon?offset=494&limit=649`); 
  const data = await response.json();
  return data.results;  
}

export async function getPokemonByName(name) {
  const response = await fetch(`${API_URL}/pokemon/${name}`);
  const data = await response.json();
  return data;
}
