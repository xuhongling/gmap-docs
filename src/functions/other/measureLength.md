# 测量距离

在地图绘制多边形，计算某段路径的实际长度，返回数据以米为单位。

## `measureLength`
调用此方法，在地图点击绘制多线段，双击完成绘制，计算多点经纬度之间的距离。

### 参数：

| 属性           | 类型           | 说明                                   |
| -------------- | ------------- | -------------------------------------- |
| Map            | `ol/Map`      | `ol/Map` 的地图对象                     |
| measureOptions | `object`      | 测量参数配置，可选填，见`MeasureOptions` |

**MeasureOptions**

| 属性           | 类型           | 默认值 | 可选值   | 说明                  |
| -------------- | ----------    | ------ | ------- | --------------------- |
| showSegments   | `boolean`     | `true` | -       | 显示绘制线段的长度      |
| clearPrevious  | `boolean`     | `true` | -       | 清除先前的测量数据      |


### 示例

```js
import { measureLength } from 'gmap-ol';

const measureOption = {
  showSegments: true,
  clearPrevious: false,
};
measureLength(olMap, measureOption);
```