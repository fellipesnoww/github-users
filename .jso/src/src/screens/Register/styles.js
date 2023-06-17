  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.UnderlinedDescription = exports.Title = exports.LogoContainer = exports.Logo = exports.Footer = exports.Description = exports.Container = exports.BackButton = undefined;
  var _taggedTemplateLiteralLoose2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _native = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
  var Container = _native.default.View(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2.default)(["\n  justify-content: center;\n  background-color: ", ";\n  padding: 60px 40px 32px 40px;\n  align-items: flex-start;\n  width: 100%;\n  flex: 1;\n"])), function (_ref) {
    var theme = _ref.theme;
    return theme.colors.background;
  });
  exports.Container = Container;
  var LogoContainer = _native.default.View(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2.default)(["\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  margin-bottom: 80px;\n"])));
  exports.LogoContainer = LogoContainer;
  var Logo = _native.default.Image(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteralLoose2.default)(["\n  width: 198px;\n  height: 80px;\n"])));
  exports.Logo = Logo;
  var Title = _native.default.Text(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteralLoose2.default)(["\n  font-size: 22px;\n  line-height: 28px;\n  color: ", ";\n  font-family: ", ";\n  margin-bottom: 10px;\n"])), function (_ref2) {
    var theme = _ref2.theme;
    return theme.colors.primary;
  }, function (_ref3) {
    var theme = _ref3.theme;
    return theme.fonts.primary.bold;
  });
  exports.Title = Title;
  var Description = _native.default.Text(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteralLoose2.default)(["\n  font-size: 16px;\n  line-height: 20px;\n  color: ", ";\n  font-family: ", ";\n  margin-bottom: 32px;\n"])), function (_ref4) {
    var theme = _ref4.theme;
    return theme.colors.secondary;
  }, function (_ref5) {
    var theme = _ref5.theme;
    return theme.fonts.primary.regular;
  });
  exports.Description = Description;
  var UnderlinedDescription = _native.default.Text(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteralLoose2.default)(["\n  font-size: 16px;\n  line-height: 20px;\n  color: ", ";\n  font-family: ", ";\n  text-decoration: underline;\n  margin-bottom: 32px;\n"])), function (_ref6) {
    var theme = _ref6.theme;
    return theme.colors.secondary;
  }, function (_ref7) {
    var theme = _ref7.theme;
    return theme.fonts.primary.regular;
  });
  exports.UnderlinedDescription = UnderlinedDescription;
  var Footer = _native.default.View(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteralLoose2.default)(["\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  flex-direction: row;\n  background-color: ", ";\n"])), function (_ref8) {
    var theme = _ref8.theme;
    return theme.colors.background;
  });
  exports.Footer = Footer;
  var BackButton = _native.default.TouchableWithoutFeedback(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteralLoose2.default)(["\n  width: 40px;\n  height: 40px;\n  align-items: center;\n  justify-content: center;\n"])));
  exports.BackButton = BackButton;
