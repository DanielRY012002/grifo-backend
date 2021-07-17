import { pool } from '../database'
export const createCisterna = async (req, res)=>{
    try {        
        const {marca, placa, capacidad} = req.body;

        const idsalida = await pool.query('SELECT fc_create_cisterna($1, $2, $3)', [marca, placa.trim(), capacidad]);
    
       return res.status(200).json({
            message: 'Cisterna registrado satisfactoriamente...!'
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error al registrar cisterna');
    }    
};
export const getCisternabyId = async (req, res)=>{
    try {
        const id = parseInt(req.params.id);//idsalida
        const response = await pool.query('SELECT *FROM fc_listar_cisternas_id($1)', [id]);        
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
};  
export const getCisternas = async (req,res)=>{
    try {
        const response = await pool.query('select * from fc_listar_cisternas()');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }   
};
export const updateCisterna = async (req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const { marca, placa, cpacidad, estado } = req.body;
        await pool.query('SELECT fc_update_cisterna($1, $2, $3, $4, $5);', [marca, placa, cpacidad, estado, id]);
        return res.status(200).json(`Cisterna ${id} modificado satisfactoriamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }    
};
export const deleteCisterna = async (req, res)=>{
    try {
        const id = parseInt(req.params.id);
        await pool.query('SELECT fc_delete_cisterna_logica($1)', [id]);
        return res.status(200).json(`Cisterna ${id} eliminado satisfactoriamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }    
};
