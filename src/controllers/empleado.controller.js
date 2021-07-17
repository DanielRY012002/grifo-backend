import { pool } from '../database'
const helpers = require('../libs/helpers'); 
export const crearempleado = async (req, res)=>{
    try { console.log(req.body);
        const {apellidos, nombres, dni, direccion, telefono, correo, sexo, estadocivil, 
            sueldo, idcargo, username, pass, idrol} = req.body;
        const person = await pool.query('SELECT fc_create_persona($1, $2, $3, $4, $5, $6)', [apellidos, nombres, dni, direccion, telefono, correo]);
        var idpersona = person.rows[0].fc_create_persona;
        console.log(idpersona);        
        const emple = await pool.query('SELECT fc_create_empleado($1, $2, $3, $4, $5)', [sexo, estadocivil, sueldo, idpersona, idcargo]);
        console.log(emple.rows);
        const password = await helpers.encryptPassword(pass);
        console.log(pass);
        const response = await pool.query('SELECT fc_create_usuario($1, $2, $3, $4)', [username, password, idpersona, idrol]);      
        return res.status(200).json({
            message: 'Empleado creado satisfactoriamente...!'
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error al crear el Empleado');
    }    
};
export const getEmpleados = async (req,res)=>{
    try {
        const response = await pool.query('select * from fc_listar_empleados()');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }   
};