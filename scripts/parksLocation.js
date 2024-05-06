import { locationsArray } from "./locationData.js";
import { nationalParksArray } from "./nationalParkData.js";

const locationBtn = document.getElementById("location");
const dropdown = document.getElementById("locationDropdown");
const typeDropdown = document.getElementById("typeDropdown");
const allParks = document.getElementById("all");
let selectedParks = nationalParksArray;

document.addEventListener("DOMContentLoaded", (event) => {
function populateLocationDropdown() {
  typeDropdown.classList.add("hidden");
  dropdown.classList.remove("hidden");
  dropdown.innerHTML = "";

  const label = document.createElement("option");
  label.disabled = true;
  label.selected = true;
  label.value = "label";
  label.text = "Choose Your Location";
  dropdown.appendChild(label);

  locationsArray.forEach((location) => {
    const option = document.createElement("option");
    option.value = location;
    option.text = location;
    dropdown.appendChild(option);
  });
}

function loadParkCards(filterData = true) {
    const parkCards = document.getElementById("parks");
    const results = document.getElementById("results");
    parkCards.innerHTML = "";   
    results.classList.remove("hidden");
    const selectedLocation = dropdown.value;

    if (filterData) {
        selectedParks = nationalParksArray.filter((park) => {
            return park.State === selectedLocation;
        });
    } else {
        populateLocationDropdown();
        selectedParks = nationalParksArray;
    }
    let parkCardsHTML = '';
    
    selectedParks.forEach((park) => {
        const parkCard = `
        <div class="max-w-full w-full my-3 mx-auto justify-center flex">
        <div
          class="border rounded border-gray-400 lg:border-gray-400 bg-white p-4 flex flex-col justify-between leading-normal"
          style="width: 600px; max-width: 600px; margin: 0 auto"
        >
          <div class="mb-8">
            <div class="text-gray-900 font-bold text-xl mb-2">
              ${park.LocationName}
            </div>            
              ${park.Address ? `<p class="text-gray-700 text-base">${park.Address}</p>` : ""}
          </p>
            <p class="text-gray-700 text-base">
              ${park.City}, ${park.State}
            </p>
            ${park.Visit ? `<p class="text-gray-700 pt-5 text-base"><a href=${park.Visit} target=_blank>${park.Visit}</a></p>` : ""}
          </div>
        </div>
        </div>`
        parkCardsHTML += parkCard;

    })
    document.getElementById("parks").innerHTML += parkCardsHTML;

}
locationBtn.addEventListener("click", populateLocationDropdown);
dropdown.addEventListener("change", loadParkCards);
allParks.addEventListener("click", () => loadParkCards(false));
});