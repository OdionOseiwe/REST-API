const getProductStatic = async(req, res)=>{
    res.status(200).json({msg:"testing product route"})
    throw Error("testing custom errors");
}

const getProduct = async(req, res)=>{
    res.status(200).json({msg:"testing product"})
}

module.exports = {
    getProductStatic,
    getProduct
}