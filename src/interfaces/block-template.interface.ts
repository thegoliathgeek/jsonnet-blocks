
export abstract class BlockTemplate{
    public abstract execute(data: any): Promise<any>;
    
    public abstract handOff(data: any): Promise<any>;
    public abstract whatsappIntegration(data: any): Promise<any>;
    public abstract messengerIntegration(data: any): Promise<any>;
    public abstract addBranching(data: any): Promise<any>;
    public abstract saveResponse(data: any): Promise<any>;

    public async defineEntryPoint(data: any): Promise<any>{
        return null
    }
}