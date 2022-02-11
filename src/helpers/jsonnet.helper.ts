import fs from 'fs';
import JsonnetService from '../services/jsonnet.service';

export default class JsonnetHelper{

    static getIfTemplate(): string {
        const ifTemplate = fs.readFileSync('./src/templates/if.template.jsonnet');
        return ifTemplate.toString()
    }

    static getAllowedUsersTemplate(): string {
        const allowedTemplate = fs.readFileSync('./src/templates/allowed.template.jsonnet');
        return allowedTemplate.toString()
    }

    static writeJsonnetFile( jsonnetTemplate: string, writeFile = true): object {
        const instance = JsonnetService.instance()
        const parsed = instance.eval(jsonnetTemplate)
        if(writeFile)
        fs.writeFileSync('./outfile.json',JSON.stringify(parsed, null, 2))
        return parsed
    }
}