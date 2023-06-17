  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.api = undefined;
  exports.apiCall = apiCall;
  var _asyncToGenerator2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _axios = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[2]));
  var Sentry = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[3]));
  var _crashlytics = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[4]));
  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
  var api = _axios.default.create({
    baseURL: "https://api.github.com/"
  });
  exports.api = api;
  var defaultError = {
    success: false,
    message: 'Request failed',
    httpStatus: 400,
    data: null
  };
  function sendErrors(message, error) {
    Sentry.captureMessage(message);
    Sentry.captureException(error);
    (0, _crashlytics.default)().log(message);
    (0, _crashlytics.default)().recordError(error);
  }
  function apiCall(_x, _x2) {
    return _apiCall.apply(this, arguments);
  }
  function _apiCall() {
    _apiCall = (0, _asyncToGenerator2.default)(function* (config, customError) {
      try {
        var response = yield api.request(config);
        if (response.data) {
          return {
            success: true,
            message: 'Resquest successful',
            httpStatus: response.status,
            data: response.data
          };
        }
        return defaultError;
      } catch (error) {
        sendErrors('Error on sending request', error);
        if (customError) {
          return customError;
        }
        if (error instanceof _axios.AxiosError) {
          return {
            success: false,
            message: error.message,
            httpStatus: Number(error.code),
            data: null
          };
        }
        return defaultError;
      }
    });
    return _apiCall.apply(this, arguments);
  }
