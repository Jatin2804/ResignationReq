module.exports = (role) => {
    return (req, res, next) => {
      if (req.user.role !== role) {
        return res.status(403).json({ error: 'Access forbidden.' });
      }
      console.log("Excess to ",req.user.role)
      next();
    };
  };
  