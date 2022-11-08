log = console.log

const set  = new Set([3,3,2,1])
let values = set.size

for (const val of set) {
    log(val)   
}

log(set)