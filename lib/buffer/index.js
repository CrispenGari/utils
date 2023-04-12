"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeFromBase64 = exports.encode2Base64 = void 0;
const buffer_1 = require("buffer");
const encode2Base64 = (data) => {
    return buffer_1.Buffer.from(data, "utf-8").toString("base64");
};
exports.encode2Base64 = encode2Base64;
const decodeFromBase64 = (data) => {
    return buffer_1.Buffer.from(data, "base64").toString("utf-8");
};
exports.decodeFromBase64 = decodeFromBase64;
//# sourceMappingURL=index.js.map