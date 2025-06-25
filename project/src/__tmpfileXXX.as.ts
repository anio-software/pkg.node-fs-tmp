import {
	type EnkoreJSRuntimeContextOptions,
	createContext
} from "@anio-software/enkore.js-runtime"

import {openFile} from "@anio-software/pkg-private.node-consistent-fs/async"
//>import {openFile} from "@anio-software/pkg-private.node-consistent-fs/sync"

import {randomUUID} from "node:crypto"
import path from "node:path"
import os from "node:os"

export async function __implementation(
//>export function __implementationSync(
	contextOptions: EnkoreJSRuntimeContextOptions,
	fileExtension?: string,
	tmpDir?: string
) : Promise<string> {
//>) : string {
	const context = createContext(contextOptions, 0)

	if (tmpDir === undefined) {
		tmpDir = os.tmpdir()
	}

	context.log.trace(`using temporary directory '${tmpDir}'`)

	if (fileExtension === undefined) {
		fileExtension = ""
	}

	const rand = randomUUID({disableEntropyCache: true})
	const filePath = path.join(tmpDir, rand + fileExtension)

	const file = await openFile(filePath, "wx", 0o744)
//>	const file = openFile(filePath, "wx", 0o744)

	await file.close()
//>	file.close()

	return filePath
}
