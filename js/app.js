/**
 * These two variables are used to fill the sections with content as they're created.
 * They're somewhat large, so I set them outside the functions, to keep the code compact
 * and clean.
*/ 

const dummyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. 
Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. 
Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin 
mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, 
sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus 
imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam 
porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et 
elementum non, faucibus vitae elit. Integer nec libero venenatis libero 
ultricies molestie semper in tellus. Sed congue et odio sed euismod.`;
const dummyText2 = `Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum 
lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae 
rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse 
imperdiet porttitor tortor, eget elementum tortor mollis non.`;

/**
 * The createSection function uses the respectively named functions
 * to build each piece of the sections, append them up into each other,
 * and finally build a complete section that matches the ones in the HTML.
 * It then appends the complete section into the main body container. Finally, 
 * it updates the nav to reflect the current number and names of sections.  
 */
function createSection() {
    const i = document.getElementsByTagName('section').length + 1;
    const sect = document.createElement('section');
    sect.setAttribute('id', `section${i}`);
    sect.setAttribute('data-nav', `Section ${i}`);
    // sect.setAttribute('onscroll', 'makeActive()')
    document.getElementById('mainBody').appendChild(sect);
    createContainer(i);
    createHeader(i);
    createPara(i);
    createPara2(i);
    updateNav();
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

function createPara2(i) {
    const para2 = document.createElement('p');
    const node3 = document.createTextNode(dummyText2);
    para2.appendChild(node3);
    document.getElementById(`section${i}`).querySelector('div').appendChild(para2);
}

/**
 * This updateNav function simply grabs the ul by it's id,
 * clears the contents by setting the inner HTML to an empty string,
 * and then runs the navBuild function again, updating the list with all 
 * the current sections.
 */
function updateNav() {
    const nav = document.getElementById('navbarList');
    nav.innerHTML = '';
    navBuild();
}

/**
 * This navBuild function grabs the unordered list by it's id,
 * and all the sections by their tag name. It then loops through
 * all the current sections and creates a list item for each section,
 * adding all the needed attributes and information, before appending 
 * them all into the list. 
 */
function navBuild() {
    const nav = document.getElementById('navbarList');
    const sections = document.getElementsByTagName('section');
    for (let x = 1; x <= sections.length; x++) {
        const item = document.createElement('li');
        const node = document.createTextNode(`Go To Section ${x}`);
        // const anchor = document.getElementById(`section${x}`);
        item.appendChild(node);
        item.setAttribute('class', 'menuLink');
        item.setAttribute('onclick', `section${x}.scrollIntoView()`);
        nav.appendChild(item);
    } 
}

navBuild();
// This event listener loops through the sections, checks which one is on the top of the screen
// and then sets the class as active. Otherwise, it sets the class to an inactive class.
window.addEventListener('scroll', function() {
    const sections = document.getElementsByTagName('section');    
    for (let i = 1; i <= sections.length; i++) {
        const query = document.querySelector(`#section${i}`);
        const rect = query.getBoundingClientRect();
        if (rect.top > -100 && rect.top <= 400) {
            query.setAttribute('class', 'active');
        } else {
            query.setAttribute('class', 'section');
        }
    }
})