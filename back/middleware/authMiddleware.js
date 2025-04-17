const jwt =require('jsonwebtoken');
const User = require('../models/user');

const authenticateJWT  =( req, res, next) => {
    const token  = req.header('Authorization')?.split('')[1];
    if(!token) return res.status(401).json({message: 'Access denied'});

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if (err) return res.status(403).json({ message: 'Invalid token' });
        const user = await User.findById(decoded.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        req.user = user;
        next();
      });
}
const authorizeRole = (role) => {
    return (req, res, next) => {
      if (req.user.role !== role) {
        return res.status(403).json({ message: 'Forbidden' });
      }
      next();
    };
  };
  module.exports = { authenticateJWT, authorizeRole}