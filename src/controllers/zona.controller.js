import { pool } from '../database'

export const getZonas= async (req,res)=>{
    try {
        const response = await pool.query('select * from fc_listar_zonas()');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }   
};

export const getDistritosByZonas= async (req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from fc_listar_distritos_by_zona($1)', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }   
};
//select *from fc_listar_clientes_por_zona(1);
