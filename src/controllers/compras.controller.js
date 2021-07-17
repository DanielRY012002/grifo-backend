import { pool } from '../database'

export const createCompras = async (req, res)=>{
    try {
        console.log(req.body);
        /*
        const {apell, nom, dni, dir, tel, correo, rs, ruc} = req.body;
        const person = await pool.query('SELECT fc_create_persona($1, $2, $3, $4, $5, $6)', [apell, nom, dni, dir, tel, correo]);
        var idp = person.rows[0].fc_create_persona;
        const response = await pool.query('SELECT fc_create_cliente($1, $2, $3)', [rs, ruc, idp]);
        
        */
       return res.status(200).json({
            message: 'Compra creado satisfactoriamente...!'
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error al crear la compra');
    }    
};