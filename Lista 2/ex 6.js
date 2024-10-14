let peso_t = parseFloat(window.prompt("Digite o peso dos peixes em quilos:"));
let peso_r = 50;
let multa = 4;
if (peso_t > peso_r) {
    let excesso = peso_t - peso_r;
    let pg = excesso * multa;
        window.alert(`Excesso de ${excesso}kg!\nMulta a ser paga de R$ ${pg.toFixed(2)}`);
    } else {
        window.alert("Não há excesso e nenhuma multa a ser paga");
}