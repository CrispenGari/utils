import { Buffer } from "buffer";

/**
 * Encodes a string into a base64-encoded string.
 *
 * @param {string} data - The input string to be encoded.
 * @returns {string} - The base64-encoded string.
 *
 * @example
 * // Example usage:
 * const originalString = "Hello, World!";
 * const encodedString = encode2Base64(originalString);
 * console.log(encodedString);
 * // Output: "SGVsbG8sIFdvcmxkIQ=="
 *
 * @example
 * // Another example with a different string:
 * const anotherString = "Lorem ipsum dolor sit amet";
 * const anotherEncodedString = encode2Base64(anotherString);
 * console.log(anotherEncodedString);
 * // Output: "TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQ="
 */
export const encode2Base64 = (data: string): string => {
  return Buffer.from(data, "utf-8").toString("base64");
};

/**
 * Decodes a base64-encoded string into a UTF-8 string.
 *
 * @param {string} data - The base64-encoded string to be decoded.
 * @returns {string} - The decoded UTF-8 string.
 *
 * @example
 * // Example usage:
 * const encodedString = "SGVsbG8sIFdvcmxkIQ==";
 * const decodedString = decodeFromBase64(encodedString);
 * console.log(decodedString);
 * // Output: "Hello, World!"
 *
 * @example
 * // Another example with a different encoded string:
 * const anotherEncodedString = "TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQ=";
 * const anotherDecodedString = decodeFromBase64(anotherEncodedString);
 * console.log(anotherDecodedString);
 * // Output: "Lorem ipsum dolor sit amet"
 */
export const decodeFromBase64 = (data: string): string => {
  return Buffer.from(data, "base64").toString("utf-8");
};
