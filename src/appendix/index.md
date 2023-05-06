# OpenLayers API

OpenLayers的API网址：[OpenLayers API](https://openlayers.org/en/latest/apidoc/)

OpenLayers基于面向对象设计，由JavaScript实现，其命名空间的类别较多，关系复杂，体系庞大。

打开网址，这里有很多不同的类别介绍，如下图所示：

![](/images/olApi/api.png)

左上角有一个检索功能，可以直接输入自己想要的类型，进行快速检索：

![](/images/olApi/search_api.png)

Openlayers的API总体类别如下图所示：

![](/images/olApi/api_type.jpg)

### 这里面比较核心的类别有：

- ***Map(ol.Map)***： 地图容器，核心部分，可加载各类地图与功能控件，用于渲染、表现动态地图。
WebGLMap(ol.WebGLMap)： 使用WebGL进行渲染的地图容器，使用 WebGL渲染地图图层，但是该容器对矢量数据的支持有限，目前不支持矢量瓦片数据。

- ***View(olView)***： 地图视图，控制地图缩放等基本交互，以及地图投影坐标系、地图中心点、分辨率、旋转角度等。

- ***Layers(ol.LayerBase)***： 图层，包含多个调用数据的子类，由子类的实例加载地图数据，必须结合图层数据源匹配使用。

- ***Sources(ol.source.Source)***： 图层数据源，与图层子类对应，由图层数据源的实例来加载各种类型的地图数据。

- ***Format(ol.format.Feature)***： 数据解析类，此类用于读/写各种格式的数据，并创建了多种格式的子类，即数据解析器。目前支持多种数据格式，如GeoJSON、GML、XML、WKT、WFS等。
- ***Geometry(ol.geom.Geometry)***： 地理空间对象的几何实体，由其子类(如Point、LineString、Polygon)的实例构成所看到的矢量地图。

- ***Projections(ol.pro.Projection)***： 地图投影定义类，包括EPSG： 4326(ol.proiEPSG4326)与EPSG： 3857(ol.proiEPSG3857)的定义，用于在地图视图(View)中设置地图的投影坐标系，可通过 ol.proj提供的方法进行投影变换。

- ***Renderer(ol.renderer.Renderer)***： 渲染器。在OpenLayers5中，渲染功能是作为Map类的一个属性存在的，支持Canvas与WebGL两种渲染方式，可通过设置Map类的renderer属性设定渲染方式。


### 类的事件

- ***ol.MapEvent***： 地图事件类，继承于olevents.Event，其子类为 ol.MapBrowserEvent，可查看ol.Map中有哪些事件触发了地图事件如单击(click)、双击(dblclick)、鼠标拖曳(pointerdrag)、鼠标移动(pointermove)单次单击(singleclick)等事件可触发地图浏览器事件(ol.MapBrowserEvent)，而移动结束(moveend)事件等可触发地图事件。

- ***ol.object.Event***： ol.0bject的事件，继承于olevents.Event,可以提供属性变更事件(Propertychange)，当属性发生变更时触发此事件。

- 另外，还有地图交互绘制事件(olinteraction.Draw.Event)、交互选择事件(olinteraction.Select.Event)集合事件(ol.Collection.Event)、地图渲染事件(ol.render.Event)等，具体说明可查看0penLayers5的API。