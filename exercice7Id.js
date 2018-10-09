function operation(){

var birthDay = document.getElementById('yearOfBirth');
var shoes = document.getElementById('shoeSize');
var operation= ((((shoes*2)+5)*50)-BirthDay)+1766;

var regex= /^[0-9]+$/;

if (!regex.test(shoes)||shoes==null){
    alert("Problème de saisie");}
else (alert("Le résultat des opérations est " + operation));
}
