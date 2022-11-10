log  = console.log
class CirculerQue {
    constructor(capacity){
        this.items = new Array(capacity)
        this.capacity  = capacity
        this.currentLength = 0
        this.rear = -1
        this.front = -1
    }
 
    isEmpty(){
        return this.items.length === 0
    }
    
    isFull(){
        return this.currentLength === this.capacity
    }
    
    enque(element){
        if(!this.isFull()){
            this.rear = (this.rear + 1) % this.capacity 
            this.items[this.rear] = element
            this.currentLength += 1 
            if(this.front === -1){
                this.front = this.rear
            }
            return true
        }
        return false
    }
    
    deque(){
        if(this.isEmpty()){
            this.front = -1
            this.rear = -1
           return null
        }
        let item = this.items[this.front]
        if(this.front === -1 ) this.front+= 1 ; 
        // this.items.splice(this.front , 1)
        this.items[this.front] = null
        this.currentLength -= 1 
        this.front = (this.front + 1)% this.capacity
        
        return item
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

let que = new CirculerQue(3)

que.enque(1)
que.enque(2)
que.enque(3)

que.deque()
que.deque()
que.enque(45)
que.enque(34)

que.print()