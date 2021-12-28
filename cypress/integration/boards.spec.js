import { poDashboard } from '../page_object/poDashboard';
import { poLogin } from '../page_object/poLogin';
import { header } from '../page_object/header';
const faker = require('faker');

describe('work with boards', () => {

    let userData = {
        nameBox: faker.lorem.word(5)
    }

    before('login', () => {
        //cy.loginViaBackend()
        cy.visit('/')
        cy.intercept({
            method: 'POST',
            url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/login'
        }).as('login')
        poLogin.login(Cypress.env('validUserMail'), Cypress.env('validUserPass'))
        cy.wait('@login').then((interception) => {
            console.log(interception.response)
            expect(interception.response.statusCode).eq(200)
            expect(interception.response.body.user.id).eq(1627)
            expect(interception.response.statusMessage).eq('OK')
            expect(interception.response.body.user.first_organization).eq(8653)
        })
    })

    it('create a new board', () => {
        poDashboard.org.click()
        poDashboard.okBtn.click()
        cy.intercept({
            method: 'POST',
            url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/boards'
        }).as('board')
        header.createNewBoard.click()
        poDashboard.createBoardScrum(userData.nameBox, 'New Board', '')
        cy.wait('@board').then((interception) => {
            console.log(interception.response)
            expect(interception.response.statusCode).eq(201)
        })

    });

});
