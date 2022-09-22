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
