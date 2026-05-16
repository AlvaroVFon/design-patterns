import { describe, test } from "node:test";
import assert from "node:assert";
import { Singleton } from "./singleton";

describe("Singleton", () => {
  test("should return the same instance", () => {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    assert.strictEqual(s1, s2);
  });
});
