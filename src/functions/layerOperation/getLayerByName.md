# 获取对应的图层

## `getLayerByName`

通过layerName获取地图对应的图层。

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