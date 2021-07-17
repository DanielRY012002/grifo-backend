import { pool } from '../database'

export const createSalida = async (req, res)=>{
    try {   
        console.log(req.body);            
        const {fechasalida, horasalida, galones, idusuario, idcisterna, idzona, idempleado, grupo} = req.body;
        const salida = await pool.query('SELECT fc_create_salida($1, $2, $3, $4, $5, $6, $7)', [fechasalida, horasalida, idusuario, idcisterna, galones, idzona, idempleado]);
        const datos  = req.body.grupo;
        const ids = salida.rows[0].fc_create_salida;
        console.log(ids);
        for(var i=0; i<datos.length; i++){
            var ide = datos[i].idempleado;
            console.log(ide);
           await pool.query('SELECT fc_create_detalle_salida($1, $2)', [ids, ide]);
        }
       return res.status(200).json({
            message: 'Salida creado satisfactoriamente...!'
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: 'Error al crear la salida'
        });
    }    
};
export const getSalidasbyId = async (req, res)=>{
    try {
        const id = parseInt(req.params.id);//idsalida
        const response = await pool.query('SELECT *FROM fc_listar_detalles_salida($1)', [id]);        
        
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }    
};  
export const getSalidas = async (req,res)=>{
    try {
        const response = await pool.query('select * from fc_listar_salidas()');
        console.log(response.rows);
        //const ids = response.rows[0].idsalida; 
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }   
};
export const getDetalleSalidabyId = async (req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('SELECT *FROM fc_listar_detalle_salidas2($1)', [id]); 
        //fc_listar_detalle_salidas2(20)       
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }    
};
export const cerrarSalida = async (req, res)=>{
    try {
        const idsalida = parseInt(req.params.id);
        console.log(req.body);
        const {sgalones, vgalones, totalv, totald, totalc, idusuario} = req.body;        
        await pool.query('SELECT fc_cerrar_salida($1)', [idsalida]); 
        await pool.query('SELECT fc_guardar_historial_salida($1, $2, $3, $4, $5, $6, $7)', 
        [idsalida, sgalones, vgalones, totalv, totald, totalc, idusuario]);               
        return res.status(200).json({message: 'Se cerró la salida ...'});
    } catch (e) {
        console.log(e);
        return res.status(500).json({message: 'Internal Server error'});
    }    
};
