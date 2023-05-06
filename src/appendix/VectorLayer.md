# VectorLayer

`ol.layer.Vector`是一个矢量图层，我们根据坐标值或者通过绘制生成的几何体，都是使用`VectorLayer`来添加的。如下所示，这创建一个矢量图层：
```js
import { Vector as VectorLayer } from 'ol/layer';
import GeoJSON from 'ol/format/GeoJSON';

const source = new VectorLayer({
  features: new GeoJSON().readFeatures(geojsonObj),
});
```

## 属性

- ***className***：设置图层元素的CSS类名。
- ***opacity***：设置图层的透明度。
- ***visible***：设置图层是否可见。
- ***extent***：设置图层的范围，在该范围外的将不会渲染。
- ***zIndex***：设置渲染的顺序。如果默认没有设置，将按钮添加的顺序来渲染。
- ***minResolution***：图层显示时的最小分辨率。
- ***maxResolution***：图层显示时的最大分辨率。
- ***source***：图层的数据来源，将在source篇单独介绍。
- ***map***：设置图层依赖的地图。
- ***renderOrder***：渲染顺序。用一个函数来设置渲染的顺序。
- ***renderBuffer***：缓冲区渲染值。
- ***declutter***：分离图像和文本。
- ***style***：设置样式。
- ***updateWhileAnimating***：动画在执行的时候是否可以更新图层。
- ***updateWhileInteracting***：在进行交互的时候是否可以更新图层。


## 方法
- ***getExtent***：获取图层的范围。
- ***getMaxResolution***：获取最大分辨率。
- ***getMaxZoom***：获取最大缩放等级。
- ***getMinResolution***：获取最小分辨率。
- ***getMinZoom***：获取最小缩放等级。
- ***getOpacity***：获取透明度。
- ***getProperties***：获取属性的键和值。
- ***getRevision***：获取图层对象的版本号，当修改对象后，版本号会递增。
- ***getSource***：获取地图数据来源。
- ***getVisible***：获取地图的可见信息。
- ***getZIndex***：获取图层渲染的顺序值。
- ***on***：添加事件。
- ***once***：添加一次执行的事件。
- ***setExtent***：设置图层范围。
- ***setMap***：为图层设置图层。
- ***setMaxResolution***：设置最大分辨率。
- ***setMaxZoom***：设置地图最大的缩放等级。
- ***setMinResolution***：设置最小分辨率。
- ***setMinZoom***：设置地图最小缩放等级。
- ***setOpacity***：设置透明度。
- ***setProperties***：设置属性信息。
- ***setSource***：设置图层数据来源。
- ***setVisible***：设置是否隐藏。
- ***setZIndex***：设置渲染顺序。
- ***getFeatures***：获取几何列表。
- ***getStyle***：获取矢量图层的样式。
- ***getStyleFunction***：获取设置样式的函数。
- ***setStyle***：设置样式信息。
