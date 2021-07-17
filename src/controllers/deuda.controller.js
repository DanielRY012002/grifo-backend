import { pool } from '../database'

export const getDeudas = async (req,res)=>{
    try {
        const response = await pool.query('select * from fc_listar_deudas3()');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }   
};
export const getPagos = async (req,res)=>{
    try {
        const response = await pool.query('select * from fc_listar_pagos()');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }   
};
export const registrarDeuda = async (req, res)=>{
    try {
        console.log(req.body);
        const {idventa, idcliente, deuda, idusuario} = req.body;
        await pool.query('SELECT fc_create_deuda_sin_venta($1, $2, $3, $4)', [idventa, idcliente, deuda, idusuario]);        
        return res.status(200).json({
            message: 'Deuda creada satisfactoriamente...!'
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: 'Error al crear la Deuda'
        });
    }    
};
export const cobrarDeuda = async (req, res)=>{
    try {
        const iddeuda = parseInt(req.params.id);
        const { deuda, idcobrador} = req.body;
        //select fc_cobranza_deuda(300,1)
        
        await pool.query('select fc_cobranza_deuda($1,$2,$3 )', [deuda, idcobrador, iddeuda]);
        return res.status(200).json({
            message: `Deuda ${iddeuda} cancelada satisfactoriamente...!`
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }    
};//fc_total_deudas_cliente(idcl integer)
export const totalDeudaCliente = async (req, res)=>{
    try {
        const idcliente = parseInt(req.params.id);
        const response = await pool.query('select * from fc_total_deudas_cliente($1)', [idcliente]);
         return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }    
};