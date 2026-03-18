describe('Cenário 2: Testar Login - Válido', () => {
   
  it('Login com credenciais VÁLIDAS - Sucesso', () => {
    cy.visit('https://www.demoblaze.com/index.html');
    
    const usuarioValido = '!@#MateusH10';
    const senhaValida = '!@#MateusH10';
    
    // Clica em Log in
    cy.contains('a.nav-link', 'Log in').click();
    
    cy.get('#loginusername').type(usuarioValido);
    cy.get('#loginpassword').type(senhaValida);
    cy.get('.btn-primary').first().click();

    // Valida erro
    //cy.contains('Wrong').should('be.visible');

    //cy.get('.btn-primary').contains('Login').click();
    
    // Validações de sucesso
    cy.contains('Welcome').should('be.visible');
    //cy.contains('Log out').should('be.visible');
    //cy.get('#login-modal').should('not.exist');
  });
});
