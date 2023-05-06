# Map

`Map`是`OpenLayers`的核心组件，使用`Map`的构造函数可以创建一个地图对对象，用于添加在网页中的`div`容器中。`Map`的功能主要用于渲染地图，添加图层，添加UI控件元素等信息，初始化地图对象的时候，可以传递一个对象，传递一些属性值。如下代码为一个创建地图的实例：

```js
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

var map = new Map({
  view: new View({
    center: [0, 0],
    zoom: 1
  }),
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  target: 'map'
});
```

## 属性

创建地图的时候，可以在构造函数中传递如下属性信息：

- ***controls***： 与地图相关的控件列表，它有默认添加了一些控件，可进行修改。
- ***pixelRatio***：设备上物理像素和设备独立像素（DIP）的比率。
- ***interactions***：指定地图上的交互对象。
- ***keyboardEventTarget***：用于侦听键盘事件的元素。
- ***layers***：用于添加图层，初始化的时候最好指定一个图层。
- ***maxTilesLoading***：加载瓦片的最大数量。
- ***moveTolerance***：可以扩大地图点击的范围
- ***overlays***：初始化时添加到地图上的覆盖物。
- ***target***：地图容器，为元素的`id`。
- ***view***：设置地图视图。

## 方法
`Map`中的方法如下所示：

- ***addControl***：添加控件到地图上。
- ***addInteraction***：添加交互事件到地图上。
- ***addLayer***：添加图层到地图上，用`getLayers()`可以获取到已添加的图层。
- ***addOverlay***：添加覆盖物到地图上。
- ***changed***：计数器更新时触发的事件。
- ***dispatchEvent***：用于派发事件。
- ***forEachFeatureAtPixel***：针对矢量数据源，通过鼠标点击坐标与`Map`坐标对比，获取选中要素。
- ***forEachLayerAtPixel***：通过鼠标点击坐标与`Map`坐标对比，获取选中的图层。
- ***get***：根据键名称获取相关值。
- ***getControls***：获取添加的控件列表。
- ***getCoordinateFromPixel***：获取鼠标所在位置的坐标值信息。
- ***getEventCoordinate***：返回浏览器事件的用户投影中的坐标。如：`map.getEventCoordinate(e.originalEvent)`，注意，这里要用`originalEvent`。
- ***getEventPixel***：根据事件来获取屏幕坐标，如：`map.getEventPixel(e.originalEvent)`，注意，这里要用`originalEvent`。
- ***getFeaturesAtPixel***：获取鼠标光标处的要素信息，如`map.getFeaturesAtPixel(e.pixel)`;
- ***getInteractions***：获取交互事件的列表。
- ***getKeys***：获取添加的键列表。
- ***getLayerGroup***：获取地图的图层组。
- ***getLayers***：获取添加在地图上的所有图层。
- ***getOverlayById***：根据`id`来获取地图覆盖物。
- ***getOverlays***：获取添加的所有覆盖物。
- ***getPixelFromCoordinate***：将坐标值转成屏幕坐标。
- ***getProperties***：获取地图对象的属性和对应的值。
- ***getRevision***：获取地图对象的版本号，当地图对象更改时，版本号将递增。
- ***getSize***：获取地图的尺寸。
- ***getTarget***：获取地图容器元素的ID值。
- ***getTargetElement***：获取地图容器元素对象。
- ***getView***：获取地图视图对象。
- ***getViewport***：获取地图的视口元素。
- ***hasFeatureAtPixel***：获取鼠标光标处是否有要素信息。
- ***on***：用于给地图添加事件。
- ***once***：添加只需执行一次的事件。
- ***removeControl***：删除控件。
- ***removeInteraction***：删除交互事件。
- ***removeLayer***：删除指定图层。
- ***removeOverlay***：删除指定的覆盖物。
- ***render***：地图渲染函数。
- ***renderSync***：返回同步渲染器。
- ***set***：设置键值对。
- ***setLayerGroup***：设置图层组。
- ***setProperties***：设置属性。
- ***setSize***：修改地图尺寸。
- ***setTarget***：设置地图容器的元素ID。
- ***setView***：设置地图视图。
- ***un***：删除事件。
- ***unset***：删除设置的键值对属性。
- ***updateSize***：更新地图的尺寸。
