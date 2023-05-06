# 根据配置获取样式

## `getOptionsStyle`

为了方便代码编写，可以通过配置直接生成对应的样式。可以通过实例，或者附录中的Style API自行配置。

### 参数：

- `OptionsStyle` 样式配置对象

### 返回值:
- **Style** 见附录中的Style [Style API](/src/appendix/Style)，或者OpenLayers官方API。

### 示例：

```js
import { getOptionsStyle } from 'gmap-ol';

const optionsStyle = {
  fill: {
    color: 'rgba(255, 0, 0, 0.3)',
  },
  stroke: {
    color: 'rgba(0, 153, 255, 1)',
    lineDash: [10, 10],
    width: 2,
  },
  image: {
    src: '../images/xxx.png',
    anchor: [0.5, 0.5],
    scale: 1,
  },
  text: {
    font: '12px Microsoft YaHei',
    fill: { color: 'rgba(255, 255, 255, 1)' },
    stroke: {
      color: 'rgba(0, 0, 0, 1)',
      width: 1.5,
    },
    text: '文字描述',
    offsetY: -12,
  },
};
getOptionsStyle(optionsStyle);
```

**上面配置转换成`Style`代码：**

```js
import { Style, Fill, Stroke, Icon, Text } from 'ol/style';

const style = new Style({
  fill: new Fill({
    color: 'rgba(255, 0, 0, 0.3)',
  }),
  stroke: new Stroke({
    color: 'rgba(0, 153, 255, 1)',
    lineDash: [10, 10],
    width: 2,
  }),
  image: new Icon({
    src: '../images/xxx.png',
    anchor: [0.5, 0.5],
    scale: 1,
  }),
  text: new Text({
    font: '12px Calibri,sans-serif',
    fill: new Fill({
      color: 'rgba(255, 255, 255, 1)',
    }),
    stroke: new Stroke({
      color: 'rgba(0, 0, 0, 1)',
      width: 1.5,
    }),
    text: '文字描述',
    offsetY: -12,
  }),
});
```