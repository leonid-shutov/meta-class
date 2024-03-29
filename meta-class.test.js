"use strict";

const assert = require("node:assert");
const { describe, it } = require("node:test");
const { z } = require("zod");
const { MetaClass } = require("./meta-class");

describe("fromKeys strategy", () => {
  /** @type {(keyof {name: string; age: number; color: string})[]} */
  const keys = ["name", "age", "color"];

  const { metaClass: Cat, metaData } = MetaClass.fromKeys(keys);
  const cat1 = new Cat({ name: "Sanya", age: 3, color: "Orange tabbie" });

  it("Meta class is correct", () => {
    assert.strictEqual(cat1.name, "Sanya");
    assert.strictEqual(cat1.age, 3);
    assert.strictEqual(cat1.color, "Orange tabbie");
  });

  it("Meta data is correct", () => {
    assert.deepStrictEqual(metaData.keys, keys);
    assert.notStrictEqual(metaData.keys, keys);
  });

  it("It is possible to create more instances from the same class", () => {
    const cat2 = new Cat({ name: "whiskers", age: 5, color: "Black" });
    assert.strictEqual(cat2.name, "whiskers");
    assert.strictEqual(cat2.age, 5);
    assert.strictEqual(cat2.color, "Black");
  });
});

describe("fromZodSchema strategy", () => {
  const schema = z.object({
    name: z.string(),
    age: z.number(),
    color: z.string(),
  });
  const { metaClass: Cat, metaData } = MetaClass.fromZodSchema(schema);
  const cat = new Cat({ name: "Sanya", age: 3, color: "Orange tabbie" });

  it("Meta class is correct", () => {
    assert.strictEqual(cat.name, "Sanya");
    assert.strictEqual(cat.age, 3);
    assert.strictEqual(cat.color, "Orange tabbie");
  });

  const keys = Object.keys(schema.shape);

  it("Meta data is correct", () => {
    assert.deepStrictEqual(metaData.keys, keys);
  });
});
