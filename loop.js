for(let i = 1; i <= 4; i++) {
    let result = '';
    for(let j = 1; j <= i; j++) {
        result += j;
    }
    console.log(result);
}

const arr = ['apple', 'banana', 'cherry'];
arr.splice(1, 0, 'avocado', 'blueberry');
console.log(arr);
// Output: [ 'apple', 'avocado', 'blueberry', 'banana', 'cherry' ]