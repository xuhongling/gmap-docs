# WMS 简介

WMS（Web Map Service）是一种标准协议，由开放地理空间联盟（OGC）于1999年开发，用于通过互联网提供地理参考地图图像。这些图像通常由地图服务器从GIS数据库提供的数据生成。

您可以通过指定参数（如地理范围、图层、样式、投影和输出格式）向WMS服务器发送GetMap请求来获取地图图像。服务器将生成并返回地图图像。

WMS通常用于可视化大型或复杂的地理空间数据集，或者在公共地图上叠加不同的数据源。

WMS和WFS的主要区别在于它们提供的数据类型。WMS提供栅格图像，这些图像由WMS服务器创建。这些数据最初可以是矢量或栅格数据，并且已经绘制了样式，但是当它到达客户端时，它只是一个栅格图像。相比之下，WFS提供矢量数据。它允许客户端查询、更新、创建或删除要素。

WMS的优点在于它能够快速地提供地图图像，而无需客户端下载或处理大量数据。这对于可视化大型或复杂的地理空间数据集非常有用。然而，WMS的缺点在于它只提供栅格图像，无法进行空间分析或编辑。

**请求示例如下所示：**
```
http://localhost:8080/geoserver/cite/wms?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&layers=cite%3Anc_d_a&WIDTH=256&HEIGHT=256&CRS=EPSG%3A3857&STYLES=&BBOX=12425603.318038251%2C3365675.22945288%2C12445171.197279256%2C3385243.108693885
```
**Params基础参数**
```js
var baseParams = {
  'SERVICE': 'WMS',
  'VERSION': '1.3.0',
  'REQUEST': 'GetFeatureInfo',
  'FORMAT': 'image/png',
  'TRANSPARENT': true,
  'QUERY_LAYERS': ['LAYERS']
};
```
- ***SERVICE*** 服务类型，主要包括`WMS`，`WFS`等服务，都是遵循OGC标准的服务；
- ***VERSION*** 请求的WMS的版本号，主要包括`1.3.0`、`1.1.1`，`1.1`等版本号；
- ***REQUEST*** 请求方式，主要包括以下五种：
> - 请求服务的元数据（GetCapabilities）
> - 请求地图图像（GetMap）
> - 请求关于地图要素的信息（GetFeatureInfo，可选）
> - 请求图例（GetLegendGraphic，可选）
> - 请求用户定义的样式（GetStyles，可选）
> - 前面三种比较常用。
- ***FORMAT*** `MIME`类型，值为服务元数据的输出格式，默认为图片。
- ***TRANSPARENT*** 值为`true`或者`false`，用来表示地图图层是否透明(默认情况下是不透明的)
- ***QUERY_LAYERS*** 字符类型，值为查询的一个或多个地图图层列表，多个图层之间用`,`隔开。
- ***LAYERS*** 字符类型，值为一个或多个地图图层列表，多个图层之间用`,`隔开
- ***INFO_FORMAT*** 返回数据的类型，如`application/json`
- ***FEATURE_COUNT*** 返回结果中要素的数量
- ***WIDTH*** 地图图片的宽度
- ***HEIGHT*** 地图图片的高度
- ***CRS*** 坐标参考系。如`EPSG:3857`
- ***STYLES*** 图层的地图渲染样式
- ***BBOX*** 某个CRS下的地图边界范围的坐标序列


## `addWmsLayer`
在地图添加`WMS`图层，可以使用该方法。

**Param**

| 属性     | 类型                 | 说明                                     |
| ------- | -------------------- | ---------------------------------------- |
| Map     | `ol/Map`             | `ol/Map` 的地图对象                       |
| Options | `WmsOptions`         | WMS的图层配置，见`WmsOptions`             |

**WmsOptions**

| 属性            | 类型          | 默认值 | 可选值  | 说明                            |
| -------------- | ------------- | ------ | ------ | ------------------------------- |
| layerName      | `string`      | -      | 必填   | 图层名字                         |
| url            | `string`      | -      | 必填   | 服务地址，`/wms?`前面的url        |
| layers         | `string`      | -      | -      | 一个或多个地图图层列表，同`LAYERS` |
| filter         | `Array`       | -      | -      | 过滤地图图层列表，同`QUERY_LAYERS` |
| params         | `ParamsObject`| -      | -      | 参照上面的Params基础参数           |
| zIndex         | `string`      | 5      | -      | 图层上下层的叠加顺序               |
| visible        | `boolean`     | `true` | -      | 是否显示                          |

**示例**

```javascript

// 引用 addWmsLayer
import { addWmsLayer } from 'gmap-ol';

const wmsOptions = {
  url: 'http://139.224.204.129:8086/geoserver/ChangZhouYS',
  layerName: 'WMS_Layer',
  layers: 'ChangZhouYS:a_river',
  filter: [`grade=2`],
};

addWmsLayer(olMap, wmsOptions);
```

**效果预览图：**

![](/images/addWmsLayer.gif)