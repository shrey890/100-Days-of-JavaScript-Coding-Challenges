const minusNum = (...num) => {
    return num.reduce((a, b) => a - b)
}
console.log(minusNum(3, 3))