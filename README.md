# v-ymap

vue plugin for yandex map

Install Project as dependency
```sh
npm i v-ymap
```
Building project
```bash
npm run build
```
Examples
```bash
npm run test:server
```
for start test server with examples from ***./examples*** folder.

## Components

### v-ymap
General component of map, other components using in v-ymap default slot.
| Name              | Option                  | Type     | required  | example       | y.docs |
| ---------------   | :---------------------: | :------: | :-------: | :-----------: | -----: |
| v-ymap            |                         |          |           |               | [Map](https://yandex.com/dev/maps/jsapi/doc/2.1/ref/reference/Map.html) |
|                   | YMAPS_KEY               | String   | **false** |               |
|                   | YMAPS_LANG              | String   | **false** |               |
|                   | YMAPS_VERSION           | String   | **false** |               |
|                   | YMAPS_LOAD_BY_REQUIRE   | Boolean  | **false** | true          |
|                   | center                  | Number[] | **true**  | [55.55,55.55] |
|                   | zoom                    | Number   | **true**  | 10            |
|                   | behaviors               | Array    | **false** | ['default']   |
|                   | controls                | Array    | **false** | ['default']   |
|                   | margin                  | Number[] | **false** | [10,10,10,10] |
|                   | type                    | String   | **false** | 'yandex#map'  |
|                   | options                 | Object   | **false** | {}            |

### v-ymap-collection
Basic implementation of an object collection on the map.
| Name              | Option                  | Type     | required  | example       | y.docs |
| ---------------   | :---------------------: | :------: | :-------: | :-----------: | -----: |
| v-ymap-collection |                         |          |           |               | [Collection](https://yandex.com/dev/maps/jsapi/doc/2.1/ref/reference/Collection.html) |
|                   | options                 | Object   | **false** | {}            |

### v-ymap-clusterer
Clusterizes objects in the visible area of the map. If the object does not fall within the visible area of the map, it will not be added to the map.
| Name              | Option                  | Type     | required  | example       | y.docs |
| ---------------   | :---------------------: | :------: | :-------: | :-----------: | -----: |
| v-ymap-clusterer  |                         |          |           |               | [Clusterer](https://yandex.com/dev/maps/jsapi/doc/2.1/ref/reference/Clusterer.html) |
|                   | gridSize                | Number   | **false** | 64            |
|                   | groupByCoordinates      | Boolean  | **false** | false         |
|                   | hasBalloon              | Boolean  | **false** | true          |
|                   | hasHint                 | Boolean  | **false** | true          |
|                   | margin                  | Number[] | **false** | [10,10,10,10] |
|                   | maxZoom                 | Number   | **false** | Infinity      |
|                   | minClusterSize          | Number   | **false** | 2             |
|                   | preset                  | String   | **false** |               |
|                   | showInAlphabeticalOrder | Boolean  | **false** | false         |
|                   | useMapMargin            | Boolean  | **false** | true          |
|                   | viewportMargin          | Number   | **false** | 128           |
|                   | zoomMargin              | Number   | **false** | 0             |

### v-ymap-circle
Circle. A geo object with the geometry
| Name              | Option                  | Type     | required  | example       | y.docs |
| ---------------   | :---------------------: | :------: | :-------: | :-----------: | -----: |
| v-ymap-circle     |                         |          |           |               | [Circle](https://yandex.com/dev/maps/jsapi/doc/2.1/ref/reference/Circle.html) |
|                   | geometry                | Number[] | **true**  | [55.55,55.55] |
|                   | properties              | Object   | **false** | { "balloonContentBody": "some text" } |
|                   | options                 | Object   | **false** | {} |

### v-ymap-placemark
Placemark. A geo object with the geometry
| Name              | Option                  | Type     | required  | example       | y.docs |
| ---------------   | :---------------------: | :------: | :-------: | :-----------: | -----: |
| v-ymap-placemark  |                         |          |           |               | [Placemark](https://yandex.com/dev/maps/jsapi/doc/2.1/ref/reference/Placemark.html) |
|                   | geometry                | Number[] | **true**  | [55.55,55.55] |
|                   | properties              | Object   | **false** | { "balloonContentBody": "some text" } |
|                   | options                 | Object   | **false** | {} |

### v-ymap-polygon
Polygon. A geo object with the geometry
| Name              | Option                  | Type     | required  | example       | y.docs |
| ---------------   | :---------------------: | :------: | :-------: | :-----------: | -----: |
| v-ymap-polygon    |                         |          |           |               | [Polygon](https://yandex.com/dev/maps/jsapi/doc/2.1/ref/reference/Polygon.html) |
|                   | geometry                | Number[] | **true**  | [[[55.75, 37.80],[55.80, 37.90],[55.75, 38.00],[55.70, 38.00],[55.70, 37.80]]] |
|                   | properties              | Object   | **false** | { "balloonContentBody": "some text" } |
|                   | options                 | Object   | **false** | {} |

### v-ymap-polyline
Polyline. A geo object with the geometry
| Name              | Option                  | Type     | required  | example       | y.docs |
| ---------------   | :---------------------: | :------: | :-------: | :-----------: | -----: |
| v-ymap-polyline   |                         |          |           |               | [Polyline](https://yandex.com/dev/maps/jsapi/doc/2.1/ref/reference/Polyline.html) |
|                   | geometry                | Number[] | **true**  | [[55.80, 37.50],[55.80, 37.40],[55.70, 37.50],[55.70, 37.40]] |
|                   | properties              | Object   | **false** | { "balloonContentBody": "some text" } |
|                   | options                 | Object   | **false** | {} |

### v-ymap-rectangle
Rectangle. A geo object with the geometry
| Name              | Option                  | Type     | required  | example       | y.docs |
| ---------------   | :---------------------: | :------: | :-------: | :-----------: | -----: |
| v-ymap-rectangle  |                         |          |           |               | [Rectangle](https://yandex.com/dev/maps/jsapi/doc/2.1/ref/reference/Rectangle.html) |
|                   | geometry                | Number[] | **true**  | [[55.665, 37.66],[55.64, 37.53]] |
|                   | properties              | Object   | **false** | { "balloonContentBody": "some text" } |
|                   | options                 | Object   | **false** | {} |

### v-ymap-route
Plots a route through the specified points.
| Name              | Option                  | Type     | required  | example       | y.docs |
| ---------------   | :---------------------: | :------: | :-------: | :-----------: | -----: |
| v-ymap-route      |                         |          |           |               | [route](https://yandex.com/dev/maps/jsapi/doc/2.1/ref/reference/route.html) |
|                   | points                  | Array    | **true**  | ['Москва, пр. Мира','Москва, ул. Мясницкая'] |
|                   | params                  | Object   | **false** | {} |
