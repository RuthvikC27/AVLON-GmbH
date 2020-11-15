const request = require('supertest');
const {
    app
} = require('../../app');

it("Sample test file for router index", async () => {
    await request(app)
        .get("/api/service1")
        .expect(200);
})