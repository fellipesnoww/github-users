  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.UsersContext = undefined;
  exports.UsersProvider = UsersProvider;
  var _toConsumableArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _asyncToGenerator2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _slicedToArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[3]));
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[4]));
  var _asyncStorage = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[5]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[6]);
  var _api = _$$_REQUIRE(_dependencyMap[7]);
  var _useEventLog2 = _$$_REQUIRE(_dependencyMap[8]);
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[9]);
  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
  var UsersContext = (0, _react.createContext)({});
  exports.UsersContext = UsersContext;
  function UsersProvider(_ref) {
    var children = _ref.children;
    var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      users = _useState2[0],
      setUsers = _useState2[1];
    var _useState3 = (0, _react.useState)(true),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      loadingUsers = _useState4[0],
      setLoadingUsers = _useState4[1];
    var _useEventLog = (0, _useEventLog2.useEventLog)(),
      sendErrorEvent = _useEventLog.sendErrorEvent;
    var errorNotFoundGitHub = {
      success: false,
      message: 'Usuário não encontrado',
      httpStatus: 404,
      data: null
    };
    function getStorageUsers() {
      return _getStorageUsers.apply(this, arguments);
    }
    function _getStorageUsers() {
      _getStorageUsers = (0, _asyncToGenerator2.default)(function* () {
        try {
          var storageUsers = yield _asyncStorage.default.getItem("@github-users:users");
          if (storageUsers) {
            setUsers(JSON.parse(storageUsers));
          }
          setLoadingUsers(false);
        } catch (error) {
          sendErrorEvent('Error on get storaged users', error);
          setLoadingUsers(false);
        }
      });
      return _getStorageUsers.apply(this, arguments);
    }
    (0, _react.useEffect)(function () {
      getStorageUsers();
    }, []);
    function checkUserAlreadyAdded(login) {
      return users.some(function (user) {
        return user.login === login;
      });
    }
    function addUser(_x, _x2, _x3) {
      return _addUser.apply(this, arguments);
    }
    function _addUser() {
      _addUser = (0, _asyncToGenerator2.default)(function* (login, successCallback, errorCallback) {
        try {
          if (!checkUserAlreadyAdded(login)) {
            var githubResponse = yield (0, _api.apiCall)({
              url: "users/" + login,
              method: 'GET'
            }, errorNotFoundGitHub);
            if (githubResponse.success) {
              var newUserList = [].concat((0, _toConsumableArray2.default)(users), [githubResponse.data]);
              setUsers(newUserList);
              yield _asyncStorage.default.setItem("@github-users:users", JSON.stringify(newUserList));
              if (successCallback) {
                successCallback();
              }
            } else {
              _reactNative.Alert.alert('Erro', githubResponse.message);
              if (errorCallback) {
                errorCallback();
              }
            }
          } else {
            _reactNative.Alert.alert('Atenção', 'Esse usuário ja foi adicionado');
            if (errorCallback) {
              errorCallback();
            }
          }
        } catch (error) {
          sendErrorEvent('Error on set user in storage', error);
        }
      });
      return _addUser.apply(this, arguments);
    }
    function removeUser(_x4) {
      return _removeUser.apply(this, arguments);
    }
    function _removeUser() {
      _removeUser = (0, _asyncToGenerator2.default)(function* (id) {
        try {
          var filteredUsers = users.filter(function (user) {
            return user.id !== id;
          });
          setUsers(filteredUsers);
          yield _asyncStorage.default.setItem("@github-users:users", JSON.stringify(filteredUsers));
        } catch (error) {
          sendErrorEvent('Error on remove user from storage', error);
        }
      });
      return _removeUser.apply(this, arguments);
    }
    return (0, _jsxRuntime.jsx)(UsersContext.Provider, {
      value: {
        users: users,
        addUser: addUser,
        removeUser: removeUser,
        loadingUsers: loadingUsers
      },
      children: children
    });
  }
