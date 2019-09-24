module.exports = {
    target: 'serverless',
    webpack: config => {
        config.node = {
            fs: 'empty',
            module: 'empty',
        };
        config.module.rules.push({
            test: /\.(md)$/,
            loader: 'raw-loader',
        });

        return config;
    },
};