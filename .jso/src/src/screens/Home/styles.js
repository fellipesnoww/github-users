  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.UserList = exports.Container = undefined;
  var _taggedTemplateLiteralLoose2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[2]);
  var _native = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[3]));
  var _templateObject, _templateObject2;
  var Container = _native.default.View(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2.default)(["\n  justify-content: flex-start;\n  background-color: ", ";\n  align-items: flex-start;\n  width: 100%;\n  flex: 1;\n  padding-top: ", ";\n"])), function (_ref) {
    var theme = _ref.theme;
    return theme.colors.background;
  }, _reactNative.Platform.OS === 'android' ? '10px' : '40px');
  exports.Container = Container;
  var UserList = (0, _native.default)(_reactNative.FlatList).attrs({})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2.default)(["\n  flex: 1;\n  width: 100%;\n  background-color: ", ";\n  padding-horizontal: 16px;\n"])), function (_ref2) {
    var theme = _ref2.theme;
    return theme.colors.shade;
  });
  exports.UserList = UserList;
