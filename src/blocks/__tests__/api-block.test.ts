import { ApiBlock } from "../api.block"


describe('Api Block Test', ()=>{
    test('Api Block Single User Test',async ()=>{
        const parsed = await ApiBlock({ url: "https://jsonplaceholder.typicode.com/users/9",method: 'GET'})
        expect(parsed).toMatchObject({allowed: true})
    })
})