/*
path: /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/auth_controller');

const router = Router();

//Ruta para iniciar sesión
router.get('/login', login);


module.exports = router;