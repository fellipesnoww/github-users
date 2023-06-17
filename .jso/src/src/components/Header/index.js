  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Header;
  var _react = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _Button = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _github_logo = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[3]));
  var _styles = _$$_REQUIRE(_dependencyMap[4]);
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[5]);
  function Header(_ref) {
    var buttonAction = _ref.buttonAction,
      textButton = _ref.textButton;
    return (0, _jsxRuntime.jsxs)(_styles.Container, {
      children: [(0, _jsxRuntime.jsx)(_styles.Logo, {
        source: _github_logo.default
      }), (0, _jsxRuntime.jsx)(_Button.default, {
        text: textButton,
        style: {
          width: 155
        },
        onPress: buttonAction
      })]
    });
  }
