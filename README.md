# Controle de Saída de Alunos

Este aplicativo foi desenvolvido para gerenciar o cadastro e a consulta de alunos da Etec. O objetivo principal é facilitar o controle de saída: alunos maiores de 18 anos podem sair sem autorização prévia, enquanto para alunos menores de idade, os professores podem consultar rapidamente a idade e o e-mail institucional para validar o procedimento.

A aplicação utiliza **React Native** com **Expo** no frontend e uma API em **PHP** com banco de dados **MySQL** no backend.

## Funcionalidades

-   **Tela de Boas-vindas**: Interface inicial intuitiva.
-   **Listagem de Alunos**: Visualização completa dos alunos cadastrados com suporte a busca em tempo real.
-   **Cadastro de Alunos**: Formulário para registro de Nome, E-mail Institucional, Telefone e Idade.
-   **Edição e Exclusão**: Gestão completa dos registros (CRUD).
-   **Validação Rápida**: Ferramenta de consulta para professores verificarem a maioridade dos alunos.

## Tecnologias Utilizadas

### Mobile (Frontend)
-   **React Native** & **Expo**: Desenvolvimento cross-platform.
-   **React Navigation**: Gerenciamento de rotas e navegação.
-   **React Native Animatable**: Adição de animações fluidas à interface.
-   **React Native Vector Icons**: Biblioteca de ícones (FontAwesome).

### Backend (API)
-   **PHP**: Lógica de servidor e manipulação de requisições JSON.
-   **PDO (PHP Data Objects)**: Interface segura para comunicação com o banco.
-   **MySQL**: Banco de dados relacional para persistência.

## Pré-requisitos

Para rodar este projeto localmente, você precisará de:
-   [Node.js](https://nodejs.org/) instalado.
-   [Expo CLI](https://docs.expo.dev/get-started/installation/).
-   Ambiente de servidor local (ex: [XAMPP](https://www.apachefriends.org/), [WAMP](https://www.wampserver.com/) ou [Laragon](https://laragon.org/)).
-   Celular com o app **Expo Go** instalado ou um emulador.

## Instalação e Execução

### 1. Configurar o Repositório
```bash
git clone https://github.com/RaphaLsantos/ControleSaidaAlunos.git
cd ControleSaidaAlunos
```

### 2. Configurar o Backend (API)
1.  Copie a pasta `apiAgenda` para a pasta pública do seu servidor local (ex: `htdocs` no XAMPP).
2.  Inicie o Apache e o MySQL.
3.  No **phpMyAdmin**, crie um banco de dados chamado `bdagenda`.
4.  Crie a tabela `tbagenda` executando o SQL abaixo:

```sql
CREATE TABLE tbagenda (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefone VARCHAR(20),
    idade INT
);
```

5.  Ajuste as credenciais de acesso em `apiAgenda/conexao.php` se necessário.

### 3. Configurar o Frontend
1.  Instale as dependências do Node:
```bash
npm install
```
2.  **Dica de Conectividade**: No arquivo `src/pages/principal/index.js`, substitua `localhost` pelo endereço IP da sua máquina nas chamadas `fetch` para que o celular consiga acessar a API na mesma rede Wi-Fi.

### 4. Iniciar o Aplicativo
```bash
npx expo start
```
Escaneie o QR Code com o app **Expo Go**.

## Estrutura de Pastas
-   `/src/pages`: Telas principais do aplicativo (Home e Principal).
-   `/apiAgenda`: Scripts PHP para salvar, excluir e listar dados.
-   `App.js`: Configuração de navegação e entrada do sistema.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença
Este projeto está licenciado sob a licença MIT.

---
**Manus AI**
Fevereiro de 2026
