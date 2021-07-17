import { pool } from '../database'
const jwt = require('jsonwebtoken');

export const createRol = async (req, res)=>{
    try {
        const {nombre} = req.body;
        const response = await pool.query('SELECT fc_create_roles($1)', [nombre]);
        return res.status(200).json({
            message: 'Rol creado satisfactoriamente...!'
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error al crear el Rol');
    }    
};
export const getRoles = async (req,res)=>{
    try {
        const response = await pool.query('select * from fc_listar_roles()');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }   
};
export const getRolbyId = async (req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('SELECT *FROM fc_listar_roles_id($1)', [id]);        
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }    
};  

export const updateRol = async (req, res)=>{
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
export const deleteRol = async (req, res)=>{
    try {
        const id = parseInt(req.params.id);
        await pool.query('SELECT fc_delete_rol($1)', [id]);
        return res.status(200).json(`Rol ${id} eliminado satisfactoriamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }    
};