# 要素Hover

## `hoverChangeStyle`

鼠标触摸地图上指定图层要素改变图层要素样式属性

::: tip 提示

- `hoverChangeStyle`，`hoverShowTips`如果项目开发中，该图层不需要此功能，可以在添加图层配置上面加上`hoverStyle: false`，该参数默认是开启的。见数据加载栏目。

:::

### 参数：

| 属性       | 类型          | 说明                     |
| --------- | ------------- | ------------------------ |
| Map       | `ol/Map`      | `ol/Map` 的地图对象       |
| layerName | `string`      | 图层名字                  |
| styles    | `StyleObject` | 图层的`Feature`样式       |


**示例：**

```js
import { hoverChangeStyle } from 'gmap-ol';

hoverChangeStyle(olMap, 'PolygonLayer', {
  fill: {
    color: 'rgba(0, 100, 240, 0.5)',
  },
  stroke: {
    width: 8,
    color: 'rgba(0, 140, 255, 0.2)',
  },
});
```

**效果预览图：**

![](/images/hoverChangeStyle.jpg)