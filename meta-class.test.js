const assert = require("node:assert");
const { describe, it } = require("node:test");
const { z } = require("zod");
const { MetaClass } = require("./meta-class");

describe("fromKeys strategy", () => {
  const keys = ["name", "age", "color"];
  const { metaClass: Cat, metaData } = MetaClass.fromKeys(keys);
  const cat = new Cat({ name: "Sanya", age: 3, color: "Orange tabbie" });

  it("Meta class is correct", () => {
    assert.strictEqual(cat.name, "Sanya");
    assert.strictEqual(cat.age, 3);
    assert.strictEqual(cat.color, "Orange tabbie");
  });

  it("Meta data is correct", () => {
    assert.deepStrictEqual(metaData.keys, keys);
    assert.notStrictEqual(metaData.keys, keys);
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
