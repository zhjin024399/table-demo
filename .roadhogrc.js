
export default {
    entry: './src/index.js',
    disableCSSModules: false,
    outputPath: '../../weaver/ecology/trunk/formmode/plugin/js/common/',
    env: {
        development: {
            extraBabelPlugins: [
                'dva-hmr',
                'transform-runtime',
                ["import", { libraryName: "antd", style: "css" }]
            ]
        },
        production: {
            extraBabelPlugins: [
                'transform-runtime',
                ["import", { libraryName: "antd", style: "css" }]
            ]
        }
    }
};
