import { pool } from '../database'
const jwt = require('jsonwebtoken');

export const createProveedor = async (req, res)=>{
    try {
        const {razonsocial, direccion, ruc, telefono, apellidos, nombres, dni, correo} = req.body;
        const response = await pool.query('SELECT fc_create_proveedor($1,$2,$3,$4,$5,$6,$7,$8)', [razonsocial, direccion, ruc, telefono, apellidos, nombres, dni, correo]);
        return res.status(200).json({
            message: 'Proveedor creado satisfactoriamente...!'
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error al crear el Rol');
    }    
};
export const getProveedor = async (req,res)=>{
    try {

        const response = await pool.query('select *from fc_listar_proveedores()');

        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }   
};
export const getProveedorbyId = async (req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('SELECT *FROM fc_listar_proveedores_id($1)', [id]);        
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }    
};  

export const updateProveedor = async (req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const { razonsocial, direccion, ruc, telefono, apellidos, nombres, dni, correo } = req.body;
        await pool.query('SELECT fc_update_proveedor($1, $2, $3, $4, $5, $6, $7, $8, $9);', [razonsocial, direccion, ruc, telefono, apellidos, nombres, dni, correo, id]);
        return res.status(200).json(`Proveedor ${id} modificado satisfactoriamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }    
};
export const deleteProveedor = async (req, res)=>{
    try {
        const id = parseInt(req.params.id);
        await pool.query('SELECT fc_delete_proveedor($1)', [id]);
        return res.status(200).json(`Proveedor ${id} eliminado satisfactoriamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }    
};