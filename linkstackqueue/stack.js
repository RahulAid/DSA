class stack{
    constructor(){
        this.array = []
    }

    append(data){
        this.array.push(data)
    }

    remove(data){
        this.array.pop()
    }

    display(){
        console.log(this.array)
    }

}

const mystack = new stack()
mystack.append(5)
mystack.append(6)
mystack.remove()
mystack.display()