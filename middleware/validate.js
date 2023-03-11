const validator = require('../helpers/validate');

const validateCreateUser = (req, res, next) => {
  const validationRule = {
    name: 'required|string',
    lastname: 'required|string',
    email: 'required|email',
    usertype: 'required|integer'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed, please enter de correct data',
        data: err
      });
    } else {
      next();
    }
  });
};

const validateCreateItem = (req, res, next) => {
    const validationRule = {
        name: 'required|string',
        maker: 'required|string',
        model: 'required|string',
        price: 'required|integer',
        category: 'required|string',
        description: 'string',
    };
    validator(req.body, validationRule, {}, (err, status) => {
      if (!status) {
        res.status(412).send({
          success: false,
          message: 'Validation failed, please enter de correct data',
          data: err
        });
      } else {
        next();
      }
    });
  };

module.exports = {
    validateCreateUser,
    validateCreateItem
};