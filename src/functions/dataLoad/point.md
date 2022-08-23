# Point

项目开发中，在地图上添加站点的功能非常常见，这里展示常用的用法，在地图添加`Point`数据类型的图层工具类，包含以下方法：
- `addPointLayer`
- `addPointDataLayer`

## addPointLayer
在地图添加类型为`Point`的GeoJSON数据图层

**Param**

| 属性    | 类型            | 说明                            |
| ------- | --------------- | ------------------------------ |
| Map     | `ol/Map`        | `ol/Map` 的地图对象             |
| Data    | `GeoJsonObject` | LineString的GeoJson数据         |
| Options | `PointOptions`  | Point图层配置，见`PointOptions`  |


**PointOptions**

| 属性           | 类型           | 默认值 | 可选值  | 说明                 |
| -------------- | ----------    | ------ | ------ | -------------------- |
| layerName      | `string`      | -      | 必填   | 图层名字              |
| zIndex         | `string`      | 5      | -      | 图层上下层的叠加顺序   |
| visible        | `boolean`     | `true` | -      | 是否显示              |
| icon           | `string`      | -      | -      | 站点图标              |
| textColor      | `string`      | `#000` | -      | 站点文字颜色          |
| textFieldName  | `string`      | -      | -      | 站点别名字段          |
| hoverStyle     | `boolean`     | `true` | -      | 是否为hover修改图层样式 |
| styles         | `StyleObject` | -      | -      | Feature 样式         |

**PointData 示例**

```json
{
  "type": "FeatureCollection",
  "features": [{
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [114.4, 30.5]
    },
    "properties": {
      "name": "光谷"
    }
  }]
}
```

**PointOptions 示例**

```javascript

// 引用 addPointLayer
import { addPointLayer } from 'gmap-ol';

// Point 的 GeoJSON 数据
const pointData = {};

// Point 的 Options
const pointOptions = {
  layerName: 'PointLayer',
  zIndex: 10,
  icon: './RR.png',
  textFieldName: 'name',
  styles: {
    image: {
      scale: 0.75,
    },
  },
};

// 把数据加载在地图上
addPointLayer(olMap, pointData, pointOptions);

```


## addPointDataLayer

在地图添加包含`Point`坐标信息`lgtd,lttd`的数组数据图层

::: tip 关于数据分层展示

- `addPointDataLayer` 提供了对单层数据过多时的分层展示方法和对其显隐的控制，数据需要提供指定分层的`zoomFieldName`。
- 现在提供的API数据是2,4,6,8，图层展示级别是在此基础上面加了6级。
:::


**Param**

| 属性     | 类型           | 说明                             |
| ------- | -------------- | -------------------------------- |
| Map     | `ol/Map`       | `ol/Map` 的地图对象               |
| Data    | `PointData[]`  | Point数据，见`PointData`          |
| Options | `PointOptions` | Point图层配置，见`PointOptions`    |

**PointData**

| 属性        | 类型        | 说明                                 |
| ----------- | ---------- | ------------------------------------ |
| lgtd        | `string`   | 经度坐标，可为大写字段名               |
| lttd        | `string`   | 纬度坐标，可为大写字段名               |
| name        | `string`   | 站点名称，`PointOptions`中可配置       |
| stbprplevel | `number`   | 站点在地图级别，`PointOptions`中可配置 |

**PointOptions**

| 属性           | 类型           | 默认值 | 可选值  | 说明                   |
| -------------- | ----------    | ------ | ------ | ---------------------- |
| layerName      | `string`      | -      | 必填   | 图层名字                |
| zIndex         | `string`      | 5      | -      | 图层上下层的叠加顺序     |
| visible        | `boolean`     | `true` | -      | 是否显示                |
| icon           | `string`      | -      | -      | 站点图标                |
| textColor      | `string`      | `#000` | -      | 站点文字颜色            |
| textFieldName  | `string`      | -      | -      | 站点别名字段            |
| zoomFieldName  | `string`      | -      | -      | 站点分层展示的别名字段   |
| hoverStyle     | `boolean`     | `true` | -      | 是否为hover修改图层样式 |
| styles         | `StyleObject` | -      | -      | Feature 样式           |

**PointData 示例**
```json
[
  {
    "STNM": "万安水库",
    "ID": 15849,
    "BSNM": "长江流域",
    "ATCUNIT": "水库",
    "LOCALITY": "江西水文",
    "LGTD": 114.797,
    "LTTD": 26.449,
    "STBPRPLEVEL": 2,
    "ADDVCD": "360828",
    "DRNA": "36900",
    "STCD": "62301230",
    "HNNM": "赣江水系",
    "RVNM": "赣江",
    "ADMAUTH": "吉安市水文局",
    "STTP": "RR",
    "STCGYNM": "大型水库",
    "STLC": "江西万安县芙蓉镇芙蓉村"
  }
]
```

**PointOptions 示例**

```javascript

// 引用 addPointDataLayer
import { addPointDataLayer } from 'gmap-ol';

// Point的 GeoJSON 数据
const pointData = [];

// Point 的 Options
const pointOptions = {
  layerName: 'PointLayer',
  zIndex: 10,
  icon: './RR.png',
  textColor: 'rgba(155, 0, 250, 1)',
  textFieldName: 'STNM',
  zoomFieldName: 'STBPRPLEVEL',
  styles: {
    image: {
      scale: 0.75,
    },
  },
};

// 把数据加载在地图上
addPointDataLayer(olMap, pointData, pointOptions);

```