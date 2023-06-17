  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TopicList = exports.StarButton = exports.RepoName = exports.RepoDetails = exports.Name = exports.InlineContent = exports.DetailName = exports.Detail = exports.Container = exports.AboutRepo = undefined;
  var _taggedTemplateLiteralLoose2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _native = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
  var Container = _native.default.View(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2.default)(["\n  width: 100%;\n  padding: 26px 28px 25px 20px;\n  background-color: ", ";\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n  elevation: 3;\n  margin-top: 8px;\n  margin-bottom: 8px;\n"])), function (_ref) {
    var theme = _ref.theme;
    return theme.colors.background;
  });
  exports.Container = Container;
  var InlineContent = _native.default.View(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2.default)(["\n  width: 100%;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n"])));
  exports.InlineContent = InlineContent;
  var RepoName = _native.default.View(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteralLoose2.default)(["\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n"])));
  exports.RepoName = RepoName;
  var Name = _native.default.Text(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteralLoose2.default)(["\n  font-size: 16px;\n  line-height: 20px;\n  color: ", ";\n  font-family: ", ";\n  margin-right: 8px;\n"])), function (_ref2) {
    var theme = _ref2.theme;
    return theme.colors.primary;
  }, function (_ref3) {
    var theme = _ref3.theme;
    return theme.fonts.primary.bold;
  });
  exports.Name = Name;
  var StarButton = _native.default.TouchableOpacity(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteralLoose2.default)(["\n  width: 24px;\n  height: 24px;\n  border-radius: 12px;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 199, 0, 0.16);\n"])));
  exports.StarButton = StarButton;
  var AboutRepo = _native.default.Text(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteralLoose2.default)(["\n  font-size: 14px;\n  line-height: 18px;\n  color: ", ";\n  font-family: ", ";\n  margin-bottom: 6px;\n"])), function (_ref4) {
    var theme = _ref4.theme;
    return theme.colors.primary;
  }, function (_ref5) {
    var theme = _ref5.theme;
    return theme.fonts.primary.regular;
  });
  exports.AboutRepo = AboutRepo;
  var RepoDetails = _native.default.View(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteralLoose2.default)(["\n  width: 100%;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n"])));
  exports.RepoDetails = RepoDetails;
  var Detail = _native.default.View(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteralLoose2.default)(["\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin-left: 16px;\n  ", "\n"])), function (_ref6) {
    var removeMargin = _ref6.removeMargin;
    return removeMargin && 'margin-left: 0px';
  });
  exports.Detail = Detail;
  var DetailName = _native.default.Text(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteralLoose2.default)(["\n  font-size: 12px;\n  line-height: 15px;\n  color: ", ";\n  font-family: ", ";\n  margin-left: 4px;\n"])), function (_ref7) {
    var theme = _ref7.theme;
    return theme.colors.secondary;
  }, function (_ref8) {
    var theme = _ref8.theme;
    return theme.fonts.primary.regular;
  });
  exports.DetailName = DetailName;
  var TopicList = _native.default.View(_templateObject10 || (_templateObject10 = (0, _taggedTemplateLiteralLoose2.default)(["\n  width: 100%;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: flex-start;\n  margin-vertical: 8px;\n  flex-wrap: wrap;\n"])));
  exports.TopicList = TopicList;
