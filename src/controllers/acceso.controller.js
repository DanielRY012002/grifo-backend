import { pool } from '../database'

export const createAccesos = async (req, res)=>{
    try {        
        const {nombre, ruta, icono} = req.body;

        const idsalida = await pool.query('SELECT fc_create_accesos($1, $2, $3)', [nombre, ruta, icono]);
    
       return res.status(200).json({
            message: 'Acceso registrado satisfactoriamente...!'
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error al registrar el Acceso');
    }    
};
export const getAccesosbyId = async (req, res)=>{
    try {
        const id = parseInt(req.params.id);//idsalida
        const response = await pool.query('SELECT *FROM fc_listar_accesos_id($1)', [id]);        
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
};  
export const getAccesos = async (req,res)=>{
    try {
        const response = await pool.query('select * from fc_listar_accesos()');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }   
};
export const updateAcceso = async (req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const { nombre, ruta, icono } = req.body;
        await pool.query('SELECT fc_update_acceso($1, $2, $3, $4);', [nombre, ruta, icono, id]);
        return res.status(200).json(`Acceso ${id} modificado satisfactoriamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }    
};
export const deleteAcceso = async (req, res)=>{
    try {
        const id = parseInt(req.params.id);
        await pool.query('SELECT fc_delete_acceso($1)', [id]);
        return res.status(200).json(`Acceso ${id} eliminado satisfactoriamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }    
};
