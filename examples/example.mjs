import {tmpfile, tmpfileSync, tmpdir, tmpdirSync} from "../dist/default/index.min.mjs"

console.log(await tmpfile())
console.log(tmpfileSync())
console.log(await tmpdir())
console.log(tmpdirSync())
