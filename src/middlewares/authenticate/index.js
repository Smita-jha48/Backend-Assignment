const axios = require('axios');

const authenticate = async (req, res, next) => {
   const { authorization } = req.headers;
    if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
   }
    try {
    const res  = await axios.get('http://localhost:8081/api/user/validate', {
      headers: { authorization },
    });
    const data = res.data;

    if (data.data.id) {
      const { id } = data.data;
      req.user = { userId: id };
      return next();
    }
    else{
      throw new Error;
    }
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {authenticate};