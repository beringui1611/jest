const app = require('../src/app.js')
const supertest = require('supertest')
const request = supertest(app)


describe("Cadastro de usuario", () => {
    test("Deve cadastrar um usuario com sucesso", () => {
        const time = Date.now()
        const email = `${time}@gmail.com`
        const user = { name: "Caique", email, password: "caique123" }

       return request.post('/user',)
            .send(user).then(res => {
                expect(res.status).toEqual(200);
                expect(res.body.email).toEqual(email);
            }).catch(err => {
              fail(err)
            })

    })

    test('Deve impedir que um usuario se cadastre com os dados vazios', () => {
     
        const user = { name: "", email: "", password: "" }

       return request.post('/user',)
            .send(user).then(res => {
                expect(res.status).toEqual(400)// 400 = Bad Request
            }).catch(err => {
                fail(err)
            })
    })
})