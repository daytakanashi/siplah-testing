context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://staging-siplah.tokoladang.co.id/').viewport(1280, 720)
    })
        
    it('.type() - type into a DOM element ',()=>{
        cy
        .wait(1000)
        .get('#btn_masuk')
        .click()
        .get('#usernameLoginRef')
        .type('pembeli@gmail.com')
        .get('.product-content > .mt15 > .grid-x > .large-12 > :nth-child(3) > .ng-untouched')
        .type('1234')
        .get('#reveal-masuk > .product-content > .mt15 > .grid-x > .large-12 > .button')
        .click()

        // mencari yang ingin dibeli
        cy
        .get('#tx_searchbar')
        .click()
        .type('toko penjual')
        .wait(3000)
        .get('.description')
        .click()
        .get(':nth-child(1) > .product-card > .product-body > .product-image > .name')
        .click()
        .wait(3000)
        .get('.detail-item > .button')
        .click()
        .wait(3000)
        .get('.grid-x > .button')
        .click()
        .wait(3000)
        .get('#fundingSource')
        // .click()
        .wait(3000)
        .select('BOS Reguler')
        .get(':nth-child(4) > .button')
        .click()

        // logout
        // cy
        // .get('.rounded-img')
        // .click()
        // .wait(10000)
        // .get('#nav-user > .nav-dropdown > :nth-child(4)')
        // .click()
    })

    })