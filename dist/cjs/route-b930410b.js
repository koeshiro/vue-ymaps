'use strict';

var index = require('./index-e76541aa.js');

var route = {
  render: function render(h) {
    return h('div', {
      "class": "yandex-route_not-used-dom-element"
    });
  },
  props: {
    points: {
      type: [Array],
      required: true,
      validator: function validator(value) {
        if (!Array.isArray(value)) {
          return false;
        }

        if (value.length === 0) {
          return false;
        }

        var _iterator = index._createForOfIteratorHelper(value),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;

            if (typeof item === 'string' && item.length === 0) {
              return false;
            }

            if (index._typeof(item) === 'object' && (!('type' in item && 'point' in item) || 'type' in item && 'point' in item && !['viaPoint', 'wayPoint'].includes(item.type))) {
              return false;
            }

            if (item.type === 'viaPoint' && (typeof item.point !== 'string' || typeof item.point === 'string' && item.point.length === 0)) {
              return false;
            }

            if (item.type === 'wayPoint' && !(Array.isArray(item.point) && item.point.length === 2 && !Number.isNaN(item.point[0]) && !Number.isNaN(item.point[1]))) {
              return false;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return true;
      }
    },
    params: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  watch: {
    points: function points(newV, oldV) {
      this.$emit('updated', {
        property: 'points',
        value: newV
      });
    },
    params: function params(newV, oldV) {
      this.$emit('updated', {
        property: 'params',
        value: newV
      });
    }
  },
  methods: {
    getGeoObject: function getGeoObject() {
      var _this = this;

      return index._asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var maps, route;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return index.ymaps();

              case 2:
                maps = _context.sent;
                _context.next = 5;
                return maps.route(_this.points, _this.params);

              case 5:
                route = _context.sent;
                return _context.abrupt("return", route);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
};

exports.default = route;