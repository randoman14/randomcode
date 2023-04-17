const express = require('express')
const app = require('express')()
const port = 4000;







app.use(express.static('public')) 
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))



app.listen(
    port,
    () => console.log('running on port 4000')

)







app.set('views', './views')
app.set('view engine', 'ejs')


app.get('', (req, res) => {
    res.render('index', {text: 'this is ejs'})
})

app.get('/about', (req, res) => {
    res.render('about', {text: 'about'})
})


app.get('/test', (req, res) => {
    res.render('test', {text: 'test'})
})

