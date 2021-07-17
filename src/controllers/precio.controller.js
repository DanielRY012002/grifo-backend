import { pool } from '../database'

export const createPrecio = async (req, res)=>{
    try {        
        const {idempleado, precio} = req.body;

        const idprecio = await pool.query('SELECT fc_create_precio($1, $2)', [idempleado, precio]);
    
       return res.status(200).json({
            message: 'Precio registrado satisfactoriamente...!'
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error al registrar precio');
    }    
};
  
export const getPrecios = async (req,res)=>{
    try {
        const response = await pool.query('select * from fc_listar_precios3()');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }   
};
export const getPreciobyId = async (req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('SELECT *FROM fc_listar_precio_id($1)', [id]);        
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }    
};
export const updatePrecio = async (req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const { nombre } = req.body;
        await pool.query('SELECT fc_update_precio($1);', [id]);
        return res.status(200).json(`Rol ${id} modificado satisfactoriamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }    
};  