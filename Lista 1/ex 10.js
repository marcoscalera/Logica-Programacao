let tempo = parseInt(window.prompt("Digite o tempo total em segundos!"));
let horas = parseInt(tempo/3600);
let minutos = parseInt(tempo%3600/60);
let segundos = (tempo%3600)%60;
window.alert(`O tempo digitado foi ${horas} horas, ${minutos} minutos e ${segundos} segundos`)