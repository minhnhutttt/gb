const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                "@components": path.resolve(__dirname, "src/components"),
                "@images": path.resolve(__dirname, "src/images"),
            },
            modules: [path.resolve(__dirname, 'src'), 'node_modules']
        }
    });
}