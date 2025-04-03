// cypress/e2e/jsonplaceholder-api.cy.js

describe('JSONPlaceholder API Tests', () => {
    it('Deve buscar todos os posts', () => {
      cy.request({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts'
      }).then((response) => {
        // Verificar status code
        expect(response.status).to.eq(200);
        
        // Verificar que retorna um array com 100 posts
        expect(response.body).to.be.an('array');
        expect(response.body.length).to.eq(100);
        
        // Verificar estrutura do primeiro post
        expect(response.body[0]).to.have.property('id');
        expect(response.body[0]).to.have.property('title');
        expect(response.body[0]).to.have.property('body');
        expect(response.body[0]).to.have.property('userId');
        
        // Verificar valores de alguns posts aleatórios
        const randomIndex = Math.floor(Math.random() * response.body.length);
        expect(response.body[randomIndex].id).to.be.a('number');
        expect(response.body[randomIndex].title).to.be.a('string');
        expect(response.body[randomIndex].body).to.be.a('string');
        expect(response.body[randomIndex].userId).to.be.a('number');
      });
    });
  
    it('Deve criar um novo post', () => {
      const newPost = {
        title: 'Teste de API Automatizado',
        body: 'Este é um teste automatizado de criação de post usando Cypress',
        userId: 1
      };
      
      cy.request({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        body: newPost,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        // Verificar status code
        expect(response.status).to.eq(201);
        
        // Verificar estrutura da resposta
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('title', newPost.title);
        expect(response.body).to.have.property('body', newPost.body);
        expect(response.body).to.have.property('userId', newPost.userId);
        
        // Na API JSONPlaceholder, novos posts recebem o id 101
        expect(response.body.id).to.eq(101);
      });
    });
  
    it('Deve buscar um post específico pelo ID', () => {
      const postId = 5;
      
      cy.request({
        method: 'GET',
        url: `https://jsonplaceholder.typicode.com/posts/${postId}`
      }).then((response) => {
        // Verificar status code
        expect(response.status).to.eq(200);
        
        // Verificar que retorna o post correto
        expect(response.body).to.have.property('id', postId);
        expect(response.body).to.have.property('title');
        expect(response.body).to.have.property('body');
        expect(response.body).to.have.property('userId');
      });
    });
  });