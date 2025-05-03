const API_URL = "https://pokeapi.co/api/v2";

export async function getSecondGenerationPokemons() {
  const response = await fetch(`${API_URL}/pokemon?offset=151&limit=101`); // Segunda geração (Pokémons 152 a 252)
  const data = await response.json();
  return data.results; // Retorna apenas a lista de pokémons
}

export async function getPokemonByName(name) {
  const response = await fetch(`${API_URL}/pokemon/${name}`);
  const data = await response.json();
  return data;
}
