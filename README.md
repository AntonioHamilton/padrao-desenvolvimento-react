# REFERÊNCIA PARA DESENVOLVIMENTO REACT

## ➤ Explicações iniciais

### Para instalar as dependências que estão no package.json utilize o comando "yarn", ou se estiver usando o npm use "npm install"

### Dependências instaladas: styled-components, axios

### Dentro das pastas existem arquivos js chamados apagar, pois é necessário ter algo dentro das pastas para que o git as reconheça e suba para qualquer sistema de gerenciamento (github, bitbucket, etc...). Apague-os!

## ➤ Style guide

### Airbnb JavaScript Style Guide

-   [Github](https://github.com/armoucar/javascript-style-guide 'Clique e acesse agora!')

### ESLint

-   [Docs](https://eslint.org/ 'Clique e acesse agora!')
-   [Medium](https://medium.com/@oieduardorabelo/evitando-erros-com-eslint-91b5a4bb9471 'Clique e acesse agora!')

### Prettier

-   [Docs](https://prettier.io/ 'Clique e acesse agora!')

### EditorConfig

-   [Docs](https://editorconfig.org/ 'Clique e acesse agora!')

### Style guides Javascript com ESLint, Prettier e EditorConfig

-   [Vídeo](https://www.youtube.com/watch?v=TI4v4Y8yRjw 'Clique e acesse agora!')

## ➤ Assets

### Dentro da pasta Assets estarão todos os recursos midiáticos responsáveis por dar uma vida a mais à página. Então nela serão colocados (Fotos, vídeos, arquivos de texto, Gifs, etc...).

#### Obs: para uma melhor organização é indicado criar pastas dentro de Assets para cada página respectiva da mídia. Então se a foto está na Home Page, crie uma pasta dentro do assets com esse nome e coloque a foto dentro dela.

## ➤ Components

### Componentes são as partes que formam uma página, darei exemplos de componentes para melhor entendiment: Menus, Seções (Sobre nós, Serviços, Projetos) Formulário de Login, Fórmulário de cadastro e até Footer, podem ser considerados componentes. Logo, dentro da pasta components estão esses componentes, o padrão é criar uma pasta com o nome do componente, SEMPRE COM NOME MAIÚSCULO, e colocar os arquivos index.js e style.js, dentro dessas pastas

#### Obs: Os componentes tanto do styled-components quanto das pastas deve sempre ser escrito em maiúsculo, pois o Js diferencia tags html, que estão em letras minúsculas, dos componentes dessa maneira.

## ➤ Pages

### Não tem muito segredo, as páginas estão dentro dessa pasta, Home, Página de Login, Página de Cadastro, Blog, etc... São exemplos de páginas.

## ➤ Services

### As configurações de serviços estarão concentradas nessa página, então se você estiver usando alguma API, faça as configurações dela aqui, pois isso tira a responsabilidade dos componentes de configurar as API's e facilita as chamadas multiplas da mesma API caso seja necessário.

## ➤ Styles

### Nessa pasta estarão as estilizações globais do seu projeto. Isso significa que estilizações que estão em todos os componentes devem estar nessa pasta. Exemplo: o tipo de letra que você usa em um projeto, a cor de fundo padrão da sua página, cor da fonte do seu texto, etc...

#### Obs: algumas estilizações estão prontas. O \* significa que é para todos as tags css, e padding: 0 e margin: 0, pois o navegador vem com uma margem padrão que é desnecessária 99,9% das vezes, logo se precisarmos usar uma margem ou um padding, usaremos diretamente no componente.

## ➤ Routes

### Aqui estão as rotas dos seus componentes e quais componentes as rotas estão obedecendo.
