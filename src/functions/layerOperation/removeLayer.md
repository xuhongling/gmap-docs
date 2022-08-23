# 清除地图图层

## `removeLayer`

通过layerName，清除地图指定图层要素。

### 参数：

- `ol/map` 地图对象
- 图层名字

### 返回值:
- 已移除的层（如果未找到该层，则为undefined）。

### 示例：

```js
import { removeLayer } from 'gmap-ol';

removeLayer(map, layerName);
```