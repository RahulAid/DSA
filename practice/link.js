 class LinkedList{
    constructor (data){
        this.head = {
            value : data,
            next : null
        }

        this.tail = this.head
        this.length = 1
    }

    append(data){
        const newnode = {
            value: data,
            next : null
        }

        this.tail.next = newnode
        this.tail = newnode
        this.length++

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
        let currentnode = this.head

        while(count != req){
        count ++
        currentnode = currentnode.next
        }

        return currentnode
    }

    insert(index, data){
        const newnode = {
            value : data,
            next : null
        }

        const leadernode = this.traverse(index-1)
        const nextnode = leadernode.next

        leadernode.next = newnode
        newnode.next = nextnode

    }
 }

 const mylist = new LinkedList(10)
 mylist.append(16)
 mylist.append(20)
 mylist.prepend(2)
 mylist.insert(1,4)
 console.log(mylist)
       