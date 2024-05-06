// parksLocation.js
import { locationData } from '.locationData/'

function populateDropdown() {
    const dropdown = document.getElementById('parkDropdown');
    dropdown.innerHTML = '';
    locationData.forEach((location) => {
        const option = document.createElement('option');
        option.value = location.id;
        option.text = location.name;
        dropdown.appendChild(option);
    });
}

window.addEventListener('DOMContentLoaded', populateDropdown);