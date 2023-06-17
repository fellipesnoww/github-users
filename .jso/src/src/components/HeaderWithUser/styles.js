  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.UserAvatar = exports.Container = exports.BackButton = undefined;
  var _taggedTemplateLiteralLoose2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _native = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _templateObject, _templateObject2, _templateObject3;
  var Container = _native.default.View(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2.default)(["\n  align-items: center;\n  justify-content: space-between;\n  background-color: ", ";\n  padding: 16px 20px 24px 16px;\n  width: 100%;\n  flex-direction: row;\n"])), function (_ref) {
    var theme = _ref.theme;
    return theme.colors.background;
  });
  exports.Container = Container;
  var BackButton = _native.default.TouchableOpacity(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2.default)(["\n  width: 32px;\n  height: 32px;\n  align-items: center;\n  justify-content: center;\n"])));
  exports.BackButton = BackButton;
  var UserAvatar = _native.default.Image(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteralLoose2.default)(["\n  width: 32px;\n  height: 32px;\n  border-radius: 16px;\n"])));
  exports.UserAvatar = UserAvatar;
