export type BuildMode = 'development' | 'production';

export interface BuildEnv {
  port: number;
  mode: BuildMode
}

export interface BuildPaths {
  html: string,
  entry: string,
  build: string,
  src: string,
  app: string,
  pages: string,
  widgets: string,
  features: string,
  entities: string,
  shared: string,
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}
