  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Username = exports.UserIdentifier = exports.UserBasicInfo = exports.UserAbout = exports.TextContent = exports.NameData = exports.Name = exports.DeleteButton = exports.Container = exports.Avatar = exports.AboutDescription = exports.About = undefined;
  var _taggedTemplateLiteralLoose2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _native = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
  var Container = _native.default.TouchableOpacity(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2.default)(["\n  width: 100%;\n  padding: 32px 16px 32px 24px;\n  background-color: ", ";\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n  elevation: 3;\n  margin-top: 8px;\n  margin-bottom: 8px;\n"])), function (_ref) {
    var theme = _ref.theme;
    return theme.colors.background;
  });
  exports.Container = Container;
  var UserBasicInfo = _native.default.View(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2.default)(["\n  width: 100%;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n"])));
  exports.UserBasicInfo = UserBasicInfo;
  var TextContent = _native.default.View(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteralLoose2.default)(["\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n"])));
  exports.TextContent = TextContent;
  var UserIdentifier = _native.default.View(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteralLoose2.default)(["\n  align-items: flex-start;\n  justify-content: flex-start;\n  margin-left: 16px;\n"])));
  exports.UserIdentifier = UserIdentifier;
  var Avatar = _native.default.Image(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteralLoose2.default)(["\n  width: 64px;\n  height: 64px;\n  border-radius: 32px;\n"])));
  exports.Avatar = Avatar;
  var NameData = _native.default.View(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteralLoose2.default)(["\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 10px;\n"])));
  exports.NameData = NameData;
  var Name = _native.default.Text(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteralLoose2.default)(["\n  font-size: 16px;\n  line-height: 20px;\n  color: ", ";\n  font-family: ", ";\n  margin-right: 8px;\n"])), function (_ref2) {
    var theme = _ref2.theme;
    return theme.colors.primary;
  }, function (_ref3) {
    var theme = _ref3.theme;
    return theme.fonts.primary.bold;
  });
  exports.Name = Name;
  var Username = _native.default.Text(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteralLoose2.default)(["\n  font-size: 14px;\n  line-height: 20px;\n  color: ", ";\n  font-family: ", ";\n"])), function (_ref4) {
    var theme = _ref4.theme;
    return theme.colors.primary;
  }, function (_ref5) {
    var theme = _ref5.theme;
    return theme.fonts.primary.regular;
  });
  exports.Username = Username;
  var UserAbout = _native.default.View(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteralLoose2.default)(["\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding-right: 40px;\n  margin-top: 16px;\n"])));
  exports.UserAbout = UserAbout;
  var About = _native.default.View(_templateObject10 || (_templateObject10 = (0, _taggedTemplateLiteralLoose2.default)(["\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n"])));
  exports.About = About;
  var AboutDescription = _native.default.Text(_templateObject11 || (_templateObject11 = (0, _taggedTemplateLiteralLoose2.default)(["\n  font-size: 12px;\n  line-height: 15px;\n  color: ", ";\n  font-family: ", ";\n  margin-left: 4px;\n"])), function (_ref6) {
    var theme = _ref6.theme;
    return theme.colors.secondary;
  }, function (_ref7) {
    var theme = _ref7.theme;
    return theme.fonts.primary.regular;
  });
  exports.AboutDescription = AboutDescription;
  var DeleteButton = _native.default.TouchableOpacity(_templateObject12 || (_templateObject12 = (0, _taggedTemplateLiteralLoose2.default)(["\n  width: 24px;\n  height: 24px;\n  border-radius: 12px;\n  align-items: center;\n  justify-content: center;\n  background-color: ", ";\n"])), function (_ref8) {
    var theme = _ref8.theme;
    return theme.colors.background_secondary;
  });
  exports.DeleteButton = DeleteButton;
