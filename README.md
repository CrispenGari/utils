### utils

This package contains some helper functions, i call them `utilities` that i use frequently when creating node applications.

<p align="center">
<img src="/logo.png" alt="logo" width="200"/>
</p>

### Installation

You can install this package using different package managers you do it as follows:

1. using `yarn`

```shell
yarn add @crispengari/utils
```

2. using `npm`

```shell
npm i @crispengari/utils
```

3. using `pnpm`

```shell
pnpm install @crispengari/utils
```

### Usage

After installing this package you can use the different utility functions that comes with this package.

### Examples.

1. encoding strings to `base64`

The `encode2Base64` utility function is used to decode a string representation from `utf8` to `base64` string. Here is how you can use it.

```ts
import { encode2Base64 } from "@crispengari/utils";
const userId: string = "642fe19989416c012ccf062f";
console.log({ encodedId: encode2Base64(userId) });
```

Output:

```shell
{ encodedId: 'NjQyZmUxOTk4OTQxNmMwMTJjY2YwNjJm' }
```

2. encoding strings to `utf8`

```ts
import { decodeFromBase64 } from "@crispengari/utils";

console.log({
  decodedId: decodeFromBase64("NjQyZmUxOTk4OTQxNmMwMTJjY2YwNjJm"),
});
```

Output:

```shell
{ decodedId: '642fe19989416c012ccf062f' }
```

> Note that you can also decode and encode object-strings from and to `base64` the following are the examples on how it can be done.

```ts
const user = {
  id: "642fe19989416c012ccf062f",
  username: "username",
  email: "email@gmail.com",
  age: 23,
};

console.log({ encodedUser: encode2Base64(JSON.stringify(user)) });
```

Output:

```shell
 {
  encodedUser: 'eyJpZCI6IjY0MmZlMTk5ODk0MTZjMDEyY2NmMDYyZiIsInVzZXJuYW1lIjoidXNlcm5hbWUiLCJlbWFpbCI6ImVtYWlsQGdtYWlsLmNvbSIsImFnZSI6MjN9'
}
```

To decode the encoded string of user object you can do it as follows:

```ts
console.log({
  decodedUser: JSON.parse(
    decodeFromBase64(
      "eyJpZCI6IjY0MmZlMTk5ODk0MTZjMDEyY2NmMDYyZiIsInVzZXJuYW1lIjoidXNlcm5hbWUiLCJlbWFpbCI6ImVtYWlsQGdtYWlsLmNvbSIsImFnZSI6MjN9"
    )
  ),
});
```

Output:

```shell
{
  user: {
  id: "642fe19989416c012ccf062f",
  username: "username",
  email: "email@gmail.com",
  age: 23,
  }
}
```

3. Compressing `json` objects

You can compress a json object using the `compressJSON` the following is an example on how you can do it

```ts
import { compressJSON } from "@crispengari/utils";
const inputData = { key1: "value1", key2: [1, 2, 3], key3: { nested: true } };
const compressedString = compressJSON(inputData);
console.log(compressedString);
// Output: "eJzLSM3JyVcozy/KSQEAGwQF"
```

3. Decompressing back to `json` objects

You can decompress a compressed object using the `decompressJSON` function the following is an example on how you can do it

```ts
import { decompressJSON } from "@crispengari/utils";
const compressedString = "eJzLSM3JyVcozy/KSQEAGwQF";
const decompressedData = decompressJSON(compressedString);
console.log(decompressedData);
// Output: { key1: "value1", key2: [1, 2, 3] }
```

### Languages

This package is intended to be used by developers who codes in `typescript` and or `javascript`.

### License

In this package I'm using the `MIT` license which reads as follows:

```
MIT License

Copyright (c) 2023 crispengari

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```
