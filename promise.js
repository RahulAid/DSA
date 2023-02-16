const datas=[
    {name:"rahul", profession:"software engineer"},
    
    {name:"sawan",profession:"software engineer"},
    ]

    function getdatas()
    {
        setTimeout(() => {
            
            const key = datas.map((data) => ({
                name:data.name,
                profession:data.profession
                } ))
                console.log(key)

             },1000)
    
    }

    function createdata(newdata){
        return new Promise((resolve,reject) =>{

        setTimeout(() => {

            datas.push(newdata)
            let error=false
            if(!error)
            {
                resolve()
            }else{
                reject("Could not fetch data")
            }
            },2000)
    })}

    createdata({name:"abcd",profession:"software engineer"}).then(getdatas).catch(err => console.log(err))