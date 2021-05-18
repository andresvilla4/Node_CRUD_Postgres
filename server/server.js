const { Pool } = require('pg');

const config = {
    user: 'postgres',
    host: 'localhost',
    password: 'postgres',
    database: 'usuarios_registrados'
};

const pool = new Pool(config);

// Listar usuarios
const getBooks = async() => {
    try {
        const res = await pool.query('select * from libros');
        console.log(res);
        //console.log(res.rows);
        //pool.end();
    } catch (error) {
        console.log(error);
    }
};

// Insertar usuario
const insertUser = async() => {
    try {
        let usuario = 'usuario_4';
        let contraseña = 'contraseña_4';
        const text = `insert into usuarios values ('${usuario}', '${contraseña}')`;
        const res = await pool.query(text);
        console.log(res);
        pool.end();
    } catch (error) {
        console.log(error);
    }
};

// Actualizar un usuario
const editUser = async() => {
    try {
        const usuario_nuevo = 'usuario_X';
        const usuario_viejo = 'usuario_2';
        const text = `update usuarios set nombre = '${usuario_nuevo}' where nombre = '${usuario_viejo}'`;
        const res = await pool.query(text);
        console.log(res);
        pool.end();
    } catch (error) {
        console.log(error);
    }
}

// Eliminar un usuario
const deleteUser = async() => {
    try {
        nombre = 'usuario_3';
        text = `delete from usuarios where nombre = '${nombre}'`;
        const res = await pool.query(text);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
};

//getBooks();
//insertUser();
editUser();
//deleteUser();