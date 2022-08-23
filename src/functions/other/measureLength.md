# 测量距离

在地图绘制多边形，计算某段路径的实际长度，返回数据以米为单位。

## `measureLength`
调用此方法，在地图点击绘制多线段，双击完成绘制，计算多点经纬度之间的距离。

### 参数：

- `ol/map` 地图对象

### 返回值:
- Number

### 示例

```js
import { measureLength } from 'gmap-ol';

measureLength(olMap);
```