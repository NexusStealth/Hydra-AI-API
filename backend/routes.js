// Rotas da API
const express = require('express');
const router = express.Router();
router.get('/', (req, res) => res.send('API Hydra ativa'));
module.exports = router;