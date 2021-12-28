class Header {

    get createNewBoard () {
        return cy.get('button').contains('Add new Board')
    }

}

export const header = new Header();