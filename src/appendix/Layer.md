# Layer

`ol/layer/Layer`是所有图层的基类，通常是用于创建子类，子类需要重写`render`方法进行渲染，如果是直接实例化该类，可以在构造函数的参数中添加`render`方法，并返回一个`html`元素。使用图层将数据渲染出来，便于在地图上进行展示。创建好图层后，可以使用`Map`的`addLayer`方法来添加图层。使用`Map`的`forEachLayerAtPixel`要以获取鼠标光标处相关的图层 ，一般用于点击的时候获取相关的图层信息。

## 属性

图层相关的属性可以在图层初始化的时候在构造函数中设置，相关的属性如下所示：

- ***className***：设置图层元素的CSS类名。
- ***opacity***：设置图层的透明度。
- ***visible***：设置图层是否可见。
- ***extent***：设置图层的范围，在该范围外的将不会渲染。
- ***zIndex***：设置渲染的顺序。如果默认没有设置，将按钮添加的顺序来渲染。
- ***minResolution***：图层显示时的最小分辨率。
- ***maxResolution***：图层显示时的最大分辨率。
- ***source***：图层的数据来源，将在source篇单独介绍。
- ***map***：设置图层依赖的地图。
- ***render***：重写渲染方法。

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