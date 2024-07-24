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
    membersContainer.innerHTML = ''; // Clear previous content

    members.forEach((member) => {
        const section = document.createElement('section');
        section.classList.add('member');

        const img = document.createElement('img');
        img.src = `${baseURL}chamber/images/${member.image}`;
        img.alt = member.name;
        img.classList.add('member-image');
        section.appendChild(img);

        const div = document.createElement('div');
        div.classList.add('member-details');

        const h3 = document.createElement('h3');
        h3.textContent = member.name;
        div.appendChild(h3);

        const p1 = document.createElement('p');
        p1.textContent = member.address;
        div.appendChild(p1);

        const p2 = document.createElement('p');
        p2.textContent = 'Phone: ' + member.phone;
        div.appendChild(p2);

        const p3 = document.createElement('p');
        const websiteLink = document.createElement('a');
        websiteLink.href = member.website;
        websiteLink.textContent = 'Website';
        p3.appendChild(websiteLink);
        div.appendChild(p3);

        const p4 = document.createElement('p');
        p4.textContent = 'Membership Level: ' + member.membershipLevel;
        div.appendChild(p4);

        const p5 = document.createElement('p');
        p5.textContent = member.otherInfo;
        div.appendChild(p5);

        section.appendChild(div);

        membersContainer.appendChild(section);
    });
}

getMembers();

// Toggle between grid and list layout
const gridButton = document.getElementById('grid');
const listButton = document.getElementById('list');
const membersContainer = document.getElementById('members-container');

gridButton.addEventListener('click', function() {
    membersContainer.classList.remove('list');
    membersContainer.classList.add('grid');
    document.querySelectorAll('.member-image').forEach(img => img.style.display = 'block');
});

listButton.addEventListener('click', function() {
    membersContainer.classList.remove('grid');
    membersContainer.classList.add('list');
    document.querySelectorAll('.member-image').forEach(img => img.style.display = 'none');
});
