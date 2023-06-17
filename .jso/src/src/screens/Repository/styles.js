  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SearchArea = exports.RepositoriesList = exports.ModalContent = exports.Container = undefined;
  var _taggedTemplateLiteralLoose2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[2]);
  var _native = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[3]));
  var _templateObject, _templateObject2, _templateObject3, _templateObject4;
  var Container = _native.default.View(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2.default)(["\n  justify-content: flex-start;\n  background-color: ", ";\n  align-items: flex-start;\n  flex: 1;\n  padding-top: ", ";\n"])), function (_ref) {
    var theme = _ref.theme;
    return theme.colors.background;
  }, _reactNative.Platform.OS === 'android' ? '10px' : '30px');
  exports.Container = Container;
  var RepositoriesList = (0, _native.default)(_reactNative.FlatList).attrs({})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2.default)(["\n  flex: 1;\n  width: 100%;\n  background-color: ", ";\n  padding-horizontal: 16px;\n"])), function (_ref2) {
    var theme = _ref2.theme;
    return theme.colors.shade;
  });
  exports.RepositoriesList = RepositoriesList;
  var SearchArea = _native.default.View(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteralLoose2.default)(["\n  width: 100%;\n  padding-horizontal: 16px;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  background-color: ", ";\n  padding-vertical: 8px;\n"])), function (_ref3) {
    var theme = _ref3.theme;
    return theme.colors.shade;
  });
  exports.SearchArea = SearchArea;
  var ModalContent = _native.default.View(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteralLoose2.default)(["\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  padding-horizontal: 16px;\n  background-color: transparent;\n\n"])));
  exports.ModalContent = ModalContent;
