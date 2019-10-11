
describe('BILDerkennung', function () {
    it('website is reachable', function () {
        cy.visit('')

        cy.get('img[alt=BILD]').should('be.visible')
    })

    it('input is classified as bild', function () {
        cy.visit('')

        var input = "Torwart Florian beschützte Nadine vor ihrem Ex"
        cy.get('textarea').type(input)
        cy.get('input').click()

        cy.contains('BILD')
    })

    it('input is classified as welt', function () {
        cy.visit('')

        var input = "Kramp-Karrenbauers gefährlichste Reise"
        cy.get('textarea').type(input)
        cy.get('input').click()

        cy.contains('WELT')
    })
})