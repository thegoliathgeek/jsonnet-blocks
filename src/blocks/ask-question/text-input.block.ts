import { BlockTemplate } from "../../interfaces/block-template.interface";


export class AskAQuestionTextInput extends BlockTemplate{

    
        public async textInput(data: any): Promise<any> {}

        public async emailInput(data: any): Promise<any>{}
    
        public async imageDisplay(data: any): Promise<any> {}
    
        public execute(data: any): Promise<any> {
            return new Promise((resolve, reject) => {
                resolve(data);
            });
        }
    public async defineEntryPoint(data: any): Promise<any> {
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