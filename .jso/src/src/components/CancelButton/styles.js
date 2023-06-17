  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Text = exports.Container = undefined;
  var _taggedTemplateLiteralLoose2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _native = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _templateObject, _templateObject2;
  var Container = _native.default.TouchableOpacity(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2.default)(["\n  align-items: center;\n  justify-content: center;\n  background-color: ", ";\n  padding-vertical: 10px;\n  border-radius: 100px;\n  width: 100%;\n"])), function (_ref) {
    var theme = _ref.theme;
    return theme.colors.shade;
  });
  exports.Container = Container;
  var Text = _native.default.Text(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2.default)(["\n  font-size: 16px;\n  line-height: 20px;\n  color: ", ";\n  font-family: ", ";\n"])), function (_ref2) {
    var theme = _ref2.theme;
    return theme.colors.primary;
  }, function (_ref3) {
    var theme = _ref3.theme;
    return theme.fonts.primary.regular;
  });
  exports.Text = Text;
