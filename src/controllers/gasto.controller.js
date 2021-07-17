import { pool } from '../database'

export const getGastos= async (req,res)=>{
    try {
        const response = await pool.query('select * from fc_listar_gastos()');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }   
};
export const getGastosSalida= async (req,res)=>{
    try {
        const idsalida = parseInt(req.params.id);
        const response = await pool.query('select *from fc_salida_gastos_dia($1)',[idsalida]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }   
};
//select *from fc_salida_gastos_total_dia(2)
export const getGastosTotalSalida= async (req,res)=>{
    try {
        const idsalida = parseInt(req.params.id);
        const response = await pool.query('select *from fc_salida_gastos_total_dia($1)',[idsalida]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }   
};
export const createGasto = async (req, res)=>{
    try {        
        const {descripcion, monto, idempleado, idsalida} = req.body;

        const idprecio = await pool.query('SELECT fc_create_gasto($1, $2, $3, $4)', [descripcion, monto, idempleado, idsalida]);
    
       return res.status(200).json({
            message: 'Gasto registrado satisfactoriamente...!'
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error al registrar Gasto');
    }    
};