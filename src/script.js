const searchBar = document.querySelector('#search-characters');
const container = document.querySelector('[data-container]');
async function getCharacters() {
  const res = await fetch('	https://hp-api.onrender.com/api/characters');
  const data = await res.json();
  renderCharacters(data);
}
getCharacters();
