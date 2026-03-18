describe('Cenário 1: Criar Reserva (POST)', () => {
  it('Cria uma nova reserva no sistema', () => {
    // Payload da reserva (dados típicos da API)
    const novaReserva = {
      "firstname": "Mateus Teste123456",
      "lastname": "H123456",
      "totalprice": 2300,
      "depositpaid": true,
      "bookingdates": {
        "checkin": "2026-05-01",
        "checkout": "2026-05-05"
      },
      "additionalneeds": "Sem café da manhã"
    };

    // Envia POST para criar reserva
    cy.request({
      method: 'POST',
      url: 'https://restful-booker.herokuapp.com/booking',
      body: novaReserva,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      // Validações da resposta
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('bookingid');
      
      // Log com ID criado
      cy.log(`RESERVA CRIADA! ID: ${response.body.bookingid}`);
    });
  });
});