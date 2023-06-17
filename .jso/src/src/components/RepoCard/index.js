  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = RepoCard;
  var _react = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _keyboard_arrow_right = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _yellow_star = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[3]));
  var _star = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[4]));
  var _language = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[5]));
  var _supervisor_account = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[6]));
  var _access_time = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[7]));
  var _styles = _$$_REQUIRE(_dependencyMap[8]);
  var _Topic = _$$_REQUIRE(_dependencyMap[9]);
  var _moment = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[10]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[11]);
  function RepoCard(_ref) {
    var repository = _ref.repository;
    return (0, _jsxRuntime.jsxs)(_styles.Container, {
      children: [(0, _jsxRuntime.jsxs)(_styles.InlineContent, {
        children: [(0, _jsxRuntime.jsxs)(_styles.RepoName, {
          children: [(0, _jsxRuntime.jsx)(_styles.Name, {
            children: repository.name
          }), (0, _jsxRuntime.jsx)(_keyboard_arrow_right.default, {})]
        }), (0, _jsxRuntime.jsx)(_styles.StarButton, {
          children: (0, _jsxRuntime.jsx)(_yellow_star.default, {
            width: 16,
            height: 16
          })
        })]
      }), (0, _jsxRuntime.jsx)(_styles.AboutRepo, {
        children: repository.description
      }), repository.topics.length > 0 && (0, _jsxRuntime.jsx)(_styles.TopicList, {
        children: repository.topics.map(function (topic) {
          return (0, _jsxRuntime.jsx)(_Topic.Topic, {
            name: topic,
            typeAction: _Topic.TypeAction.none
          }, topic);
        })
      }), (0, _jsxRuntime.jsxs)(_styles.RepoDetails, {
        children: [(0, _jsxRuntime.jsxs)(_styles.Detail, {
          removeMargin: true,
          children: [(0, _jsxRuntime.jsx)(_language.default, {
            width: 16,
            height: 16
          }), (0, _jsxRuntime.jsx)(_styles.DetailName, {
            children: repository.language
          })]
        }), (0, _jsxRuntime.jsxs)(_styles.Detail, {
          children: [(0, _jsxRuntime.jsx)(_star.default, {
            width: 16,
            height: 16
          }), (0, _jsxRuntime.jsx)(_styles.DetailName, {
            children: repository.stargazers_count
          })]
        }), (0, _jsxRuntime.jsxs)(_styles.Detail, {
          children: [(0, _jsxRuntime.jsx)(_supervisor_account.default, {
            width: 16,
            height: 16
          }), (0, _jsxRuntime.jsx)(_styles.DetailName, {
            children: repository.watchers_count
          })]
        }), (0, _jsxRuntime.jsxs)(_styles.Detail, {
          children: [(0, _jsxRuntime.jsx)(_access_time.default, {
            width: 16,
            height: 16
          }), (0, _jsxRuntime.jsx)(_styles.DetailName, {
            children: (0, _moment.default)(repository.updated_at).format("DD/MM/YYYY")
          })]
        })]
      })]
    });
  }
