const p = new Promise((resolve, reject) => {
    console.log('A promise está sendo executada.')
    setTimeout(() => {
        console.log('Resolvendo a promise...')
        resolve('Resultado')
    }, 3 * 1000)
})

console.log(p)

setTimeout(() => {
    console.log(p)
}, 5 * 1000)