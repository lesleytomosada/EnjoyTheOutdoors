import { mountainsArray } from "./mountainData.js"

const mountains = document.getElementById("mountains")

document.addEventListener("DOMContentLoaded", () => {
    let cardList = ''
    mountainsArray.forEach(mountain => {
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
          <p>Today's Sunrise: 6:00am</p>
          <p>Today's Sunset: 7:00pm</p>

        </div>
      </div>`
      cardList += card
    })
    mountains.innerHTML = cardList

});