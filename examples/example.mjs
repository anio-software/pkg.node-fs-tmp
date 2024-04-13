import {tmpfile, tmpfileSync, tmpdir, tmpdirSync} from "../src/index.mjs"

console.log(await tmpfile())
console.log(tmpfileSync())
console.log(await tmpdir())
console.log(tmpdirSync())
