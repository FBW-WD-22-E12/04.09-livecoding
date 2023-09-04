import express from 'express'

import authRoute from './routes/authRoute.js'
import productRoute from './routes/productRoute.js'

const app = express()

app.use(express.json())

const PORT = 5000


app.use('/auth', authRoute)
app.use('/api/products', productRoute)

app.get('/', (request, response) => {

    response.send('<h1>Response from send method</h1>')
    response.send('Sending the response second time')

})

app.listen(PORT, ()=>{
    console.log(`Server running at port ${PORT}`)
}
)