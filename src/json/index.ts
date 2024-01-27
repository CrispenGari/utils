import { Buffer } from "buffer";
import pako from "pako";
/**
 * Compresses a JSON object into a base64-encoded.
 *
 * @template TData - The type of the input JSON object.
 * @param {TData} data - The JSON object to be compressed.
 * @returns {string} - The base64-encoded compressed string.
 *
 * @example
 * // Example usage:
 * const inputData = { key1: "value1", key2: [1, 2, 3], key3: { nested: true } };
 * const compressedString = compressJSON(inputData);
 * console.log(compressedString);
 * // Output: "eJzLSM3JyVcozy/KSQEAGwQF"
 *
 * @example
 * // Example with a more complex object:
 * const complexData = {
 *   name: "John Doe",
 *   age: 30,
 *   addresses: [{ city: "New York", zip: "10001" }, { city: "San Francisco", zip: "94105" }],
 *   isActive: true
 * };
 * const compressedComplexString = compressJSON(complexData);
 * console.log(compressedComplexString);
 * // Output: "eJyLzC9OzMlNz0jTAAjqAwA="
 */
export const compressJSON = <TData extends object>(data: TData) => {
  const buffer = pako.deflate(JSON.stringify(data), {});
  const zipped = Buffer.from(buffer).toString("base64");
  return zipped;
};

/**
 * Decompresses a base64-encoded string into a JSON object.
 *
 * @template TResponse - The type of the output JSON object.
 * @param {string} data - The base64-encoded compressed string to be decompressed.
 * @returns {TResponse} - The decompressed JSON object.
 *
 * @example
 * // Example usage:
 * const compressedString = "eJzLSM3JyVcozy/KSQEAGwQF";
 * const decompressedData = decompressJSON<{ key1: string, key2: number[] }>(compressedString);
 * console.log(decompressedData);
 * // Output: { key1: "value1", key2: [1, 2, 3] }
 *
 * @example
 * // Example with a more complex object:
 * const compressedComplexString = "eJyLzC9OzMlNz0jTAAjqAwA=";
 * const decompressedComplexData = decompressJSON<{
 *   name: string,
 *   age: number,
 *   addresses: { city: string, zip: string }[],
 *   isActive: boolean
 * }>(compressedComplexString);
 * console.log(decompressedComplexData);
 * // Output: { name: "John Doe", age: 30, addresses: [{ city: "New York", zip: "10001" }, { city: "San Francisco", zip: "94105" }], isActive: true }
 */
export const decompressJSON = <TResponse extends object>(
  data: string
): TResponse => {
  const uint: Uint8Array = Buffer.from(data, "base64");
  const payload = pako.inflate(uint, { to: "string" });
  return JSON.parse(payload);
};
