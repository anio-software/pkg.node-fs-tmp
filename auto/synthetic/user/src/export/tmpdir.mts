import {createContext} from "@fourtune/realm-js/v0/runtime"

// vvv--- types needed for implementation
/* couldn't find a user defined type named 'Promise' at the top level */
// ^^^--- types needed for implementation

import {tmpdirFactory as factory} from "#~synthetic/user/export/tmpdirFactory.mts"

let __fnImplementation: any = null

export async function tmpdir(tmp_dir?: string) : Promise<string> {
	if (__fnImplementation === null) __fnImplementation = factory(createContext());

	return await __fnImplementation(tmp_dir)
}
