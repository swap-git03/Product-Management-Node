const categories = require('../data/categories')

const getAllCategories = (req, res) =>{
    res.status(200).send(categories.categories)
}