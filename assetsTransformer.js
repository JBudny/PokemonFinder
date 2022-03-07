import { basename } from 'path'

export function process(_src, filename, _config, _options) {
	return `module.exports = ${JSON.stringify(basename(filename))};`
}
