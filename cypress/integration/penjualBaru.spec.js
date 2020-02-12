context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://staging-siplah.tokoladang.co.id/').viewport(1280, 720)
    })
        
    it('.type() - type into a DOM element', () => {

        // daftar akun baru
        // cy
        // .get('#btn_daftar')
        // .click()
        // .get('#phoneRegRef')
        // .click()
        // .type('085791651064')
        // .get(':nth-child(2) > .mt15 > .grid-x > .large-12 > :nth-child(3) > .ng-untouched')        
        // .click()
        // .type('takanashiday@gmail.com')
        // .get(':nth-child(4) > .ng-untouched')
        // .click()
        // .type('123456789')
        // .get(':nth-child(2) > .mt15 > .grid-x > .large-12 > .button')
        // .click()

         // login penjual
         cy
         .wait(10000)
         .get('#btn_masuk')
         .click()
         .get('#usernameLoginRef')
         .type('takanashi@gmail.com')
         .wait(1000)
         .get('.product-content > .mt15 > .grid-x > .large-12 > :nth-child(3) > .ng-untouched')
         .type('123456789')
         .get('#reveal-masuk > .product-content > .mt15 > .grid-x > .large-12 > .button')
         .click()

    })
})