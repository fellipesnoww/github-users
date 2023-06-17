  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Logo = exports.Container = undefined;
  var _taggedTemplateLiteralLoose2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _native = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _templateObject, _templateObject2;
  var Container = _native.default.View(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2.default)(["\n  align-items: center;\n  justify-content: space-between;\n  background-color: ", ";\n\n  padding: 16px;\n  width: 100%;\n  flex-direction: row;\n"])), function (_ref) {
    var theme = _ref.theme;
    return theme.colors.background;
  });
  exports.Container = Container;
  var Logo = _native.default.Image(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2.default)(["\n  width: 98px;\n  height: 40px;\n"])));
  exports.Logo = Logo;
