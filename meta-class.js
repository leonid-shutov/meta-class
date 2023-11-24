"use strict";

/** @typedef {import('./meta-class').TStrategyOutput<any>} TStrategyOutput */

const strategies = require("./lib/strategies");

/** @type {Record<string, (x: any) => TStrategyOutput>} */
const MetaClass = { ...strategies };

module.exports = { MetaClass };
