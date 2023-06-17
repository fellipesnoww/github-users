  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TextInput = exports.Container = undefined;
  var _taggedTemplateLiteralLoose2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _native = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _templateObject, _templateObject2;
  var Container = _native.default.View(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2.default)(["\n  align-items: center;\n  justify-content: flex-start;\n  padding: 8px 16px;\n  width: 100%;\n  border: 1px solid ", ";\n  border-radius: 4px;\n  flex-direction: row;\n  margin-bottom: 24px;\n  overflow: hidden;\n"])), function (_ref) {
    var theme = _ref.theme;
    return theme.colors.shade;
  });
  exports.Container = Container;
  var TextInput = _native.default.TextInput(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2.default)(["\n  margin-left: 8px;\n  font-size: 16px;\n  color: ", ";\n  padding-right: 16px;\n"])), function (_ref2) {
    var theme = _ref2.theme;
    return theme.colors.secondary;
  });
  exports.TextInput = TextInput;
