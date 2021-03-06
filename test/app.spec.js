const request = require('supertest');
const app = require('../app');

describe ('API Server', () => {
    let api;
    beforeAll(() => {
        api = app.listen(5001, () => {
            console.log('Test server running at port 5001!')
        }) //listen in on another port to not confuse matters. test server listening at 5000 hardcoded. 
    });
    afterAll((done) => { //just built in, passing it thru. we arent actually sending thru an api to test
        api.close(done);
        console.log('Gracefully stopping test server') //gracefully - no artifacts jangling 
    });
    it('responds to get / with a status of 200', (done) => {
        request(api).get('/').expect(200, done)
    });
    it('responds to get /cats with a status 200', (done) => {
        request (api).get("/cats").expect(200, done);
    });
    it('retrieves a cat by id', (done) => {
        request(api)
            .get('/cats/3')
            .expect(200)
            .expect({id:3, name:'Mimi', age:1}, done);
    })

    //it('responds to get / with ')
    
}) 
