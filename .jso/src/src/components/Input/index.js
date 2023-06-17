  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Input;
  var _objectDestructuringEmpty2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _react = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _styles = _$$_REQUIRE(_dependencyMap[3]);
  var _account_circle = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[4]));
  var _styledComponents = _$$_REQUIRE(_dependencyMap[5]);
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[6]);
  function Input(_ref) {
    var props = Object.assign({}, ((0, _objectDestructuringEmpty2.default)(_ref), _ref));
    var theme = (0, _styledComponents.useTheme)();
    return (0, _jsxRuntime.jsxs)(_styles.Container, {
      children: [(0, _jsxRuntime.jsx)(_account_circle.default, {
        width: 24,
        height: 24
      }), (0, _jsxRuntime.jsx)(_styles.TextInput, Object.assign({
        placeholderTextColor: theme.colors.secondary
      }, props))]
    });
  }
