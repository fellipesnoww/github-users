  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Repository;
  var _asyncToGenerator2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _slicedToArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[3]));
  var _styles = _$$_REQUIRE(_dependencyMap[4]);
  var _HeaderWithUser = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[5]));
  var _RepoCard = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[6]));
  var _native = _$$_REQUIRE(_dependencyMap[7]);
  var _api = _$$_REQUIRE(_dependencyMap[8]);
  var _EmptyList = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[9]));
  var _Loader = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[10]));
  var _Input = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11]));
  var _FilterButton = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[13]);
  var _TopicSelector = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[14]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[15]);
  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
  function Repository() {
    var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];
    var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      visibleModal = _useState4[0],
      setVisibleModal = _useState4[1];
    var _useState5 = (0, _react.useState)([]),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      repositories = _useState6[0],
      setRepositories = _useState6[1];
    var _useState7 = (0, _react.useState)([]),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      repositoriesCopy = _useState8[0],
      setRepositoriesCopy = _useState8[1];
    var route = (0, _native.useRoute)();
    var _ref = route.params,
      login = _ref.login,
      avatar_url = _ref.avatar_url;
    function handleGetUserRepositories() {
      return _handleGetUserRepositories.apply(this, arguments);
    }
    function _handleGetUserRepositories() {
      _handleGetUserRepositories = (0, _asyncToGenerator2.default)(function* () {
        var reposRequest = yield (0, _api.apiCall)({
          url: "users/" + login + "/repos"
        });
        if (reposRequest.success) {
          setRepositories(reposRequest.data);
          setRepositoriesCopy(reposRequest.data);
        }
        setLoading(false);
      });
      return _handleGetUserRepositories.apply(this, arguments);
    }
    function filterRepositories(repositoryName) {
      var filteredRepositories = repositories.filter(function (repository) {
        return repository.name.includes(repositoryName);
      });
      setRepositoriesCopy(filteredRepositories);
    }
    (0, _react.useEffect)(function () {
      handleGetUserRepositories();
    }, []);
    if (loading) {
      return (0, _jsxRuntime.jsx)(_Loader.default, {
        message: "Procurando reposit\xF3rios..."
      });
    }
    function handleCancelTopicSelection() {
      setVisibleModal(false);
    }
    function handleFilterTopics(topicsToFilter) {
      var formatedTopics = topicsToFilter.map(function (t) {
        return t.toLowerCase();
      });
      var filteredRepositories = [];
      repositoriesCopy.forEach(function (repo) {
        repo.topics.forEach(function (topic) {
          if (formatedTopics.includes(topic)) {
            filteredRepositories.push(repo);
          }
        });
      });
      setRepositoriesCopy(filteredRepositories);
      setVisibleModal(false);
    }
    function handleResetFilters() {
      _reactNative.Alert.alert("Confirme", "Deseja limpar todos os filtros?", [{
        style: "cancel",
        onPress: function onPress() {},
        text: "Não"
      }, {
        style: "default",
        onPress: function onPress() {
          setRepositoriesCopy(repositories);
        },
        text: "Sim"
      }]);
    }
    return (0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: {
        flex: 1,
        opacity: visibleModal ? 0.6 : 1
      },
      children: [(0, _jsxRuntime.jsxs)(_styles.Container, {
        children: [(0, _jsxRuntime.jsx)(_HeaderWithUser.default, {
          avatar_url: avatar_url
        }), (0, _jsxRuntime.jsxs)(_styles.SearchArea, {
          children: [(0, _jsxRuntime.jsx)(_Input.default, {
            icon: "search",
            placeholder: "Buscar um reposit\xF3rio...",
            onChangeText: function onChangeText(name) {
              return filterRepositories(name);
            },
            style: {
              width: "85%"
            }
          }), (0, _jsxRuntime.jsx)(_FilterButton.default, {
            onPress: function onPress() {
              return setVisibleModal(true);
            },
            onLongPress: handleResetFilters
          })]
        }), (0, _jsxRuntime.jsx)(_styles.RepositoriesList, {
          data: repositoriesCopy,
          keyExtractor: function keyExtractor(item) {
            return item.id.toString();
          },
          renderItem: function renderItem(_ref2) {
            var item = _ref2.item;
            return (0, _jsxRuntime.jsx)(_RepoCard.default, {
              repository: item
            });
          },
          ListEmptyComponent: (0, _jsxRuntime.jsx)(_EmptyList.default, {
            message: "Nenhum reposit\xF3rio encontrado"
          })
        })]
      }), (0, _jsxRuntime.jsx)(_reactNative.Modal, {
        visible: visibleModal,
        transparent: true,
        animationType: "slide",
        children: (0, _jsxRuntime.jsx)(_styles.ModalContent, {
          children: (0, _jsxRuntime.jsx)(_TopicSelector.default, {
            cancelAction: handleCancelTopicSelection,
            confirmAction: function confirmAction(topics) {
              return handleFilterTopics(topics);
            }
          })
        })
      })]
    });
  }
