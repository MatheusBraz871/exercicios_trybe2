const firstParent = document.getElementById('first');

let newDiv = document.createElement('div');
newDiv.classList.add('circle');
newDiv.classList.add('small');
newDiv.classList.add('green');

let newDiv1 = document.createElement('div');
newDiv1.className = 'circle small yellow';

let newDiv2 = document.createElement('div');
newDiv2.className = 'circle small red';

firstParent.appendChild(newDiv);
firstParent.appendChild(newDiv1);
firstParent.appendChild(newDiv2);
