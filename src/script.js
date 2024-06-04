const searchBar = document.querySelector('#search-characters');
const container = document.querySelector('[data-container]');
const characterCardTemplate = document.querySelector('#character-card');
async function getCharacters() {
  const res = await fetch('	https://hp-api.onrender.com/api/characters');
  const data = await res.json();
  renderCharacters(data);
}
function renderCharacters(data) {
  data.forEach((data) => {
    const characterCard = characterCardTemplate.content.cloneNode(true);
    const characterImage = characterCard.querySelector('[data-image]');
    const characterTitle = characterCard.querySelector('[data-name]');
    const characterHouse = characterCard.querySelector('[data-house]');
    characterTitle.textContent = data.name;
    container.appendChild(characterCard)
  });
}
getCharacters();
