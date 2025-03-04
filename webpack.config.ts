import webpack from 'webpack';
import {BuildEnv, BuildPaths} from "./config/build/types/config";
import path from "path";
import {WebpackConfig} from "./config/build/WebpackConfig";
export default (env:BuildEnv)=>{
    const paths:BuildPaths = {
        entry: path.resolve(__dirname, "src" , "index.tsx"),
        build: path.resolve(__dirname,"build"),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname,"src")
    }
    const mode = env.mode || 'development';
    const PORT = env.port || 3000;
    const isDev = mode === "development";

    const config: webpack.Configuration = WebpackConfig({
        mode,
        paths:paths,
        port: PORT,
        isDev
    })

    return config
}