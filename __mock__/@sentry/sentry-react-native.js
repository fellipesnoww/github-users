import * as Sentry from '@sentry/react-native';

jest.mock('@sentry/react-native', () => ({
  Sentry: {
    setTagsContext: jest.fn(),
    setExtraContext: jest.fn(),
    captureBreadcrumb: jest.fn(),
    captureException: jest.fn(),
    captureMessage: jest.fn(),
  },
}));
