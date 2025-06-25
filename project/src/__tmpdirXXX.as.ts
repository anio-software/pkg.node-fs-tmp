import {
	type EnkoreJSRuntimeContextOptions,
	createContext
} from "@anio-software/enkore.js-runtime"

import {mkdir} from "@aniojs-private/node-async-sync-fs/async"
//>import {mkdir} from "@aniojs-private/node-async-sync-fs/sync"

import {randomUUID} from "node:crypto"
import path from "node:path"
import os from "node:os"

export async function __implementation(
//>export function __implementationSync(
	wrapped_context: EnkoreJSRuntimeContextOptions,
	tmp_dir?: string
) : Promise<string> {
//>) : string {
	const context = createContext(wrapped_context, 0)

	if (tmp_dir === undefined) {
		tmp_dir = os.tmpdir()
	}

	context.log.trace(`using tmp_dir '${tmp_dir}'`)

	const rand = randomUUID({disableEntropyCache: true})
	const dir_path = path.join(tmp_dir, rand)

	await mkdir(dir_path, {mode: 0o755})
//>	mkdir(dir_path, {mode: 0o755})

	return dir_path
}
