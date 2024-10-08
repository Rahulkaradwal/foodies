describe('Home page', () => {
  beforeEach(()=> {
    cy.visit('http://localhost:3000/')
  })


  it('Should render the header with the slideshow', ()=>{
    cy.get('header').should('be.visible');
    cy.contains('Explore Meals').should('be.visible')
  })

  it('should display the correct headings and content', ()=>{
    cy.get(':nth-child(1) > h2').contains('How it works')
  })

  it('should get the heading', ()=>{
    cy.get('h1').contains('Food for NextLevel').should('be.visible')
    cy.get('p').contains('Tase & share').should('be.visible')
  })

  it('should have two CTA buttons with correct links', ()=>{
    cy.get('[data-testid="community"]').should('have.attr', 'href', '/community')
    cy.get('[data-testid="community"]').contains('Join the Community')

    cy.get('[data-testid="meals"]').should('have.attr', 'href','/meals')
    cy.get('[data-testid="meals"]').contains('Explore Meals')
  })

  it('sould navigate to the correct page on CTA button Click', ()=>{
    cy.get('[data-testid="community"]').click();
    cy.url().should('include', '/community')

    cy.visit('http://localhost:3000/')
    cy.get('[data-testid="meals"]').click();
    cy.url().should('include','/meals')
    cy.visit('http://localhost:3000/')
  })

  it('should pass accessibility check', ()=>{
    cy.get('img').each(($img)=>{
      cy.wrap($img).should('have.attr', 'alt')
    })
  })
})

