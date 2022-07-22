describe('Teste enjoei' , () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
})

it('usuario valido', () => {  
    cy.login('standard_user', 'secret_sauce')
    cy.contains('span','Products').should('be.visible');
})
it('usuario nome invalido', () => {
    cy.login('maria', 'secret_sauce')
    cy.contains('h3','Epic sadface: Username and password do not match any user in this service').should('be.visible');
})
it('usuario senha invalida', () => {
    cy.login('standard_user', '123456')
    cy.contains('h3','Epic sadface: Username and password do not match any user in this service').should('be.visible');
})
it('usuario compra produto', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.contains('span','Products').should('be.visible');
    cy.get('#add-to-cart-sauce-labs-backpack').click();
    cy.contains('.shopping_cart_badge','1').should('be.visible');
    cy.get('a[class="shopping_cart_link"]').click();
    cy.contains('span','Your Cart').should('be.visible');
    cy.get('.checkout_button').click();
    cy.checkout('Maria Fernanda', 'Santos Bueno','13348891')
    cy.contains('span','Checkout: Overview').should('be.visible');
    cy.get('#finish').click();
    cy.contains('span','Checkout: Complete!').should('be.visible');
})
})

