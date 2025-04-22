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
      { text: '附录', link: '/src/appendix/', activeMatch: '/appendix/' },
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
              text: '初始化',
              link: '/src/guide/initialization'
            },
            {
              text: 'GeoJSON简介',
              link: '/src/guide/geojson'
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
            {
              text: 'getOptionsStyle',
              link: '/src/functions/layerOperation/getOptionsStyle'
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
            {
              text: 'WMS',
              link: '/src/functions/dataLoad/WMS'
            },
            {
              text: 'WFS',
              link: '/src/functions/dataLoad/WFS'
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
            {
              text: 'boxSelectionFeatures',
              link: '/src/functions/featureOperation/boxSelectionFeatures'
            },
            {
              text: 'getWmsFeature',
              link: '/src/functions/featureOperation/getWmsFeature'
            },
            {
              text: 'updateWfsFilter',
              link: '/src/functions/featureOperation/updateWfsFilter'
            },
          ]
        },
        {
          text: '测量绘制',
          items: [
            {
              text: 'measureLength',
              link: '/src/functions/drawing/measureLength'
            },
            {
              text: 'measureArea',
              link: '/src/functions/drawing/measureArea'
            },
            {
              text: 'drawFeatures',
              link: '/src/functions/drawing/drawFeatures'
            },
            {
              text: 'freehandDrawing',
              link: '/src/functions/drawing/freehandDrawing'
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
              text: 'zoomToFitExtent',
              link: '/src/functions/other/zoomToFitExtent'
            },
          ]
        },
      ],
      '/src/appendix/': [
        {
          text: 'OpenLayers API',
          items: [
            {
              text: '简介',
              link: '/src/appendix/'
            },
            {
              text: 'Map',
              link: '/src/appendix/Map'
            },
            {
              text: 'View',
              link: '/src/appendix/View'
            },
            {
              text: 'Layer',
              link: '/src/appendix/Layer'
            },
            {
              text: 'VectorLayer',
              link: '/src/appendix/VectorLayer'
            },
            {
              text: 'Overlay',
              link: '/src/appendix/Overlay'
            },
            {
              text: 'Style',
              link: '/src/appendix/Style'
            },
          ]
        },
      ]
    }
  },
});