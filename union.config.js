module.exports = ({
	target, // custom value
	script, // build, start or test
	app,
	debug,
	proxy,
	verbose,
	noHmr,
	analyze,
}) => {
	return {
		mergeWebpackConfig: config => {
			config.optimization = {};
			// needs to match the theme directory
			config.output.publicPath = '/o/nick-react-union-theme/';
			config.output.filename = 'js/[name].js';
			config.output.chunkFilename = 'js/[name].chunk.js';
			console.log('react-union config', config);
			return config;
		},

		workspaces: {
			widgetPattern: 'widget',
			appPattern: 'app',
		},
	};
};
