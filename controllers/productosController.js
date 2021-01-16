let productos = require("../data/productos")


module.exports = {
    detalle:(req,res) =>{
        let producto = productos.find(producto => {
            return producto.id == req.params.id
        });
        
        res.render('detalle',{producto, toThousand : n =>
            n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
            ".")})
    },
  
}

