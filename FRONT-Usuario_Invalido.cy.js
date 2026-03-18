describe('Cenário 2: Testar Login - Inválido', () => {  // ✅ Aspas fechadas + () =>
  
   it('Login com credenciais INVÁLIDAS - Falha esperada', () => {
    cy.visit('https://www.demoblaze.com/index.html');
    
    // Clica em Log in
    cy.contains('a.nav-link', 'Log in').click();
    
    // Credenciais inválidas
    cy.get('#loginusername').type('!@#MateusH');
    cy.get('#loginpassword').type('!@#MateusH');
    cy.get('.btn-primary').contains('Login').click();
    
    // Validação de falha
    cy.get('#loginusername').should('have.value', '');
    cy.contains('Wrong').should('be.visible');
    cy.get('.btn-primary').contains('Login').should('be.visible');
  });  
});