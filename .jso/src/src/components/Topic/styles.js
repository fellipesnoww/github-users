  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Name = exports.Container = undefined;
  var _taggedTemplateLiteralLoose2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _native = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _templateObject, _templateObject2;
  var Container = _native.default.TouchableOpacity(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2.default)(["\n  align-items: center;\n  justify-content: center;\n  background-color: ", ";\n  padding: 3px 12px;\n  border-radius: 100px;\n  flex-direction: row;\n  margin-right: 4px;\n  margin-bottom: 4px;\n"])), function (_ref) {
    var theme = _ref.theme;
    return theme.colors.shade;
  });
  exports.Container = Container;
  var Name = _native.default.Text(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2.default)(["\n  line-height: 20px;\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  margin-right: 8px;\n"])), function (_ref2) {
    var theme = _ref2.theme;
    return theme.colors.primary;
  }, function (_ref3) {
    var theme = _ref3.theme;
    return theme.fonts.primary.regular;
  }, function (_ref4) {
    var isSmallText = _ref4.isSmallText;
    return isSmallText ? '12px ' : '16px';
  });
  exports.Name = Name;
