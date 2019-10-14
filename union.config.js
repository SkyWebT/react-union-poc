module.exports = options => {
	console.log(options);
	const { script } = options;
	return {
		mergeWebpackConfig: config => {
			console.log(config);
			config.optimization = {};
			// needs to match the theme directory
			if (script === 'build') {
				config.output.publicPath = '/o/nick-react-union-theme/';
			}
			config.output.filename = 'js/[name].js';
			config.output.chunkFilename = 'js/[name].chunk.js';
			return config;
		},

		workspaces: {
			widgetPattern: 'widget',
			appPattern: 'app',
		},
	};
};
