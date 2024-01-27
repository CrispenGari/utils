import { describe, expect, test } from "@jest/globals";
import { compressJSON, decompressJSON } from "../src";

describe("Testing JSON Compression utilities", () => {
  const testObject = {
    id: 10,
    name: "John",
    surname: "Doe",
    username: "johndoe",
    email: "jonhdoe@gmail.com",
    colors: ["red", "blue"],
  };
  const compressed = compressJSON(testObject);

  test("testing compressing a json object", () => {
    expect(compressJSON(testObject)).toBe(compressed);
  });
  test("testing decompressing object", () => {
    expect(decompressJSON(compressed)).toEqual(testObject);
  });
});
