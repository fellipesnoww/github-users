export * from '@react-native-firebase/app';


jest.mock('@react-native-firebase/app', () => {
    return () => ({
        log: jest.fn()
    });
});