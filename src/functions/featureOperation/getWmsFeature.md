# WMS 获取图像信息 (瓦片图层)

点击 WMS 瓦片图层的时候发起 WMS GetFeatureInfo 请求，获取图像信息

## `getWmsFeature`
调用此函数，获取点击 WMS 瓦片图层的图像信息。在地图上悬停一个非透明的像素时会改变鼠标指针。

### 参数：

| 属性           | 类型           | 可选值 | 说明                                   |
| -------------- | ------------- | ------ | -------------------------------------- |
| Map            | `ol/Map`      | 必填   | `ol/Map` 的地图对象                     |
| wmsOptions     | `object`      | -      | 测量参数配置，可选填，见`WmsOptions`     |
| callback       | `function`    | -      | 回调函数，返回点击 WMS 瓦片图层的数据      |

**WmsOptions**

| 属性           | 类型           | 可选值   | 说明                  |
| -------------- | ----------    | -------- | --------------------- |
| layerName      | `string`      | 必填     | 图层名字               |
| layers         | `string`      | -        | 一个或多个地图图层列表  |


**示例**

```javascript

// 引用 getWmsFeature
import { getWmsFeature } from 'gmap-ol';

const wmsOptions = {
  layerName: 'WMS_Layer',
  layers: 'ChangZhouYS:a_river',
};

// 回调函数，获取点击 WMS 瓦片图层的数据
const getFeatureCallbackFn = (data) => {
  console.log(data, 'WMS瓦片图层数据');
};

getWmsFeature(olMap, wmsOptions, getFeatureCallbackFn);
```

**效果预览图：**

![](/images/getWmsFeature.gif)