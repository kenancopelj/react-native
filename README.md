# React Native Course App

A React Native course application built with Expo, featuring a modular navigation structure for organizing lessons.

## Structure

The app is organized into modules and lessons:

### Modules
- **JavaScript** - Core JavaScript concepts with lessons:
  - Prototypical Inheritance
  - Pass by Value/Reference
  - Object Configuration
- **ES6** - ES6 features (lessons to be added)
- **React Native Framework - General** - React Native fundamentals (lessons to be added)
- **Expo** - Expo-specific features (lessons to be added)

## Features

- Drawer navigation with expandable module sections
- JavaScript module includes three complete lesson screens
- Clean, minimal UI focused on content
- Easy to extend with additional modules and lessons

## Getting Started

### Prerequisites
- Node.js installed
- Expo CLI (installed via npx)
- iOS Simulator, Android Emulator, or Expo Go app

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Run on your platform:
```bash
npm run ios     # Run on iOS simulator
npm run android # Run on Android emulator
npm run web     # Run in web browser
```

## Project Structure

```
├── App.js                          # Main app component
├── navigation/
│   ├── AppNavigator.js            # Main navigation configuration
│   └── CustomDrawerContent.js     # Custom drawer with expandable modules
├── screens/
│   ├── HomeScreen.js              # Course home screen
│   ├── javascript/                # JavaScript module lessons
│   │   ├── PrototypicalInheritanceScreen.js
│   │   ├── PassByValueReferenceScreen.js
│   │   └── ObjectConfigurationScreen.js
│   ├── es6/                       # ES6 module
│   │   └── ES6ModuleScreen.js
│   ├── react-native-framework/    # React Native Framework module
│   │   └── ReactNativeFrameworkScreen.js
│   └── expo-module/               # Expo module
│       └── ExpoModuleScreen.js
└── package.json
```

## Adding New Lessons

To add new lessons to a module:

1. Create a new screen component in the appropriate module folder
2. Import the screen in `navigation/AppNavigator.js`
3. Add the screen to the module's stack navigator (or create a new one for modules without lessons)
4. Update `navigation/CustomDrawerContent.js` to include the new lesson in the drawer

## Technologies Used

- React Native
- Expo
- React Navigation (Drawer + Stack navigators)
- React Native Gesture Handler
- React Native Reanimated
- React Native Screens
- React Native Safe Area Context
