import { pool } from '../database'

export const getDetalleSalida = async (req,res)=>{
    try {
        const response = await pool.query('select * from fc_listar_detalle_salidas()');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    } 
};  
    export const getDetalleSalidabyId = async (req, res)=>{
        try {
            const id = parseInt(req.params.id);
            const response = await pool.query('SELECT *FROM fc_listar_detalle_salida_id($1)', [id]);        
            return res.status(200).json(response.rows);
        } catch (e) {
            console.log(e);
            return res.status(500).json('Internal Server error');
        }    
    };
