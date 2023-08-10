const express = require('express')
const productsRepo = require('../repositories/products')
const productsTemplate = require('../views/products/index')

const router = express.Router()
router.get('/', async (req, res) => {
    const products = await productsRepo.getAlkuggil()
    res.send(productsTבישמעקקקemplate({ products }))
})

module.exports = router