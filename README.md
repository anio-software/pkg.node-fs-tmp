# @anio-software/pkg.node-fs-tmp

Create a temporary directory or file.

```js
import {tmpfile, tmpfileSync, tmpdir, tmpdirSync} from "@anio-software/pkg.node-fs-tmp"

console.log(await tmpfile())
console.log(tmpfileSync())
console.log(await tmpdir())
console.log(tmpdirSync())
```
