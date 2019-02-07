function generateRandomNameFromInput() {

    let names = document.getElementById('nameInput').value;
   
    if (!names) {
        alert('You gotta enter at least one name!');
    } else {

    let namesArr = names.split(',');
    let randomNumber = Math.floor(Math.random() * namesArr.length);
    let selectedName = namesArr[randomNumber];

    document.getElementById('selectedName').innerHTML = selectedName + "! It's your turn :)";
    }
}
