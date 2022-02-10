function handleJustFunctionClick() {
    const p = document.getElementById('clicking-method');
    p.innerText = 'Set by using Function';
}

// direct 

document.getElementById('handle-event').addEventListener('click', function () {
    const p = document.getElementById('clicking-method');
    p.innerText = 'Set by using Direct add event Listener';
});

//direct input value output:

document.getElementById('update-name').addEventListener('click', function () {
    const nameField = document.getElementById('update-field');
    const p = document.getElementById('updated-text');
    p.innerText = nameField.value;
    nameField.value = '';
});
