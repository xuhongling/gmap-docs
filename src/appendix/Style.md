# Style

`Style`用于矢量图层的渲染，在添加矢量图层的时候，可以给图层中的几何体设置样式。样式类型包括`Circle`，`Fill`，`Icon`，`Image`，`RegularShape`，`Stroke`，`Text`，`TextPlacement`等。在创建`Style`的对象的时候，可以在构造函数中设置相关的属性参数来设置具体的样式。在渲染适量图层的时候，如果没有指定`Style`，将使用框架默认的样式信息，如下所示：

```js
 import {Fill, Stroke, Circle, Style} from 'ol/style';

 const fill = new Fill({
   color: 'rgba(255,255,255,0.4)'
 });
 const stroke = new Stroke({
   color: '#3399CC',
   width: 1.25
 });
 const styles = [
   new Style({
     image: new Circle({
       fill: fill,
       stroke: stroke,
       radius: 5
     }),
     fill: fill,
     stroke: stroke
   })
 ];
 ```

 ## Style 属性

- ***geometry***：指定该样式的几何图形。
- ***fill***：填充样式。
- ***image***：图标样式。
- ***renderer***：自定义的样式渲染器，可以为每个图形设置不一样的样式。
- ***stroke***：边框样式。
- ***text***：文本样式。
- ***zIndex***：索引值。

## Style 方法

- ***clone***：复制一个样式。
- ***getFill***：获取填充样式。
- ***getGeometry***：获取几何体。
- ***getGeometryFunction***：获取为几何体设置的渲染函数。
- ***getImage***：获取图片样式。
- ***getRenderer***：获取自定义的渲染器。
- ***getStroke***：获取边框样式。
- ***getText***：获取文本样式。
- ***getZIndex***：获取索引值。
- ***setFill***：设置填充样式。
- ***setGeometry***：设置几何体。
- ***setImage***：设置图片样式。
- ***setRenderer***：设置自定义渲染函数。
- ***setStroke***：设置边框样式。
- ***setText***：设置文本样式。
- ***setZIndex***：设置索引值。


## RegularShape 属性

用于为几何体设置规则的样式，如果有指定一个半径，将设置为正多边形，如果指定了两个半径，将设置为星星的形状。

- ***fill***：设置填充的样式。
- ***points***：设置多边形的点数。如果是正多边形，边数和点数一样。
- ***radius***：图形的半径。
- ***radius1***：星星的外半径。
- ***radius2***：星星的内半径。
- ***angle***：弧度。
- ***displacement***：变形。
- ***stroke***：边框样式。
- ***rotation***：弧度旋转。
- ***rotateWithView***：是否随视图旋转形状。

## RegularShape 方法

- ***clone***：复制一个样式。
- ***getAnchor***：获取图形的锚点，一般为图形的中心点。
- ***getAngle***：获取角度。
- ***getFill***：获取填充样式。
- ***getImage***：获取图片元素。
- ***getPoints***：获取图形的顶点数。
- ***getRadius***：获取图形的半径。
- ***getRadius2***：获取图形的半径，像星星这样的形状会有两个半径。
- ***getStroke***：获取边框样式。

## CircleStyle 属性

`CircleStyle`可以为几何体设置圆形样式，比如给单个点可以设置一个圆形的样式。继承于`RegularShape`。

- ***fill***：填充的样式。
- ***radius***：圆半径。
- ***stroke***：圆边框样式。

## CircleStyle 方法

没什么新的方法，都是`RegularShape`继承下来的方法。

## Icon 属性

用于给图标设置样式。

- ***anchor***：设置图标的锚点，默认为图形的中心点`[0.5, 0.5]`
- ***anchorOrigin***：描点偏移的位置，包括`bottom-left`, `bottom-right`, `top-left`, `top-right`。
- ***anchorXUnits***：指定锚点**X**的单位，默认为百分比，也可以使用px。
- ***anchorYUnits***：指定锚点**Y**的单位，默认为百分比，也可以使用px。
- ***color***：为图标设置颜色，如果没指定，将保持原有的颜色。
- ***crossOrigin***：跨域属性，如果是为`canvas`渲染器来加载图像，必需设置该属性。
- ***img***：设置Image对象，如果没有设置`src`必须为已加载的`Image`对象，并且需要指定`size`值。
- ***offset***：设定图片的偏移值。
- ***displacement***：变形值。
- ***offsetOrigin***：设置原点偏移，`bottom-left`, `bottom-right`, `top-left`, `top-right`。
- ***opacity***：设置透明度。
- ***scale***：设置缩放值。
- ***rotateWithView***：是否随视图旋转形状。
- ***rotation***：旋转角度。
- ***size***：图标尺寸。
- ***imgSize***：`Image`对象的尺寸。
- ***src***：图片地址。

## Icon 方法

- ***getAnchor***：获取锚点。
- ***getColor***：获取颜色。
- ***getOrigin***：获取原点。
- ***getSize***：获取`Icon`的尺寸。
- ***getSrc***：获取图片地址。
- ***setAnchor***：设置锚点。

## Stroke 属性

用于设置边框的颜色，如果没指定时将使用默认的样式。

- ***color***：边框颜色。
- ***lineCap***：线段两端的样式，可以设置成`butt`，`round`，`square`
- ***lineJoin***：线条连接处的样式，可以设置成`bevel`，`round`，`miter`
- ***lineDash***：虚线。
- ***lineDashOffset***：虚线偏移值。
- ***miterLimit***：连接处的限制值。
- ***width***：边框的宽度。

## Stroke 方法

- ***getColor***：获取颜色。
- ***getLineCap***：获取线段两端的样式。
- ***getLineDash***：获取虚线值。
- ***getLineDashOffset***：获取虚线偏移值。
- ***getLineJoin***：获取线条连接处的样式。
- ***getMiterLimit***：获取连接处的限制值。
- ***getWidth***：获取边框宽度。
- ***setColor***：设置颜色。
- ***setLineCap***：设置线段两端的样式。
- ***setLineDash***：设置虚线值。
- ***setLineDashOffset***：设置虚线偏移值。
- ***setLineJoin***：设置线条连接处的样式。
- ***setMiterLimit***：设置获取连接处的限制值。
- ***setWidth***：设置宽度。

## ImageStyle 属性

一个抽象类，主要用于创建子类，子类包括`RegularShape`，`CircleStyle`，`Icon`。

- ***opacity***：设置透明度。
- ***rotateWithView***：是否随视图旋转形状。
- ***rotation***：弧度旋转。
- ***scale***：缩放比例。
- ***displacement***：变形。


## Text 属性

- ***font***：设置字体样式，默认为`'10px sans-serif'`。
- ***maxAngle***：当`placement`设置为`line`时，可以设置字符之间的最大角度。
- ***offsetX***：水平偏移值。
- ***offsetY***：垂直偏移值。
- ***overflow***：是否允许溢出。
- ***placement***：文本放置方向。
- ***scale***：缩放比例。
- ***rotateWithView***：是否随视图旋转形状。
- ***rotation***：弧度旋转。
- ***text***：文本信息。
- ***textAlign***： 文本对齐方式。`left`, `right`, `center`, `end`, `start`。
- ***textBaseline***：基线对齐方向，`bottom`, `top`, `middle`, `alphabetic`, `hanging`, `ideographic`.
- ***fill***：填充样式。
- ***stroke***：边框样式
- ***backgroundFill***：背景填充样式。
- ***backgroundStroke***：背景边框样式。
- ***padding***：内边距。

## Text 方法

方法主要是对属性值进行`get`和`set`的操作。
