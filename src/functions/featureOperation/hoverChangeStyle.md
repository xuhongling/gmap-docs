# 要素Hover

## `hoverChangeStyle`

鼠标触摸地图上指定图层要素改变图层要素样式属性

::: tip 提示

- `hoverChangeStyle`，`hoverShowTips`如果项目开发中，该图层不需要此功能，可以在添加图层配置上面加上`hoverStyle: false`，该参数默认是开启的。见数据加载栏目。

- 很多时候获取的样式是写在Layers里面，不是单个的feature，如果是站点图标hove放大显示，直接看示例1的写法，需要传入放大的icon，字体颜色可以用`textColor`修改。更多属性可以在`styles`单独设置。
:::

### 参数：

| 属性       | 类型            | 说明                           |
| --------- | --------------- | ------------------------------ |
| Map       | `ol/Map`        | `ol/Map` 的地图对象             |
| layerName | `string`        | 图层名字                        |
| styles    | `StyleObject`   | 图层的`Feature`样式             |
| Options   | `HoverOptions`  | hove样式配置，见`HoverOptions`  |



**HoverOptions**

| 属性           | 类型           | 默认值 | 可选值  | 说明                                  |
| -------------- | ----------    | ------ | ------ | ------------------------------------- |
| layerName      | `string`      | -      | 必填   | 图层名字                               |
| icon           | `string`      | -      | -      | 改变后的站点图标                        |
| textColor      | `string`      | `#000` | -      | 改变后的站点文字颜色                    |
| textFieldName  | `string`      | -      | -      | 站点别名字段                           |
| styles         | `StyleObject` | -      | -      | 改变后的Feature 样式                   |


**示例1：**

```js
import { hoverChangeStyle } from 'gmap-ol';

const hoverOptions = {
  layerName: 'PointLayer',
  icon: "./icon/ZZ.png",
  textFieldName: 'stnm',
  textColor: 'rgba(155, 0, 250, 1)',
}

hoverChangeStyle(olMap, hoverOptions);
```

**效果预览图：**

![](/images/hoverChangeStyle.gif)

**示例2：**

```js
import { hoverChangeStyle } from 'gmap-ol';

const hoverOptions = {
  layerName: 'PolygonLayer',
  styles: {
    fill: {
      color: 'rgba(0, 100, 240, 0.5)',
    },
    stroke: {
      width: 8,
      color: 'rgba(0, 140, 255, 0.2)',
    },
  }
}

hoverChangeStyle(olMap, hoverOptions);
```

**效果预览图：**

![](/images/hoverShowTips.gif)