  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Title = exports.SugestionsSection = exports.Sugestions = exports.SugestionLabel = exports.SelectedTopicSection = exports.Container = undefined;
  var _taggedTemplateLiteralLoose2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _native = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
  var Container = _native.default.View(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2.default)(["\n  width: 100%;\n  padding: 32px 20px 25px 20px;\n  align-items: flex-start;\n  justify-content: flex-start;\n  background-color: ", ";\n  border-radius: 8px;\n"])), function (_ref) {
    var theme = _ref.theme;
    return theme.colors.background;
  });
  exports.Container = Container;
  var Title = _native.default.Text(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2.default)(["\n  color: ", ";\n  font-family: ", ";\n  font-size: 22px;\n  margin-bottom: 18px;\n"])), function (_ref2) {
    var theme = _ref2.theme;
    return theme.colors.primary;
  }, function (_ref3) {
    var theme = _ref3.theme;
    return theme.fonts.primary.bold;
  });
  exports.Title = Title;
  var SelectedTopicSection = _native.default.View(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteralLoose2.default)(["\n  width: 100%;\n  margin-vertical: 8px;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: row;\n  flex-wrap: wrap;\n"])));
  exports.SelectedTopicSection = SelectedTopicSection;
  var Sugestions = _native.default.View(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteralLoose2.default)(["\n  width: 100%;\n  margin-vertical: 8px;\n  align-items: flex-start;\n  justify-content: flex-start;\n  border-radius: 4px;\n  border: 1px solid ", ";\n  padding: 16px 10px;\n"])), function (_ref4) {
    var theme = _ref4.theme;
    return theme.colors.shade;
  });
  exports.Sugestions = Sugestions;
  var SugestionLabel = _native.default.Text(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteralLoose2.default)(["\n  color: ", ";\n  font-family: ", ";\n  font-size: 16px;\n"])), function (_ref5) {
    var theme = _ref5.theme;
    return theme.colors.secondary;
  }, function (_ref6) {
    var theme = _ref6.theme;
    return theme.fonts.primary.regular;
  });
  exports.SugestionLabel = SugestionLabel;
  var SugestionsSection = _native.default.View(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteralLoose2.default)(["\n  width: 100%;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: row;\n  margin-top: 8px;\n"])));
  exports.SugestionsSection = SugestionsSection;
