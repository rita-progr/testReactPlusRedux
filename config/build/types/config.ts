export type BuildMode = 'development' | 'production';

export interface BuildPaths {
    html: string;
    src: string;
    entry: string;
    build: string;
}

export interface BuildEnv{
    mode:BuildMode;
    port:number;
}

export interface BuildOptions{
    paths:BuildPaths;
    mode:BuildMode;
    isDev: boolean;
    port:number;
}