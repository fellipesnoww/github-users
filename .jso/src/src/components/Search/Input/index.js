  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = InputSearch;
  var _objectWithoutProperties2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _react = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _styles = _$$_REQUIRE(_dependencyMap[3]);
  var _search = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[4]));
  var _filter_list = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[5]));
  var _styledComponents = _$$_REQUIRE(_dependencyMap[6]);
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[7]);
  var _excluded = ["icon", "lightBackground", "style"];
  function InputSearch(_ref) {
    var _ref$icon = _ref.icon,
      icon = _ref$icon === undefined ? 'search' : _ref$icon,
      _ref$lightBackground = _ref.lightBackground,
      lightBackground = _ref$lightBackground === undefined ? false : _ref$lightBackground,
      style = _ref.style,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
    var theme = (0, _styledComponents.useTheme)();
    return (0, _jsxRuntime.jsxs)(_styles.Container, {
      lightBackground: lightBackground,
      style: style,
      children: [icon === 'search' ? (0, _jsxRuntime.jsx)(_search.default, {
        width: 24,
        height: 24
      }) : (0, _jsxRuntime.jsx)(_filter_list.default, {
        width: 24,
        height: 24
      }), (0, _jsxRuntime.jsx)(_styles.TextInput, Object.assign({
        placeholderTextColor: theme.colors.secondary
      }, props))]
    });
  }
