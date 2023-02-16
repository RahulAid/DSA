a=[
    {name:"rahul",profession:"software engineer"},
    {name:"sawan",profession:"software engineer"}
]


function disp(){
    const b= a.map((item) => ({
        name:item.name,
        profession:item.profession

    }))
    console.log(b)
}


function create(newdata){
    return new Promise((resolve,reject) => {
    a.push(newdata)
    let error = false
    if (!error)
    {
        resolve()
    }else{
        reject("data could not be entered")
    }
        })
}

async function createdisp(){ 
await create({name:"abcd",profession:"software engineer"})
disp()
}
createdisp()