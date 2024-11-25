var A = [1,5,6,7,4,8,9,2,3,5]
var B = [5,6,7,8,3,4,5,9,8,1]
var C = []
for (let index = 0; index < A.length; index++) {
    C.push(A[index] + B[index])
} 
console.log(C)