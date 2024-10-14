let anos = parseInt(window.prompt("Digite quantos anos você tem"));
let meses = parseInt(window.prompt("Digte quantos meses você tem (ex: tenho 12 anos e 5 MESES, digite apenas 5"));
let dias = parseInt(window.prompt("Digite quantos dias você tem (ex: tenho 12 anos, 5 meses e 12 DIAS, digite apenas 12"));
let idade = (anos * 365) + (meses * 30) + dias;
window.alert("Sua idade em dias é: " + idade);