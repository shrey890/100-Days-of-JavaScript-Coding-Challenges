let oddEven = (...num) => {
    return num.map(num => num % 2 == 0 ? `${num} is EVEN` : `${num} is ODD`);
}
console.log(oddEven(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

