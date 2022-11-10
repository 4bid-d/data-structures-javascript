class Queue {
    constructor(){
        this.items = []
    }

    enque(element){
        this.items.push(element)
    }

    deque(){
        return this.items.shift()
    }

    
    isEmpty(){
        return this.items.length === 0
    }
    
    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null     
    }

    size(){
        return this.items.length
    }

    print(){
        console.log(this.items.toString())
    }
     
}

const queue   = new Queue()

console.log(queue.isEmpty())

queue.enque(12)
queue.enque(13)
queue.enque(15)
console.log(queue.deque())
queue.print()
