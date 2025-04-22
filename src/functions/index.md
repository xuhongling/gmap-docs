# 获取对应的图层

## `getLayerByName`

通过`layerName`获取地图对应的图层。

::: tip 提示

- 这里通过`layerName`获取图层进行的操作，大都是指在**数据加载**函数向地图上面添加的`VectorLayer`
- `VectorLayer` 详情请见附录中的[VectorLayer API](/src/appendix/VectorLayer)，或者OpenLayers官方API。

:::

### 参数：

- `ol/map` 地图对象
- 图层名字

### 返回值:
- Layer

### 示例：

```js
import { getLayerByName } from 'gmap-ol';

const layer = getLayerByName(map, layerName);
```