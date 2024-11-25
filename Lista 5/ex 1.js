// 10 itens inteiros, sim pq nao digitamos eles

var zero_um = new Array (10)
console.log(zero_um)
for (let index = 0; index < zero_um.length; index++) {
    if (index % 2 === 0) {
        zero_um[index] = 0
    } else {
        zero_um[index] = 1
    }
    console.log(`O elemento que está na posição ${index} é ${zero_um[index]}`)
}
console.log(zero_um)