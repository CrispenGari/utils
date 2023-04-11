import { Buffer } from "buffer";

export const encode2Base64 = (data: string): string => {
  return Buffer.from(data, "utf-8").toString("base64");
};

export const decodeFromBase64 = (data: string): string => {
  return Buffer.from(data, "base64").toString("utf-8");
};
