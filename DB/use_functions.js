const { Pool } = require('pg');
const express = require('express');
const app = express();

const config = {
    user: 'postgres',
    host: 'localhost',
    password: 'postgres',
    database: 'usuarios_registrados'
};

// Conectarse a la DB
const pool = new Pool(config);

// Listar usuarios
app.get('/usuarios', async(req, res) => {
    try {
        const resp = await pool.query('select * from usuarios');
        res.json({
                ok: true,
                resp: resp.rows
            })
            //pool.end();
    } catch (error) {
        console.log(error);
    }
});

// Insertar usuario
app.post('/usuarios', async(req, res) => {
    try {
        let usuario = req.body.usuario;
        let contraseña = req.body.contraseña;
        const text = `insert into usuarios values ('${usuario}', '${contraseña}')`;
        const resp = await pool.query(text);
        res.json({
                ok: true
            })
            //pool.end();
    } catch (error) {
        console.log(error);
    }
});

// Actualizar un usuario
app.put('/usuarios/:usuario', async(req, res) => {
    try {
        const usuario_nuevo = req.body.usuario;
        const contraseña_nueva = req.body.contraseña;
        const usuario_viejo = req.params.usuario;
        const text = `update usuarios set nombre = '${usuario_nuevo}', contraseña = '${contraseña_nueva}' where nombre = '${usuario_viejo}'`;
        const resp = await pool.query(text);
        res.json({
            ok: true
        });
        //pool.end();
    } catch (error) {
        console.log(error);
    }
});

// Eliminar un usuario
app.delete('/usuarios/:usuario', async(req, res) => {
    try {
        nombre = req.params.usuario;
        text = `delete from usuarios where nombre = '${nombre}'`;
        const resp = await pool.query(text);
        res.json({
            ok: true,
            message: 'Usuario eliminado.'
        })
    } catch (error) {
        console.log(error);
    }
});

module.exports = app;