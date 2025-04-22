# Polygon

项目开发中，在地图上添加线的功能很常见，这里展示常用的用法，在地图添加`Polygon`，`MultiPoint`数据类型的图层工具类，包含以下方法：
- `addPolygonLayer`

## addPolygonLayer
在地图添加类型为`Polygon`，`MultiPoint`的GeoJSON数据图层


**Param**

| 属性    | 类型              | 说明                               |
| ------- | ---------------- | ---------------------------------- |
| Map     | `ol/Map`         | `ol/Map` 的地图对象                 |
| Data    | `GeoJsonObject`  | Polygon的GeoJson数据                |
| Options | `PolygonOptions` | Polygon图层配置，见`PolygonOptions`  |


**PolygonOptions**

| 属性            | 类型          | 默认值 | 可选值  | 说明                  |
| -------------- | ------------- | ------ | ------ | --------------------- |
| layerName      | `string`      | -      | 必填   | 图层名字               |
| className      | `string`      | -      | -      | 图层样式Class          |
| zIndex         | `string`      | 3      | -      | 图层上下层的叠加顺序    |
| visible        | `boolean`     | `true` | -      | 是否显示               |
| textFieldName  | `string`      | -      | -      | 线名别名字段            |
| hoverStyle     | `boolean`     | `true` | -      | 是否为hover修改图层样式 |
| styles         | `StyleObject` | -      | -      | Feature 样式           |


**PolygonData 示例**

```json
{
  "type": "FeatureCollection",
  "features": [{
    "type": "Feature",
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [114.398, 30.506],
          [114.401, 30.506],
          [114.401, 30.505],
          [114.398, 30.505],
          [114.398, 30.506]
        ]
      ]
    },
    "properties": {
      "name": "光谷"
    },
  }],
}
```

**PolygonOptions 示例**

```javascript

// 引用 addPolygonLayer
import { addPolygonLayer } from 'gmap-ol';

// Polygon 的 GeoJSON 数据
const polygonData = {...};

const polygonOptions = {
  layerName: 'PolygonLayer',
  zIndex: 10,
  textFieldName: 'name',
  styles: {
    fill: {
      color: 'rgba(100, 140, 240, 0.3)',
    },
    stroke: {
      width: 2,
      color: 'rgba(255, 255, 0, 0.8)',
    },
  }
};

// 把数据加载在地图上
addPolygonLayer(olMap, polygonData, polygonOptions);

```


## addRainPolygonLayer

在地图渲染**面雨量**的GeoJSON数据图层

**Param**

| 属性    | 类型              | 说明                               |
| ------- | ---------------- | ---------------------------------- |
| Map     | `ol/Map`         | `ol/Map` 的地图对象                 |
| Data    | `GeoJsonObject`  | Polygon的GeoJson数据                |
| Options | `Options`        | 雨量面图层配置，见下方`Options`      |


**Options**

| 属性            | 类型          | 默认值 | 可选值  | 说明                                       |
| -------------- | ------------- | ------ | ------ | ------------------------------------------ |
| layerName      | `string`      | -      | 必填   | 图层名字                                    |
| zIndex         | `string`      | 3      | -      | 图层上下层的叠加顺序                         |
| visible        | `boolean`     | `true` | -      | 是否显示                                    |
| renderColor    | `Array`       | -      | -      | 雨量面数据渲染的区间颜色集合<br>见RenderColor |

**RenderColor**

需要传入一个区间集合数据，来作为颜色渲染的判断依据，可以参考示例。

| 属性      | 类型        | 说明            |
| --------- | ---------- | --------------- |
| minvalue  | `string`   | 范围区间的最小值  |
| color     | `string`   | 范围区间的颜色    |
| maxvalue  | `string`   | 范围区间的最大值  |


**面雨量数据示例**

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "coordinates": [
          [[[116.74566854, 29.96701808 ], [116.74570005, 29.96701597 ], ......]]
        ],
        "type": "MultiPolygon"
      },
      "id": "fid0",
      "properties": {
        "area": 5407.41,
        "highValue": 10,
        "lowValue": 10
      }
    },
  ],
}
```

**示例：**

```javascript

// 引用 addRainPolygonLayer
import { addRainPolygonLayer } from 'gmap-ol';

// 生成雨量面 的 GeoJSON 数据
const RainPolygonGeoJSON = {...};

const rainPolygonOptions = {
  layerName: 'RainPolygon',
  renderColor: [
    { minvalue: 0, color: 'rgba(255,255,255, 0)', maxvalue: 0.1 },
    { minvalue: 0.1, color: 'rgba(150, 250, 150, 0.75)', maxvalue: 10 },
    { minvalue: 10, color: 'rgba(50, 210, 50, 0.75)', maxvalue: 25 },
    { minvalue: 25, color: 'rgba(100, 210, 250, 0.75)', maxvalue: 50 },
    { minvalue: 50, color: 'rgba(0, 0, 250, 0.75)', maxvalue: 100 },
    { minvalue: 100, color: 'rgba(250, 0, 250, 0.75)', maxvalue: 250 },
    { minvalue: 250, color: 'rgba(160, 0, 50, 0.75)', maxvalue: 9999 },
  ],
};

// 把数据加载在地图上
addRainPolygonLayer(olMap, RainPolygonGeoJSON, rainPolygonOptions);

```

**效果预览图：**

![](/images/addRainPolygonLayer.jpg)