const baseURL = 'https://charltoncastlemain.github.io/wdd230/';
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayLinks(data.weeks); 
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayLinks(weeks) {
    const activitiesList = document.querySelector('#card1 ul');

    weeks.forEach((week) => {
        
        const weekItem = document.createElement('li');
        weekItem.classList.add('week-item'); 

        const weekSpan = document.createElement('span');
        weekSpan.classList.add('week-span'); 

        const weekTitle = document.createElement('strong');
        weekTitle.textContent = `${week.week}: `;
        weekSpan.appendChild(weekTitle);

        week.links.forEach((link, index) => {
            const linkAnchor = document.createElement('a');
            linkAnchor.href = baseURL + link.url;
            linkAnchor.textContent = link.title;
            weekSpan.appendChild(linkAnchor);

            if (index < week.links.length - 1) {
                const separator = document.createElement('span');
                separator.textContent = ' | ';
                weekSpan.appendChild(separator);
            }
        });

        weekItem.appendChild(weekSpan);
        
        activitiesList.appendChild(weekItem);
    });
}

getLinks();