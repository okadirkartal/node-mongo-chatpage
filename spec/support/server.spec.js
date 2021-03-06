var request = require('request')

describe('get messages',() => {
    it('should return 200 ok',(done) => {
        request.get('http://localhost:3000/messages',(err,res)=> {
           expect(res.statusCode).toBe(200) 
           done()
        })
    })

    it('should return a list  that is not empty',(done) => {
        request.get('http://localhost:3000/messages',(err,res)=> {
           expect(res.body.length).toBeGreaterThan(40)
           done()
        })
    })

    it('should return 200 ok',(done) => {
        request.get('http://localhost:3000/messages/kartal',(err,res)=> {
           expect(res.statusCode).toBe(200) 
           done()
        })
    })

    it('name should be kartal',(done) => {
        request.get('http://localhost:3000/messages/kartal',(err,res)=> {
           expect(JSON.parse(res.body)[0].name).toEqual('kartal') 
           done()
        })
    })
})