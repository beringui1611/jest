const app = require('../src/app.js')
const supertest = require('supertest')
const request = supertest(app)

test("A aplicação deve responder na porta 4040", () => {
   return request.get('/').then(res => {
        const status = res.status
       expect(status).toEqual(200)
       
   }).catch(err => {
       fail(err)
    })
})