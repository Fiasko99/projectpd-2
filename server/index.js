const express = require("express");
const bodyParser = require("body-parser"); 
const multer = require('multer')
const cors = require("cors");
const {PORT} = require('./config/PORT');
const {
    Seq, user, status, product, markProductByUser, page
} = require("./modules/seq");
const {
    statuses, users, products, marks, pages
} = require('./modules/dataTables')

const app = express();

var corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/products', express.static('assets'));
app.use('/users', express.static('userAvatars'));

const storageProducts = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "./assets");
    },
    filename: (req, file, cb) =>{
        cb(null, v4()+"_"+file.originalname);
    }
});

const storageUsers = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "./userAvatars");
    },
    filename: (req, file, cb) =>{
        cb(null, v4()+"_"+file.originalname);
    }
});

app.get('/', async (req, res) => {
    res.redirect('http://localhost:8080/')
})

app.get('/api/users/:id', async (req, res) => {
    const usersData = await user.findOne({
        where: { id: req.params.id },
        attributes: ['statusId', 'name', 'login', 'avatar']
    })
    res.status(200).send(await usersData)
})

app.get('/api/users/:login/:password', async (req, res) => {
    const usersData = await user.findOne({
        where: {
            login: req.params.login,
            password: req.params.password
        },
        attributes: ['statusId', 'name', 'login', 'avatar']
    })
    res.status(200).send(await usersData)
})

app.get('/api/users', async (req, res) => {
    const usersData = await user.findAll({
        where: { statusId: 3 },
        attributes: ['id', 'name', 'login', 'avatar']
    })
    res.status(200).send(await usersData)
})

app.get('/api/products', async (req, res) => {
    const productsData = await product.findAll({
        attributes: ['id', 'title', 'body', 'img']
    })
    res.status(200).send(await productsData)
})

app.get('/api/marks', async (req, res) => {
    
})

app.get('/api/statuses', async (req, res) => {
    
})

app.get('/api/pages', async (req, res) => {
    const pagesData = await page.findAll({
        attributes: ["id", "name", "link"]
    })
    res.status(200).send(await pagesData)
})

function server() { 
    app.listen(PORT, async () => {
        await conSeq(Seq)
        console.log(`http://localhost:${PORT}`);
        initData()
    });
 }

async function initData() {
    await status.bulkCreate(statuses)
    await user.bulkCreate(users)
    await product.bulkCreate(products)
    await markProductByUser.bulkCreate(marks)
    await page.bulkCreate(pages)
}

async function conSeq() { 
    try {
        await Seq.sync({ force: true })
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

 server()