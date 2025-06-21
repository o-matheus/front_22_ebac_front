# Módulo 22 - Landing Page Evento ficticio.

## Menu
[Aula 1 - Inicie o desenvolvimento da Landing Page  ](#aula-1---inicie-o-desenvolvimento-da-landing-page)  
[Aula 2 - Analise o Layout ](#aula-2---analise-o-layout)  
[Aula 3 - ]()  
[Aula 4 - ]()  
[Aula 5 - ]()  
[Aula 6 - ]()  

## Aula 1 - Inicie o desenvolvimento da Landing Page

### Objetivos da aula

* Conhecer os elementos e funcionalidades que serão desenvolvidos ao longo do módulo;
* Familiarizar-se com ferramentas e configurações necessárias para criar uma Landing Page;
* Estruturar o projeto criando as pastas e arquivos iniciais;
* Configurar o ambiente de desenvolvimento;
* Importar recursos essenciais como imagens e estilos;
* Instalar e utilizar o **Parcel** como ferramenta de build e desenvolvimento.

---

### Estruturação inicial do projeto

Nesta aula, começamos a estruturar o projeto de uma Landing Page voltada para um **evento fictício**.

O professor explicou que o projeto final vai conter funcionalidades como **contagem regressiva** e **timer**.

Diferente de outras ferramentas que já utilizamos em módulos anteriores, como o **Gulp** e o **SASS**, nesta aula o foco foi trabalhar com uma nova ferramenta chamada **Parcel**.

O **Parcel** é um **bundler** que facilita o processo de desenvolvimento, cuidando de tarefas como **compilação de SCSS**, **minificação de imagens**, **hot reload**, entre outras.

---

### Instalação e configuração do Parcel

#### Inicialização do Node

Antes de instalar o Parcel, foi necessário inicializar o projeto Node com o comando:

```bash
npm init
```

Ou, se preferir pular as perguntas padrão:

```bash
npm init -y
```

Esse passo gerou o arquivo **`package.json`**.

#### Instalação do Parcel

Em seguida, instalamos o Parcel como uma dependência de desenvolvimento:

```bash
npm i --save-dev parcel
```

Isso adicionou o Parcel ao projeto sem precisar instalar plugins extras para cada tipo de tarefa (como precisávamos fazer no Gulp).

---

### Estrutura de pastas e arquivos

A estrutura inicial do projeto ficou assim:

* **src/**: Pasta onde criamos o **`index.html`**, além de subpastas para scripts e estilos;
* **src/scripts/**: Pasta onde criamos o **`main.js`**;
* **src/styles/**: Pasta onde criamos o **`main.scss`**;
* **node\_modules/**: Pasta onde o npm armazena as dependências (não deve ser versionada);
* **package.json** e **package-lock.json**: Arquivos de configuração do Node;
* **.gitignore**: Para ignorar pastas como `node_modules`, `.parcel-cache` e `dist`.

O professor também ensinou um atalho no **VS Code**:
Criar uma nova pasta e arquivo de uma só vez ao salvar um arquivo usando o caminho com barra, exemplo:

```
src/scripts/main.js
```

---

### Configuração do script de desenvolvimento

Criamos um script chamado **`dev`** dentro do bloco de scripts no **`package.json`**, para rodar o Parcel:

```json
"dev": "parcel src/index.html src/scripts/main.js src/styles/main.scss"
```

Assim, ao rodar:

```bash
npm run dev
```

O Parcel inicia o servidor local com **live reload**, sem a necessidade de usar o Live Server.

---

### Resolvendo um erro no campo `main` do `package.json`

Durante a configuração, ao tentar rodar o Parcel pela primeira vez, surgiu um erro por conta do campo `"main"` que o npm cria automaticamente durante o `npm init`.

**Solução:**
O professor orientou a **remover o campo `"main"`** do `package.json`, pois ele é destinado a bibliotecas e não faz sentido em um projeto de front-end como esse.

Após a remoção, o Parcel rodou normalmente.

---

### Gerenciamento de cache e distribuição

Ao executar o Parcel, ele gerou duas pastas automáticas:

* **`.parcel-cache/`**: Pasta de cache interno do Parcel;
* **`dist/`**: Onde ficam os arquivos finais prontos para produção.

Ambas foram adicionadas ao **`.gitignore`**, junto com a pasta `node_modules`.

---

### Minificação de imagens com Parcel

O professor também pediu que baixássemos **imagens disponibilizadas no site da EBAC**.

Após adicionar as imagens ao projeto, foi necessário criar o arquivo de configuração:

```
.parcelrc
```

Nele, configuramos regras de **compressão de imagens**, por exemplo para PNGs:

```json
{
  "transformers": {
    "*.png": ["@parcel/transformer-image"]
  },
  "optimize": {
    "png": {
      "quality": 80
    }
  }
}
```

**Importante:** O Parcel só processa imagens que **realmente estão em uso no HTML ou no JavaScript**.

Por isso, o professor pediu para adicionarmos ao menos uma imagem dentro do **`index.html`**, forçando o Parcel a processar e gerar a imagem otimizada dentro da pasta **dist**.

---

### Compilação automática do SCSS

Outro ponto positivo:
**Não foi necessário instalar um plugin específico para o SCSS.**

O Parcel faz a compilação automaticamente. Basta linkar o arquivo SCSS direto no HTML:

```html
<link rel="stylesheet" href="./styles/main.scss">
```

Quando tentei rodar o Parcel pela primeira vez, recebi um erro porque o **`main.scss`** estava vazio.
Depois de adicionar um conteúdo simples e reiniciar o Parcel, a compilação funcionou sem problemas.

---

### Configuração final do `.gitignore`

No final da aula, o professor reforçou os itens que devem estar dentro do **`.gitignore`**:

```
node_modules/
.parcel-cache/
dist/
```

---

### **Resumo da Aula 1**

* Conhecemos o objetivo geral do módulo: construir uma Landing Page de evento com contagem regressiva e timer;
* Aprendemos o que é o **Parcel** e por que ele facilita o desenvolvimento front-end;
* Inicializamos o projeto com `npm init` e instalamos o Parcel com `npm i --save-dev parcel`;
* Criamos as pastas básicas: **src**, **scripts**, **styles**, além dos arquivos **index.html**, **main.js** e **main.scss**;
* Configuramos um script de desenvolvimento `"dev"` no `package.json`;
* Corrigimos um erro relacionado ao campo `"main"` no `package.json`;
* Incluímos imagens no projeto e configuramos a minificação com o `.parcelrc`;
* Testamos a compilação automática de SCSS sem precisar de plugins adicionais;
* Criamos e organizamos o **`.gitignore`** incluindo **node\_modules**, **dist** e **.parcel-cache**;
* Entendemos que o Parcel já fornece **servidor local com auto reload**, eliminando a necessidade do Live Server.

## Aula 2 - Analise o Layout

### Objetivos da aula

* Identificar os elementos de design presentes no layout da landing page, como cores, tipografias, imagens e espaçamento;
* Analisar a disposição dos elementos na página, observando a hierarquia de informações, posicionamento de botões de chamada para ação (CTA), estrutura do cabeçalho e rodapé;
* Criar a seção **Hero** da landing page;
* Entender e conceituar o pseudo-elemento **before** no CSS.

---

### Análise do Layout no Figma

O professor iniciou a aula apresentando o layout de referência da landing page, disponível no Figma.

As principais seções identificadas foram:

1. **Header (Cabeçalho):**

   * Contém o logo da EBAC;
   * Um título com uma **contagem regressiva** (temporariamente representada com texto fixo).

2. **Call to Action (CTA):**

   * Uma aba logo abaixo da contagem, exibindo:

     * Localização;
     * Preço;
     * Data/Horário;
     * Botão com o texto **"Garantir minha vaga"**.

3. **Corpo da página:**

   * Quatro seções de conteúdo: **Front-End**, **Back-End**, **UX/UI**, e **Data Science**;
   * Cada seção contém título, texto descritivo e imagem ilustrativa;
   * O fundo dessas seções terá um **gradiente CSS**, criando divisões visuais entre os blocos.

---

### Estruturando o Header e o Hero

O professor começou a criação prática da seção **Hero**, responsável por exibir o título principal e o contador de tempo.

**Estrutura HTML:**

```html
<header class="hero">
  <div class="container">
    <img src="caminho/do/logo.png" alt="Logo EBAC TechTalks">
    <p>O maior evento de tecnologia do Brasil começa em 30d 17h 20min 56s</p>
  </div>
</header>
```

**Importante:**
Inicialmente cometi um erro de nomenclatura, usando a classe **`.header`** em vez de **`.hero`**, o que causou conflitos e impediu a exibição correta da imagem de fundo. Após corrigir, tudo voltou ao esperado.

---

### Importação da fonte Roboto

Para garantir que a tipografia estivesse de acordo com o layout, o professor indicou a importação da fonte **Roboto** via Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
```

Também aplicamos a fonte ao **body** através do CSS:

```css
body {
  font-family: 'Roboto', sans-serif;
}
```

---

### Reset CSS e configuração de container

O professor configurou um reset básico no CSS para garantir consistência entre navegadores:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

Além disso, foi criada uma classe **`.container`** para centralizar os conteúdos principais:

```css
.container {
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
}
```

#### Responsividade do Container:

```css
@media (max-width: 640px) {
  .container {
    width: 80%;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .container {
    width: 90%;
  }
}
```

---

### Aplicando a imagem de fundo no Hero

Configurações feitas para o **background image** do Hero:

```css
.hero {
  background-image: url('../img/fundo.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
```

O **`position: relative`** foi essencial para que o overlay com o pseudo-elemento funcionasse corretamente.

---

### Implementação do Overlay com `::before`

Para melhorar a legibilidade do texto sobre a imagem, foi criado um **overlay escuro** usando o pseudo-elemento **`::before`**:

```css
.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}
```

**Ajustes adicionais:**

* O **`.container`** dentro do Hero também recebeu **`position: relative`**, garantindo que o texto e a logo ficassem acima do overlay.

---

### Problemas com o Parcel ao compilar SCSS

Durante a aula, o Parcel apresentou um problema:
Após um erro no SCSS, ele **parava de monitorar as mudanças no código**, mesmo depois de o erro ser corrigido.

**Soluções indicadas:**

* Usar a mesma versão do Parcel que o professor está usando;
* Ou, como solução rápida: **salvar manualmente outro arquivo do projeto**, o que faz o Parcel "acordar" e retomar o monitoramento.

---

### Ajustes responsivos do Hero

Após adicionar o overlay, o professor focou na **responsividade do Hero**, observando que no mobile o layout estava com espaçamentos e tamanhos desproporcionais.

**Mudanças feitas com media queries:**

```css
@media (max-width: 640px) {
  .hero {
    padding: 40px 24px;
  }

  .hero img {
    width: 40px;
  }

  .hero p {
    font-size: 22px;
    line-height: 24px;
  }
}
```

**Comparativo de ajustes:**

| Elemento         | Desktop                           | Mobile                            |
| ---------------- | --------------------------------- | --------------------------------- |
| Padding Hero     | 64px top / 100px bottom           | 40px top/bottom                   |
| Logo             | 80px largura                      | 40px largura                      |
| Texto (p)        | 40px font-size / 52px line-height | 22px font-size / 24px line-height |
| Margens laterais | Sem margin lateral específica     | 24px nas laterais                 |

---

### Definindo a cor base do site

O professor também definiu o **branco como a cor principal de fonte** para o site.
Então, no **`main.scss`**, foi definido algo como:

```css
body {
  color: #ffffff;
}
```

Com exceção da seção CTA, que terá um fundo claro com texto escuro, as demais áreas trabalharão com textos brancos.

---

### Commit final da aula

Após concluir os ajustes de layout, responsividade e overlay, o professor finalizou a aula realizando um **commit no Git**, salvando todas as alterações feitas até aqui.

---

### **Resumo da Aula 2**

* Analisamos a estrutura visual da landing page no Figma;
* Criamos a seção **Hero**, com logo e título com contagem regressiva (texto placeholder por enquanto);
* Importamos a fonte **Roboto** via Google Fonts;
* Fizemos o **reset CSS** e criamos a estrutura de **container responsivo**;
* Aplicamos a **imagem de fundo** no Hero e configuramos um **overlay escuro** usando o pseudo-elemento `::before`;
* Corrigimos problemas de visibilidade aplicando o **position relative** nas seções necessárias;
* Lidamos com um **bug no Parcel** relacionado à atualização do SCSS após erro;
* Fizemos ajustes de **responsividade** no Hero, garantindo melhor visualização em dispositivos móveis;
* Definimos o **branco como cor base de fonte** do projeto;
* Finalizamos a aula com um commit no repositório Git.
