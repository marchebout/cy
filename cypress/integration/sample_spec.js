describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
      cy.visit('https://getbootstrap.com/')
      cy.percySnapshot('homePage');
    })
  })
