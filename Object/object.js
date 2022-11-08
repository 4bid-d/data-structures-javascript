log = console.log

/**
  > insert/remove - O(1)
  > access - O(1) 
  > search for a value - O(n) in worst case you must search all values in an obj
  > Object .keys() / .values() -    O(n)
  > Object.entries() - O(n) 
 */
const obj  ={
    name :"bruce" ,
    age:25
}

log(obj.name)
log(obj["age"])
