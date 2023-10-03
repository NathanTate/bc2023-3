const fs = require("node:fs");
var array = []
fs.readFile("./data.json", "utf-8", (err, jsonString) => {
    if(err)
    {
        console.log(err);
    }
    else
    {
        try{
            const data = JSON.parse(jsonString);
            for (let i = 0; i < Object.keys(data).length; i++)
            {
                array.push(`${data[i].txt}, усього:${data[i].value}`);
            }
            
        }
        catch(err){
            console.log("Error parson JSON" ,err);
        }
    }


fs.writeFile("./output.txt", JSON.stringify(array ,null, 2), (err)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("data successfuly written");
    }
});
});