function calcul (){

var BirthDay= prompt("Entrez votre anné de naissance");
var shoes= prompt("Entrez votre pointure");
var operation= ((((shoes*2)+5)*50)-BirthDay)+1766;

if (isNaN(BirthDay)||isNaN(shoes)) {
		alert('problème de saisie')}
else{alert("Le résultat des opérations est " + operation);}
}
