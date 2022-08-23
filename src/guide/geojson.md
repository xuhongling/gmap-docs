# 介绍
## GeoJSON简介

GeoJSON是一种对各种地理数据结构进行编码的格式，基于Javascript对象表示法(JavaScript Object Notation, 简称JSON)的地理空间信息数据交换格式。

GeoJSON对象可以表示几何、特征或者特征集合。GeoJSON支持下面几何类型：`Point`、`LineString`、`Polygon`、`MultiPoint`、`MultiLineString`和`MultiPolygon`。GeoJSON里的特征包含一个几何对象和其他属性，特征集合表示一系列特征。具有附加属性的对象是`Feature`对象。特征集包含在`FeatureCollection`对象中。

GeoJSON数据获取地址：[GeoJSON 在线生成](http://datav.aliyun.com/portal/school/atlas/area_generator)

## GeoJSON对象

GeoJSON总是由一个单独的对象组成。这个对象表示几何、要素或者要素集合，对象可能有任意数目成员（键值对）。

- GeoJSON对象必须有一个名字为"type"的成员。这个成员的值是由GeoJSON对象的类型所确定的字符串。

```json
{
  "type": "FeatureCollection",
  "features": [
    // 其他内容
  ]
}
```

- type成员的值必须是下面之一：`Point`, `MultiPoint`, `LineString`, `MultiLineString`, `Polygon`, `MultiPolygon`, `GeometryCollection`, `Feature`, 或者 `FeatureCollection`。（类似上面的代码）

- GeoJSON对象可能有一个可选的"crs"成员，它的值必须是一个坐标参考系统的对象。

```json
{
  "type": "FeatureCollection",
  "crs": {
    "type": "name",
    "properties": {
      "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
    }
  },
  "features": [
    // 其他内容
  ]
}
```

### Geometry对象
几何(Geometry)是一种GeoJSON对象，这时type成员的值是下面字符串之一：`Point`, `MultiPoint`, `LineString`, `MultiLineString`, `Polygon`, `MultiPolygon`, 或者`GeometryCollection`。 除了`GeometryCollection`外的其他任何类型的GeoJSON几何对象必须由一个名字为`coordinates`的成员。coordinates成员的值总是数组。这个数组里的元素的结构由几何类型来确定。

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "GeoJSON",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                108.953361,
                34.292663
              ],
              [
                108.953404,
                34.289539
              ],
              [
                108.950857,
                34.289529
              ]
              // 多个经纬度点
            ]
          ]
        ]
      }
    }
  ]
}
```

### Position（基础点）
position是基本的几何结构。几何对象的`coordinates`成员由一个position（这儿是几何点）、position数组（线或者几何多点），position数组的数组（面、多线）或者position的多维数组（多面）组成。

position由数字数组表示（可以理解为经纬度）。必须至少两个元素，可以有更多元素。元素的顺序必须遵从`x,y,z`顺序（投影坐标参考系统中坐标的东向、北向、高程或者地理坐标参考系统中的坐标经度、纬度、高程）。任何数目的其他元素是允许的本文不做项目讨论了。

### type类型：Point（点）
对类型"Point"来说，“coordinates"成员必须是一个单独的position。
```json
{ "type": "Point", "coordinates": [100.0, 0.0] }
```

### type类型：MultiPoint（多点）
对类型"MultiPoint"来说，"coordinates"成员必须是position数组。
```json
{
  "type": "MultiPoint",
  "coordinates": [ [100.0, 0.0], [101.0, 1.0] ]
}
```

### type类型：LineString（线）
对类型"LineString"来说，“coordinates"成员必须是两个或者多个position的数组。

线性环是具有4个或者更多position的封闭的线。第一个和最后一个位置是相同的（它们表示相同的点）。虽然线性环没有鲜明地作为GeoJSON几何类型，不过在面几何类型定义里有提到它。
```
{
  "type": "LineString",
  "coordinates": [ [100.0, 0.0], [101.0, 1.0] ]
}
```

### type类型：MultiLineString（多线）
对类型`MultiLineString`来说，`coordinates`成员必须是一个线坐标数组的数组。

```json
{
  "type": "MultiLineString",
  "coordinates": [
    [ [100.0, 0.0], [101.0, 1.0] ],
    [ [102.0, 2.0], [103.0, 3.0] ]
  ]
}
```

### type类型：Polygon（面）
对类型"Polygon"来说，"coordinates"成员必须是一个线性环坐标数组的数组。对拥有多个环的的面来说，第一个环必须是外部环，其他的必须是内部环或者孔，而且内部环和外部环的走向是相反的。

没有孔的：
```json
{
  "type": "Polygon",
  "coordinates": [
    [ [100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0] ]
  ]
}
```

有孔的（外环和内环的方向始终相反）
```json
{
  "type": "Polygon",
  "coordinates": [
    [ [100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0] ],
    [ [100.2, 0.2], [100.8, 0.2], [100.8, 0.8], [100.2, 0.8], [100.2, 0.2] ]
  ]
}
```

### type类型：MultiPlygon（多面）
对类型"MultiPlygon"来说，"coordinates"成员必须是面坐标数组的数组。
```json
{
  "type": "MultiPolygon",
  "coordinates": [
    [[[102.0, 2.0], [103.0, 2.0], [103.0, 3.0], [102.0, 3.0], [102.0, 2.0]]],
    [
      [[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]],
      [[100.2, 0.2], [100.8, 0.2], [100.8, 0.8], [100.2, 0.8], [100.2, 0.2]]
    ]
  ]
}
```

### type类型：Geometry Collection（几何集合）
类型为"GeometryCollection"的GeoJSON对象是一个集合对象，它表示几何对象的集合。几何集合必须有一个名字为"geometries"的成员。与"geometries"相对应的值是一个数组。这个数组中的每个元素都是一个GeoJSON几何对象。
```json
{
  "type": "GeometryCollection",
  "geometries": [
    { "type": "Point",
      "coordinates": [100.0, 0.0]
    },
    { "type": "LineString",
      "coordinates": [ [101.0, 0.0], [102.0, 1.0] ]
    }
  ]
}
```