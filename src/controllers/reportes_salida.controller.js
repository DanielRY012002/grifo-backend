import { pool } from '../database'
export const reporteSalidaDetalle = async (req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from fc_reporte_salida_ventas($1)', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }   
};
export const reporteSalidaTotales = async (req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('SELECT *FROM fc_reporte_totales_ventas_salidas($1)', [id]);        
        
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }    
};
export const reporteCobranzaSalida = async (req, res)=>{
    try {
        const idusuario = parseInt(req.params.id);
        const fecha = req.params.fecha;
        console.log(idusuario+' / '+fecha);//select *from fc_salida_cobranzas_dia(2, '2021-03-09')
        const response = await pool.query('SELECT *FROM fc_salida_cobranzas_dia($1,$2)', [idusuario, fecha]);        
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }    
};
//select *from fc_salida_cobranzas_dia_detalle(2, '2021-03-09')
export const reporteCobranzaDetalleSalida = async (req, res)=>{
    try {
        const idusuario = parseInt(req.params.id);
        const fecha = req.params.fecha;
        console.log(idusuario+' / '+fecha);//select *from fc_salida_cobranzas_dia_detalle(2, '2021-03-09')
        const response = await pool.query('SELECT *FROM fc_salida_cobranzas_dia_detalle($1,$2)', [idusuario, fecha]);        
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }    
};