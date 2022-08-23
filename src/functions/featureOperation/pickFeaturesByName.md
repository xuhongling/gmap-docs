# 获取范围内重叠数据

## `pickFeaturesByName`

点击地图多数据重叠的要素图层，获取范围内重叠的要素数据。

### 参数：

| 属性           | 类型          | 默认值   | 可选值                  | 说明                              |
| -------------- | ------------  | ------- | ---------------------- | --------------------------------- |
| Events         | `EventsKey`   | -       | 必填                    | `ol/Map` 的地图事件对象            |
| pickLayerType  | `string`      | `Point` | `LineString`、`Polygon` | 筛选图层要素类型，方便查询需要的数据  |

### 返回值:
- Array

### 示例：

```js
import { pickFeaturesByName } from 'gmap-ol';

// 地图点击事件
olMap.on('singleclick', async (event) => {
  // 获取范围内重叠的LineString要素数据
  const pickFeaturesData = await pickFeaturesByName(event, 'LineString');
});
```