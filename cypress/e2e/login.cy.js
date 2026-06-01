describe('login', () => {    // implementar depois
  



  it('login com sucesso', () => {
    cy.visit('https://automationpratice.com.br/login')
    cy.wait(10000)
    cy.get('input[type="email"]').type('pedro.teste@.com')
    cy.wait(10000)
    cy.get('input[type="password"]').type('123456')
    cy.wait(10000)
    cy.contains('button', 'login', { matchCase: false }).click()
    cy.wait(10000)
    // Ajuste o assert abaixo conforme o comportamento real da aplicação
    // cy.get('#swal2-title').should('have.text', 'Login realizado')
  });

  it('login com senha inválida ', () => {
    cy.visit('https://automationpratice.com.br/login')
    cy.wait(10000)
    cy.get('input[type="email"]').type('pedro.teste@.com')
    cy.wait(10000)
    cy.get('input[type="password"]').type('123')
    cy.wait(10000)
    cy.contains('button', 'login', { matchCase: false }).click()
    cy.wait(10000)
    // cy.get('#swal2-title').should('have.text', 'senha inválida')
  });

  it('login com e-mail inválido ', () => {
    cy.visit('https://automationpratice.com.br/login')
    cy.wait(10000)
    cy.get('input[type="email"]').type('zazazazazaza')
    cy.wait(10000)
    cy.get('input[type="password"]').type('123456')
    cy.wait(10000)
    cy.contains('button', 'login', { matchCase: false }).click()
    cy.wait(10000)
    // cy.get('#swal2-title').should('have.text', 'Login Inválido')
  });




});
