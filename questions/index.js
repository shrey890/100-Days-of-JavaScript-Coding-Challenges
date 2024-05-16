let secondLargestNumber = (num) => {
    if (num.length <= 1) {
        return 'Invalid input'; // Check if the array has less than 2 elements
    }
    let sortedArray = num.sort((a, b) => b - a);
    return sortedArray[1]; // Return the second element in the sorted array
}
console.log(secondLargestNumber([1])); // This will return 'Invalid input'
console.log(secondLargestNumber([10, 20])); // This will return 10

