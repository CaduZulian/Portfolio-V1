# Portfolio-V1

Portfolio desenvolvido em 2023, com responsividade, internacionalização nativa e
integração com o github, construído de forma dinâmica, para que seja possível
reutilizá-lo sem grandes mudanças

<div align="center">
<img src=".github\project-image.png" alt="Portfolio-V1"/><br />
</div>

> Para ver a interface no figma, [clique aqui](https://www.figma.com/file/Xr6P9nuBTebM5XwTx7ibHP/Portfolio-meu?type=design&node-id=292%3A98&t=oaY8kE4cpKYlQT0M-1)

## Ferramentas utilizadas

- **[NextJS](https://nextjs.org/)**
- **[ReactJS](https://react.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[SASS](https://sass-lang.com/)**
- **[Framer-motion](https://www.framer.com/motion/)**

> Veja o arquivo [package.json](https://github.com/CaduZulian/Portfolio-V1/blob/main/package.json)

## Variáveis de ambiente

Para que seja possível rodar o projeto, é necessário inserir em um arquivo
`.env` as variáveis de ambiente. Essas variáveis são:

- `NEXT_PUBLIC_EMAIL`
- `NEXT_PUBLIC_GITHUB_USERNAME`\*
- `GA_TRACKING_ID`
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- `NEXT_PUBLIC_CV_URL`
- `NEXT_PUBLIC_GITHUB_URL`
- `NEXT_PUBLIC_LINKEDIN_URL`
- `NEXT_PUBLIC_INSTAGRAM_URL`

> \*Obrigatória

## Internacionalização

A parte de internacionalização está separada em 3 partes dentro do projeto:

- [translations.ts](src\app\constants\translations.ts) - Onde devem ser armazenados todos os textos a serem exibidos dependendo da lingua selecionada
- [languages.ts](src\app\constants\languages.ts) - Onde devem ser adicionadas as linguas suportadas, juntamente com a importação do seu respectivo ícone
- [TranslateContext](src\app\context\TranslateContext) - Onde é realizada a seleção dos textos para a lingua selecionada e o compartilhamento para todo o projeto

A parte de Carreira também possui internacionalização, mas fica armazenada em outro local e é explicado abaixo

## Carreira

A parte de carreira está armazenada em um arquivo [carrer.ts](src\app\constants\carrer.ts) na pasta de constantes. 

Essa parte também possui internacionalização, funcionando de forma muito semelhante ao resto do sistema nesse quesito

Para realizar qualquer atualização nessa aba, basta atualizar o JSON, alterando em todas as linguas disponíveis

## Rodando o projeto (desenvolvimento)

```bash
# Clone este repositório

$ git clone https://github.com/CaduZulian/Portfolio-V1.git

# Acesse a pasta do projeto no terminal/cmd

$ cd Portfolio-V1

# Instale as dependências

$ yarn install

# Execute a aplicação

$ yarn dev

# O cliente iniciará na porta: 3000 - acesse http://localhost:3000
```

## Rodando o projeto (produção)

```bash
# Clone este repositório

$ git clone https://github.com/CaduZulian/Portfolio-V1.git

# Acesse a pasta do projeto no terminal/cmd

$ cd Portfolio-V1

# Instale as dependências

$ yarn install

# Realize o build da aplicação

$ yarn build

# Execute a aplicação

$ yarn start

# O cliente iniciará na porta: 3000 - acesse http://localhost:3000
```

## TODO's

Para a primeira versão, ficou faltando um bloco de informações voltado as skills. 
Uma possível atualização seria adicionar esse bloco

## Desenvolvedores

<table align="center">
<tr>
<td> 
<div align="center">
<img style="width: 150px; border-radius: 50%;" src="https://github.com/CaduZulian.png" alt="CaduZulian"/><br />
<a href="https://github.com/CaduZulian">Carlos Eduardo Zulian</a> 
</div>  
</td>
</tr>
</table>
