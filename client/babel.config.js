module.exports = {
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: [
                    '.ts',
                    '.tsx',
                    '.jsx',
                    '.js',
                    '.json',
                ],
                alias: {
                    redux: './src/redux',
                    components: './src/components',
                    pages: './src/pages',
                    firebase: './src/firebase',
                    assets: './src/assets',
                    interfaces: './src/interfaces',
                    test: './src/__tests__',
                },
            },
        ],
    ],
}