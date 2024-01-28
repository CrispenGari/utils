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
  const compressed1 = compressJSON(testObject);
  const { id: _id, colors: _colors, ...v } = testObject;
  const compressed2 = compressJSON({ ...v });

  test("testing compressing a json object that will PASS!", () => {
    expect(compressJSON(testObject)).toBe(compressed1);
  });
  test("testing decompressing object that will PASS!", () => {
    expect(decompressJSON(compressed1)).toEqual(testObject);
  });
  test("testing compressing a json object that will FAIL!", () => {
    expect(compressJSON(testObject)).not.toBe(compressed2);
  });
  test("testing decompressing object that will FAIL!", () => {
    expect(decompressJSON(compressed1)).not.toEqual(v);
  });
});
