import * as Joi from 'joi';

export const configValidationDbSchema = Joi.object({
  DB_TYPE: Joi.string().default('postgres').required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.string().default(5432).required(),
  DB_USER: Joi.string().required(),
  DB_PASS: Joi.string(),
  DB_NAME: Joi.string().required(),
});

export const configValidationAppSchema = Joi.object({
  APP_PORT: Joi.string().default(8080).required(),
  NODE_ENV: Joi.string()
    .valid('development', 'prod', 'test')
    .default('development')
    .required(),
});
