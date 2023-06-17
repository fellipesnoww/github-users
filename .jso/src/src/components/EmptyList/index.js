  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = EmptyList;
  var _react = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _styles = _$$_REQUIRE(_dependencyMap[2]);
  var _lottieReactNative = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[3]));
  var _emptyState = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[4]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[5]);
  function EmptyList(_ref) {
    var message = _ref.message;
    return (0, _jsxRuntime.jsxs)(_styles.Container, {
      children: [(0, _jsxRuntime.jsx)(_lottieReactNative.default, {
        source: _emptyState.default,
        autoPlay: true,
        loop: true,
        style: {
          width: 250,
          height: 200
        }
      }), (0, _jsxRuntime.jsx)(_styles.Message, {
        children: message
      })]
    });
  }
