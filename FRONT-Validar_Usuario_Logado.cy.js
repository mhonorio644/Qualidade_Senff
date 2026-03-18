describe('Cenário 3: Validar Autenticação Bem-Sucedida', () => {
  it('Verifica usuário logado após login correto', () => {
    // Use o usuário criado anteriormente (do Command Log)
    const usuarioValido = '!@#MateusH10'; // ← COLE SEU USUÁRIO AQUI
    const senhaValida = '!@#MateusH10';       // ← COLE SUA SENHA AQUI
    
    cy.visit('https://www.demoblaze.com/index.html');
    
    // 1. Abre modal de login
    cy.contains('Log in').click();
    
    // 2. Aguarda modal abrir
    //cy.get('#exampleModal').should('be.visible');
    
    // 3. Preenche credenciais válidas
    cy.get('#loginusername').type(usuarioValido);
    cy.get('#loginpassword').type(senhaValida);
    
    // 4. Clica login
    cy.get('.btn-primary').first().click();
    
    // ✅ VALIDAÇÕES DE AUTENTICAÇÃO BEM-SUCEDIDA:
    
    // Validação 1: Mensagem de boas-vindas
    cy.contains('Welcome').should('be.visible');
    
    // Validação 2: Botão Logout aparece (principal indicador)
    cy.contains('Log out').should('be.visible');
    
    // Validação 3: Modal fechou
    //cy.get('#exampleModal').should('not.exist');
    
    // Validação 4: Navbar mudou (usuário logado)
    cy.get('.nav-link').should('contain', 'Log out');
    
    // Validação 5: Carrrinho acessível (recurso liberado)
    cy.contains('Cart').should('be.visible');
    
    // LOG DE SUCESSO
    cy.log(`✅ USUÁRIO ${usuarioValido} LOGADO COM SUCESSO!`);
  });
});
