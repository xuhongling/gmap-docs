# 更新WFS图层的条件查询

## `updateWfsFilter`

通过layerName获取地图对应的图层，输入对应的过滤条件更新WFS图层信息。

**Param**

| 属性     | 类型                 | 说明                                     |
| ------- | -------------------- | ---------------------------------------- |
| Map     | `ol/Map`             | `ol/Map` 的地图对象                       |
| Options | `WfsOptions`         | WMS的图层配置，见`WfsOptions`             |

**WfsOptions**

| 属性            | 类型          | 默认值 | 可选值  | 说明                            |
| -------------- | ------------- | ------ | ------ | ------------------------------- |
| layerName      | `string`      | -      | 必填   | 图层名字                         |
| filter         | `Array`       | -      | -      | 过滤地图图层列表，同`cql_filter`  |


### 示例：

```js
import { updateWfsFilter } from 'gmap-ol';

const wfsOptions = {
  layerName: 'WMS_Layer',
  filter: [`grade=2`],
}

updateWfsFilter(olMap, wfsOptions);
```