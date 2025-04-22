# 初始化 {#initialization}

项目开发时，需要注意的一些事项。

## 前言

::: tip 关于工具函数

该工具函数集虽然基于`OpenLayers`进行了二次封装，以便于使用，但可能无法完全满足您项目的所有特定需求。若发现现有函数不符合您的期望，您完全可以根据实际需求自行开发相应的功能，无需局限于仅使用本项目提供的工具函数。

:::

## 项目准备

开发项目时需要初始化一个`OpenLayers`地图对象，供于该工具函数。

::: warning 注意

- 该工具函数只提供了二次封装的代码，没有new Map地图对象，开发项目必须先初始化一个`ol`地图对象，否则可能使用会报错。
- [OpenLayers ](https://www.npmjs.com/package/ol) 版本要求`5.x`以上，且不能低于为`4.x`版本，这里推荐 `6.x` 及以上。
- 在`gmap-ol@0.5.9`需要升级`ol`版本到 `9.x`以上。

:::

一个简单的地图:

```html
<div id="map" style="width: 100%; height: 100%;"></div>
```
```javascript
import Map from 'ol/Map';
import View from 'ol/View';
import { Tile as TileLayer } from 'ol/layer';
import OSM from 'ol/source/OSM';

// 初始化地图
const olMap = new Map({
  target: 'map', // 让id为map的div作为地图的容器
  layers: [
    new TileLayer({ source: new OSM() }), // 创建一个使用Open Street Map地图源的瓦片图层
  ],
  view: new View({
    center: [100, 30], // 定义地图显示中心于经度100度，纬度30度处
    zoom: 2, // 并且定义地图显示层级为2
  }),
});
```