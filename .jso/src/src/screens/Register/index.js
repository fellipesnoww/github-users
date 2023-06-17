  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Register;
  var _slicedToArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[2]));
  var _github_logo = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[3]));
  var _arrow_back = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[4]));
  var _Button = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[5]));
  var _Input = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[6]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[7]);
  var _styles = _$$_REQUIRE(_dependencyMap[8]);
  var _native = _$$_REQUIRE(_dependencyMap[9]);
  var _useUsers2 = _$$_REQUIRE(_dependencyMap[10]);
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[11]);
  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
  function Register(_ref) {
    var _ref$showBackAction = _ref.showBackAction,
      showBackAction = _ref$showBackAction === undefined ? false : _ref$showBackAction;
    var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      username = _useState2[0],
      setUsername = _useState2[1];
    var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];
    var _useUsers = (0, _useUsers2.useUsers)(),
      addUser = _useUsers.addUser;
    var navigation = (0, _native.useNavigation)();
    function navigateToHome() {
      _reactNative.Keyboard.dismiss();
      setLoading(false);
      navigation.navigate('Home');
    }
    function handleAddNewUser() {
      setLoading(true);
      addUser(username, navigateToHome, function () {
        return setLoading(false);
      });
    }
    function handleCloseModal() {
      navigation.goBack();
    }
    return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [(0, _jsxRuntime.jsx)(_reactNative.KeyboardAvoidingView, {
        style: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        behavior: "height",
        children: (0, _jsxRuntime.jsx)(_reactNative.TouchableWithoutFeedback, {
          onPress: _reactNative.Keyboard.dismiss,
          children: (0, _jsxRuntime.jsxs)(_styles.Container, {
            children: [showBackAction && (0, _jsxRuntime.jsx)(_styles.BackButton, {
              onPress: handleCloseModal,
              children: (0, _jsxRuntime.jsx)(_arrow_back.default, {})
            }), (0, _jsxRuntime.jsx)(_styles.LogoContainer, {
              children: (0, _jsxRuntime.jsx)(_styles.Logo, {
                source: _github_logo.default
              })
            }), (0, _jsxRuntime.jsx)(_styles.Title, {
              children: "Buscar usu\xE1rio"
            }), (0, _jsxRuntime.jsx)(_styles.Description, {
              children: 'Crie sua conta através do seu usuário\ndo GitHub'
            }), (0, _jsxRuntime.jsx)(_Input.default, {
              autoCorrect: false,
              placeholder: "@username",
              autoCapitalize: "none",
              onChangeText: setUsername,
              onSubmitEditing: handleAddNewUser,
              returnKeyType: "go"
            }), (0, _jsxRuntime.jsx)(_Button.default, {
              text: "Cadastrar",
              onPress: handleAddNewUser,
              loading: loading,
              disabled: !username
            })]
          })
        })
      }), (0, _jsxRuntime.jsxs)(_styles.Footer, {
        children: [(0, _jsxRuntime.jsx)(_styles.Description, {
          children: "Termos de "
        }), (0, _jsxRuntime.jsx)(_styles.UnderlinedDescription, {
          children: "pol\xEDtica "
        }), (0, _jsxRuntime.jsx)(_styles.Description, {
          children: "e "
        }), (0, _jsxRuntime.jsx)(_styles.UnderlinedDescription, {
          children: "privacidade"
        })]
      })]
    });
  }
