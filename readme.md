# Webpack 5 

Template para ser utilizado como start de uma nova aplicação/site web

## Criar o projeto npm e instalando webpack
npm init -y
npm install webpack webpack-cli --save-dev

## Criar os diretórios e arquivos iniciais
mkdir scr
mkdir config
cd src
echo > index.html
echo > index.js
mkdir assets
mkdir sass
echo > ./sass/style.sass


**index.html**
~~~
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>App.html</title>
</head>
<body>
</body>
</html>
~~~

**styles.sass**
~~~
$primary: #180cb6

.title 
    color: $primary
~~~


**index.js**
~~~
import './sass/style.sass';
import imgBTC from './assets/btc_coin.jpg';

const h1Component = (value) => {
   let h1 = document.createElement('h1')
   h1.innerHTML = value
   h1.classList.add('title');
   return h1
 }

 const imgComponent = ( valueImg, width = 300, height = 250) => {
    let elImg = new Image(width,height);
    elImg.src = valueImg;
    return elImg;
 }

document.body.appendChild( h1Component('Olá Webpack!') )
document.body.appendChild( imgComponent(imgBTC) )
~~~


## Configurando os arquivos de saída

~~~
echo > ./config/webpack.config.js
~~~



**webpack.config.js**
~~~
const path = require('path')
const { plugins_function, plugin_CSSEXTRACT } = require('./plugins/0-plugins.js')
const rules_function = require('./rules/0-rules.js')

const config_plugin = plugins_function(path)
const config_rules = rules_function()

module.exports = {
  context: __dirname,
  entry: path.resolve(__dirname,'../src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'../dist'),
  },

  module: {
    rules: config_rules
  },

  plugins: config_plugin
}
~~~


> O **webpack.config.js** foi estruturado para ter os arquivos de configuração separados em plugins e rules. 
> A estrutura de diretórios abaixo, \/plugins e \/rules, contém um arquivos para cada configuração, cada responsabilidade está isolada, com o propósito de faciliar a manutenção e o entrypoint é realizado pelo arquivo iniciando com ***0-[nome do diretorio]***


## Instalando o babel

https://webpack.js.org/loaders/babel-loader/#babel-loader-is-slow


~~~
npm install -save-dev babel-loader @babel/core @babel/preset-env 
~~~


## Plugin para geração do arquivo index.html

https://webpack.js.org/plugins/html-webpack-plugin/#root

~~~
npm install --save-dev html-webpack-plugin
~~~


## Plugin para css, scss ou sass

~~~
npm install node-sass sass-loader style-loader css-loader mini-css-extract-plugin --save-dev
~~~


## Loader de imagens (rules)

~~~
npm i file-loader --save-dev
~~~


## Produtividade de desenvolvimento (servidor do webpack)

~~~
npm i webpack-dev-server --save-dev
~~~

> package.json
>>    script: {
>>        "serve": "webpack-server --config webpack.config.js",
>>    }


## Package.json
~~~
{
  "name": "webpack5",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "npx webpack --config ./config/webpack.config.js",
    "serve": "webpack-dev-server --config ./config/webpack.config.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.16.12",
    "@babel/preset-env": "^7.16.11",
    "babel-loader": "^8.2.3",
    "css-loader": "^6.5.1",
    "file-loader": "^6.2.0",
    "html-webpack-plugin": "^5.5.0",
    "mini-css-extract-plugin": "^2.5.3",
    "node-sass": "^7.0.1",
    "sass-loader": "^12.4.0",
    "style-loader": "^3.3.1",
    "webpack": "^5.67.0",
    "webpack-cli": "^4.9.2",
    "webpack-dev-server": "^4.7.3"
  }
}
~~~

## Clone e execução

~~~
git clone https://github.com/dannyrooh/webpack5-start.git
npm i
~~~

**executando a aplicação**
~~~
npm run serve
~~~