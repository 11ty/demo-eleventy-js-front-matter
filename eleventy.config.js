const { RetrieveGlobals } = require("node-retrieve-globals");

/** @param {import('@11ty/eleventy').UserConfig} eleventyConfig */
module.exports = function(eleventyConfig) {
	eleventyConfig.ignores.add("README.md");

	eleventyConfig.addFilter("await", async promise => {
		return promise;
	});

	eleventyConfig.setFrontMatterParsingOptions({
		engines: {
			"javascript": function(frontMatterCode) {
				let vm = new RetrieveGlobals(frontMatterCode);

				let data = {}; // want to pass in data available in front matter?
				return vm.getGlobalContext(data, {
					reuseGlobal: true,
					dynamicImport: true,
				});
			}
		}
	});
};
