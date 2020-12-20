/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
*/

/**
 * Define Global Variables
 * 
*/
const fragment = document.createDocumentFragment();
const dummyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. 
Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. 
Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin 
mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, 
sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus 
imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam 
porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et 
elementum non, faucibus vitae elit. Integer nec libero venenatis libero 
ultricies molestie semper in tellus. Sed congue et odio sed euismod.
Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum 
lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae 
rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse 
imperdiet porttitor tortor, eget elementum tortor mollis non.`



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// function checkSection() {
//     const sect = document.getElementById(`section${i}`);
//     if (sect === true) {
//         return
//     } else {
//         break;
//         console.log('break')
//     };
// }



function createSection() {
    const i = document.getElementsByTagName('div').length + 1;
    const sect = document.createElement('section');
    sect.setAttribute('id', `section${i}`);
    sect.setAttribute('data-nav', `Section ${i}`);
    document.getElementById('mainBody').appendChild(sect);
    createContainer(i);
    createHeader(i);
    createPara(i);
    
    console.log(i)

}

function createContainer(i) {
    const div = document.createElement('div');
    div.setAttribute('class', 'landingContainer', 'test');
    document.getElementById(`section${i}`).appendChild(div);
}

function createHeader(i) {
    const head = document.createElement('h2');
    const node = document.createTextNode(`Section ${i}`);
    head.appendChild(node);
    document.getElementById(`section${i}`).querySelector('div').appendChild(head);
}

function createPara(i) {
    const para = document.createElement('p');
    const node2 = document.createTextNode(dummyText);
    para.appendChild(node2);
    document.getElementById(`section${i}`).querySelector('div').appendChild(para);

}

function createList() {
    
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function navBuild() {
    const nav = document.getElementById("navbar__list");
    const i = 1;
    checkSection();
    for (let x = 0; x <= i; x++) {
        const section = document.getElementById(`section${i}`);
        console.log(section);
        // nav.appendChild(section);
    }
    
}



// navBuild();
createSection();


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
