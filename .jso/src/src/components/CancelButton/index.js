  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = CancelButton;
  var _objectWithoutProperties2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _react = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _styles = _$$_REQUIRE(_dependencyMap[3]);
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[4]);
  var _excluded = ["text"];
  function CancelButton(_ref) {
    var text = _ref.text,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
    return (0, _jsxRuntime.jsx)(_styles.Container, Object.assign({}, props, {
      children: (0, _jsxRuntime.jsx)(_styles.Text, {
        children: text
      })
    }));
  }
