const products = [
    {name:"laptop",
     price:1000,
     count:5
    },
    {
        name:"desktop",
        price:1500,
        count:2
    },
    {
        name:"phone",
        price:500,
        count:10

    }
]

const totalvalue=products.map(item => ({ 
    name: item.name,
    totalvalue: item.price * item.count
}))

//console.log(totalvalue)



const nameofproducts=products.map(nmp)

function nmp(item) {
    return item.name }
    
    //console.log(nameofproducts)

    const count = products.map(counted)

    function counted(item)
    {
        return item.count
    }

    //console.log(count)

    const counteachproduct = products.map((item) => ({
        name: item.name,
        count: item.count,
        price:item.price

    }))

    console.log(counteachproduct)