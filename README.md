# `Projeto`
Projeto To-do-list

# `Link`
[Clique aqui!](https://folletto-to-do-list.herokuapp.com/)

# `Descrição`
O Projeto To-do-list foi desenvolvido como uma atividade dentro do curso Full-Stack Web Developer da Labenu, o qual consiste na elaboração de uma API em que retorna dados conforme as requisições enviadas. Trata-se de uma ferramenta de cadastro de usuários, tarefas e responsabilidade pelas tarefas. Os endpoints implementados são:

**createUser:** cria novo usuário. </br>
**getUserById:** obtém os dados de um usuário pelo seu ID. </br>
**editUser:** edita os dados de um usuário. </br>
**createTask:** cria uma nova tarefa. </br>
**getTaskById:** obtém as informações de uma tarefa pelo seu ID. </br>
**getAllUsers:** obtém todos os usuários cadastrados. </br>
**getAllTasksById:** obtém uma tarefa específica pelo seu ID. </br>
**searchUser:** procura por usuário(s) por termos de busca. </br>
**responsableTask:** atribui um usuário responsável por uma tarefa. </br>
**getResponsiblesTask:** obtém os usuários responsáveis por uma tarefa pelo ID desta. </br>
**getTasksAndYourResponsibles:** obtém uma tarefa pelo seu ID e seus responsáveis. </br>
**updateStatusById:** atualiza o status de uma tarefa pelo seu ID. </br>
**getTasksByStatus:** obtém todas as tarefas por um status. </br>
**getTasksDelayed:** obtém todas as tarefas que estão atrasadas. </br>
**deleteResponsibleTask:** retira um usuário responsável por uma tarefa. </br>
**searchTaskByTerm:** procura uma tarefa por termos de busca. </br>
**deleteTask:** deleta uma tarefa pelo seu ID. </br>
**deleteUser:** deleta um usuário pelo seu ID. </br>

A documentação da API pode ser acessada [aqui](https://documenter.getpostman.com/view/21552787/VUxKU9jT).

# `Modo de usar`
As requisições que podem ser feitas são:  
- cadastrar novo usuário, fornecendo nome, apelido e email.
- buscar um usuário, fornecendo o ID via path params.
- editar um usuário, fornecendo para tal o seu ID, via path params. Podem ser alterados quaisquer dados: nome, apelido ou email.
- criar uma tarefa, fornecendo para tal o título, descrição, data limite e ID do usuário que criou.
- obter os dados de uma tarefa pelo seu ID, passado via path params.
- obter todos os usuários cadastrados.
- obter as tarefas criadas por um usuário pelo seu ID, passado via query params (chave creatorUserId).
- pesquisar usuário via campo de busca, passando os termos via query params (chave query).
- atribuir responsáveis por uma tarefa, passando (via body) o id da tarefa e um array dos usuários.
- obter os responsáveis por uma tarefa, passando (via path) o id da tarefa.
- obter os dados de uma determinada tarefa e seus responsáveis, passando o ID da tarefa via path.
- atualizar o status de tarefas, passado via body um array de IDs das tarefas e o status.
- obter todas as tarefas por um determinado status, passado via query params (chave status).
- obter todas as tarefas atrasadas.
- retirar um usuário responsável por uma tarefa, passando o ID da tarefa e do usuário via path params.
- pesquisar tarefa via campo de busca, passando os termos via query params (chave query).
- deletar uma tarefa, passando seu ID via path params.
- deletar um usuário, passando seu ID via path params.

# `Instalando e rodando o projeto via clone`
Fazer o clone do projeto:
- git clone link-do-repositório

Instalar as dependências:
- npm install

Rodar o projeto:
- npm run start

# `Instalando e rodando o projeto via deploy`
Fazer as requisições para os endpoint mostrados na documentação, utilizando, por exemplo:
- Postman
- Insomnia
- Extensão Rest do VSCODE

# `Tecnologias utilizadas`
<div>
<img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
<img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white">
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">
<img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white">
</div>

# `Autor`
Evandro Paulo Folletto  </br>
<a href="https://www.linkedin.com/in/evandrofolletto/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a> <a href="https://github.com/epfolletto"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>