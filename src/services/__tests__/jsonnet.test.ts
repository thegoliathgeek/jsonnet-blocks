import JsonnetService from "../jsonnet.service";
import MustacheService from "../mustache.service";


describe('Jsonnet Service Test', () => {

    test('Validate Mustache Render', ()=>{
        expect(MustacheService.render("{{name}}",{name:"dhanush"})).toBe("dhanush")
    })

    test('Validate Jsonnet Render', ()=>{
        expect(JsonnetService.evaluate(
            '{"users": []}')).toMatchObject({
                users: []
            })
    })
})