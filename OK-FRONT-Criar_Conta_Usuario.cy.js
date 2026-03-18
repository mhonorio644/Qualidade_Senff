describe('Cenário 1: Criar Conta de Usuário', () => {
  it('Cria uma nova conta com dados válidos', () => {
    // Acessa a página inicial
    cy.visit('https://www.demoblaze.com/index.html');
    
    // Clica no botão Sign up (no canto superior direito)
     cy.contains('a.nav-link', 'Sign up').click();

    // Preenche o formulário
    const usuario = `testuser_${Date.now()}`; // Gera usuário único para evitar duplicatas
    const senha = 'Senha123!';
    
    //cy.get('#modal-content').should('be.visible');

    cy.get('#sign-username').type(usuario);
    cy.get('#sign-password').type(senha);
    cy.get('.btn-primary').contains('Sign up').click();
    
    // MOSTRA O USUÁRIO CRIADO
    cy.log('👤 USUÁRIO CRIADO COM SUCESSO!');
    cy.log(`🆔 Username: ${usuario}`);
    
  });
});
