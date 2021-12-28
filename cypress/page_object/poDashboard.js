class PoDashboard {

    get org () {
        return cy.get('a[class="vs-c-list__btn vs-c-list__organisation"]')
    }

    get modalWindow () {
        return cy.get('.vs-c-modal__body')
    }

    get okBtn () {
        return this.modalWindow.find('button').last()
    }

    get nameField () {
        return cy.get('input[name="name"]')
    }

    platformSel (num) {
        switch(num){
            case '1':
                cy.get('span[name="type_scrum"]')
                break;
            case '2':
                cy.get('span[name="type_kunban"]')
                break;
            default:
                cy.log('Wrong number. Only accept 1 and 2.')
        }
    }

    get boardName () {
        return cy.get('h2')
    }

    get activeBtn () {
        return cy.get('ul[class="vs-c-dot-pagination"]')
    }

    selectionBoard (name) {
        switch(name) {
            case 'New Board':
                this.boardName.should('contain', 'New Board')
                this.activeBtn.children().first().should('have.class', 'active')
                this.activeBtn.children().eq(1).should('have.class', '')
                this.activeBtn.children().eq(2).should('have.class', '')
                this.activeBtn.children().last().should('have.class', '')
                break;
            case 'Board Type':
                this.boardName.should('contain', 'Board Type')
                this.activeBtn.children().first().should('have.class', '')
                this.activeBtn.children().eq(1).should('have.class', 'active')
                this.activeBtn.children().eq(2).should('have.class', '')
                this.activeBtn.children().last().should('have.class', '')
                break;
            case 'Board Logo':
                this.boardName.should('contain', 'Board Logo')
                this.activeBtn.children().first().should('have.class', '')
                this.activeBtn.children().eq(1).should('have.class', '')
                this.activeBtn.children().eq(2).should('have.class', 'active')
                this.activeBtn.children().last().should('have.class', '')
                break;
            case '':
                this.activeBtn.children().first().should('have.class', '')
                this.activeBtn.children().eq(1).should('have.class', '')
                this.activeBtn.children().eq(2).should('have.class', '')
                this.activeBtn.children().last().should('have.class', 'active')
                break;
            default:
                cy.log("Coudn't find the name.")
                break;
        }
    }

    createBoardScrum(name, page1, page4, num) {
        this.nameField.should('have.value', '')
        this.okBtn.should('have.attr', 'disabled')
        this.selectionBoard(page1)
        this.nameField.type(name) 
        this.okBtn.click()
        this.platformSel(num).click()
        this.okBtn.click()
        this.okBtn.click()
        this.selectionBoard(page4)
        this.okBtn.click()
    }
} 

export const poDashboard = new PoDashboard();