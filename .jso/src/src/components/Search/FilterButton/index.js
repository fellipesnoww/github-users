  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = FilterButton;
  var _objectDestructuringEmpty2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _react = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _styles = _$$_REQUIRE(_dependencyMap[3]);
  var _filter_list = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[4]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[5]);
  function FilterButton(_ref) {
    var props = Object.assign({}, ((0, _objectDestructuringEmpty2.default)(_ref), _ref));
    return (0, _jsxRuntime.jsx)(_styles.Container, Object.assign({}, props, {
      children: (0, _jsxRuntime.jsx)(_filter_list.default, {
        width: 24,
        height: 24
      })
    }));
  }
