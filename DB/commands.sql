create database usuarios_registrados; // crear base de datos
\l // listar bases de datos
\c usuarios_registrados // Nos conecta a la DB

// Crea una tabla en la DB
create table usuarios(
        nombre text,
        contraseña text
);

\dt // Listar las tablas

// Insertar valores en la tabla
insert into usuarios values 
('usuario_1', 'contraseña_1'),
('usuario_2', 'contraseña_2'); 

// Listar los datos de una tabla
select * from usuarios;

create table libros(
        autor text,
        titulo text
);

insert into libros values
('autor_1', 'libro_1'),
('autor_2', 'libro_2');