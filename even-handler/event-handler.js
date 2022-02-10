function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// handle blue button click by setting function name 
const blueButton = document.getElementById('make-blue-button');
// just set the name of the function 
blueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'Blue';
}

// handle events using Anonymous function
const greenButton = document.getElementById('make-green-button');
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

// handle by using add event listner 
const chocklateButton = document.getElementById('make-chocklate-button');
chocklateButton.addEventListener('click', makeChocklate);
function makeChocklate() {
    document.body.style.backgroundColor = '#7B3F00';
}

// Add event listener 
const crimsonButton = document.getElementById('make-crimson-button');
crimsonButton.addEventListener('click', function makeCrimson() {
    document.body.style.backgroundColor = '#DC143C';
});

// direct shortcut

document.getElementById('make-turquoise-button').addEventListener('click', function () {
    document.body.style.backgroundColor = '#40E0D0';
});

