describe('Deletar Reserva com Token Automático', () => {

  it('Deve gerar token e deletar uma reserva', () => {

    const bookingId = 3782 // ID da reserva que será deletada

    // Gerar token
    cy.request({
      method: 'POST',
      url: 'https://restful-booker.herokuapp.com/auth',
      body: {
        username: 'admin',
        password: 'password123'
      }
    }).then((authResponse) => {

      expect(authResponse.status).to.eq(200)
      const token = authResponse.body.token
      cy.log('Token gerado: ' + token)

      // Deletar a reserva usando o token
      cy.request({
        method: 'DELETE',
        url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
        headers: {
          Cookie: `token=${token}`
        },
        failOnStatusCode: false
      }).then((deleteResponse) => {

      if (deleteResponse.status === 201) {
          cy.log(`Reserva ${bookingId} deletada com sucesso`)
        } else if (deleteResponse.status === 404) {
          cy.log(`Reserva ${bookingId} não encontrada`)
        } else {
          cy.log(`Erro inesperado ao deletar reserva ${bookingId}: Status ${deleteResponse.status}`)
        }

      })
    })
  })
})