const { response } = require("express");
//Conectando a la base de datos
const {connection} = require('../database/config');

const getPosts = async(req, res=response) => {
    connection.query({
        sql: `select * from job_posts where is_active = ${1};`,
        timeout: 4000,
    }, function(error, posts) {
        if (error) {
            console.log(error);
            res.json({
                ok: false
            });
        }

        //Retornando los posts, en caso de que todo salga bien
        res.json({
            posts
        });
    });
}


module.exports = {
    getPosts
}