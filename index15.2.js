const cities = ["Minsk", "Brest", "Grodno", "Vitebsk", "Gomel", "Mogilev"];
let temperatures = [];
let maxTemp = -Infinity;
let minTemp = Infinity;

for (let i = 0; i < cities.length; i++) {
  let temperature = prompt(`Введите температуру в городе ${cities[i]}`);
  temperatures.push(temperature);

  if (temperature > maxTemp) {
    maxTemp = temperature;
  }

  if (temperature < minTemp) {
    minTemp = temperature;
  }
}
console.log(temperatures);

const cityList = document.getElementById("cityList");
const maxTempElement = document.getElementById("maxTemp");
const minTempElement = document.getElementById("minTemp");

for (let i = 0; i < cities.length; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = `Температура в городе ${cities[i]}: ${temperatures[i]}°C`;
  cityList.appendChild(listItem);
}

maxTempElement.textContent = maxTemp;
minTempElement.textContent = minTemp;
