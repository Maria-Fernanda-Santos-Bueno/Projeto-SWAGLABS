Cypress.Commands.add('login', (nome, senha) => {
    cy.get('input[name=user-name]').type(nome);
    cy.get('input[name=password]').type(senha);
    cy.get('input[type=submit]').click();
})
Cypress.Commands.add('checkout', (primeiroNome, segundoNome, codigoPostal) => {
    cy.get('input[name=firstName]').type(primeiroNome);
    cy.get('input[name=lastName]').type(segundoNome);
    cy.get('input[name=postalCode]').type(codigoPostal);
    cy.get('input[type=submit]').click();
})