import {createContext} from "@fourtune/realm-js/v0/runtime"

// vvv--- types needed for implementation
/* couldn't find a user defined type named 'Promise' at the top level */
// ^^^--- types needed for implementation

import {tmpfileFactory as factory} from "#~synthetic/user/export/tmpfileFactory.mts"

export async function tmpfile(file_extension?: string, tmp_dir?: string) : Promise<string> {
	const __fnImplementation = factory(createContext())

	return await __fnImplementation(file_extension, tmp_dir)
}
