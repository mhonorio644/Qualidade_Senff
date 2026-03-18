describe('Cenário 2 - Consultar Reserva', () => {

  it('Deve consultar uma reserva existente pelo ID', () => {

    const bookingId = 3782

    cy.request({
      method: 'GET',
      url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
      failOnStatusCode: false
    }).then((response) => {

      // Valida status da resposta
      expect(response.status).to.eq(200)

      // Valida estrutura da resposta
      //expect(response.body).to.have.property('firstname')
      //expect(response.body).to.have.property('lastname')
      //expect(response.body).to.have.property('totalprice')
      //expect(response.body).to.have.property('bookingdates')

      cy.log('Primeiro Nome: ' + response.body.firstname)
      cy.log('Segundo Nome: ' + response.body.lastname)
      cy.log('Preço Total: ' + response.body.totalprice)
      cy.log('Adicionais: ' + response.body.additionalneeds)
    })
  })
})