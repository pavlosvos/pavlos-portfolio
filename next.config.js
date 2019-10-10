module.exports = {
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
    exportPathMap: async function(
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }

      ) {
        return {
          '/': { page: '/' },
          '/index': { page: '/index' },
          '/about': { page: '/about' },
          '/portfolio': { page: '/portfolio' },
          '/contact': { page: '/contact' },
        }
      },
};
