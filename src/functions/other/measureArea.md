# 测量面积

在地图绘制多边形，计算区域，返回数据以平方米为单位。

## `measureArea`
调用此方法，在地图点击绘制多边形，双击完成绘制，计算多边形区域的面积。

### 参数：

- `ol/map` 地图对象

### 返回值:
- Number

### 示例

```js
import { measureArea } from 'gmap-ol';

measureArea(olMap);
```