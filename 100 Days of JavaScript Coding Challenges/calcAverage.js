const calcAverage = (n) => {
    return n.reduce((acc, cur) => acc + cur, 0) / n.length
}

console.log(calcAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

