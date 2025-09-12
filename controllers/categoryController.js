const categories = require('../data/categories')

// GET ALL
const getAllCategories = (req, res) => {
    res.status(200).json({ categories })
}

// GET BY ID
const getCategoryById = (req, res) => {
    const { id } = req.params
    const category = categories.find(cat => cat.id == id)
    if (!category) {
        return res.status(404).json({ msg: "Category not found" })
    }
    res.status(200).json({ category })
}

// CREATE
const createCategory = (req, res) => {
    const newCat = {
        id: categories.length + 1,
        name: req.body.name,
    }
    categories.push(newCat)
    res.status(201).json({ msg: "Category created successfully", newCat })
}

// UPDATE
const updateCategory = (req, res) => {
    const { id } = req.params
    const category = categories.find(cat => cat.id == id)
    if (!category) {
        return res.status(404).json({ msg: "Category not found" })
    }

    category.name = req.body.name || category.name
    res.status(200).json({ msg: "Category updated successfully", category })
}

// DELETE
const deleteCategory = (req, res) => {
    const { id } = req.params
    const index = categories.findIndex(cat => cat.id == id)

    if (index === -1) {
        return res.status(404).json({ msg: "Category not found" })
    }

    categories.splice(index, 1)
    res.status(200).json({ msg: `Category ${id} deleted successfully`, categories })
}

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}
