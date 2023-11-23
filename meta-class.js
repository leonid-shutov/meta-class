"use strict";

const fromKeys = (keys) => {
  class MetaClass {
    #privateFields;

    constructor(argsObj) {
      this.#privateFields = argsObj;

      for (const field of keys) {
        Object.defineProperty(MetaClass.prototype, field, {
          get: () => this.#privateFields[field],
        });
      }
    }
  }

  return MetaClass;
};

const fromZodSchema = (schema) => fromKeys(Object.keys(schema.shape));

const MetaClassFactory = {
  from: {
    keys: fromKeys,
    zodSchema: fromZodSchema,
  },
};

module.exports = { MetaClass: MetaClassFactory };
