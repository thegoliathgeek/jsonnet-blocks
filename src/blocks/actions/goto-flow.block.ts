import { BlockTemplate } from "../../interfaces/block-template.interface";


export class ActionsGotoFlow extends BlockTemplate{
    public addWorkspace(data: any): void {}
    public addFlow(data: any): void {}
    
    public addInteraction(data: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    public execute(data: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    public handOff(data: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    public whatsappIntegration(data: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    public messengerIntegration(data: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    public addBranching(data: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    public saveResponse(data: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    
}