// Write a function, `doubler(arr)`, that returns a copy of the input array
// with all elements doubled. You do not need to worry about invalid input.
//
// Example:
function doubler(array) {
  return array.map(el => el * 2);
}
console.log(doubler([1, 2, 3]))  // => [2, 4, 6]

function doubler(array) {
  let NewArr = []

  for (let i = 0; i < array.length; i++) {
    let num = array[i]

    NewArr.push(num * 2)
  }
  return NewArr
}

