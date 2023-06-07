export * from '@react-native-firebase/crashlytics';


jest.mock('@react-native-firebase/crashlytics', () => {
    return () => ({
        log: jest.fn()
    });
});