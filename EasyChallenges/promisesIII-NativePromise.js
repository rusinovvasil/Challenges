let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello, world!")
    }, 1000)
})

promise.then((result) => {
    console.log(result);
})