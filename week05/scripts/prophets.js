// Define the URL of the JSON resource
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// Select the HTML div element with id 'cards'
const cards = document.querySelector('#cards');

// Async function to fetch data from JSON source
async function getProphetData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    // Console table to check data retrieval (commented out when done)
    console.table(data.prophets);
    displayProphets(data.prophets); // Display the prophets data
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Function expression to display prophets
const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let fullName = document.createElement('h2');
    let birthDate = document.createElement('p');
    let birthPlace = document.createElement('p');
    let portrait = document.createElement('img');

    // Build the h2 content to show the prophet's full name
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    // Build the birthDate paragraph
    birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;

    // Build the birthPlace paragraph
    birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

    // Build the image portrait by setting attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append elements to the section(card)
    card.appendChild(fullName);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(portrait);

    // Append the section card to the div.cards
    cards.appendChild(card);
  });
};

// Call the function to fetch and display prophet data
getProphetData();
