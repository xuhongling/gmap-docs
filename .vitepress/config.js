/**
 * @type {import('vitepress').UserConfig}
 */
import { defineConfig } from 'vitepress';

const ogDescription = 'Next Generation Frontend Tooling'
const ogImage = 'https://vitejs.dev/og-image.png'
const ogTitle = 'Vite'
const ogUrl = 'https://vitejs.dev'

export default defineConfig({
  title: 'GMap 文档',
  description: '一个开箱即用的地图工具',
  lang: 'zh-CN',

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
  ],

  vue: {
    reactivityTransform: true
  },

  themeConfig: {
    logo: '/logo.png',

    editLink: {
      text: '为此页提供修改建议',
      pattern: 'https://github.com/xuhongling/g-map-docs/edit/main/docs/:path',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xuhongling/g-map-docs' }
    ],

    footer: {
      message: '根据 MIT 许可证发布。',
      copyright: 'Copyright © 2022-present Xu Hongling'
    },

    nav: [
      { text: '指南', link: '/src/guide/', activeMatch: '/guide/' },
      { text: 'Functions', link: '/src/functions/', activeMatch: '/functions/' },
      {
        text: '相关链接',
        items: [
          {
            text: 'openlayers',
            link: 'https://openlayers.org'
          },
          {
            text: 'turf',
            link: 'http://turfjs.org/'
          },
        ]
      }
    ],

    sidebar: {
      '/src/guide/': [
        {
          text: '开始',
          items: [
            {
              text: '简介',
              link: '/src/guide/'
            },
            {
              text: 'GeoJSON简介',
              link: '/src/guide/geojson'
            },
            {
              text: '初始化',
              link: '/src/guide/initialization'
            },
          ]
        },
      ],
      '/src/functions/': [
        {
          text: '图层操作',
          items: [
            {
              text: 'getLayerByName',
              link: '/src/functions/'
            },
            {
              text: 'getAllLayers',
              link: '/src/functions/layerOperation/getAllLayers'
            },
            {
              text: 'removeLayer',
              link: '/src/functions/layerOperation/removeLayer'
            },
            {
              text: 'setLayerVisible',
              link: '/src/functions/layerOperation/setLayerVisible'
            },
          ]
        },
        {
          text: '数据加载',
          items: [
            {
              text: 'Point',
              link: '/src/functions/dataLoad/point'
            },
            {
              text: 'LineString',
              link: '/src/functions/dataLoad/lineString'
            },
            {
              text: 'Polygon',
              link: '/src/functions/dataLoad/polygon'
            },
          ]
        },
        {
          text: '要素操作',
          items: [
            {
              text: 'hoverChangeStyle',
              link: '/src/functions/featureOperation/hoverChangeStyle'
            },
            {
              text: 'hoverShowTips',
              link: '/src/functions/featureOperation/hoverShowTips'
            },
            {
              text: 'pickFeaturesByName',
              link: '/src/functions/featureOperation/pickFeaturesByName'
            },
            {
              text: 'pickFeaturesPopover',
              link: '/src/functions/featureOperation/pickFeaturesPopover'
            },
          ]
        },
        {
          text: '坐标转换',
          items: [
            {
              text: 'projTransform',
              link: '/src/functions/transform/projTransform'
            },
            {
              text: 'coordTransform',
              link: '/src/functions/transform/coordTransform'
            },
          ]
        },
        {
          text: '其它常用',
          items: [
            {
              text: 'exportMapToImage',
              link: '/src/functions/other/exportMapToImage'
            },
            {
              text: 'measureLength',
              link: '/src/functions/other/measureLength'
            },
            {
              text: 'measureArea',
              link: '/src/functions/other/measureArea'
            },
          ]
        },
      ],
    }
  },
});