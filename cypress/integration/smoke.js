describe('app', () => {
  it('works', () => {
    cy.visit('/')
    cy.findByText(/Go to page 2/i).click()
    cy.findByText(/Hi from the second page/i)
  })
})
