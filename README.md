# Clone do ChatGPT

Este é um projeto que implementa um clone simplificado do ChatGPT usando a API da OpenAI. O sistema consiste em uma aplicação Node.js como backend que lida com solicitações para a API da OpenAI e um frontend com React que permite aos usuários interagir com o modelo.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes dependências instaladas:

- Node.js: [https://nodejs.org/](https://nodejs.org/) (v18.0 ou superior)
- npm (gerenciador de pacotes do Node.js): [https://www.npmjs.com/](https://www.npmjs.com/)
- Conta na OpenAI e acesso à API: [https://beta.openai.com/signup/](https://beta.openai.com/signup/)

## Configuração

1. Clone este repositório para o seu ambiente local:

   ```bash
   git clone https://github.com/brunacsilva99/ChatGPT-Clone.git
2. Navegue até o diretório do back-end do projeto:

   ```bash
   cd ChatGPT-Clone/Server
3. Instale as dependências do backend:

   ```bash
   npm install
4. Configure suas credenciais da OpenAI no arquivo .env:
   Crie um arquivo .env em ChatGPT-Clone/Server e adicione suas credenciais da API da OpenAI:

   ```makefile
   OPENAI_API_KEY=SUA_API_KEY_AQUI
   PORT=5555
5. Inicie o servidor:

   ```bash
   npm start

6. Agora, configure a interface de usuário React. Abra outra janela do terminal e vá para a pasta raiz do front-end do projeto:

   ```bash
   cd ChatGPT-Clone/Web
7. Instale as dependências do cliente:

   ```bash
   npm install
8. Inicie o cliente React:

   ```bash
   npm start
9. Acesse o aplicativo em seu navegador em http://localhost:3000.

## Uso

Após configurar o projeto, você poderá usar a interface de chat para interagir com o ChatGPT Clone e ver as respostas geradas pela API da OpenAI.

## Personalização

Você tem a flexibilidade de personalizar e aprimorar este projeto de várias maneiras, como:

- Implementar uma interface de usuário mais amigável.
- Adicionar recursos de histórico de conversação.
- Integrar com outras APIs.

## Contribuição

Contribuições são muito bem-vindas! Sinta-se à vontade para:

- Abrir problemas (issues) para relatar problemas ou sugestões.
- Enviar solicitações de alteração (pull requests) para melhorar este projeto.
