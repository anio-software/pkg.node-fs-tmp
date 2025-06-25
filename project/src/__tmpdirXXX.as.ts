import {
	type EnkoreJSRuntimeContextOptions,
	createContext
} from "@anio-software/enkore.js-runtime"

import {mkdir} from "@anio-software/pkg-private.node-consistent-fs/async"
//>import {mkdir} from "@anio-software/pkg-private.node-consistent-fs/sync"

import type {TemporaryDirectoryOptions} from "#~export/TemporaryDirectoryOptions.ts"

import {isString, isNumber} from "@anio-software/pkg.is"
import {randomUUID} from "node:crypto"
import path from "node:path"
import os from "node:os"

export async function __implementation(
//>export function __implementationSync(
	contextOptions: EnkoreJSRuntimeContextOptions,
	options?: TemporaryDirectoryOptions|undefined
) : Promise<string> {
//>) : string {
	const tmpDir: string = isString(options?.tmpDir) ? options.tmpDir : os.tmpdir()
	const fileMode: number = isNumber(options?.mode) ? options.mode : 0o755

	const context = createContext(contextOptions, 0)

	context.log.trace(`using temporary directory '${tmpDir}' and mode '${fileMode.toString(8)}'`)

	const rand = randomUUID({disableEntropyCache: true})
	const dirPath = path.join(tmpDir, rand)

	await mkdir(dirPath, {mode: fileMode})
//>	mkdir(dirPath, {mode: fileMode})

	return dirPath
}
