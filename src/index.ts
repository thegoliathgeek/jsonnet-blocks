
import { ApiBlock } from "./blocks/api.block";
import { IfBlock } from "./blocks/if.block";
import { SendAMessageText } from "./blocks/send-message/text.block";

export const executeApiBlock = async ()=>{
   

//     // Api Block
//    const user =  await ApiBlock({ url: "https://jsonplaceholder.typicode.com/users/9",
//     method: 'GET',})

//     // If Block

//     IfBlock({
//         condition: 'if username == "Glenna Reicher"', // By user
//         data: {
//             name: user.name
//         }
//     })

    const sendAMessage = new SendAMessageText({language: 'en'})

    sendAMessage.execute({})

} 