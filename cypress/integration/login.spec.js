context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://staging-siplah.tokoladang.co.id/').viewport(1280, 720)
    })
        
    it('.type() - type into a DOM element', () => {
        // cy
        // .wait(10000)
        // .get('#reveal-popup > .product-content > .close-button')
        // .click()
        cy
        .wait(10000)
        .get('#btn_masuk')
        .click()
        .get('#usernameLoginRef')
        .type('pembeli@gmail.com')
        .get('.product-content > .mt15 > .grid-x > .large-12 > :nth-child(3) > .ng-untouched')
        .type('1234')
        .get('#reveal-masuk > .product-content > .mt15 > .grid-x > .large-12 > .button')
        .click()

        cy
        .get('.rounded-img')
        .click()
        .get('#nav-user > .nav-dropdown > :nth-child(1)')
        .click()
        .wait(10000)
        cy
        .get('.grid-x > :nth-child(1) > .logo-dobuy > .mr-auto')
        .click()
        cy
        .get('.rounded-img')
        .click()
        .get('#nav-user > .nav-dropdown > :nth-child(4)')
        .click()

        

    })
})