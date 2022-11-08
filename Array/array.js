log = console.log
const arr = [ 1, 2, 3, "abid"]

// add a new value to end of the array.
arr.push(4)
 //removes an element form the first index O(n)
arr.shift()

for (const item of arr) {
    log(item)
}