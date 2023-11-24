"use strict";

/**
 * @typedef {import('zod').ZodRawShape} ZodRawShape
 * @typedef {import('zod').ZodObject<ZodRawShape>} TZodSchema
 */

const { fromKeys } = require("./from-keys");

/** @param {TZodSchema} schema */
const fromZodSchema = (schema) => {
  const keys = Object.keys(schema.shape);

  const { metaClass } = fromKeys(keys);

  return { metaClass, metaData: { keys: [...keys] } };
};

module.exports = { fromZodSchema };
