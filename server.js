const express = require('express');

let itemsForSale = [
    {
        _id: '5fcc1422e17929040331de0e',
        title: 'Camera Pro',
        description: 'Canon 5D Mark IV',
        photo: 'https://devmastery-assets.vercel.app/marketplace/camera-pro.png',
        price: 290,
        user: '5e74cd8c7e03d41011b9331a' // This is a user id
    },
    {
      _id: '5e748a4b4c903807294d5aae',
      title: 'T-shirt',
      description: 'A dark blue T-shirt. Its size is Large (L)',
      photo: 'https://devmastery-assets.vercel.app/marketplace/t-shirt.jpeg',
      price: 20,
      user: '5e74cdf77e03d41011b9331b'
    },
    {
        _id: '507f1f77bcf86cd799439011',
        title: 'iPhone',
        description: 'An iPhone 7 Plus Silver',
        photo: 'https://devmastery-assets.vercel.app/marketplace/iphone7.jpeg',
        price: 350,
        user: '5e74cd8c7e03d41011b9331a'
    }
];

const app = express();

app.get('/', (req, res) => {
    res.json({ message: "Mercado Marketplace API v1" })
})

app.get('/items', (req, res) => {
    res.json(itemsForSale)
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});