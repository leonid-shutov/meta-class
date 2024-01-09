"use strict";

/** @param {string[]} keys */
const fromKeys = (keys) => {
  class MetaClass {
    constructor(data) {
      this.fields = data;
    }
  }

  for (const field of keys) {
    Object.defineProperty(MetaClass.prototype, field, {
      get() {
        return this.fields[field];
      },
      set(x) {
        this.fields[field] = x;
      },
    });
  }

  return { metaClass: MetaClass, metaData: { keys: [...keys] } };
};

module.exports = { fromKeys };
