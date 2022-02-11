
import { ApiBlock } from "./blocks/api.block";
import { IfBlock } from "./blocks/if.block";

export const executeApiBlock = async ()=>{
   

    // Api Block
   const user =  await ApiBlock({ url: "https://jsonplaceholder.typicode.com/users/9",
    method: 'GET',})

    // If Block

    IfBlock({
        condition: 'if username == "Glenna Reichert"',
        data: {
            name: user.name
        }
    })
} 