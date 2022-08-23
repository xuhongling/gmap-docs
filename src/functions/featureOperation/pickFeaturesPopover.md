# 弹出窗范围内重叠数据

## `pickFeaturesPopover`

点击地图过多数据重叠的要素图层，获取范围内重叠的要素数据。在地图点击出弹窗展示。
主要是方便在项目开发中，地图的站点过多，想要点击对应站点不准确问题，该功能提供是在地图点击位置展示该范围内的站点数据，弹窗展示出来，方便选择。

::: warning 注意
- `pickFeaturesPopover`该功能是`pickFeaturesByName`的扩展功能，需结合使用。
- 范围内如果只有单个数据，不会弹窗展示。回调函数，会返回该要素数据。
:::


### 参数：

| 属性           | 类型           | 说明                                |
| -------------- | ------------- | ----------------------------------- |
| Map            | `ol/Map`      | `ol/Map` 的地图对象                  |
| pickOptions    | `object`      | 范围内数据弹出窗配置，见`PickOptions` |
| callback       | `function`    | 回调函数，返回弹窗点击的对应要素数据   |

**PickOptions**

| 属性           | 类型           | 默认值 | 可选值   | 说明                            |
| -------------- | ----------    | ------ | ------- | ------------------------------- |
| data           | `array`       | -      | 必填    | 获取范围内的重叠要素数据           |
| textFieldName  | `string`      | -      | -       | 需要在弹窗内展示数据的别名字段     |

**示例：**

```js
import { pickFeaturesByName, pickFeaturesPopover } from 'gmap-ol';

// 回调函数，获取弹窗点击的对应要素数据
function pickCallbackFn(data) {
  console.log(data);
}
// 地图点击事件
olMap.on('singleclick', async (event) => {
  // 获取范围内的重叠要素数据
  const pickFeaturesData = await pickFeaturesByName(event);
  // 配置
  const pickOptions = {
    data: pickFeaturesData,
    textFieldName: 'STNM',
  };
  pickFeaturesPopover(olMap, pickOptions, pickCallbackFn);
});
```

**效果预览图：**

![](/images/pickFeaturesPopover.jpg)