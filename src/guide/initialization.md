# 初始化 {#initialization}

项目开发时，需要注意的一些事项。

## 前言

::: tip 关于本工具函数方法

本工具方法虽然是对`OpenLayers`二次封装的一些函数方法，但是可能满足不了项目中的所有要求。所以，如果函数方法不满足你的要求，完全可以不用自己写，不必坚持使用本项目的函数方法。

:::

## 项目准备

开发项目时需要初始化一个`OpenLayers`地图对象，供于本工具函数方法。

::: warning 注意

- 本工具函数方法只提供了二次封装的代码，没有new Map地图对象，开发项目必须先初始化一个`ol`地图对象，否则可能使用会报错。
- [OpenLayers ](https://www.npmjs.com/package/ol) 版本要求`5.x`以上，且不能低于为`4.x`版本，这里推荐 `6.x` 及以上。

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