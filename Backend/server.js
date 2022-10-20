const expres = require('express');
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.get('/', (req,res)=>{
    res.send("Hello World")
})

app.listen(2000, ()=>console.log('PORT connected'))