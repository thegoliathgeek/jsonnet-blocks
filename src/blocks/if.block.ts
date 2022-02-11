import JsonnetHelper from "../helpers/jsonnet.helper";
import { IfBlockParams } from "../interfaces/if.interface";
import MustacheService from "../services/mustache.service";


export const IfBlock = (params: IfBlockParams) => {
    const {data} = params
    const ifTemplate = JsonnetHelper.getIfTemplate()
    const renderedIfTemplate = MustacheService.render(ifTemplate, {username: data.name, ifCondition: params.condition})
    return JsonnetHelper.writeJsonnetFile(renderedIfTemplate)
}