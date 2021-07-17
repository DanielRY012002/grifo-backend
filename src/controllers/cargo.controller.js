import { pool } from '../database'

export const createCargos = async (req, res)=>{
    try {        
        const {nombre} = req.body;

        const idsalida = await pool.query('SELECT fc_create_cargos($1)', [nombre]);
    
       return res.status(200).json({
            message: 'Acceso registrado satisfactoriamente...!'
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error al registrar el Acceso');
    }    
}; 
export const getCargos = async (req,res)=>{
    try {
        const response = await pool.query('select * from fc_listar_cargos()');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }   
};
export const updateCargo = async (req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const { nombre } = req.body;
        await pool.query('SELECT fc_update_cargo($1, $2)', [nombre, id]);
        return res.status(200).json(`Cargo ${id} modificado satisfactoriamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }    
};
export const deleteCargo = async (req, res)=>{
    try {
        const id = parseInt(req.params.id);
        await pool.query('SELECT fc_delete_rol($1)', [id]);
        return res.status(200).json(`Cargo ${id} eliminado satisfactoriamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }    
};
export const getCargobyId = async (req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('SELECT *FROM fc_listar_cargos_id($1)', [id]);        
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }    
}; 