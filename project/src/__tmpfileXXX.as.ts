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
	file_extension?: string,
	tmp_dir?: string
) : Promise<string> {
//>) : string {
	const context = createContext(contextOptions, 0)

	if (tmp_dir === undefined) {
		tmp_dir = os.tmpdir()
	}

	context.log.trace(`using tmp_dir '${tmp_dir}'`)

	if (file_extension === undefined) {
		file_extension = ""
	}

	const rand = randomUUID({disableEntropyCache: true})
	const file_path = path.join(tmp_dir, rand + file_extension)

	const file = await openFile(file_path, "wx", 0o744)
//>	const file = openFile(file_path, "wx", 0o744)

	await file.close()
//>	file.close()

	return file_path
}
