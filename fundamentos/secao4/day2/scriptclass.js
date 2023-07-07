const firstParent = document.getElementById('first');

const createElement = (classElements, element) => {
    const newElement = document.createElement(element);
    newElement.className = classElements;
    return newElement;
};

const addElement = (parent, child) => {
    parent.appendChild(child);
}

addElement(firstParent, createElement('small circle green', 'div'));
addElement(firstParent, createElement('small circle yellow', 'div'));
addElement(firstParent, createElement('small circle red', 'div'));
addElement(firstParent, createElement('small square green', 'div'));
addElement(firstParent, createElement('small square yellow', 'div'));
addElement(firstParent, createElement('small square red', 'div'));

//firstParent.createElement('small circle green', 'div');(createDiv('small circle green', 'div'));

//let newDiv = document.createElement('div'); 
//newDiv.classList.add('circle');
//newDiv.classList.add('small');
//newDiv.classList.add('green');

//let newDiv1 = document.createElement('div');
//newDiv1.className = 'circle small yellow';

//let newDiv2 = document.createElement('div');
//newDiv2.className = 'circle small red';

//firstParent.appendChild(newDiv1);
//firstParent.appendChild(newDiv2);
