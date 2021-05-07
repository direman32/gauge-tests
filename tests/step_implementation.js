/* globals gauge*/
"use strict";
const path = require('path');

const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;

step("hit account endpoint and validate response", async () => {
    return chai.request(`${process.env.REST_API_URL}`).get(`/customers`)
    .send(iban)
        .then(function (response) {
            let body = response.body[0];
            expect(response).to.have.status(200);
            expect(body).to.have.property('reference').to.be.a('number');
            expect(body).to.have.property('summaryURL').to.be.a('string');
            expect(body).to.have.property('bondsURL').to.be.a('string');
            expect(body).to.have.property('prizesURL').to.be.a('string');
            expect(body).to.have.property('transactionsURL').to.be.a('string');
            expect(body).to.have.property('accountType').to.be.a('string').that.is.oneOf(['SOLE','JOINT']);
        });
});
