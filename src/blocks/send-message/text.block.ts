import { mockSendAMessageTextData } from "../../data/send-message.data";
import { mockSessionVariablesData } from "../../data/session-variables.data";
import { BlockTemplate } from "../../interfaces/block-template.interface";
import { SendMessage } from "../../interfaces/blocks/send-message.interface";
import MustacheService from "../../services/mustache.service";


export class SendAMessageText extends BlockTemplate {

    private sessionVariables: {username: string};
    private blockTextData: SendMessage
    private language: string

    constructor(params: {language: string}) {
        super();
        this.blockTextData = mockSendAMessageTextData;
        this.sessionVariables = mockSessionVariablesData
        this.language = params.language
    }
    public async addText(data: any): Promise<any> {}

    public async execute(data: any): Promise<any> {
      const filteredOnLanguage = this.blockTextData.config.whatsapp.messages.filter(message => message.language === this.language)
       filteredOnLanguage.forEach((message) => {
            const renderedMessage = MustacheService.render(message.text, this.sessionVariables)
            console.log(renderedMessage)
       })
    }

    public defineEntryPoint(data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(data);
        });
    }

    public handOff(data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(data);
        });
    }

    public whatsappIntegration(data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(data);
        });
    }

    public messengerIntegration(data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(data);
        });
    }

    public addBranching(data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(data);
        });
    }

    public saveResponse(data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(data);
        });
    }
}