import {createContext} from "@fourtune/realm-js/v0/runtime"

import {tmpdirSyncFactory as factory} from "#~synthetic/user/export/tmpdirSyncFactory.mts"

export function tmpdirSync(tmp_dir?: string) : string {
	const __fnImplementation = factory(createContext())

	return __fnImplementation(tmp_dir)
}
