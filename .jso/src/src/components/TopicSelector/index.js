  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = TopicSelector;
  var _toConsumableArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _slicedToArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[3]));
  var _Input = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[4]));
  var _Topic = _$$_REQUIRE(_dependencyMap[5]);
  var _styles = _$$_REQUIRE(_dependencyMap[6]);
  var _Button = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[7]));
  var _CancelButton = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[8]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[9]);
  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
  function TopicSelector(_ref) {
    var cancelAction = _ref.cancelAction,
      confirmAction = _ref.confirmAction;
    var _useState = (0, _react.useState)(['TypeScript', 'GraphQL', 'C#', 'React', 'iOS', 'Android', 'Java', 'Phyton', 'JSON']),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      sugestionsTopics = _useState2[0],
      setSugestionTopics = _useState2[1];
    var _useState3 = (0, _react.useState)(''),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      topicInput = _useState4[0],
      setTopicInput = _useState4[1];
    var _useState5 = (0, _react.useState)([]),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      selectedTopics = _useState6[0],
      setSelectedTopics = _useState6[1];
    function handleAddTopicToFilter(topic) {
      setSelectedTopics([].concat((0, _toConsumableArray2.default)(selectedTopics), [topic]));
      var filteredSugestion = sugestionsTopics.filter(function (st) {
        return st !== topic;
      });
      setSugestionTopics(filteredSugestion);
    }
    function handleRemoveTopicFromFilter(topic) {
      var filteredTopics = selectedTopics.filter(function (t) {
        return t !== topic;
      });
      setSelectedTopics(filteredTopics);
      setSugestionTopics([].concat((0, _toConsumableArray2.default)(sugestionsTopics), [topic]));
    }
    function applyFilters() {
      if (topicInput) {
        var newTopics = [].concat((0, _toConsumableArray2.default)(selectedTopics), [topicInput]);
        setSelectedTopics(newTopics);
        confirmAction(newTopics);
      } else {
        confirmAction(selectedTopics);
      }
    }
    return (0, _jsxRuntime.jsxs)(_styles.Container, {
      children: [(0, _jsxRuntime.jsx)(_styles.Title, {
        children: "Filtrar t\xF3picos"
      }), (0, _jsxRuntime.jsx)(_Input.default, {
        icon: "search",
        style: {
          width: '100%'
        },
        onChangeText: setTopicInput,
        lightBackground: true
      }), (0, _jsxRuntime.jsx)(_styles.SelectedTopicSection, {
        children: selectedTopics.map(function (selectedTopic) {
          return (0, _jsxRuntime.jsx)(_Topic.Topic, {
            name: selectedTopic,
            typeAction: _Topic.TypeAction.remove,
            onPress: function onPress() {
              return handleRemoveTopicFromFilter(selectedTopic);
            }
          }, selectedTopic);
        })
      }), (0, _jsxRuntime.jsxs)(_styles.Sugestions, {
        children: [(0, _jsxRuntime.jsx)(_styles.SugestionLabel, {
          children: "Sugest\xF5es"
        }), (0, _jsxRuntime.jsx)(_styles.SugestionsSection, {
          children: sugestionsTopics.map(function (sugestion) {
            return (0, _jsxRuntime.jsx)(_Topic.Topic, {
              name: sugestion,
              typeAction: _Topic.TypeAction.add,
              onPress: function onPress() {
                return handleAddTopicToFilter(sugestion);
              }
            }, sugestion);
          })
        }), (0, _jsxRuntime.jsx)(_Button.default, {
          text: "Filtrar",
          style: {
            marginTop: 8,
            marginBottom: 8
          },
          onPress: applyFilters
        }), (0, _jsxRuntime.jsx)(_CancelButton.default, {
          text: "Cancelar",
          onPress: cancelAction
        })]
      })]
    });
  }
