import {createContext} from "@fourtune/realm-js/v0/runtime"

import {tmpdirSyncFactory as factory} from "#~synthetic/user/export/tmpdirSyncFactory.mts"

let __fnImplementation: any = null

export function tmpdirSync(tmp_dir?: string) : string {
	if (__fnImplementation === null) __fnImplementation = factory(createContext());

	return __fnImplementation(tmp_dir)
}
