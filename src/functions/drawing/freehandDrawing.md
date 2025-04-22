# 自由绘制

## `freehandDrawing`

调用此方法，通过传入的需要自由绘制类型`Point`、`LineString`、`Polygon`、`Circle`，可以在地图上自由绘制点、线、多边形、圆。

### 参数：

| 属性           | 类型           | 可选值 | 说明                                            |
| -------------- | ------------- | ------ | ----------------------------------------------- |
| Map            | `ol/Map`      | 必填   | `ol/Map` 的地图对象                               |
| Options        | `DrawOptions` | 必填   | 自由绘制图形的配置，见`DrawOptions`                |
| callback       | `function`    | -      | 回调函数，返回绘制图形对应的<br/>`VectorSource`数据 |

**DrawOptions**

| 属性            | 类型          | 默认值 | 可选值  | 说明                  |
| -------------- | ------------- | ------ | ------ | --------------------- |
| type           | `string`      | -      | 必填   | 绘制图形的类型，<br/>`Point`,`LineString`,`Polygon`,`Circle` |
| styles         | `StyleObject` | -      | -      | Feature 样式           |

### 示例

```js
import { freehandDrawing } from 'gmap-ol';
import RRIcon from '../images/RR.png';

const drawOptions = {
  type: 'Polygon',
  styles: {
    stroke: {
      width: 2,
      color: 'rgba(255, 255, 0, 0.8)',
    },
    fill: {
      color: 'rgba(200, 0, 255, 0.7)',
    },
    image: {
      src: RRIcon,
    },
    /*image: {
      radius: 6,
      stroke: {
        color: 'rgba(255, 255, 255, 1)',
      },
      fill: {
        color: 'rgba(0, 153, 255, 1)',
      },
    },*/
  },
};

// 获取绘制图形要素数据的回调函数，可选
function drawCallbackFn(data) {
  console.log(data, '绘制图形对应的`VectorSource`数据');
}
// 绘制图形
freehandDrawing(olMap, drawOptions, drawCallbackFn);
```

### 删除绘制 `removeFreehandDraw`

一个删除在地图上面自由绘制的要素数据的方法和绘制方法。请参考下面实例：

### 示例

```js
import { removeFreehandDraw } from 'gmap-ol';

// 删除绘制
removeFreehandDraw();
```

**效果预览图：**

![](/images/freehandDrawing.gif)