let candidatos = "1234";
let nulo = 5;
let branco = 6;
let esc = window.prompt(`Pressione a respectiva tecla para contabilizar seu voto:\n1 = José\n2 = Marcos\n3 = Lucas\n4 = Pedro\n5 = Voto nulo\n6 = Voto branco`);
if (candidatos.includes(esc) && esc.length === 1) {
    window.alert(`Voto candidato ${esc} contabilizado com sucesso...`);
} else if (Number(esc) === nulo) {
    window.alert("Voto nulo contabilizado com sucesso...");
} else if (Number(esc) === branco) {
    window.alert("Voto branco contabilizado com sucesso...");
} else {
    window.alert("Voto não contabilizado, tente novamente...");
}
