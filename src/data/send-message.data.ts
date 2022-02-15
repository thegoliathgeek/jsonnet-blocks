import { SendMessage } from "../interfaces/blocks/send-message.interface";

export const mockSendAMessageTextData = {
    type: 'text',
    blockId: '1',
    config: {
        whatsapp:{
            messages: [{
                language: 'en',
                id: 1,
                text: "Hello {{username}}"
            },
            {
                language: 'it',
                id: 2,
                text: "Ciao"
            },
            {
                language: 'en',
                id: 3,
                text: "How can i help you?"
            }]
        },
        messenger:{
            messages: [{
                language: 'en',
                id: 1,
                text: "Hello from messenger"
            },
            {
                language: 'it',
                id: 2,
                text: "Ciao Messenger"
            },
            {
                language: 'en',
                id: 3,
                text: "How can i help you?"
            }]
        }    }
} as SendMessage;

export const mockSendAMessageVideoData = {
    type: 'video',
    blockId: '2',
    config: {
        whatsapp:{
            fileUrls: [],
            messages: [{
                language: 'en',
                id: 1,
                text: "Hello {{username}}"
            },
            {
                language: 'it',
                id: 2,
                text: "Ciao"
            },
            {
                language: 'en',
                id: 3,
                text: "How can i help you?"
            }]
        },
        messenger:{
            fileUrls: [],
            messages: [{
                language: 'en',
                id: 1,
                text: "Hello from messenger"
            },
            {
                language: 'it',
                id: 2,
                text: "Ciao Messenger"
            },
            {
                language: 'en',
                id: 3,
                text: "How can i help you?"
            }]
        }    }
} as SendMessage;


