import {createContext} from "@fourtune/realm-js/v0/runtime"

import {tmpfileSyncFactory as factory} from "#~synthetic/user/export/tmpfileSyncFactory.mts"

let __fnImplementation: any = null

export function tmpfileSync(file_extension?: string, tmp_dir?: string) : string {
	if (__fnImplementation === null) __fnImplementation = factory(createContext());

	return __fnImplementation(file_extension, tmp_dir)
}
