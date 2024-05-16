function x() {
    let x = 5
    return function y() {
        console.log(x)
    }
}
let z = x()
console.log(z)
