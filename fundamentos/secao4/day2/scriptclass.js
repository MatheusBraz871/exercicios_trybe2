const firstParent = document.getElementById('first');

const createDiv = (classElements, element) => {
    const newDiv = document.createElement(element);
    newDiv.className = classElements;
    return newDiv;
};

firstParent.appendChild(createDiv('small circle green', 'div'));

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
