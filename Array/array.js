log = console.log

/**
 *    Array
    > insert/remove from the end O(1)
    > insert/remove from the begining O(n)
    > Access - O(1)
    > Search  - O(n)
    > push/pop O(1)
    > Shift / unshift / concat / slice / splice  - O(n)
    > forEach / map / filter / reduce - O(n )
    > 
 */

const arr = [ 1, 2, 3, "abid"]

// add a new value to end of the array.
arr.push(4)
 //removes an element form the first index O(n)
arr.shift()

// iterates all through the array O(n)  
for (const item of arr) {
    log(item)
}