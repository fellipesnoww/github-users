import crashlytics from '@react-native-firebase/crashlytics';
import * as Sentry from '@sentry/react-native';

function sendFirebaseEventError(logMessage: string, error: any) {
  crashlytics().log(logMessage);
  crashlytics().recordError(error);
}

function sendSentryEventError(message: string, error: any) {
  Sentry.captureMessage(message);
  Sentry.captureException(error);
}

function sendErrorEvent(message: string, error: any) {
  sendFirebaseEventError(message, error);
  sendSentryEventError(message, error);
}

export {sendFirebaseEventError, sendSentryEventError, sendErrorEvent};
