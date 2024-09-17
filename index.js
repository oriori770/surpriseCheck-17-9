const btnDispSq = document.querySelector("#displayYelow");
const squareElment = document.querySelector("#square");
const randName = document.querySelector("p");
let displayYelow = false;


btnDispSq.addEventListener("click", () => mangerSquare());

function mangerSquare() {
  displayYelow ? hideSquare() : displaySquare();
  displayYelow = !displayYelow;
}
function displaySquare() {
  console.log("displaySquare");
  const newSquare = document.createElement("div");
  newSquare.style.width = "100px";
  newSquare.style.height = "100px";
  newSquare.style.backgroundColor = "yellow";
  squareElment.appendChild(newSquare);
}

function hideSquare() {
  console.log("hideSquare");
  squareElment.removeChild(squareElment.lastChild);
}
async function getRandomName()
{
    const response = await fetch('https://randomuser.me/api');
    const data = await response.json();
    const RandomName = data.results[0].name.first + " " + data.results[0].name.lastname;
    return RandomName;
};
async function renderRandomName()
{
    randName.textContent = `name: ${await getRandomName()}`;
};
renderRandomName();
