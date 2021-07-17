import { pool } from '../database'
const helpers = require('../libs/helpers'); 
export const createCliente = async (req, res)=>{
    try {
        console.log(req.body);
        const {apellidos, nombres, dni, direccion, telefono, correo, razonsocial, ruc, idrol} = req.body;
        const person = await pool.query('SELECT fc_create_persona($1, $2, $3, $4, $5, $6)', [apellidos, nombres, dni, direccion, telefono, correo]);
        var idpersona = person.rows[0].fc_create_persona;
        const response1 = await pool.query('SELECT fc_create_cliente($1, $2, $3)', [razonsocial, ruc, idpersona]);
        const password = await helpers.encryptPassword(dni);
        const response2 = await pool.query('SELECT fc_create_usuario($1, $2, $3, $4)', [dni, password, idpersona, 24]);
        return res.status(200).json({
            message: 'Cliente creado satisfactoriamente...!'
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error al crear el Cliente');
    }    
};
export const getClientes = async (req,res)=>{
    try {
        const response = await pool.query('select * from fc_listar_clientes()');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }   
};
export const getClientebyId = async (req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('SELECT *FROM fc_listar_cliente_id($1)', [id]);        
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }    
};  

export const updateCliente = async (req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const { nombre } = req.body;
        await pool.query('SELECT fc_update_rol($1, $2);', [nombre, id]);
        return res.status(200).json(`Rol ${id} modificado satisfactoriamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }    
};
export const deleteCliente = async (req, res)=>{
    try {
        const id = parseInt(req.params.id);
        await pool.query('SELECT fc_delete_rol($1)', [id]);
        return res.status(200).json(`Rol ${id} eliminado satisfactoriamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }    
};
export const deudasCliente = async (req, res)=>{
    try {
        const idcliente = parseInt(req.params.id);
        const response = await pool.query('select *from fc_listar_deudas_idcliente($1)', [idcliente]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }    
};
//select *from fc_listar_clientes_por_zona(1);
export const getClientesPorZona = async (req, res) =>{
    try {
        const idzona = parseInt(req.params.id);
        const response = await pool.query('select *from fc_listar_clientes_por_zona($1)', [idzona]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    } 
}