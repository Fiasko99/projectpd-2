const {PORT} = require('../config/PORT')

const statuses = [
    {
        id: 1,
        name: 'superadmin'
    },
    {
        id: 2,
        name: 'admin'
    },
    {
        id: 3,
        name: 'user'
    }
]

const users = [
    {
        name: 'Nikita Glazkov', 
        login: 'IMNEKIT',
        password: "123",
        avatar: `http://localhost:${PORT}/users/userTest.jpg`,
        statusId: 1
    },
    {
        name: 'Pashka', 
        login: 'svopashs',
        password: "123",
        avatar: `http://localhost:${PORT}/users/userTest.jpg`,
        statusId: 2
    },
    {
        name: 'Gans', 
        login: 'snakeruse',
        password: "123",
        avatar: `http://localhost:${PORT}/users/userTest.jpg`,
        statusId: 3
    },
    {
        name: 'Vasya', 
        login: 'vasya',
        password: "123",
        avatar: `http://localhost:${PORT}/users/userTest.jpg`,
        statusId: 3
    },
    {
        name: 'Petya', 
        login: 'petya',
        password: "123",
        avatar: `http://localhost:${PORT}/users/userTest.jpg`,
        statusId: 3
    },
    {
        name: 'Sidor', 
        login: 'sidor',
        password: "123",
        avatar: `http://localhost:${PORT}/users/userTest.jpg`,
        statusId: 3
    },
    {
        name: 'Petro', 
        login: 'petro',
        password: "123",
        avatar: `http://localhost:${PORT}/users/userTest.jpg`,
        statusId: 3
    },
    {
        name: 'Volodya', 
        login: 'volodya',
        password: "123",
        avatar: `http://localhost:${PORT}/users/userTest.jpg`,
        statusId: 3
    },
    {
        name: 'Ahmed', 
        login: 'ahmed',
        password: "123",
        avatar: `http://localhost:${PORT}/users/userTest.jpg`,
        statusId: 3
    },
    {
        name: 'Mirza', 
        login: 'mirza',
        password: "123",
        avatar: `http://localhost:${PORT}/users/userTest.jpg`,
        statusId: 3
    },
    {
        name: '228Destroyer228', 
        login: 'vanya2006',
        password: "123",
        avatar: `http://localhost:${PORT}/users/userTest.jpg`,
        statusId: 3
    },
]

const products = [
    {
        title: 'Гречка', 
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: `http://localhost:${PORT}/products/productTest.jpg`, 
    },
    {
        title: 'Молоко', 
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: `http://localhost:${PORT}/products/productTest.jpg`, 
    },
    {
        title: 'Соль', 
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: `http://localhost:${PORT}/products/productTest.jpg`, 
    },
    {
        title: 'Вода', 
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: `http://localhost:${PORT}/products/productTest.jpg`, 
    },
    {
        title: 'Огурцы', 
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: `http://localhost:${PORT}/products/productTest.jpg`, 
    },
] 

const marks = [
    {
        userId: 1,
        productId: 1
    },
    {
        userId: 2,
        productId: 2
    },
    {
        userId: 2,
        productId: 3
    },
    {
        userId: 3,
        productId: 4
    },
    {
        userId: 3,
        productId: 5
    },
]

const pages = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Products',
        link: '/products'
    },
    {
        name: 'Favorite',
        link: '/favorite'
    },
    {
        name: 'Users',
        link: '/users'
    },
]

module.exports = {
    statuses,
    users, 
    products,
    marks,
    pages
}