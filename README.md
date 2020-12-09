# j-less

## Como Utilizar
* Colocar o script "j-less" no topo do head <br>
~~~html
<head>
  <script src="j-less.js"/>
  <script src="outro-script.js"/>
</head>
~~~

<!-- Função Seletor -->

## Função Seletor
Invocar a função **$()** para selecionar o elemento

### Aplicação

1) Passar **$(. + nome do elemento)** para selecionar classes

*Exemplo*:
~~~javascript
  $('.nome-do-elemento')
~~~

2) Passar **$(# + nome do elemento)** para selecionar por id 

*Exemplo*:
~~~javascript
  $('#nome-do-elemento')
~~~

<!-- Função On  -->
## Função .on()
A função *on* é colocada diretamente no *protótipo* do **HTMLElement**, portanto todos os elementos já herdarão essa funcionalidade, basta passar o nome do evento a ser chamado.

*Exemplo*
**Chamando a função com um elemento selecionado pelo $()**
~~~javascript
  $('#meu-elemento').on('click', callback)
~~~


<!-- Event Fire -->
## Event Fire
Event fire é um disparador de eventos ou seja, passando o *elemento* e o *nome do evento* você pode aciona-lo a hora que desejar.

*Exemplo* 
~~~javascript
  eventFire(elementoHTML, 'tipodoEvento')
~~~

*Exemplo prático com o uso do seletor*
~~~javascript
  eventFire($('#meu-elemento'), 'click')
~~~

> **Autor**: César Hilário
