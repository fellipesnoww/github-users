  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = UserCard;
  var _react = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _keyboard_arrow_right = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _delete = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[3]));
  var _business = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[4]));
  var _place = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[5]));
  var _star = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[6]));
  var _styles = _$$_REQUIRE(_dependencyMap[7]);
  var _useUsers2 = _$$_REQUIRE(_dependencyMap[8]);
  var _reactNative = _$$_REQUIRE(_dependencyMap[9]);
  var _native = _$$_REQUIRE(_dependencyMap[10]);
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[11]);
  function UserCard(_ref) {
    var user = _ref.user;
    var _useUsers = (0, _useUsers2.useUsers)(),
      removeUser = _useUsers.removeUser;
    var navigation = (0, _native.useNavigation)();
    function handleRemoveUser() {
      _reactNative.Alert.alert('Atenção', "Deseja remover " + user.login + " da lista de usu\xE1rios?", [{
        style: 'cancel',
        text: 'Não',
        onPress: function onPress() {}
      }, {
        style: 'destructive',
        text: 'Sim',
        onPress: function onPress() {
          removeUser(user.id);
        }
      }]);
    }
    function navigateToRepositories() {
      navigation.navigate('Repository', {
        login: user.login,
        avatar_url: user.avatar_url
      });
    }
    return (0, _jsxRuntime.jsxs)(_styles.Container, {
      onPress: navigateToRepositories,
      children: [(0, _jsxRuntime.jsxs)(_styles.UserBasicInfo, {
        children: [(0, _jsxRuntime.jsxs)(_styles.TextContent, {
          children: [(0, _jsxRuntime.jsx)(_styles.Avatar, {
            source: {
              uri: user.avatar_url
            },
            resizeMode: "contain"
          }), (0, _jsxRuntime.jsxs)(_styles.UserIdentifier, {
            children: [(0, _jsxRuntime.jsxs)(_styles.NameData, {
              children: [(0, _jsxRuntime.jsx)(_styles.Name, {
                children: user.name ? user.name : user.login
              }), (0, _jsxRuntime.jsx)(_keyboard_arrow_right.default, {})]
            }), (0, _jsxRuntime.jsx)(_styles.Username, {
              children: user.login
            })]
          })]
        }), (0, _jsxRuntime.jsx)(_styles.DeleteButton, {
          onPress: handleRemoveUser,
          children: (0, _jsxRuntime.jsx)(_delete.default, {})
        })]
      }), (0, _jsxRuntime.jsxs)(_styles.UserAbout, {
        children: [(0, _jsxRuntime.jsxs)(_styles.About, {
          children: [(0, _jsxRuntime.jsx)(_business.default, {}), (0, _jsxRuntime.jsx)(_styles.AboutDescription, {
            children: user.company ? user.company : '-'
          })]
        }), (0, _jsxRuntime.jsxs)(_styles.About, {
          children: [(0, _jsxRuntime.jsx)(_place.default, {}), (0, _jsxRuntime.jsx)(_styles.AboutDescription, {
            children: user.location ? user.location : '-'
          })]
        }), (0, _jsxRuntime.jsxs)(_styles.About, {
          children: [(0, _jsxRuntime.jsx)(_star.default, {}), (0, _jsxRuntime.jsx)(_styles.AboutDescription, {
            children: user.followers
          })]
        })]
      })]
    });
  }
