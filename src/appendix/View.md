# View

`View`是一个地图组件，在初始化`Map`的时候需要指定一个`View`，创建`View`对象的时候，在构造函数中可以传递一个对象，用于指定地图的缩放等级、中心点，投影坐标系统等信息，下面来看下`View`中具体的属性参数和使用方法等。首先创建一个地图视图，如下所示：

```js
import View from 'ol/View';

new View({
  center: [117.382411, 39.523648],
  projection: 'EPSG:4326',
  zoom: 9,
  minZoom: 6,
  maxZoom: 18,
})
```

## 属性

- ***center***：设置地图初始化的中心点，
- ***constrainRotation***：旋转约束。`false`为未约束，`true`为未约束但是接近于0。数字限制了旋转到该值的数量。
- ***enableRotation***：如果为`false`，则始终使用将旋转设置为零的旋转约束。如果启用为`false`，则没有效果。
- ***extent***：设置地图的显示范围。
- ***constrainOnlyCenter***：如果设置为`true`，范围约束将仅用于中心点，而不是整个范围。
- ***smoothExtentConstraint***：如果设置为`true`,允许视图稍微超出范围。
- ***maxResolution***：用于设置最大分辨率，一般和`minResolution` (或者`maxZoom`) 和`zoomFactor`一起使用。
- ***minResolution***：用于设置最小分辨率。
- ***maxZoom***：最大缩放等级。
- ***minZoom***：最小缩放等级。
- ***multiWorld***：如果设置为`false`，视图将受到约束。
- ***constrainResolution***：如果为`true`，则视图在交互后将始终设置为最接近的缩放级别；`false`表示允许中间缩放级别。
- ***smoothResolutionConstraint***：如果设置为`true`,允许视图稍微超出范围。
- ***showFullExtent***：如果`showFullExtent`为`true`，则用户将能够缩小视图，使视口超过配置范围的高度或宽度，但不能同时超出这两个范围，从而允许显示完整范围。
- ***projection***：设置投影坐标系，默认为`EPSG:3857`。
- ***resolution***：设置分辨率。
- ***resolutions***：设置分辨率数组。
- ***rotation***：设置旋转角度。
- ***zoom***：设置缩放级别。
- ***zoomFactor***：用于计算分辨率的缩放因子。

## 方法

- ***adjustCenter***：将相对坐标添加到视图中心。将应用任何范围约束。
- ***adjustResolution***：将视图分辨率乘以一个比率，可以选择使用锚点。将应用任何分辨率约束。
- ***adjustRotation***：向视图添加旋转值，可以选择使用定位。将应用任何旋转约束。
- ***adjustZoom***：向视图添加缩放级别，可以选择使用定位。将应用任何旋转约束。
- ***animate***：向视图添加动画，主要用于设置zoom，center，rotation等值的变化，如view.animate({zoom: view.getZoom() + 1});。
- ***beginInteraction***：通知视图交互已启动。
- ***cancelAnimations***：取消动画。
- ***calculateExtent***：根据传递的尺寸计算地图的范围。
- ***centerOn***：以坐标和视图位置为中心。
- ***endInteraction***：结束视图交互。
- ***fit***：将地图缩放到指定的范围。
- ***getAnimating***：判断视图正好在执行动画。
- ***getCenter***：获取视图的中心点。
- ***getInteracting***：判断地图是否正在交互，比如正在平移、缩放等。
- ***getMaxResolution***：获取最大分辨率。
- ***getMaxZoom***：获取最大缩放等级。
- ***getMinResolution***：获取最小分辨率。
- ***getMinZoom***：获取最小缩放等级。
- ***getProjection***：获取投影坐标系。
- ***getResolution***：获取分辨率。
- ***getResolutionForExtent***：根据范围来获取分辨率。
- ***getResolutionForZoom***：根据缩放等级来获取分辨率。
- ***getResolutions***：获取分辨率。
- ***getRotation***：获取当前旋转角度。
- ***getZoom***：获取当前缩放级别。
- ***getZoomForResolution***：根据分辨率获取缩放等级。
- ***setCenter***：设置地图的中心点。
- ***setConstrainResolution***：设置分辨率约束。
- ***setMaxZoom***：设置最大缩放等级。
- ***setMinZoom***：设置最小缩放等级。
- ***setResolution***：设置分辨率。
- ***setRotation***：设置旋转角度。
- ***setZoom***：设置当前缩放等级。
