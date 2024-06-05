const container = document.querySelector('[data-container]');
const characterCardTemplate = document.querySelector('#character');
const searchBar = document.querySelector('#search-bar');
async function getCharacters() {
  const res = await fetch('	https://hp-api.onrender.com/api/characters');
  const data = await res.json();
  renderCharacters(data);
}
async function searchCharacters() {
  const res = await fetch('	https://hp-api.onrender.com/api/characters');
  const data = await res.json();
  const searchValue = searchBar.value.trim().toLowerCase();
  const filteredData = data.filter((data) =>
    data.name.toLowerCase().includes(searchValue)
  );
  renderCharacters(filteredData);
}
function renderCharacters(data) {
  if (container.innerHTML.length !== 0) {
    container.innerHTML = '';
  }
  data.forEach((dataElement) => {
    const characterCard = characterCardTemplate.content.cloneNode(true);
    const characterImage = characterCard.querySelector('[data-image]');
    const characterTitle = characterCard.querySelector('[data-name]');
    const characterHouse = characterCard.querySelector('[data-house]');
    characterImage.setAttribute('src', dataElement.image);
    characterTitle.textContent = dataElement.name;
    characterHouse.textContent = dataElement.house;
    container.appendChild(characterCard);
  });
}
getCharacters();
searchBar.addEventListener('input', searchCharacters);
