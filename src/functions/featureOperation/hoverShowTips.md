# 要素Tips效果

## `hoverShowTips`

鼠标触摸地图上指定图层要素显示需要展示的tips名称

::: tip 提示

- `hoverChangeStyle`，`hoverShowTips`如果项目开发中，该图层不需要此功能，可以在添加图层配置上面加上`hoverStyle: false`，该参数默认是开启的。见数据加载栏目。

:::

### 参数：

| 属性           | 类型            | 说明                           |
| -------------- | -------------- | ------------------------------ |
| Map            | `ol/Map`       | `ol/Map` 的地图对象             |
| Options        | `HoverOptions` | hove样式配置，见`HoverOptions`  |

**HoverOptions**

| 属性           | 类型           | 默认值 | 可选值  | 说明                                  |
| -------------- | ----------    | ------ | ------ | ------------------------------------- |
| layerName      | `string`      | -      | 必填    | 图层名字                              |
| textFieldName  | `string`      | -      | -      | 站点别名字段                           |


**示例：**

```js
import { hoverShowTips } from 'gmap-ol';

const hoverOptions = {
  layerName: 'PolygonLayer',
  textFieldName: 'stnm',
}

hoverShowTips(olMap, hoverOptions);
```

**效果预览图：**

![](/images/hoverShowTips.gif)