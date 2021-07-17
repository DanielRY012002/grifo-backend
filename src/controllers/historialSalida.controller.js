import { pool } from '../database'

export const getHistorial = async (req,res)=>{
    try {
        const response = await pool.query('select * from fc_listar_cargos()');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }   
};