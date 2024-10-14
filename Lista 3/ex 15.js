let horaInicio = parseInt(window.prompt("Digite a hora de início do jogo:"));
let minutoInicio = parseInt(window.prompt("Digite os minutos de início do jogo:"));
let horaFim = parseInt(window.prompt("Digite a hora de término do jogo:"));
let minutoFim = parseInt(window.prompt("Digite os minutos de término do jogo:"));
let totalMinutosInicio = horaInicio * 60 + minutoInicio;
let totalMinutosFim = horaFim * 60 + minutoFim;
if (totalMinutosFim < totalMinutosInicio) {
  totalMinutosFim += 24 * 60;
}
let duracaoTotalMinutos = totalMinutosFim - totalMinutosInicio;
let duracaoHoras = Math.floor(duracaoTotalMinutos / 60);
let duracaoMinutos = duracaoTotalMinutos % 60;
window.alert("A duração do jogo foi de " + duracaoHoras + " horas e " + duracaoMinutos + " minutos.");