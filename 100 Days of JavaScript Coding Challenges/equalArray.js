const arr = (a1, a2) => {
    if (a1.length !== a2.length) {
        return false
    }
    return a1.every((val, i) => val === a2[i])
}
console.log(arr([1, 1], [1, 1]))

console.log(arr([1, 2, 3, 5], [1, 2, 3, 4, 5]))


