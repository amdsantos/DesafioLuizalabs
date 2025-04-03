# # **Teste de Automação Luizalabs**

Este projeto implementa 2 cenários de testes automatizados para o site **dev.finance$**, abrangendo a interface web e a API.


---


## 📋 **Índice**

1. [**Descrição do Projeto**](#descrição-do-projeto)
2. [**Cenários de Teste**](#cenário-de-teste) 
3. [**Tecnologias Utilizadas**](#tecnologias-utilizadas)  
4. [**Pré-requisitos**](#pré-requisitos)  
5. [**Configuração do Ambiente**](#configuração-do-ambiente)  
6. [**Como Executar os Testes**](#como-executar-os-testes)  
7. [**Estrutura do Projeto**](#estrutura-do-projeto)  
8. [**Contato**](#contato)  


---


## 📖 **Descrição do Projeto**

O objetivo deste projeto é garantir a qualidade e estabilidade do site **Advantage Online Shopping** por meio de testes automatizados. Cenários escritos em linguagem **Gherkin** tornam os testes mais compreensíveis para todos os envolvidos no processo.


---

## 🖥️ **Web**

## 📌 **Cenário de Teste 1: Adicionar uma Nova Transação**

**Dado** que o usuário acessa o DevFinance

**Quando** ele adiciona uma nova transação com os seguintes dados:

    Descrição: "Salário"
    
    Valor: "5000"
    
    Data: "2024-04-01"

**Então** a transação deve ser exibida corretamente na tabela.

**Quando** o usuário adiciona uma segunda transação com os seguintes dados:

    Descrição: "Aluguel"
    
    Valor: "-1000"
    
    Data: "2024-04-01"

**Então** a transação deve ser exibida corretamente na tabela.



---

## 📌 **Cenário de Teste 2: Edição de uma Transação Existente**

**Dado** que o usuário acessa o DevFinance

**E** adiciona uma transação com os seguintes detalhes:

    Descrição: "Aluguel"
    
    Valor: "-1000"
    
    Data: "2024-04-01"

**E** o usuário edita a transação com os seguintes dados:

    Descrição: "Aluguel Novo"
    
    Valor: "-1200"
    
    Data: "2024-04-15"

**Então** a transação deve ser exibida com os dados atualizados.


---


## 🗃️ **API**

**1 - Deve buscar todos os posts**

**2 - Fazer um novo post**

**3 - Busca por um ID**




---


## 💻 **Tecnologias Utilizadas**

Ferramenta utilizada neste projeto:

- **[Cypress](https://www.cypress.io/):** Framework de testes end-to-end.    


---


## ⚙️ **Pré-requisitos**
Node.js instalado (recomendado: versão 16 ou superior).

👉 Download Node.js
Uma IDE de JavaScript (recomendado: Visual Studio Code).

👉 Download VS Code


---


## 🔧 **Configuração do Ambiente**
Clone este repositório:

```
git clone https://github.com/amdsantos/DesafioLuizalabs.git
```

Instale as dependências:
```
npm install
```


---


## 🚀 **Como Executar os Testes**

🖥️ Executar no terminal:
```
npx cypress run
```
ou 

```
npx cypress open
```
  
🌐 Executar em um navegador específico:
```
npx cypress run --browser chrome --no-exit
```

📜 Executar com script configurado no package.json:
```
npm run test:chrome
```


---


## 📂 **Estrutura do Projeto**
Abaixo está a organização das pastas e arquivos do projeto:


```plaintext
📦 cypress
 ┣ 📂 e2e
 ┃ ┣ 📂 step_definitions
 ┃ ┃ ┣ 📂 Api
 ┃ ┃ ┃  ┗ 📜 api.cy.js
 ┃ ┃ ┗ 📂 Web
 ┃ ┃ ┃  ┗ 📜 transaction.cy.js
 ┣ 📂 fixture
 ┣ 📂 support
 ┃ ┣ 📜 commands.js                 
 ┃ ┣ 📜 e2e.js                      
 ┣ 📜 cypress.config.js             
 ┣ 📜 package.json                  
 ┣ 📜 yarn.lock                     
 ┗ 📜 README.md                     
```


---


## 📞 **Contato**
- Email: amd.mantovani@gmail.com
- LinkedIn: [Amanda Mantovani](https://www.linkedin.com/in/amd-mantovani/)
