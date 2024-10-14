let letra = window.prompt("Digite uma letra").toLocaleLowerCase();
let vogal = "aeiou";
if (vogal.includes(letra) && letra.length === 1) {
    window.alert("A letra é uma vogal");
} else {
    window.alert("A letra é uma consoante");
}