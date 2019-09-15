const path = require('path')
const express = require('express')
const app = express()

const port = process.env.port || 3000

app.use(express.static(path.join(__dirname, 'dist'), { maxAge: '10m' }))

app.listen(port, () => {
  console.log(`Application is listening at http://localhost:${port}`)
})

console.log(123)

console.log(123456)

console.log(56789)
