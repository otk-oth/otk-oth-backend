
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const router = express.Router()

router.get('/', (err, res) => {
    res.send("Helllo World!")
})

app.use(router)

app.listen(PORT, err =>{
    if(err) console.log(err)
    else console.log('서버 ON')
})



