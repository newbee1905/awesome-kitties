module.exports = {
	output: 'export',
	reactStrictMode: true,
	webpack: (cfg) => {
		cfg.module.rules.push(
			{
				test: /\.md$/,
				loader: 'frontmatter-markdown-loader',
				options: { mode: ['react-component'] }
			}
		)
		return cfg
	}
}
