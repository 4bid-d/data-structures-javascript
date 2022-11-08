log =  console.log

/**
 * Features 
 * key of the map dan be any type
 * map is iterable
 * map is ordered
 */

const map = new Map([[1,"abid"]])
map.set(2,"abid2")

for (const [key ,value] of map) {
    log(`${key}:${value
    }`)
}

log(map.get(1))
log(map)