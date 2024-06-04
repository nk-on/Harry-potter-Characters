const searchBar = document.querySelector('#search-characters');
const container = document.querySelector('[data-container]');
const characterCardTemplate = document.querySelector('#character');
async function getCharacters() {
  const res = await fetch('	https://hp-api.onrender.com/api/characters');
  const data = await res.json();
  data.forEach((data)=> renderCharacters(data))
}
function renderCharacters(data) {
  const characterCard = characterCardTemplate.content.cloneNode(true);
  const characterImage = characterCard.querySelector('[data-image]');
  const characterTitle = characterCard.querySelector('[data-name]');
  const characterHouse = characterCard.querySelector('[data-house]');
  characterImage.setAttribute('src', data.image);
  characterTitle.textContent = data.name;
  characterHouse.textContent = data.house;
  container.appendChild(characterCard);
}
getCharacters();
