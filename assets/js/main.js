// console.log('test');

const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];


//   - MILESTONE 1:
// - for loop of the array
for (let i = 0; i < team.length; i++) {
    const member = team[i];

    // - console. log with the dot notation
    console.log(member.name, member.role, member.image);
    
};

// - MILESTONE 2:
// -select the elemnt in the DOM where to print the data
// const container = document.querySelector('.container');

// -in a for loop create an element for each object of the array to print inside the properties
/* for (let i = 0; i < team.length; i++) {
    const member = team[i];

    let memberData = document.createElement('div');

    container.append(memberData);

    // -in each element add the object properties as strings
    memberData.append(`${member.name}`);
    memberData.append(`${member.role}`);
    // memberData.append(`${member.image}`);    
    
    
    // - BONUS 1:
    // -edit the image string as an element img
    const memberImage = document.createElement('img');
    memberImage.src = `./assets/img/${member.image}`;
    container.append(memberImage);

}; */

// - BONUS 2:
// -edit html and css as the screenshot  adding bootstrap
// -edit the element wich contain the object properties as a card

const row = document.querySelector('.row');
row.classList.add('gy-4');

for (let i = 0; i < team.length; i++) {
    const member = team[i];

    let memberData = document.createElement('div');
    memberData.classList.add('col-4');

    row.append(memberData);

    const memberCard = document.createElement('div');
    memberCard.classList.add('card', 'p-1', 'text-center');

    memberData.append(memberCard);
    
    
    const memberCardImage = document.createElement('img');
    memberCardImage.src = `./assets/img/${member.image}`;

    const memberCardTitle = document.createElement('h5');
    memberCardTitle.classList.add('card-title', 'pt-3');

    const memberCardText = document.createElement('p');
    memberCardText.classList.add('card-text');

    memberCardTitle.append(`${member.name}`);
    memberCardText.append(`${member.role}`);  

    memberCard.append(memberCardImage);
    memberCard.append(memberCardTitle);
    memberCard.append(memberCardText);
    
};