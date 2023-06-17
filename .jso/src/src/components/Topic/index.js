  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Topic = Topic;
  exports.TypeAction = undefined;
  var _react = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _styles = _$$_REQUIRE(_dependencyMap[2]);
  var _circle_plus = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[3]));
  var _circle_close = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[4]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[5]);
  var TypeAction = function (TypeAction) {
    TypeAction[TypeAction["none"] = 0] = "none";
    TypeAction[TypeAction["remove"] = 1] = "remove";
    TypeAction[TypeAction["add"] = 2] = "add";
    return TypeAction;
  }({});
  exports.TypeAction = TypeAction;
  function Topic(_ref) {
    var name = _ref.name,
      typeAction = _ref.typeAction,
      onPress = _ref.onPress;
    function getIconType() {
      switch (typeAction) {
        case TypeAction.add:
          return (0, _jsxRuntime.jsx)(_circle_plus.default, {
            width: 16,
            height: 16
          });
        case TypeAction.remove:
          return (0, _jsxRuntime.jsx)(_circle_close.default, {
            width: 16,
            height: 16
          });
        case TypeAction.none:
        default:
          return (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {});
      }
    }
    function nameTransform() {
      if (typeAction === TypeAction.none) {
        return "#" + name;
      }
      return name;
    }
    return (0, _jsxRuntime.jsxs)(_styles.Container, {
      onPress: onPress,
      disabled: typeAction === TypeAction.none,
      children: [(0, _jsxRuntime.jsx)(_styles.Name, {
        isSmallText: typeAction === TypeAction.none,
        children: nameTransform()
      }), getIconType()]
    });
  }
