let products = [
    { id: "101", name: "Laptop", price: 1000 },
    { id: "102", name: "Phone", price: 500 }
]

// GET ALL
const getAllProducts = (req, res) => {
    res.status(200).json({ products })
}

// GET BY ID
const getProductById = (req, res) => {
    const { id } = req.params
    const product = products.find(p => p.id == id)
    if (!product) {
        return res.status(404).json({ msg: "Product not found" })
    }
    res.status(200).json({ product })
}

// CREATE
const createProduct = (req, res) => {
    const newProduct = {
        id: products.length + 1 + "", // string id
        name: req.body.name,
        price: req.body.price
    }
    products.push(newProduct)
    res.status(201).json({ msg: "Product created successfully", newProduct })
}

// UPDATE
const updateProduct = (req, res) => {
    const { id } = req.params
    const product = products.find(p => p.id == id)
    if (!product) {
        return res.status(404).json({ msg: "Product not found" })
    }

    product.name = req.body.name || product.name
    product.price = req.body.price || product.price

    res.status(200).json({ msg: "Product updated successfully", product })
}

// DELETE
const deleteProduct = (req, res) => {
    const { id } = req.params
    const index = products.findIndex(p => p.id == id)

    if (index === -1) {
        return res.status(404).json({ msg: "Product not found" })
    }

    products.splice(index, 1)
    res.status(200).json({ msg: `Product ${id} deleted successfully`, products })
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}
