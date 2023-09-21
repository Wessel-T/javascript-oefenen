
let a = 4;
let b = 7;
let c = a * b;

console.log(c)

//opdr 7
let prijsEx = 100;
let btw = 1.21;
let prijsIncl = prijsEx * btw;

console.log(prijsIncl);

//opdr 8 
let voornaam = "Joseph";
let achternaam = "Stalin";

console.log(voornaam + " " + achternaam)

//opdr 9
let aan = true;
console.log("aan is " + aan)

let uit = false;
console.log("uit is " + uit)




//opdr 10
const myNumber = 6;
if (myNumber > 5.4) {
    alert('Je hebt een voldoende! :)');
}
else {
    alert('Je hebt een onvoldoende :(');
}

alert('Einde programma')

//opdr 11
const chosenWeapon = prompt("choose a weapon");
let message = '';
switch (chosenWeapon) {
    case 'Mace':
        message = "A mace is a blunt weapon";
        break;

    case 'Sword':
        message = "Not often used by vikings"
        break;


    case 'Crossbow':
        message = "They do not have the technoligy for this weapon";
        break;

    case 'Firebomb':
        message = "Seen as witchcraft";
        break;

    default:
        message = "This weapon is unknown";
}
alert(message);








