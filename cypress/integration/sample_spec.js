describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
      cy.visit('https://todoist.com/es')
      cy.percySnapshot('homePage');
    })
  })