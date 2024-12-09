import {createContext} from "@fourtune/realm-js/v0/runtime"

// vvv--- types needed for implementation
/* couldn't find a user defined type named 'Promise' at the top level */
// ^^^--- types needed for implementation

import {tmpdirFactory as factory} from "#~synthetic/user/export/tmpdirFactory.mts"

const fn = factory(createContext())

export async function tmpdir(tmp_dir?: string) : Promise<string> {
	return await fn(tmp_dir)
}
