"use strict";

const MetaClassFactory = {
  fromKeys: (keys) => {
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
  },
};

module.exports = { MetaClass: MetaClassFactory };
