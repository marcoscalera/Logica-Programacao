let caso = window.prompt("Digite M para masculino e F para feminino");
let altura = window.prompt("Informe sua altura (ex: 1.80)");
let pi_m = (altura * altura) * 23;
let pi_f = (altura * altura) * 22;
switch (caso) {
    case "m":
    case "M":
        window.alert(`O peso ideal é ${pi_m.toFixed(2)}kg!`);
        break;
    case "f":
    case "F":
        window.alert(`O peso ideal é ${pi_f.toFixed(2)}kg!`);
        break;
    default:
        window.alert("Usuário não reconhecido!");
}
