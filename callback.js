//Callback Function

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

    function createdata(newdata,callback){
        setTimeout(() => {

            datas.push(newdata)
            callback()
            },3000)
    }

    createdata({name:"abcd",profession:"software engineer"},getdatas)
    

    

    