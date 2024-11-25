let chutes = 0;
let socos = 0;
let magias = 0;
let total = 0;
while (true) {
    let golpe = window.prompt("Digite o golpe (5 para chute, 6 para soco, 7 para magia) ou 'n' para sair:");

    if (golpe === 'n') {
        break; // sai do loop
    }

    golpe = parseInt(golpe);

    switch (golpe) {
        case 5: // chute
            chutes++;
            total += 2;
            break;
        case 6: // soco
            socos++;
            total += 4;
            break;
        case 7: // magia
            magias++;
            total += 10;
            break;
        default:
            window.alert("Golpe inválido! Tente novamente");
        }
    }
    window.alert(`Resultados:\nChutes: ${chutes} (Pontuação: ${chutes * 2})\n` +
          `Socos: ${socos} (Pontuação: ${socos * 4})\n` +
          `Magias: ${magias} (Pontuação: ${magias * 10})\n` +
          `Pontuação Total: ${total}`)