let pr = Number(window.prompt("Digite o valor do litro de combustível"));
let km = Number(window.prompt("Digite a quantidade de KM que vai percorrer"));
let cns = Number(window.prompt("Digite o consumo do carro de KM por litro"));
let com_nec = (km / cns);
let v_gasto = (com_nec * pr);
window.alert(`É necessário:\n${com_nec} litros de combustível\nIrá gastar:\nR$ ${v_gasto}`);