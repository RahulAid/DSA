class Node{
    constructor(data){
        this.value = data
        this.next = null
    }
}


class queue{
    constructor(){
        this.first = null
        this.last = null
        this.length = 0
    }

    enqueue(data){
        const newnode = new Node(data)
        if(this.length ==0 ){
            this.first = newnode
            this.last  = newnode
            this.length++
        }
        else{
            this.last.next = newnode
            this.last = newnode
            this.length++
        }
    }

    dequeue(){
        this.first=this.first.next
    }

    display(){
        console.log(this.first)
        console.log(this.last)
    }

    
}


const myqueue = new queue()
myqueue.enqueue(1)
myqueue.enqueue(2)
myqueue.enqueue(3)
myqueue.dequeue()
myqueue.display()