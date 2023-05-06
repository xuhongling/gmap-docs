# Overlay

`Overlay`可以将一个`html`元素添加到地图上，跟`Control`类似，相当于地图的一个控件，不过`Overlay`添加的元素不是固定的，而是可以随着地图移动而移动的。创建一个`Overlay`对象比较简单，在创建`Overlay`对象的时候指定一个元素，然后再设置`Overlay`显示的坐标点，并将`Overlay`添加到地图上。

```js
import Overlay from 'ol/Overlay';

const popup = new Overlay({
  element: document.getElementById('popup')
});
popup.setPosition([130.356, 30.254]);
olMap.addOverlay(popup);
```

## 属性

- ***id***：设置`Overlay`的ID，可以使用map的get`Overlay`ById获取到指定的`Overlay`。
- ***element***：设置`Overlay`的元素。
- ***offset***：用于设置元素的偏移量，参数为一个数组，数组中的第一个值表示水平方向的偏移，第二个值表示垂直方向的偏移。
- ***position***：设置`Overlay`显示的坐标点。
- ***positioning***：设置`Overlay`在`position`处的位置，可以设置的位置包括：`bottom-left`，`bottom-center`，`bottom-right`，`center-left`，`center-center`，`center-right`，`top-left`，`top-center`，`top-right`，默认为`top-left`。
- ***stopEvent***：阻止事件冒泡。
- ***insertFirst***：如果设置为true，当同一容器中添加了`Overlay`和控件时，将`Overlay`显示在控件的下边。
- ***autoPan***：平移时，如果超出了地图一点点，将自动设置`Overlay`显示在地图范围类。
- ***autoPanAnimation***：设置`autoPan`时的动画。
- ***autoPanMargin***：设置`autoPan`生效时距地图边界的距离。
- ***className***：设置`Overlay`的`CSS`类名。

## 方法

- ***getElement***：获取`Overlay`的元素对象。
- ***getId***：获取`Overlay`设置的ID。
- ***getMap***：获取`Overlay`所在的地图。
- ***getOffset***：获取`Overlay`的偏移量。
- ***getPosition***：获取`Overlay`的位置。
- ***getPositioning***：获取`Overlay`设置位置的方向。
- ***setElement***：设置`Overlay`的元素。
- ***setMap***：设置添加`Overlay`的地图。
- ***setOffset***：设置`Overlay`的偏移量。
- ***setPosition***：设置`Overlay`的位置。
- ***setPositioning***：设置`Overlay`位置的方向。
