var vetor = new Array(8)
vetor[0] = 10
var soma = vetor[0]
for (let index = 1; index < 8; index++) {
    vetor[index] = vetor[index-1]*2
    soma+= vetor[index]
}
console.log(`Vetor inteiro: ${vetor}`)
console.log(`Soma de todos elementos ${soma}`)