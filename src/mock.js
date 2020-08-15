jest.mock('urbanairship-react-native', () => {
    return {
      UrbanAirship: {
        setUserNotificationsEnabled: jest.fn(),
        addListener: jest.fn(),
        refreshInbox: jest.fn()
      }
    }
  })

jest.useFakeTimers();
