import * as Yup from 'yup';

/**
 * Middleware to validate the request body against a Yup schema.
 *
 * @function validateRequestBody
 * @param {Object} schema - The Yup validation schema to use.
 * @returns {Function} - Middleware function for validation.
 */
export const validateRequestBody = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true
      });
      next();
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        return res.status(400).json({ error: error.errors });
      }
      next(error);
    }
  };
};

// Define the schema for message validation
export const messageSchema = Yup.object().shape({
  content: Yup.string()
    .required('The content of the message is required')
    .max(500, 'The content of the message must not exceed 500 characters'),
});
