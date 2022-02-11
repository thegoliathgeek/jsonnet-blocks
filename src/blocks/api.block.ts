import axios from "axios";
import ApiHelper from "../helpers/api.helper";
import JsonnetHelper from "../helpers/jsonnet.helper";
import { ApiBlockParams } from "../interfaces/api.interface";
import MustacheService from "../services/mustache.service";
import { IfBlock } from "./if.block";

export const ApiBlock = async (params: ApiBlockParams)=>{
    const apiVariableTemplate = ApiHelper.getVariablesTemplate();
    const replacedTemplate = MustacheService.render(apiVariableTemplate, {
   ...params
    })

    const response = await axios(JSON.parse(replacedTemplate))

   return response.data

   


    // const users = response.data
    // const allowedTemplate = JsonnetHelper.getAllowedUsersTemplate()
    // const renderedAllowedTemplate = MustacheService.render(allowedTemplate, {users: JSON.stringify(users)})
    // JsonnetHelper.writeJsonnetFile(renderedAllowedTemplate)


}