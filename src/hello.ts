import { decodeFromBase64, encode2Base64 } from "./buffer";

const userId: string = "642fe19989416c012ccf062f";
// { encodedId: 'NjQyZmUxOTk4OTQxNmMwMTJjY2YwNjJm' }

console.log({ encodedId: encode2Base64(userId) });

console.log({
  decodedId: decodeFromBase64("NjQyZmUxOTk4OTQxNmMwMTJjY2YwNjJm"),
});
// { decodedId: '642fe19989416c012ccf062f' }

const user = {
  id: "642fe19989416c012ccf062f",
  username: "username",
  email: "email@gmail.com",
  age: 23,
};

console.log({ encodedUser: encode2Base64(JSON.stringify(user)) });
// // {
//   encodedUser: 'eyJpZCI6IjY0MmZlMTk5ODk0MTZjMDEyY2NmMDYyZiIsInVzZXJuYW1lIjoidXNlcm5hbWUiLCJlbWFpbCI6ImVtYWlsQGdtYWlsLmNvbSIsImFnZSI6MjN9'
// }
console.log({
  decodedUser: JSON.parse(
    decodeFromBase64(
      "eyJpZCI6IjY0MmZlMTk5ODk0MTZjMDEyY2NmMDYyZiIsInVzZXJuYW1lIjoidXNlcm5hbWUiLCJlbWFpbCI6ImVtYWlsQGdtYWlsLmNvbSIsImFnZSI6MjN9"
    )
  ),
});
