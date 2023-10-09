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
                if(data[i].txt ==="Доходи, усього" || data[i].txt === "Витрати, усього")
                {
                    array.push(`${data[i].txt}: ${data[i].value}`);
                }
            }
            
        }
        catch(err){
            console.log("Error parson JSON" ,err);
        }
    }

const finalString = array.join('\n')
fs.writeFile("./output.txt", finalString, (err)=>{
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