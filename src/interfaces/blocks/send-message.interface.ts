

export enum SendMessageType{
    text = "text",
    file = "file",
    video = "video",
    audio = "audio",
    qrCode = "qrCode"
}


export enum Channels{
    whatsapp = "whatsapp",
    messenger = "messenger",
    discord = 'discord'
    
}

export interface ChannelConfig {
    messages?: Message[]
    fileUrls?: Partial<string[]>
}

export interface Message{
    id: number
    text: string
    language: string
}

export type Config = {
    [channel in Channels]?: ChannelConfig;
};

export interface SendMessage {
    type: SendMessageType
    config: Config
    blockId: string
}