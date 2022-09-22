// setTimeout(function, delay)

const function1 = () => console.log('delay 1 em execução...')
const function2 = () => console.log('delay 2 em execução...')
const function3 = () => console.log('delay 3 em execução...')

// setTimeout(function1, 6000) // function1 dentro do setTimeout, funciona como uma callback,uma função sendo chamada dentro de outra função q retorna depois de um tempo
// setTimeout(function2, 9000)
// setTimeout(function3, 12000)

//Exemplo com API
const https = require('https') // função do Node (require)
const API = "https://api.github.com/users/moutinhofuturedev"

https.get(API, response => { // o response retorna um tempo depois
    return console.log(response.statusCode)
})
console.log('conectando API')
