const baseURL = 'https://charltoncastlemain.github.io/wdd230/';
const membersURL = `${baseURL}chamber/data/members.json`;

async function getMembers() {
    try {
        const response = await fetch(membersURL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayMembers(data.members); 
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayMembers(members) {
    const membersContainer = document.getElementById('members-container');

    members.forEach((member) => {
        const section = document.createElement('section');
        section.classList.add('member');

        const img = document.createElement('img');
        img.src = baseURL + 'chamber/images/' + member.image;
        img.alt = member.name;
        section.appendChild(img);

        const h3 = document.createElement('h3');
        h3.textContent = member.name;
        section.appendChild(h3);

        const p1 = document.createElement('p');
        p1.textContent = member.address;
        section.appendChild(p1);

        const p2 = document.createElement('p');
        p2.textContent = 'Phone: ' + member.phone;
        section.appendChild(p2);

        const p3 = document.createElement('p');
        const websiteLink = document.createElement('a');
        websiteLink.href = member.website;
        websiteLink.textContent = 'Website';
        p3.appendChild(websiteLink);
        section.appendChild(p3);

        const p4 = document.createElement('p');
        p4.textContent = 'Membership Level: ' + member.membershipLevel;
        section.appendChild(p4);

        const p5 = document.createElement('p');
        p5.textContent = member.otherInfo;
        section.appendChild(p5);

        membersContainer.appendChild(section);
    });
}

getMembers();

// Event listeners for grid and list buttons
document.getElementById('grid').addEventListener('click', showGrid);
document.getElementById('list').addEventListener('click', showList);

function showGrid() {
    const membersContainer = document.getElementById('members-container');
    membersContainer.classList.remove('list');
    membersContainer.classList.add('grid');
}

function showList() {
    const membersContainer = document.getElementById('members-container');
    membersContainer.classList.remove('grid');
    membersContainer.classList.add('list');
}
