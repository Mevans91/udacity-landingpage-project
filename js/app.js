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



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function checkSection() {
    const sect = document.getElementById(`section${i}`);
    if (sect === true) {
        return
    } else {
        break;
        console.log('break')
    };
}

function createSection(i) {
    const div = document.createElement('section');
    const para = document.createElement('p');
    const head = document.createElement('h2');

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



navBuild();


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
