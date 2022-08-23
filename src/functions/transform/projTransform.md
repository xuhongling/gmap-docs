# 坐标系转换

[proj4](http://proj4js.org/) 是一款将坐标从一个坐标系转换到另一个坐标系的 JavaScript 库，可将地理空间坐标从一个坐标参考系 (CRS) 转换为另一个坐标参考系 (CRS)。这包括制图投影和大地测量变换。


**参数：**

- `GeoJson` 数据
- `metaData` 元数据的投影坐标，见下面常见属性。默认`EPSG:3857`。
- `afterData` 规定要素以哪种坐标显示，见下面常见属性。默认`EPSG:4326`。


| 属性             | 说明                     |
| --------------- | ------------------------ |
| `EPSG:4326`     | WGS84 地理坐标系          |
| `EPSG:3857`     | WGS 横轴墨卡托            |
| `EPSG:2000`     | 国家2000 地理坐标系        |
| `EPSG:2000e`    | 国家2000 120e 投影坐标系   |


### 返回值
包含 `GeoJSON Feature` 的数据。

**示例：**

```js
// 引用 projTransform
import { projTransform } from 'gmap-ol';

const geoJsonData = {...};
const metaData = 'EPSG:3857';
const afterData = 'EPSG:4326' ;
const geojsonFeature = projTransform(geoJsonData, metaData, afterData);
```