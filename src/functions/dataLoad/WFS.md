# WFS 简介

WFS（Web Feature Service）是一种标准接口，由开放地理空间联盟（OGC）开发，允许通过使用平台无关的调用在Web上请求地理要素。可以将地理要素视为地图背后的“源代码”，而WMS接口或在线瓦片地图门户（如Google Maps）仅返回图像，最终用户无法编辑或空间分析。

WFS的优点在于它能够提供矢量数据，允许客户端查询、更新、创建或删除要素。这对于访问和操作远程存储的地理空间数据集非常有用。然而，WFS的缺点在于它需要更多的带宽和处理能力，因为它传输的是原始数据而不是预先渲染的图像。

**请求示例如下所示：**
```
http://localhost:8080/geoserver/ChangZhouYS/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=ChangZhouYS%3Ap_sluice&maxFeatures=50&outputFormat=application%2Fjson
```

## `addWfsLayer`
在地图添加`WFS`图层，可以使用该方法。

**Param**

| 属性     | 类型                 | 说明                                     |
| ------- | -------------------- | ---------------------------------------- |
| Map     | `ol/Map`             | `ol/Map` 的地图对象                       |
| Options | `WfsOptions`         | WMS的图层配置，见`WfsOptions`             |

**WfsOptions**

| 属性            | 类型          | 默认值 | 可选值  | 说明                            |
| -------------- | ------------- | ------ | ------ | ------------------------------- |
| layerName      | `string`      | -      | 必填   | 图层名字                         |
| url            | `string`      | -      | 必填   | 服务地址，`/wms?`前面的url        |
| layers         | `string`      | -      | -      | 一个或多个地图图层列表，同`LAYERS` |
| filter         | `Array`       | -      | -      | 过滤地图图层列表，同`cql_filter`  |
| params         | `ParamsObject`| -      | -      | 参照WMS的Params基础参数           |
| zIndex         | `string`      | 5      | -      | 图层上下层的叠加顺序               |
| visible        | `boolean`     | `true` | -      | 是否显示                          |


**示例**

```javascript
// 引用 addWfsLayer
import { addWfsLayer } from 'gmap-ol';

const wfsOptions = {
  url: 'http://139.224.204.129:8086/geoserver/ChangZhouYS',
  layerName: 'WFS_Layer',
  layers: 'ChangZhouYS:a_river',
  filter: [`grade=1`],
};
addWfsLayer(olMap, wfsOptions);
```