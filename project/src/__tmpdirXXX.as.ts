import {
	type EnkoreJSRuntimeContextOptions,
	createContext
} from "@anio-software/enkore.js-runtime"

import {mkdir} from "@anio-software/pkg-private.node-consistent-fs/async"
//>import {mkdir} from "@anio-software/pkg-private.node-consistent-fs/sync"

import {randomUUID} from "node:crypto"
import path from "node:path"
import os from "node:os"

export async function __implementation(
//>export function __implementationSync(
	contextOptions: EnkoreJSRuntimeContextOptions,
	tmpDir?: string
) : Promise<string> {
//>) : string {
	const context = createContext(contextOptions, 0)

	if (tmpDir === undefined) {
		tmpDir = os.tmpdir()
	}

	context.log.trace(`using temporary directory '${tmpDir}'`)

	const rand = randomUUID({disableEntropyCache: true})
	const dirPath = path.join(tmpDir, rand)

	await mkdir(dirPath, {mode: 0o755})
//>	mkdir(dirPath, {mode: 0o755})

	return dirPath
}
