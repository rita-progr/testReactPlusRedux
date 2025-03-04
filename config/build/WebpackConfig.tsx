import {BuildOptions} from "./types/config";
import {BuidLoaders} from "./BuildLoaders";
import {BuildResolvers} from "./BuildResolvers";
import {BuildDevServer} from "./BuildDevServer";
import {BuildPlugins} from "./BuildPlugins";

const path = require('path');

export function WebpackConfig(options:BuildOptions){
    const {mode, paths, isDev} = options;
    return {
        mode: mode,
        entry: paths.entry,
        module: {
            rules: BuidLoaders(options),
        },
        devtool: isDev ? 'inline-source-map': undefined,
        resolve: BuildResolvers(options),
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },
        plugins: BuildPlugins(options),
        devServer: isDev ? BuildDevServer(options) : undefined
    };
}

