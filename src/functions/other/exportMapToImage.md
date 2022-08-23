# 导出地图为图片

项目开发中，经常会遇到需要下载当前地图绘制的数据成图片。`exportMapToImage`该功能实现了自定义标题，副标题，自定义图片图例，然后生成返回`base64`图片数据，下载成jpg、png格式。


::: warning 注意

- 如果导出提示报错说被污染，需要去初始化`ol/map`地图对象的`Layer`里面的`source`加上 `crossOrigin: 'anonymous'`。
- 由于`Overlay`是脱离地图`ol/map`的`Canvas`，所以地图下载数据不会包含`Overlay`数据。
:::

**Param**

| 属性     | 类型             | 说明                                    |
| ------- | ---------------- | --------------------------------------- |
| Map     | `ol/Map`         | `ol/Map` 的地图对象                      |
| Options | `ExportOptions`  | ExportOptions导出配置，见`ExportOptions` |

**ExportOptions**

| 属性       | 类型          | 默认值        | 可选值        | 说明                                         |
| --------- | ------------- | ------------- | ------------ | -------------------------------------------- |
| imgSize   | `array`       | -             | -            | 导出图片的宽高大小                     |
| type      | `string`      | `image/png`   | `image/jpeg` | 导出图片的数据格式                            |
| quality   | `number`      | 0.8           | -            | 导出图片的质量                                |
| title     | `object`      | -             | -            | 标题信息，见`TitleObject`                     |
| subtitle  | `object`      | -             | -            | 副标题信息，见`TitleObject`                   |
| legend    | `string`      | -             | -            | 需要合并在右下角的图例图片                     |
| down      | `boolean`     | `true`        | -            | 是否下载图片(有时可能只需返回的base64图片数据)  |

**TitleObject**

| 属性       | 说明          |
| --------- | ------------- |
| name      | `string`      |
| fontSize  | `string`      |
| color     | `string`      |


### 返回值：
包含 `base64 Data` 的 `Promise` 对象。


**ExportOptions 示例**

```js
const exportOptions = {
  imgSize: [1200, 800],
  type: 'image/png',
  quality: 0.8,
  title: {
    name: '标题信息',
    fontSize: '36px',
    color: '#f00',
  },
  subtitle: {
    name: '副标题信息',
    fontSize: '20px',
    color: '#000',
  },
  legend: '../legend.png',
  down: true,
};
```

**示例**

```js
import { exportMapToImage } from 'gmap-ol';

const imageData = exportMapToImage(olMap, exportOptions);

imageData.then((resolve) => {
  console.log(resolve); // base64图片数据
});
```
**效果预览图：**

![](/images/exportMapToImage.jpg)