import {BuildOptions} from "./types/config";
import {Configuration as DevServeConfiguration} from 'webpack-dev-server';

export function BuildDevServer(options:BuildOptions):DevServeConfiguration{
return {
    port: options.port,
    open: true,
    historyApiFallback:true,
    hot: true,
    proxy: [
        {
            context: ["/api"],
            target: "https://api.nytimes.com",
            changeOrigin: true,
            pathRewrite: { "^/api": "" },
            secure: false,
        },
    ],
}
}