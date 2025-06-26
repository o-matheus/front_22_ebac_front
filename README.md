# Módulo 22 - Landing Page Evento ficticio.

## Menu
[Aula 1 - Inicie o desenvolvimento da Landing Page  ](#aula-1---inicie-o-desenvolvimento-da-landing-page)  
[Aula 2 - Analise o Layout ](#aula-2---analise-o-layout)  
[Aula 3 - Construa o cabeçalho ](#aula-3---construa-o-cabeçalho)  
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

## Aula 3 - Construa o cabeçalho

### Objetivos da aula

* Compreender a estrutura e organização do cabeçalho da landing page;
* Dominar o uso de estilos CSS para o cabeçalho de acordo com o design especificado;
* Tornar o cabeçalho responsivo.

---

### Estruturação da Infos Bar

Nesta aula, o foco foi construir a **Infos Bar**, aquela **barra branca com informações de localização, preço e data**, além do botão **"Garantir minha vaga"**, localizada dentro do **Hero**, mas tratada como um **componente separado**.

#### Estrutura HTML da Infos Bar

Logo após o parágrafo da contagem regressiva, o professor criou uma `<div>` com a classe **`.infos-bar`**, contendo uma lista `<ul>` com a classe **`.infos-bar__infos`**.

Cada item da lista (`<li>`) recebeu a classe **`.infos-bar__info`**, seguindo a **metodologia BEM**.

**Estrutura HTML:**

```html
<div class="infos-bar">
  <ul class="infos-bar__infos">
    <li class="infos-bar__info">
      <b>Localização</b>
      Allianz Parque - Barra Funda - São Paulo/SP
    </li>
    <li class="infos-bar__info">
      <b>Preço</b>
      A partir de R$ 129,00
    </li>
    <li class="infos-bar__info">
      <b>Quando</b>
      10/10/1010
    </li>
  </ul>
  <a href="#" class="button button--primary">Garantir minha vaga</a>
</div>
```

---

### Organização do CSS/SASS

Diferente de outras aulas, onde as estilizações eram feitas por **sessões** (exemplo: Hero, Footer), o professor decidiu tratar a **Infos Bar como um componente isolado**, criando uma pasta dentro de **styles/components/** para organizar os estilos.

#### Importação no SCSS

A dúvida inicial foi sobre como importar o novo arquivo SCSS de dentro de uma pasta.
O professor explicou que basta fazer o `@use` apontando para o caminho da pasta, ignorando o underline e a extensão do arquivo.

Exemplo:

```scss
@use 'components/infos-bar';
```

---

### Estilização da Infos Bar

**Estilos aplicados à `.infos-bar`:**

* **Padding:** `16px 24px`;
* **Background:** Branco;
* **Display:** Flex;
* **Gap:** `40px`;
* **Justify-content:** `space-between`;
* **Align-items:** `center`;

**Estilo dos itens da lista (`.infos-bar__info`):**

* **Font-size padrão:** `14px`;
* **Negrito (`<b>` dentro dos itens):**

  * **Font-size:** `18px`;
  * **Display:** `block` (para forçar quebra de linha abaixo do título);
  * **Cor:** Preta (`#000`);

**Outros ajustes:**

* Removemos as bolinhas padrão da lista com:

```css
.infos-bar__infos {
  list-style: none;
}
```

* Adicionamos uma **margem de 8px** abaixo do `<b>` para garantir espaçamento entre o título e o texto.

---

### Criação e estilização do botão

Foi criado um novo componente chamado **`buttons`** dentro de **components**.

**Estilo base para todos os botões:**

```css
.button {
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  white-space: nowrap;
}
```

**Variação para o botão primário (`.button--primary`):**

* **Cor do texto:** Branco;
* **Background:** `#4F2AC3`;

---

### Ajustes de responsividade

#### No Tablet (max-width: 1024px):

Apenas redução no **gap entre os itens da lista**, para dar mais espaço visual.

#### No Mobile (max-width: 640px):

As principais mudanças:

* Alteração de **padding** da `.infos-bar` para `16px` em todos os lados;
* Alteração no **gap** da lista para `15px`;
* Aplicação de **display block** tanto na `.infos-bar__infos` quanto nos itens `.infos-bar__info`, forçando cada informação a ocupar uma linha inteira;
* Ajuste do botão para **centralizar melhor o conteúdo** e evitar quebra desnecessária de linha;
* Redução de tamanhos de fonte e margem para melhor adaptação visual.

**Exemplo de media query para mobile:**

```scss
@media (max-width: 640px) {
  .infos-bar {
    padding: 16px;
    flex-direction: column;
    gap: 15px;
  }

  .infos-bar__infos {
    display: block;
  }

  .infos-bar__info {
    display: block;
    margin-top: 16px;
  }

  .button {
    margin-top: 16px;
  }
}
```

---

### Discussão sobre boas práticas

Durante a aula, o professor comentou sobre a importância de **trabalhar com um layout pronto (como o Figma)** antes de codar.
Isso evita retrabalho, erros de alinhamento e confusões de design.

Também destacou o valor de já pensar na **responsividade durante o desenvolvimento**, ao invés de fazer ajustes apenas ao final.

---

### Problemas encontrados e soluções

* **Dúvida inicial:** Como importar um arquivo SCSS de dentro de uma subpasta → Resolvido com o uso de `@use 'caminho/arquivo';`.
* **Cor preta que não aplicava no `<b>`:** Foi reforçada a cor diretamente no seletor `.infos-bar__info b`.
* **Espaçamento insuficiente entre o botão e os itens da lista no mobile:** Resolvi ajustando o padding e o gap manualmente via media query.

---

### **Resumo da Aula 3**

* Construímos a **Infos Bar**, com localização, preço, data e botão CTA;
* Adotamos a **metodologia BEM** para nomear as classes;
* Organizamos o CSS/SASS criando a pasta **components** e usando `@use` para importar;
* Estilizamos a barra com **flexbox**, **gap**, **alinhamento vertical** e **espaçamentos específicos**;
* Criamos o componente **Buttons**, definindo o estilo padrão e a variação **Primary**;
* Trabalhamos desde já a **responsividade** com media queries para tablet e mobile;
* Discutimos sobre a importância de ter o **layout pronto no Figma** antes de codar.

## Aula 4 - Insira Imagem de Destaque

### Objetivos da aula

* Inserir imagens responsivas na landing page;
* Aplicar gradientes de fundo em elementos HTML usando CSS;
* Melhorar a responsividade do layout da landing page.

---

### Estrutura inicial da seção de destaque (Event)

O professor começou criando uma nova **section** para exibir o conteúdo do evento **Front-End**, que inclui:

* Um título (h2);
* Um parágrafo descritivo (p);
* Uma imagem ilustrativa.

**Estrutura base criada:**

```html
<section class="event">
  <div class="container">
    <div class="event__details">
      <h2 class="event__details__title">Front-End</h2>
      <p class="event__details__description">Texto descritivo do evento.</p>
    </div>
    <img src="images/front-end.png" alt="Front-End" class="event__image">
  </div>
</section>
```

---

### Aplicação da metodologia BEM

O professor reforçou o uso da **metodologia BEM** na nomenclatura das classes:

* A **section** recebeu a classe `event`;
* O container de texto virou `event__details`;
* O título ganhou a classe `event__details__title`;
* O parágrafo recebeu `event__details__description`;
* A imagem foi classificada como `event__image`.

---

### Estilização da seção Event

#### Estilo das descrições (event\_\_details\_\_description):

* **Font-size:** 16px (padrão dos parágrafos, sem necessidade de reespecificar);
* **Line-height:** 16px, para manter a proporção visual do Figma;
* **Margin-top:** 16px entre o título e o parágrafo.

#### Estilo da imagem (event\_\_image):

* **Max-width:** 360px;
* **Margin-right:** 40px (espaço entre o texto e a imagem no layout desktop).

---

### Aplicação de gradiente de fundo

O professor explicou como criar um gradiente usando a propriedade **`background-image`** com **linear-gradient**.

**Exemplo de aplicação:**

```css
.event {
  background-image: linear-gradient(90deg, #color1, #color2);
}
```

**Parâmetros principais:**

* **Angulação:** Em graus (ex: `90deg`);
* **Cor inicial:** Exemplo: `#color1`;
* **Cor final:** Exemplo: `#color2`;

O professor mostrou como identificar as cores e o ângulo diretamente no Figma, clicando na área do fundo da seção.

---

### Responsividade da seção Event

O professor iniciou os ajustes para garantir que a seção ficasse boa em **tablet** e **mobile**.

#### Abordagem no código:

* Primeiramente o professor escreveu todas as regras para o desktop;
* Em seguida, usou um único **@media** específico para mobile (`max-width: 640px`), ajustando apenas as propriedades necessárias.

#### Ajustes feitos no mobile:

* Alteração da disposição de layout de **flex para block**;
* Remoção da margem lateral entre os blocos;
* Centralização da imagem com **`margin: 0 auto;`**;
* Aplicação de **max-width: 80%** na imagem para melhor encaixe em telas menores;
* Redução de espaçamentos e padding para melhor aproveitamento de tela.

**Exemplo de media query:**

```css
@media (max-width: 640px) {
  .event .container {
    display: block;
  }

  .event__image {
    max-width: 80%;
    margin: 0 auto;
  }

  .event__details {
    margin-right: 0;
  }
}
```

---

### Boas práticas reforçadas na aula

* O professor recomendou **concentrar os media queries após todas as configurações de desktop**, para manter a organização do código e facilitar a manutenção.
* Também destacou a importância de **ter um layout bem definido no Figma antes de codar**, evitando retrabalho.

---

### **Resumo da Aula 4**

* Criamos a seção **Event** com título, descrição e imagem;
* Utilizamos a metodologia **BEM** para nomeação de classes;
* Aplicamos um **gradiente de fundo** usando `linear-gradient`;
* Ajustamos **espaçamentos** e **alinhamentos** com base no layout do Figma;
* Trabalhamos a **responsividade**, usando media queries para mobile;
* Adotamos a prática de **fazer os estilos mobile após finalizar os estilos desktop**.

# Aula 5 – Cria a Descrição e a Organização do Evento

## 🎯 Objetivos da aula

* Compreender a importância da organização do código para o projeto da landing page
* Dominar a criação de variáveis CSS
* Aplicar animações com bibliotecas externas

---

## 🧱 Estruturação do Projeto

A aula começou com a criação do arquivo `_variables.scss` dentro da pasta `styles`. O objetivo era centralizar valores recorrentes como **cores** e outras propriedades, facilitando alterações futuras no projeto.

Inicialmente, o professor utilizava nomes de variáveis mais descritivos, como `text-color`, `background-color`, etc. Com o avanço da aula, ele passou a utilizar nomes baseados no contexto visual, como `blue1`, `blue2`, `pink1`, `yellow1`, etc., refletindo melhor as cores do design no Figma.

### 🎨 Variáveis criadas:

```scss
$blue1: #b6caff;
$blue2: #442bdb;
$pink1: #89223b;
$yellow1: #9c791d;
$text-color: #ffffff;
$secondary-color: #000000;
$background-color-button: #4f2ac3;
$background-color-infosbar: #ffffff;
$background-color-overlay: #000000;
```

Foi feita também uma organização visual do arquivo usando comentários para separar por categorias, como:

```scss
// Cores do gradiente
// Cores dos textos
```

Além disso, para usar essas variáveis em componentes SCSS separados por pastas, foi necessário importar o arquivo corretamente com:

```scss
@use '../variables';
```

---

## 🧩 Organização das Seções

O professor passou a utilizar modificadores para definir a cor de fundo de cada seção temática da página. As seções foram:

1. `frontend` – azul para rosa
2. `uxui` – rosa para amarelo
3. `datascience` – amarelo para rosa
4. `backend` – azul para azul

A estrutura de cada seção seguiu o padrão:

```html
<section class="event event--frontend">
  <div class="event__container">
    <div class="event__details">
      <h2 class="event__details__title">Front-End</h2>
      <p class="event__details__description">Horário, etc.</p>
    </div>
    <img class="event__img" src="..." alt="Front-End" />
  </div>
</section>
```

As classes seguem o padrão BEM e cada parte da interface foi modularizada com clareza.
A largura das imagens também foi ajustada conforme necessário (primeira seção com `600px`, demais com `500px`).

---

## 🔄 Inversão de Layout com Flex

Para alternar a ordem das imagens e textos nas seções (como imagem à esquerda ou à direita), foi criado um modificador chamado `event--image-left`, que aplica a seguinte regra:

```scss
flex-direction: row-reverse;
```

Dessa forma, é possível alternar o layout **sem modificar a estrutura HTML**. O espaçamento entre imagem e texto foi mantido com:

```scss
gap: 40px;
```

---

## ✨ Animações com AOS (Animate On Scroll)

A biblioteca [AOS](https://michalsnik.github.io/aos/) foi introduzida para aplicar animações suaves ao scroll. O processo de instalação incluiu:

1. Adicionar o link do CSS do AOS no `<head>` do `index.html` (logo após o `main.css`);
2. Adicionar o script do AOS antes do fechamento da tag `</body>`;
3. Inicializar a biblioteca no JS (caso necessário);
4. Adicionar o atributo `data-aos` nos elementos desejados.

Exemplo de uso:

```html
<div data-aos="fade-right"> ... </div>
```

⚠️ Durante os testes, foi percebido que aplicar a animação na **seção inteira** causava um “efeito de tela branca” incômodo durante o carregamento.
**Solução aplicada**: adicionar o `data-aos` **apenas ao conteúdo interno**, como o texto e não ao `section` completo.

---

## ✅ Conclusão

Essa aula destacou a importância da **organização do código**, do uso de **variáveis CSS** para facilitar a manutenção e da implementação de **animações com bibliotecas externas**, como a AOS, para enriquecer a experiência do usuário.
Também foi possível aprofundar o uso de boas práticas como **modificadores CSS com BEM**, responsividade e uso de `flexbox` para controle de layout.
