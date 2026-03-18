describe('Cenário 3: Atualizar Reserva (PUT) - Com Token', () => {
 
  // RECUPERAÇÃO DO TOKEN
  Cypress.Commands.add('getAuthToken', () => {
    cy.request({
      method: 'POST',
      url: 'https://restful-booker.herokuapp.com/auth',
      body: {
        "username": "admin",
        "password": "password123"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      const token = response.body.token;
      cy.log(`Token obtido: ${token.substring(0, 10)}...`);
      
      // Retorna token para uso
      return cy.wrap(token);
    });
  });

  it('Atualiza reserva usando token autenticado', () => {
    const bookingId = 3782; // ← Seu ID da reserva
    
    const dadosAtualizados = {
      "firstname": "Yasmin",
      "lastname": "Oliveira",
      "totalprice": 2200,
      "depositpaid": true,
      "bookingdates": {
        "checkin": "2026-06-01",
        "checkout": "2026-06-07"
      },
      "additionalneeds": "Internet + Café da manhã"
    };

    //ATUALIZAÇÃO DOS DADOS
    cy.getAuthToken().then((token) => {
      
      cy.request({
        method: 'PUT',
        url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
        body: dadosAtualizados,
        headers: {
          'Content-Type': 'application/json',
          'Cookie': `token=${token}`  // Token encapsulado aqui!
        }
      }).then((responsePut) => {
        expect(responsePut.status).to.eq(200);
        //expect(responsePut.body.bookingid).to.eq(bookingId);
        cy.log(`ATUALIZADA ID: ${responsePut.body.bookingid}`);
      });
    });
  });
});
