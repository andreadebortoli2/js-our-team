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
    
}

// - MILESTONE 2:
// -select the elemnt in the DOM where to print the data
const container = document.querySelector('.container');

// -in a for loop create an element for each object of the array to print inside the properties
for (let i = 0; i < team.length; i++) {
    const member = team[i];

    let memberData = document.createElement('div');

    container.append(memberData);

    // -in each element add the object properties as strings
    memberData.append(`${member.name}`);
    memberData.append(`${member.role}`);
    memberData.append(`${member.image}`);
    
}

// - BONUS 1:
// -edit the image string as an element img

// - BONUS 2:
// -edit html and css as the screenshot
// -edit the element wich contain the object properties as a card