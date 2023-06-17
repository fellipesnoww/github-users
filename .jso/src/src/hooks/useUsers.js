  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.useUsers = useUsers;
  var _react = _$$_REQUIRE(_dependencyMap[0]);
  var _UsersProvider = _$$_REQUIRE(_dependencyMap[1]);
  function useUsers() {
    return (0, _react.useContext)(_UsersProvider.UsersContext);
  }
