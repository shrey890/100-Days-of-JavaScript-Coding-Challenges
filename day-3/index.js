const countChar = (word, char) => {
    word = word.toLowerCase();
    char = char.toLowerCase();
    totalCount = word.split('').reduce((acc, curValue) => {
        if (curValue === char) {
            acc++
        }
        return acc++
    }, 0)
    return totalCount
}
console.log(countChar('mississippI', 'I'))