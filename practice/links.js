class linkedlist{
    constructor(data){
        this.head = {
            value : data,
            next : null
        }

        this.tail = this.head
    }

    append(data){
        const newnode = {
            value : data,
            next  : null
        }

        this.tail.next = newnode
        this.tail = newnode
    }

    prepend(data){
        const newnode = {
            value : data,
            next  : this.head
        }

        this.head = newnode
    }

    traverse(req){
       let count = 0
       let current = this.head

       while(count != req){
        count ++
        current = current.next
       }
       
       return current
    }

    insert(index, data){
        const newnode = {
            value : data,
            next  : null
        }

        const prevnode = this.traverse(index-1)
        const nextnode = prevnode.next

        prevnode.next= newnode
        newnode.next = nextnode
    }

    
}

const mylist = new linkedlist(10)
 mylist.append(16)
 mylist.append(20)
 mylist.prepend(2)
 mylist.insert(1,4)
 console.log(mylist)