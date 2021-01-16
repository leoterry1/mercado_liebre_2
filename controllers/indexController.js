let productos = require("../data/productos")


module.exports = {
    index:(req,res) =>{
        res.render('home',{productos, toThousand : n =>
            n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
            ".")})
    },
  
}