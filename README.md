# Módulo 22 - Landing Page Evento ficticio.

## Menu
[Aula 1 - Inicie o desenvolvimento da Landing Page  ](#aula-1---inicie-o-desenvolvimento-da-landing-page)
[Aula 2 - ]()
[Aula 1 - ]()
[Aula 1 - ]()
[Aula 1 - ]()
[Aula 1 - ]()

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
