  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[1]));
  var _styledComponents = _$$_REQUIRE(_dependencyMap[2]);
  var _theme = _$$_REQUIRE(_dependencyMap[3]);
  var _routes = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[4]));
  var _UsersProvider = _$$_REQUIRE(_dependencyMap[5]);
  var Sentry = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[6]));
  var _jailMonkey = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[7]));
  var _reactNativeBootsplash = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[8]));
  var _reactNative2 = _$$_REQUIRE(_dependencyMap[9]);
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[10]);
  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
  Sentry.init({
    dsn: "https://79b659b980e94e60bd6dbeee92a7c0bf@o4505196482527232.ingest.sentry.io/4505196482592768"
  });
  function App() {
    (0, _react.useEffect)(function () {
      _reactNativeBootsplash.default.hide({
        duration: 1000,
        fade: true
      });
    }, []);
    return (0, _jsxRuntime.jsx)(_styledComponents.ThemeProvider, {
      theme: _theme.APP_THEME,
      children: (0, _jsxRuntime.jsx)(_UsersProvider.UsersProvider, {
        children: (0, _jsxRuntime.jsx)(_routes.default, {})
      })
    });
  }
  var _default = Sentry.wrap(App);
  exports.default = _default;
