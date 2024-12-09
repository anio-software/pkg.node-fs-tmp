import {createContext} from "@fourtune/realm-js/v0/runtime"

import {tmpfileSyncFactory as factory} from "#~synthetic/user/export/tmpfileSyncFactory.mts"

const fn = factory(createContext())

export function tmpfileSync(file_extension?: string, tmp_dir?: string) : string {
	return fn(file_extension, tmp_dir)
}
