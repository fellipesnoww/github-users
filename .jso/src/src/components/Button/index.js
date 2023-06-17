  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Button;
  var _objectWithoutProperties2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _react = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _styles = _$$_REQUIRE(_dependencyMap[3]);
  var _reactNative = _$$_REQUIRE(_dependencyMap[4]);
  var _styledComponents = _$$_REQUIRE(_dependencyMap[5]);
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[6]);
  var _excluded = ["text", "loading", "disabled"];
  function Button(_ref) {
    var text = _ref.text,
      _ref$loading = _ref.loading,
      loading = _ref$loading === undefined ? false : _ref$loading,
      disabled = _ref.disabled,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
    var theme = (0, _styledComponents.useTheme)();
    return (0, _jsxRuntime.jsx)(_styles.Container, Object.assign({
      disabled: disabled || loading
    }, props, {
      children: loading ? (0, _jsxRuntime.jsx)(_reactNative.ActivityIndicator, {
        color: theme.colors.primary
      }) : (0, _jsxRuntime.jsx)(_styles.Text, {
        children: text
      })
    }));
  }
