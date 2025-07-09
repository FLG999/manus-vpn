# Pearl VPN - React Native Mobile App

A comprehensive VPN mobile application built with React Native, featuring a modern dark UI design inspired by the provided Figma reference.

## 🚀 Features

### Core Screens
- **Splash Screen**: Branded loading screen with auto-navigation
- **Onboarding**: Solar system illustration with app introduction
- **Login**: Username/password authentication with Google sign-in option
- **Home**: Main dashboard with connection status, timer, and server info
- **Server List**: Searchable list of VPN servers with expandable options
- **Settings**: Configuration options with toggles and navigation
- **Premium**: Subscription plans and upgrade options

### Key Functionality
- ✅ VPN connection simulation with real-time timer
- ✅ Server selection with ping indicators
- ✅ Search functionality for server list
- ✅ Settings toggles (Kill Switch, Auto Connect, Notifications)
- ✅ Premium subscription plans
- ✅ Responsive mobile design
- ✅ Dark theme with blue accent colors
- ✅ Smooth navigation between screens

## 🛠 Technical Stack

- **Framework**: React Native 0.80.1
- **Language**: TypeScript
- **Navigation**: React Navigation 6
- **UI Components**: React Native built-in components
- **State Management**: React Hooks (useState, useEffect)
- **Platform Support**: iOS, Android, Web (via Expo)

## 📱 Design System

### Color Palette
- **Primary Background**: `#1a1a2e` (Dark Navy)
- **Secondary Background**: `#2a2a3e` (Lighter Navy)
- **Accent Color**: `#4facfe` (Blue)
- **Text Primary**: `#ffffff` (White)
- **Text Secondary**: `#8e8e93` (Light Gray)
- **Success**: `#4caf50` (Green)
- **Warning**: `#ffa726` (Orange)
- **Error**: `#f44336` (Red)

### Typography
- **Headers**: Bold, 18-28px
- **Body Text**: Regular, 14-16px
- **Captions**: Regular, 12-14px

## 🏗 Project Structure

```
VPNApp/
├── src/
│   ├── navigation/
│   │   └── AppNavigator.tsx     # Main navigation setup
│   ├── screens/
│   │   ├── SplashScreen.tsx     # Loading screen
│   │   ├── OnboardingScreen.tsx # App introduction
│   │   ├── LoginScreen.tsx      # Authentication
│   │   ├── HomeScreen.tsx       # Main dashboard
│   │   ├── ServerListScreen.tsx # Server selection
│   │   ├── SettingsScreen.tsx   # App settings
│   │   └── PremiumScreen.tsx    # Subscription plans
│   └── components/              # Reusable components (future)
├── App.tsx                      # Root component
├── package.json                 # Dependencies
└── README.md                    # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- React Native development environment
- Expo CLI (for web testing)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd VPNApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install additional packages for web support**
   ```bash
   npm install expo react-dom react-native-web @expo/metro-runtime
   ```

### Running the App

#### For Mobile Development
```bash
# Start Metro bundler
npx react-native start

# Run on Android
npx react-native run-android

# Run on iOS
npx react-native run-ios
```

#### For Web Testing
```bash
# Start Expo web server
npx expo start --web
```

## 📱 Screen Flow

1. **Splash Screen** (2s auto-transition) → **Onboarding**
2. **Onboarding** → **Login** (via buttons)
3. **Login** → **Home** (after authentication)
4. **Home** ↔ **Server List** ↔ **Settings** ↔ **Premium**

## 🎨 UI Components

### Custom Components
- **Connection Button**: Large circular button with status-based styling
- **Server Item**: List item with flag, name, and ping indicator
- **Setting Toggle**: Switch component with title and description
- **Premium Plan Card**: Subscription option with pricing

### Animations
- Smooth screen transitions
- Connection status animations
- Loading states
- Hover effects (web)

## 🔧 Configuration

### App Configuration (`app.json`)
```json
{
  "expo": {
    "name": "Pearl VPN",
    "slug": "pearl-vpn",
    "platforms": ["ios", "android", "web"],
    "userInterfaceStyle": "dark"
  }
}
```

### Navigation Setup
- Stack Navigator for main flow
- Type-safe navigation with TypeScript
- Header hidden for custom UI

## 🧪 Testing

The app includes simulated VPN functionality:
- Connection states: Disconnected → Connecting → Connected
- Timer functionality when connected
- Server selection updates
- Settings toggles persist during session

## 📦 Build & Deployment

### For Production
```bash
# Build for Android
npx react-native build-android

# Build for iOS
npx react-native build-ios

# Build for Web
npx expo build:web
```

### APK Generation
```bash
cd android
./gradlew assembleRelease
```

## 🎯 Future Enhancements

- Real VPN integration
- User authentication backend
- Server status API integration
- Push notifications
- Analytics tracking
- Biometric authentication
- Split tunneling implementation
- Kill switch functionality

## 📄 License

This project is created for demonstration purposes based on the provided Figma design reference.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

---

**Note**: This is a UI/UX demonstration app. For production use, integrate with actual VPN services and implement proper security measures.

