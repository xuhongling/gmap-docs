# LineString

项目开发中，在地图上添加线的功能很常见，这里展示常用的用法，在地图添加`LineString`，`MultiLineString`数据类型的图层工具类，包含以下方法：
- `addLineStringLayer`

## addLineStringLayer
在地图添加类型为`LineString`，`MultiLineString`的GeoJSON数据图层

**Param**

| 属性     | 类型                 | 说明                                     |
| ------- | -------------------- | ---------------------------------------- |
| Map     | `ol/Map`             | `ol/Map` 的地图对象                       |
| Data    | `GeoJsonObject`      | LineString的GeoJson数据                   |
| Options | `LineStringOptions`  | LineString图层配置，见`LineStringOptions`  |

**LineStringOptions**

| 属性            | 类型          | 默认值 | 可选值  | 说明                  |
| -------------- | ------------- | ------ | ------ | --------------------- |
| layerName      | `string`      | -      | 必填   | 图层名字               |
| zIndex         | `string`      | 4      | -      | 图层上下层的叠加顺序    |
| visible        | `boolean`     | `true` | -      | 是否显示               |
| textFieldName  | `string`      | -      | -      | 线名别名字段           |
| hoverStyle     | `boolean`     | `true` | -      | 是否为hover修改图层样式 |
| styles         | `StyleObject` | -      | -      | Feature 样式           |


**LineStringData 示例**

```json
{
  "type": "FeatureCollection",
  "features": [{
    "type": "Feature",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [114.411, 30.507],
        [114.409, 30.608]
      ]
    },
    "properties": {
      "name": "光谷"
    }
  }]
}
```

**LineStringOptions 示例**

```javascript

// 引用 addLineStringLayer
import { addLineStringLayer } from 'gmap-ol';

// LineString 的 GeoJSON 数据
const lineStringData = {};

// lineString 的 Options
const lineStringOptions = {
  layerName: 'LineStringLayer',
  zIndex: 10,
  textFieldName: 'name',
  styles: {
    stroke: {
      width: 2,
      color: 'rgba(10, 10, 250, 1)',
    },
  },
};

// 把数据加载在地图上
addLineStringLayer(olMap, lineStringData, lineStringOptions);

```