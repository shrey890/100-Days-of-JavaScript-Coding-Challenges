const isPalindrome = (str) => {
    str = str.toLowerCase().replace(/\W/g, '')
    let rString = str.split('').reverse().join('')
    console.log(str)
    return str === rString ? true : false
}
console.log(isPalindrome('race car'))