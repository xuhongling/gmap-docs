# 设置图层显示隐藏

## `setLayerVisible`

通过layerName、状态，设置图层显示隐藏。***(常用于图例控制显示隐藏)***

### 参数：

- `ol/map` 地图对象
- 图层名字
- 状态为`true`，`false`

### 示例：

```js
import { setLayerVisible } from 'gmap-ol';

setLayerVisible(map, layerName, status);
```