import {implementation} from "#~synthetic/async.sync/tmpfileSync.mts"
import type {RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"
import {getProject} from "@fourtune/realm-js/v0/project"

declare function tmpfileSync(
	file_extension?: string,
	tmp_dir?: string
) : string

/**
 * @brief
 * Create an instance of the function 'tmpfileSync'.
 *
 * @param user
 * Options object (see @fourtune/realm-js/v0/runtime) or an already
 * created context with createContext().
 * This parameter is optional.
 *
 * @return
 * An instance of the function 'tmpfileSync'.
 */
export function tmpfileSyncFactory(context: RuntimeWrappedContextInstance) : typeof tmpfileSync {
	const project = getProject()
	const local_context : RuntimeWrappedContextInstance = {
		...context,
		_package: {
			name: project.package_json.name,
			version: project.package_json.version,
			author: project.package_json.author,
			license: project.package_json.license
		}
	}

	return function tmpfileSync(file_extension?: string, tmp_dir?: string) : string {
		return implementation(local_context, file_extension, tmp_dir)
	}
}
