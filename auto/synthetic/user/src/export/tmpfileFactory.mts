import {implementation} from "#~synthetic/async.sync/tmpfile.mts"
import type {RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"
import {getProject} from "@fourtune/realm-js/v0/project"

// vvv--- types needed for implementation
/* couldn't find a user defined type named 'Promise' at the top level */
// ^^^--- types needed for implementation

declare function tmpfile(
	file_extension?: string,
	tmp_dir?: string
) : Promise<string>

/**
 * @brief
 * Create an instance of the function 'tmpfile'.
 *
 * @param user
 * Options object (see @fourtune/realm-js/v0/runtime) or an already
 * created context with createContext().
 * This parameter is optional.
 *
 * @return
 * An instance of the function 'tmpfile'.
 */
export function tmpfileFactory(context: RuntimeWrappedContextInstance) : typeof tmpfile {
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

	return async function tmpfile(file_extension?: string, tmp_dir?: string) : Promise<string> {
		return await implementation(local_context, file_extension, tmp_dir)
	}
}
