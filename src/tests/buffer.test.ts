import { describe, expect, test } from "@jest/globals";
import { decodeFromBase64, encode2Base64 } from "../buffer";

describe("Testing buffer utilities", () => {
  test("testing encoding strings", () => {
    const userId: string = "642fe19989416c012ccf062f";
    expect(encode2Base64(userId)).toBe("NjQyZmUxOTk4OTQxNmMwMTJjY2YwNjJm");
  }),
    test("testing encoding object as strings", () => {
      const user = {
        id: "642fe19989416c012ccf062f",
        username: "username",
        email: "email@gmail.com",
        age: 23,
      };
      expect(encode2Base64(JSON.stringify(user))).toBe(
        "eyJpZCI6IjY0MmZlMTk5ODk0MTZjMDEyY2NmMDYyZiIsInVzZXJuYW1lIjoidXNlcm5hbWUiLCJlbWFpbCI6ImVtYWlsQGdtYWlsLmNvbSIsImFnZSI6MjN9"
      );
    }),
    test("testing decoding to strings", () => {
      const userId: string = "642fe19989416c012ccf062f";
      expect(decodeFromBase64("NjQyZmUxOTk4OTQxNmMwMTJjY2YwNjJm")).toBe(userId);
    }),
    test("testing decoding strings to objects", () => {
      const user = {
        id: "642fe19989416c012ccf062f",
        username: "username",
        email: "email@gmail.com",
        age: 23,
      };
      expect(
        JSON.parse(
          decodeFromBase64(
            "eyJpZCI6IjY0MmZlMTk5ODk0MTZjMDEyY2NmMDYyZiIsInVzZXJuYW1lIjoidXNlcm5hbWUiLCJlbWFpbCI6ImVtYWlsQGdtYWlsLmNvbSIsImFnZSI6MjN9"
          )
        )
      ).toEqual(user);
    });
});
