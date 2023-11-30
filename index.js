const express = require('express');
const app = express();

const pool = require("./database");
app.use(express.json());

// Creamos una ruta de productos
app.get("/productos", async (req, res) =>{
    try {
        
        const conn = await pool.getConnection(); // Obtiene la conexion
        const query = "select * from productos"; // Crea la consulta
        const rows = await conn.query(query); // Se ejecuta la consulta 
        res.status(200).json(rows); // Lo que obtiene de la consulta anterior lo coloca acá
    } catch (error) {
        console.log(error);
        const conn = await pool.getConnection(); // Obtiene la conexion
        const query = "insert into productos(nombre) values(?)"; // Crea la consulta
        const result = await conn.query(query, [req.body.nombre]); // Se ejecuta la consulta 
        res.status(200).json({message: 'Se guardo un producto'}); // Lo que obtiene de la consulta anterior lo coloca acá
    }
});

// Funcion para agregar datos
app.post("/add-productos", async (req, res) => {
    console.log(req.body);
})

// Creamos la funcion para correr el servidor
app.listen(3000, () =>{
    console.log("El Servidor esta corriendo en el puerto...", 3000);
});