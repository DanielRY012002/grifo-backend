import { pool } from '../database'
const helpers = require('../libs/helpers'); 

export const createPerson = async (req, res)=>{
    try {
        console.log(req.body);
        /*const {username, password, idpersona, idrol} = req.body;
        password = await helpers.encryptPassword(password);
        const response = await pool.query('SELECT fc_create_usuario($1, $2, $3, $4)', [username, password, idpersona, idrol]);
        return res.status(200).json({
            message: 'Usuario creado satisfactoriamente...!'
        });*/
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error al crear el Rol');
    }    
};