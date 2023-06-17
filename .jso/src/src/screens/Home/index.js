  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Home;
  var _react = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _styles = _$$_REQUIRE(_dependencyMap[2]);
  var _Header = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[3]));
  var _UserCard = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[4]));
  var _useUsers2 = _$$_REQUIRE(_dependencyMap[5]);
  var _native = _$$_REQUIRE(_dependencyMap[6]);
  var _EmptyList = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[7]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[8]);
  function Home() {
    var _useUsers = (0, _useUsers2.useUsers)(),
      users = _useUsers.users;
    var navigation = (0, _native.useNavigation)();
    function handleNavigateToModalRegister() {
      navigation.navigate('ModalRegister');
    }
    return (0, _jsxRuntime.jsxs)(_styles.Container, {
      children: [(0, _jsxRuntime.jsx)(_Header.default, {
        buttonAction: handleNavigateToModalRegister,
        textButton: "Adicionar novo"
      }), (0, _jsxRuntime.jsx)(_styles.UserList, {
        data: users,
        keyExtractor: function keyExtractor(item) {
          return item.id.toString();
        },
        renderItem: function renderItem(_ref) {
          var item = _ref.item;
          return (0, _jsxRuntime.jsx)(_UserCard.default, {
            user: item
          });
        },
        ListEmptyComponent: (0, _jsxRuntime.jsx)(_EmptyList.default, {
          message: "Voc\xEA ainda n\xE3o adicionou nenhum usu\xE1rio"
        })
      })]
    });
  }
