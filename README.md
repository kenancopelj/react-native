# React Native Course App

A React Native course application built with Expo, covering core JavaScript and React Native concepts through interactive lesson screens.

## Navigation

Drawer navigation with four sections:

- **JavaScript** — stack navigator with a concept list and individual lesson screens
- **ES6** — coming soon
- **React Native** — coming soon
- **Expo** — coming soon

## JavaScript lessons

| Lesson | Status |
|---|---|
| Prototypical Inheritance | Done |
| Pass by Value / Reference | Done |
| Object Configuration | Done |
| Closures & Scope | Coming soon |
| Chainable Methods | Coming soon |
| Array Methods | Coming soon |
| Currying | Coming soon |
| Event Loop | Coming soon |
| Iterators | Coming soon |
| Immutable vs Mutable Data | Coming soon |
| Hoisting | Coming soon |
| IIFE | Coming soon |
| Shallow vs Deep Copy | Coming soon |
| Higher Order Functions | Coming soon |
| Recursion | Coming soon |
| Callbacks | Coming soon |
| Memoization | Coming soon |
| RegExp | Coming soon |
| Pure Functions | Coming soon |

Each lesson screen includes a quick explanation, docs link, video link, and an interactive demo.

## Getting Started

```bash
npm install
npx expo start --clear
```

Run on a platform:

```bash
npm run ios      # iOS simulator
npm run android  # Android emulator
npm run web      # Browser
```

## Project Structure

```
├── App.js
├── navigation/
│   ├── AppNavigator.js       # Drawer + JavaScript stack navigator
│   └── Drawer.js             # Custom drawer component
├── screens/
│   ├── javascript/
│   │   ├── index.js                        # Concept card list
│   │   ├── PrototypicalInheritance/
│   │   │   └── index.js
│   │   ├── PassByValueReference/
│   │   │   └── index.js
│   │   └── ObjectConfiguration/
│   │       └── index.js
│   ├── es6/
│   │   └── index.js
│   ├── ReactNative/
│   │   └── index.js
│   └── Expo/
│       └── index.js
└── styles/
    └── screen.js             # Shared styles for lesson screens
```

## Adding a Lesson

1. Create `screens/javascript/<LessonName>/index.js`
2. Import and register it in `navigation/AppNavigator.js` under `JavaScriptStack`
3. Set `done: true` for the concept entry in `screens/javascript/index.js`

## Tech

- Expo SDK 55
- React Native 0.83
- React Navigation — Drawer + Stack
- React Native Gesture Handler
- React Native Reanimated v4
