"use strict";

/** @param {string[]} keys */
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

  return { metaClass: MetaClass, metaData: { keys: [...keys] } };
};

module.exports = { fromKeys };
