const path = require('path')
const express = require('express')
const { engine } = require('express-handlebars')
const musiciansDb = require('./src/models/musicians')

const app = express();

// config
const PORT = process.env.PORT || 3000

// Static 3th parties
app.use("/bootstrap-css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")))
app.use("/bootstrap-js", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")))
app.use("/jquery-js", express.static(path.join(__dirname, "node_modules/jquery/dist")))
app.use("/jquery-js", express.static(path.join(__dirname, "node_modules/jquery/dist")))
app.use("/assets", express.static(path.join(__dirname, "assets")))
app.use("/bootstrap-icons", express.static(path.join(__dirname, "node_modules/bootstrap-icons")))

// register tempalte engine
app.engine('handlebars', engine({
    layoutsDir: __dirname + '/views',
}))

app.set('view engine', 'handlebars')
app.set('views', './views')

// views
app.get('/', (req, res) => {
    res.render('home', {
        layout: 'home'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        layout: 'about'
    })
})

// API
app.get('/api/musicians', async (req, res) => {
    try {
        const musicians = await musiciansDb.getAllMusicians()
        res.json(musicians)
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
