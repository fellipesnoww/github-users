  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var React = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[1]));
  var _nativeStack = _$$_REQUIRE(_dependencyMap[2]);
  var _Home = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[3]));
  var _Register = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[4]));
  var _Repository = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[5]));
  var _ModalRegister = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[6]));
  var _useUsers2 = _$$_REQUIRE(_dependencyMap[7]);
  var _Loader = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[8]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[9]);
  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
  var Stack = (0, _nativeStack.createNativeStackNavigator)();
  function AppRoutes() {
    var _useUsers = (0, _useUsers2.useUsers)(),
      users = _useUsers.users,
      loadingUsers = _useUsers.loadingUsers;
    var initialRouteName = users.length > 0 ? 'Home' : 'Register';
    if (loadingUsers) {
      return (0, _jsxRuntime.jsx)(_Loader.default, {
        message: "Buscando informa\xE7\xF5es"
      });
    }
    return (0, _jsxRuntime.jsxs)(Stack.Navigator, {
      screenOptions: {
        headerShown: false
      },
      initialRouteName: initialRouteName,
      children: [(0, _jsxRuntime.jsx)(Stack.Screen, {
        name: "Register",
        component: _Register.default
      }), (0, _jsxRuntime.jsx)(Stack.Screen, {
        name: "Home",
        component: _Home.default
      }), (0, _jsxRuntime.jsx)(Stack.Screen, {
        name: "Repository",
        component: _Repository.default
      }), (0, _jsxRuntime.jsx)(Stack.Group, {
        screenOptions: {
          presentation: 'modal'
        },
        children: (0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "ModalRegister",
          component: _ModalRegister.default
        })
      })]
    });
  }
  var _default = AppRoutes;
  exports.default = _default;
