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

After installing this package you can use it as follows:

```ts
import loadEvTypes from 'node-env-types'
import process = 'process'

createEnvTypes(process.cwd(), {
  filename: ".env", // the path name of the file that contains your environmental variables
});

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
