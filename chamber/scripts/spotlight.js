async function getMembers() {
    try {
        const response = await fetch('path/to/members.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const members = await response.json();
        displaySpotlights(members);
    } catch (error) {
        console.error('Error fetching members data:', error);
    }
}

function displaySpotlights(members) {
    const spotlightsContainer = document.getElementById('spotlights-container');
    const eligibleMembers = members.filter(member => member.membership === 'silver' || member.membership === 'gold');
    const randomMembers = getRandomElements(eligibleMembers, 2);

    randomMembers.forEach(member => {
        const spotlight = document.createElement('div');
        spotlight.classList.add('spotlight');
        spotlight.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.description}</p>
        `;
        spotlightsContainer.appendChild(spotlight);
    });
}

function getRandomElements(arr, num) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

getMembers();
