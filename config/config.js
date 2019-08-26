// import { IConfig } from 'umi-types';
import { UmiRule } from 'chain-css-loader';
import poststylus from 'poststylus';

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
  chainWebpack(config) {
    // const rule = new UmiRule(config, {
    //   modules: true // 开启css modules
    // });

    const rule = new UmiRule(config, {
      modules: true,
      usePoststylus: true,
      stylus: {
        options: {
          use: [
            poststylus([
              require('postcss-flexbugs-fixes'),
              require('autoprefixer')({
                flexbox: 'no-2009'
              }),
              'rucksack-css'
            ])
          ]
        }
      }
    });
    rule.useStylus();
    return config;
  }
}

export default config;
