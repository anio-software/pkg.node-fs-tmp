import {useContext, type RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"

import {mkdir} from "@aniojs-private/node-async-sync-fs/sync"

import {randomUUID} from "node:crypto"
import path from "node:path"
import os from "node:os"

export function implementation(
	wrapped_context: RuntimeWrappedContextInstance,
	tmp_dir?: string
) : string {
	const context = useContext(wrapped_context, 0)

	if (tmp_dir === undefined) {
		tmp_dir = os.tmpdir()
	}

	context.log.trace(`using tmp_dir '${tmp_dir}'`)

	const rand = randomUUID({disableEntropyCache: true})
	const dir_path = path.join(tmp_dir, rand)

	mkdir(dir_path, {mode: 0o755})

	return dir_path
}
