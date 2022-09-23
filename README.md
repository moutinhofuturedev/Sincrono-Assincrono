# Javascript Assíncrono e Promises

> **Sistema Síncrono**

Um sistema síncrono é uma tarefa que é concluída após a outra. Por padrão, o javascript é uma programação síncrona.

> **Sistema Assíncrono**

Num sistema assíncrono as tarefas são executadas de maneira independente uma da outra. Com o assíncronismo, podemos interromper uma função para conseguirmos alguma outra informação necessária para continuar a execução.

> **Callback**

Callback (chamar de volta) é uma função que é passada como argumento de outra função e depois de algum tempo ela é chamada de volta.

```js
function imprimirDado(dado) {
 console.log('outras tarefas')
 console.log(dado())
}

imprimirDado(function () {
 return 'Olá Mundo'
})
```

> **Promises**

Promises é um objeto Javascript com a promessa de que algo vai será realizado. É usado para operações assíncronas.

- Carregar um arquivo
- Leitura de dados de uma API

## Uma promise tem quatro estágios

[x] Pending: Estado inicial, assim que o Objeto da promessa é iniciado.

[x] Fulfilled: A promessa foi concluída com sucesso.

[x] Rejected: A promessa foi rejeitada, houve um erro.

[x] Settled: Seja com sucesso ou com erro, ela foi finalmente concluída.
