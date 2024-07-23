import * as Yup from 'yup';
// import { Request, Response, NextFunction } from 'express';

export const validateRequestBody = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validate(req.body, {
        abortEarly: true,
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

// Ejemplo de esquema de mensaje
export const messageSchema = Yup.object().shape({
  content: Yup.string().required('El contenido del mensaje es requerido')
});
