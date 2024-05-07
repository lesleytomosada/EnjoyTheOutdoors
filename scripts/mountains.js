import { mountainsArray } from "./mountainData.js"

const mountains = document.getElementById("mountains")

document.addEventListener("DOMContentLoaded", async () => {
    // const sunDataPromises = mountainsArray.map(mountain => getSunData(mountain.coords.lat, mountain.coords.lng));
    // const sunDataArray = await Promise.all(sunDataPromises);

    const cardList = mountainsArray.map((mountain, index) => {
        // const sunData = sunDataArray[index];
        const card = `          
        <div class="max-w-sm my-3 rounded overflow-hidden shadow-lg">
        <img class="w-full" src="/images/${mountain.img}" alt="${mountain.name}">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">${mountain.name}</div>
          <p class="text-gray-700 text-base">
            ${mountain.desc}
          </p>
          <p class="my-2">Elevation: ${mountain.elevation}</p>
          <p class="mb-2">Difficulty: ${mountain.effort}</p>
        
        </div>
      </div>`
      return card;
    });

    mountains.innerHTML = cardList.join('');
});

async function getSunData(lat, lng){
    let response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`);
    let data = await response.json();

    return data.results;
}
