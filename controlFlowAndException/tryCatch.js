"use stricts";
const dotenv = require("dotenvc");
dotenv.config();

(()=>
{
 module.exports= async()=>
    {

        try {

            let response = {status:400, message:"Data Not Found"}
            const databaseValue = await( `value found`)
            if(databaseValue.length >0)
            {
               return response ={status:200, message:"Data Found successfully"}
            }
           

            return response;

            
        } catch (error) {
            

            console.log(error);
        }
    }

})

();
