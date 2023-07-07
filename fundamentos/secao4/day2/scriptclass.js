const firstParent = document.getElementById('first');
let newElement = document.createElement('div');
newElement.classList.add('circle');
newElement.classList.add('small');
newElement.classList.add('red');
firstParent.appendChild(newElement);