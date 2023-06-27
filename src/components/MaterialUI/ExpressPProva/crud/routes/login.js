var express = require('express')
var router = express.Router()
var Login = require('../services/LoginService')

router.post('/login', (req, res) => {
    const { usuario, senha } = req.body;
  
    // Verifique o nome de usuário e senha
    if (usuario == 'login' && senha == 'senha') {
      // Login bem-sucedido
      res.send('Login bem-sucedido!');
    } else {
      // Login inválido
      res.status(401).send('Nome de usuário ou senha inválidos');
    }
  });