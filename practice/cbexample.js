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


function create(newdata,callback){
    a.push(newdata)
    callback()    
}

create({name:"abcd",profession:"software engineer"},disp)
