/*
path: /api/posts
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { getPosts } = require('../controllers/posts_controller');

const router = Router();

//Ruta para obtener los puestos de trabajo almacenados en la DB
router.get('/', getPosts);


module.exports = router;