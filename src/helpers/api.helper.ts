

export default class ApiHelper{
    static getVariablesTemplate(): string {
        return JSON.stringify({
            "url": "{{url}}",
            "method": "{{method}}",
            "headers": "{{headers}}",
        })
    }
}