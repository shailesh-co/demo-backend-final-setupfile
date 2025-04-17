const express = require('express');
const { register, login } = require('../controllers/authController');
const { authenticateJWT, authorizeRole } = require('../middleware/authMiddleware');
const router  = express.Router();

router.post('/register',register);
router.post('/login', login);
router.get('/admin', authenticateJWT, authorizeRole('admin'), (req, res) => {
    res.json({ message: 'Welcome Admin' });
  });
  router.get('/user', authenticateJWT, authorizeRole('user'), (req, res) => {
    res.json({ message: 'Welcome User' });
  });
  module.exports =router;