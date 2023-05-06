# 框选数据

## `boxSelectionFeatures`

使用`DragBox`交互控件来选择要素，选中的要素可高亮显示。

按住`Ctrl`键+鼠标左键，(Mac系统按住键盘`Command`键)在地图上面来框选范围数据。

### 参数：

| 属性            | 类型           | 说明                                    |
| --------------  | ------------- | --------------------------------------- |
| Map             | `ol/Map`      | `ol/Map` 的地图对象                      |
| selectionOption | `object`      | 范围内数据弹出窗配置，见`SelectionOption` |
| callback        | `function`    | 回调函数，返回框选范围内的要素数据         |

**SelectionOption**

| 属性          | 类型       | 默认值 | 可选值  | 说明                                                      |
| ------------- | --------- | ------ | ------ | --------------------------------------------------------- |
| layerName     | `string`  | -      | 必填   | 图层名字                                                   |
| textFieldName | `string`  | `name` | 非必填 | 需要回调函数返回数据的别名字段<br/>默认是添加图层数据设置的字段 |
| styles        | `Style`   | -      | 非必填 | Feature样式，可以见附录Style，<br/>或者`getOptionsStyle`     |

### 返回值:
- Array

### 示例：

```js
import { boxSelectionFeatures } from 'gmap-ol';

const selectionOption = {
  layerName: 'PolygonLayer',
  styles: {
    fill: {
      color: 'rgba(200, 0, 255, 0.7)',
    },
    stroke: {
      width: 2,
      color: 'rgba(255, 255, 255, 1)',
    },
  },
};

function selectionCallbackFn(data) {
  console.log(data, '框选范围内的数据');
}
boxSelectionFeatures(olMap, selectionOption, selectionCallbackFn);
```