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
         .get('#btn_masuk')
         .click()
         .get('#usernameLoginRef')
         .click()
         .type('takanashiday@gmail.com')
         .get('.product-content > .mt15 > .grid-x > .large-12 > :nth-child(3) > .ng-untouched')
         .click()
         .type('123456789')
         .get('#reveal-masuk > .product-content > .mt15 > .grid-x > .large-12 > .button')
         .click()

        //  pengaturan akun
        cy
        .get('.rounded-img')
        .click()
        .get('[tabindex="0"] > .f-black')
        .click()
        cy.get('.grid-x > :nth-child(1) > .logo-dobuy > .mr-auto')
        .click()
        .get('.rounded-img')
        .click()
        .get('[tabindex="0"] > .f-black')
        .click()
        // nama toko
        .get('#namaToko-input')
        .click()
        .type('toko coba 1')
        // nama domain
        .get('#namaDomain-input')
        .click()
        .type('tokoCoba')
        // pilih kategori
        .get('#namaCategory-input')
        .click()
        .type('buku')
        // .select('buku')

    })
})