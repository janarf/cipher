# Cifra de César

## Introdução

A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos
primeiros tipos de criptografias conhecidos na história. É um tipo de cifra por
substituição, em que uma letra no texto original é substituída por outra,
seguindo um número fixo para essa substituição.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

Por exemplo se usarmos o deslocamento de 3:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C


## Produto

Site que permite Cifrar e decifrar mensagens utilizando a Cifra de César com uso intuitivo e layout similar a tradutores de idiomas.

## Algoritmo

O algoritmo utiliza código ASCII para fazer o deslocamento das letras no alfabeto. O deslocamento não possui valor limite e pode ser negativo.

![flowchart](https://github.com/janarf/caesar-cipher/blob/master/cipher.jpeg?raw=true)

A interface permite:

* eleger um `offset` indicando quantas posições de deslocamento de caracteres na entrada;
* inserir uma mensagem (letras maiúsculas e minúsculas) que queremos cifrar na caixa de mensagem em português;
* ver o resultado da mensagem cifrada na caixa de mensagem cifrada;
* inserir uma mensagem (letras maiúsculas e minúsculas) para ser decifrada na caixa de mensagem cifrada;
* ver o resultado da mensagem decifrada na caixa de mensagem em português.

## Como utilizar

### Para cifrar:

Inserir o texto em português na caixa "Mensagem em português", selecionar o valor da chave (ou deslocamento) e pressionar o botão "Cifrar".

A mensagem cifrada irá aparecer na caixa "Mensagem cifrada".

### Para decifrar:

Inserir o texto cifrado na caixa "Mensagem cifrada", selecionar o valor da chave (ou deslocamento) e pressionar o botão "Decifrar".

A mensagem decifrada irá aparecer na caixa "Mensagem em português".