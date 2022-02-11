import Mustache from 'mustache';

export default class MustacheService{
    static render(code: string, data: object): string{
        Mustache.escape = (text)=> text
        return Mustache.render(code, data);
    }
}