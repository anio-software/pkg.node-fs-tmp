import {createContext} from "@fourtune/realm-js/v0/runtime"

import {tmpdirSyncFactory as factory} from "#~synthetic/user/export/tmpdirSyncFactory.mts"

const fn = factory(createContext())

export function tmpdirSync(tmp_dir: string) : string {
	return fn(tmp_dir)
}
