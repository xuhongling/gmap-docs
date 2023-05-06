# 适合范围

根据给定的地图大小和边界拟合给定的几何图形或范围，在地图上面缩放到合适范围位置。

### 参数：

| 属性     | 类型          | 说明                                   |
| ------- | ------------- | -------------------------------------- |
| Map     | `ol/Map`      | `ol/Map` 的地图对象                     |
| Options | `object`      | 适合范围参数配置，可选填，见`Options`     |

**Options**

| 属性           | 类型         | 默认值          | 可选值   | 说明                  |
| -------------- | ----------  | --------------- | ------- | --------------------- |
| layerName      | `string`    | -               | 必填    | 图层名字               |
| textFieldName  | `string`    | `name`          | -       | 图层属性的别名字段      |
| name           | `string`    | -               | 必填    | 需要查找图形的名字      |
| padding        | `array`     | `[50,50,50,50]` | -       | 要在视图内的内填充      |
| maxZoom        | `number`    | `18`            | -       | 可以缩放到的最大级别 |

::: tip 提示
- 由于此方法是 适合几何图形的视图范围，所以需要通过`layerName`去查找在地图上对应图层上面的几何图形；
- `textFieldName`是需要查找所需几何图形的属性的别名字段，默认是`name`，配合name属性；
- `name`是所需几何图形具体名字或者ID名，用来查找判断到图形。

:::

### 示例

```js
import { zoomToFitExtent } from 'gmap-ol';

// 缩放到瑞士的适合范围
const options = {
  layerName: 'PolygonLayer',
  textFieldName: 'name',
  name: '瑞士',
};
zoomToFitExtent(olMap, options);
```

**效果预览图：**

![](/images/zoomToFitExtent.gif)