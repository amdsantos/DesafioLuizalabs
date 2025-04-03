describe('DevFinance Application', () => {
  beforeEach(() => {
    cy.visit('https://maratona-discover-devfinance.netlify.app/#');

  });

  it('Deve adicionar uma nova transação', () => {
    // Adiciona a segunda transação
    cy.get('a[onclick="Modal.open()"]').click() 
    cy.get('input[name="description"]').type('Salário')
    cy.get('input[name="amount"]').type('5000')
    cy.get('input[name="date"]').type('2024-04-01')
    cy.contains('button', 'Salvar').click()

    cy.get('table tbody tr')
    .contains('Salário')
    .parent()
    .within(() => {
      cy.get('td').eq(1).invoke('text').then((text) => {
        expect(text.trim()).to.include('5.000')
      })
    })
  
    // Remove a transação
    cy.get('a[onclick="Modal.open()"]').click()
    cy.get('input[name="description"]').type('Aluguel')
    cy.get('input[name="amount"]').type('-1000')
    cy.get('input[name="date"]').type('2024-04-01')

    cy.contains('button', 'Salvar').click()
    cy.wait(500)

  })

  it('Deve simular a edição de uma transação existente', () => {
    // Adiciona a transação inicial
    cy.get('a[onclick="Modal.open()"]').click()
    cy.get('input[name="description"]').type('Aluguel')
    cy.get('input[name="amount"]').type('-1000')
    cy.get('input[name="date"]').type('2024-04-01')
    cy.contains('button', 'Salvar').click()
    
    // Verifica se a transação foi adicionada
    cy.get('table tbody tr')
      .contains('Aluguel')
      .should('be.visible')

    // Clicar no botão de edição em vez de remover
    cy.get('table tbody tr')
      .contains('Aluguel')
      .parent()
      .find('img[onclick^="Transaction.edit"]') // Supondo que haja um botão de edição
      .click()

    // Edita os dados no modal
    cy.get('input[name="description"]').clear().type('Aluguel Novo')
    cy.get('input[name="amount"]').clear().type('-1200')
    cy.get('input[name="date"]').clear().type('2024-04-15')
    cy.contains('button', 'Salvar').click()

    // Verifica se a edição foi aplicada corretamente
    cy.get('table tbody tr')
      .contains('Aluguel Novo')
      .parent()
      .within(() => {
        cy.get('td').eq(1).invoke('text').then((text) => {
          const numericValue = text.replace(/[^0-9,-]/g, '') 
          expect(numericValue).to.include('-1200')
        })
        
        cy.get('td').eq(2).invoke('text').then((text) => {
          expect(text.trim()).to.include('15/04/2024')
        })
      })
      cy.wait(500)
  })
  

});