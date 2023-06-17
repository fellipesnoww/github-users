  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = HeaderWithUser;
  var _react = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _arrow_back = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _styles = _$$_REQUIRE(_dependencyMap[3]);
  var _native = _$$_REQUIRE(_dependencyMap[4]);
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[5]);
  function HeaderWithUser(_ref) {
    var avatar_url = _ref.avatar_url;
    var navigation = (0, _native.useNavigation)();
    function handleGoBack() {
      navigation.goBack();
    }
    return (0, _jsxRuntime.jsxs)(_styles.Container, {
      children: [(0, _jsxRuntime.jsx)(_styles.BackButton, {
        onPress: handleGoBack,
        children: (0, _jsxRuntime.jsx)(_arrow_back.default, {})
      }), (0, _jsxRuntime.jsx)(_styles.UserAvatar, {
        source: {
          uri: avatar_url
        }
      })]
    });
  }
