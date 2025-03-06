import {createContext} from "@fourtune/realm-js/v0/runtime"

import {tmpfileSyncFactory as factory} from "#~synthetic/user/export/tmpfileSyncFactory.mts"

export function tmpfileSync(file_extension?: string, tmp_dir?: string) : string {
	const __fnImplementation = factory(createContext())

	return __fnImplementation(file_extension, tmp_dir)
}
