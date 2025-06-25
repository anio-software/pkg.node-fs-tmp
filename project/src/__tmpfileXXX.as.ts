import {
	type EnkoreJSRuntimeContextOptions,
	createContext
} from "@anio-software/enkore.js-runtime"

import {openFile} from "@anio-software/pkg-private.node-consistent-fs/async"
//>import {openFile} from "@anio-software/pkg-private.node-consistent-fs/sync"

import {isString, isNumber} from "@anio-software/pkg.is"
import {randomUUID} from "node:crypto"
import path from "node:path"
import os from "node:os"

import type {TemporaryFileOptions} from "#~export/TemporaryFileOptions.ts"

export async function __implementation(
//>export function __implementationSync(
	contextOptions: EnkoreJSRuntimeContextOptions,
	options?: TemporaryFileOptions|undefined
) : Promise<string> {
//>) : string {
	const context = createContext(contextOptions, 0)
	const tmpDir: string = isString(options?.tmpDir) ? options.tmpDir : os.tmpdir()
	const fileExtension: string = isString(options?.fileExtension) ? options.fileExtension : ""
	const fileMode: number = isNumber(options?.mode) ? options.mode : 0o744

	context.log.trace(`using temporary directory '${tmpDir}' and mode '${fileMode.toString(8)}'`)

	const rand = randomUUID({disableEntropyCache: true})
	const filePath = path.join(tmpDir, rand + fileExtension)

	const file = await openFile(filePath, "wx", fileMode)
//>	const file = openFile(filePath, "wx", fileMode)

	await file.close()
//>	file.close()

	return filePath
}
