// import { IConfig } from 'umi-types';


import pageRoutes from './router.config';
import webpackPlugin from './plugin.config';

// ref: https://umijs.org/config/
const config =  {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'fox-admin',
      dll: false,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  urlLoaderExcludes: [
    /\.styl$/,
  ],
  routes: pageRoutes,
  chainWebpack: webpackPlugin,
}

export default config;
