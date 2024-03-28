describe('mysuite', ()=>
{
it('Capture screenshots & Videos', ()=>
{

cy.visit("https://www.cypress.io/");

cy.screenshot('HomePage')
cy.viewport(1536, 960)
cy.get('logo')

//Automatically capture screenshot & video on failure - only when ou execute through CLI

})

})