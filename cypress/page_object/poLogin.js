class Login {

    get userField () {
        return cy.get('input[type="email"]')
    }

    get passField () {
        return cy.get('input[type="password"]')
    }

    get logInBtn () {
         return cy.get('button[type="submit"]')
    }

    login(username, pass) {
        this.userField.type(username)
        this.passField.type(pass)
        this.logInBtn.click()
    }
}

export const poLogin = new Login();