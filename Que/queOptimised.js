log = console.log
class Queue {
    constructor (){
        this.items  = {}
        this.rear = 0
        this.front = 0
    }

    enqueue(data){
        this.items[this.rear] = data
        this.rear++
    }
    peek(){
        return this.items[this.front] 
    }
    
    dequeue(){
        const item = this.items[this.front]
        delete  this.items[this.front]
        this.front++
        return item
    }
    print(){
        log(this.items ? this.items : "false")
    }

    isEmpty(){
        return this.rear - this.front === 0
    }

    peek(){
        return this.items[this.front]
    }
    size(){
        return this.rear - this.front
    }

}

let queue = new Queue () 

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
let i = queue.dequeue()
queue.print()
log(i)