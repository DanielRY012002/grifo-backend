import { pool } from '../database'

export const createVentas = async (req, res)=>{
    try {
        const {idsalida,idusuario,idcliente,tipodoc,numdoc,idproducto,idprecio,
            cantidad,total,deposito,debe,observaciones} = req.body;
        console.log(req.body);
        const venta = await pool.query('SELECT fc_create_venta($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)', 
        [idsalida, idusuario, idcliente, tipodoc, numdoc, idproducto, idprecio, cantidad, total, deposito, debe, observaciones]);
        const idv = venta.rows[0].fc_create_venta;
        console.log(idv);
        if(debe>0){
            console.log(debe);
            //select fc_create_deuda_sin_venta(null,10,200,1);
            await pool.query('SELECT fc_create_deuda_sin_venta($1, $2, $3, $4)', [idv, idcliente, debe, idusuario]);
        }
        return res.status(200).json({
            message: 'Venta creado satisfactoriamente...!'
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Error al crear la venta' });
    }    
};
export const getVentas = async (req,res)=>{
    try {
        const response = await pool.query('select * from fc_listar_ventas2()');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }   
};

export const getVentasByClienteId = async (req, res)=>{
    try {
        const id = parseInt(req.params.id)
        const response = await pool.query('select * from fc_listar_ventas_cliente($1)', [id])
        return res.status(200).json(response.rows)
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Internal Server error' });
    }
}

 