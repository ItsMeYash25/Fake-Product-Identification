const {createInstance} = require("../function/web3Connection")

// Create a Product 
const createProduct = async (req, res) => {
    const {instance} = await createInstance()
    const {account, name, price} = req.body
    console.log(req.body)
    try {
        instance.methods.createProduct(name, price).send({from: account,gas:3000000})
        .on('transactionHash', function(hash) {
            console.log('Transaction hash: ' + hash);
        res.send({status: true})
        })
       .on('receipt', function(receipt) {
           console.log('Transaction receipt: ' + receipt);
       })
       .on('error', function(error) {
           console.error('Transaction error: ' + error);
       });
       }catch (e) {
           console.log("Error", e)
       }
}
// Fetch a Product 
const fetchProduct = async (req, res) => {
    const {instance} = await createInstance()
    const {id} = req.body
    try {
        const data = await instance.methods.getProduct(id).call();
        res.send({"res": data})
    } catch (error) {
        console.log("error",error)
    }
}
// Fetch all Products 
const fetchAllProduct = async (req, res) => {
    const {instance} = await createInstance()
    try {
        const data = await instance.methods.getAllProducts().call();
        res.send({res:data})
    } catch (error) {
        console.log("error",error)
    }
}
// Authenticate Product 
const authenticateProduct = async (req, res) => {
    const {instance} = await createInstance()
    // const {id} = req.body
    // console.log(req.body)
    // try {
    //     const data = await instance.methods.verifyProductAuthenticity(id).call()
    //     res.send({res:data})
    // } catch (error) {
    //     console.log("Error: ", error) 
    // }
}
// Mark Product as a Fake
const markAsFake = async (req, res) => {
    const {instance} = await createInstance()
    const {id, addr} = req.body
    console.log(id)
    try {
        const data = await instance.methods.markProductAsFake(id).send({from: addr })
        res.send({data, state:true})
    } catch (error) {
        console.log("Error: ", error) 
    }
}
// Mark Product as a Real 
const markAsReal = async (req, res) => {
    const {instance} = await createInstance()
    const {id, addr} = req.body
    try {
        const data = await instance.methods.markProductAsReal(id).send({from: addr })
        res.send({data, state:true})
    } catch (error) {
        console.log("Error: ", error) 
    }
}

module.exports = {createProduct, fetchProduct, fetchAllProduct, authenticateProduct, markAsFake, markAsReal}