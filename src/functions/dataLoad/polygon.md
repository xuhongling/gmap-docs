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

| 属性            | 类型          | 默认值 | 可选值  | 说明               |
| -------------- | ------------- | ------ | ------ | ------------------ |
| layerName      | `string`      | -      | 必填   | 图层名字            |
| zIndex         | `string`      | 3      | -      | 图层上下层的叠加顺序 |
| visible        | `boolean`     | `true` | -      | 是否显示            |
| textFieldName  | `string`      | -      | -      | 线名别名字段         |
| hoverStyle     | `boolean`     | `true` | -      | 是否为hover修改图层样式 |
| styles         | `StyleObject` | -      | -      | Feature 样式        |


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
const polygonData = {};

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
