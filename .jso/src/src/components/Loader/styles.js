  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Message = exports.Logo = exports.Container = undefined;
  var _taggedTemplateLiteralLoose2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _native = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _templateObject, _templateObject2, _templateObject3;
  var Container = _native.default.View(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2.default)(["\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n"])));
  exports.Container = Container;
  var Logo = _native.default.Image(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2.default)(["\n  width: 100px;\n  height: 100px;\n"])));
  exports.Logo = Logo;
  var Message = _native.default.Text(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteralLoose2.default)(["\n  font-size: 20px;\n  line-height: 20px;\n  color: ", ";\n  font-family: ", ";\n  text-align: center;\n  margin-top: 40px;\n"])), function (_ref) {
    var theme = _ref.theme;
    return theme.colors.primary;
  }, function (_ref2) {
    var theme = _ref2.theme;
    return theme.fonts.primary.regular;
  });
  exports.Message = Message;
