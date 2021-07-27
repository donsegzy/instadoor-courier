import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

// screens
import LandingPageScreen from './screens/LandingPageScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import WelcomeScreen from "./screens/WelcomeScreen";
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import AccountVerificationScreen from './screens/AccountVerificationScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import HomeScreen from './screens/HomeScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import WalletScreen from './screens/WalletScreen';
import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import PaymentSettingsScreen from './screens/PaymentSettingsScreen';
import AboutScreen from './screens/AboutScreen';
import SecurityScreen from './screens/SecurityScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import AlertScreen from './screens/AlertScreen';

const App = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing" screenOptions={{
              headerShown: false,
          }}>
              <Stack.Screen
                  name="Landing"
                  component={LandingPageScreen}
              />
              <Stack.Screen
                  name="Onboarding"
                  component={OnboardingScreen}
              />
              <Stack.Screen
                  name="Welcome"
                  component={WelcomeScreen}
              />
              <Stack.Screen
                  name="Register"
                  component={RegisterScreen}
              />
              <Stack.Screen
                  name="Login"
                  component={LoginScreen}
              />
              <Stack.Screen
                  name="Account Verification"
                  component={AccountVerificationScreen}
              />
              <Stack.Screen
                  name="Reset Password"
                  component={ResetPasswordScreen}
              />
               <Stack.Screen
                  name="Home"
                  component={HomeScreen}
              />
              <Stack.Screen
                  name="Delivery"
                  component={DeliveryScreen}
              />
                <Stack.Screen
                  name="Wallet"
                  component={WalletScreen}
              />
               <Stack.Screen
                  name="Settings"
                  component={SettingsScreen}
              />
              <Stack.Screen
                  name="Profile"
                  component={ProfileScreen}
              />
              <Stack.Screen
                  name="Edit Profile"
                  component={EditProfileScreen}
              />
               <Stack.Screen
                  name="Payment Settings"
                  component={PaymentSettingsScreen}
              />
               <Stack.Screen
                  name="About Instadoor Courier"
                  component={AboutScreen}
              />
              <Stack.Screen
                  name="Security Settings"
                  component={SecurityScreen}
              />
              <Stack.Screen
                  name="Contact Us"
                  component={ContactUsScreen}
              />
              <Stack.Screen
                  name="Alert"
                  component={AlertScreen}
              />
          </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
