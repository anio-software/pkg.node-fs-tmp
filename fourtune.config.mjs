import {generateFactoryFiles} from "@fourtune/realm-js/v0/autogenerate"

export default {
	realm: {
		name: "js",
		type: "package",

		options: {
			runtime: "node"
		}
	},

	autogenerate: {
		...generateFactoryFiles({
			source_file: "src/__tmpdirXXX.as.mts",
			export_name: "tmpdirXXX",
			destination: "src/export"
		}),
		...generateFactoryFiles({
			source_file: "src/__tmpfileXXX.as.mts",
			export_name: "tmpfileXXX",
			destination: "src/export"
		})
	}
}
