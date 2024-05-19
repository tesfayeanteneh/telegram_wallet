import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import TONSpaceScreen from '../screens/TONSpaceScreen';
import AssetManagementScreen from '../screens/AssetManagementScreen';
import PromotionsScreen from '../screens/PromotionsScreen';
import TransactionListScreen from '../screens/TransactionListScreen';
import PasscodeSetupScreen from '../screens/PasscodeSetupScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import SpendingAnalyticsScreen from '../screens/SpendingAnalyticsScreen';
import TutorialsScreen from '../screens/TutorialsScreen';
import SupportChatScreen from '../screens/SupportChatScreen';
import ExampleScreen from '../screens/ExampleScreen';
import SendScreen from '../screens/SendScreen';  // Import the SendScreen
import ReceiveScreen from '../screens/ReceiveScreen';  // Import the ReceiveScreen
import ExchangeScreen from '../screens/ExchangeScreen';  // Import the ExchangeScreen

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TON Space" component={TONSpaceScreen} />
        <Stack.Screen name="Asset Management" component={AssetManagementScreen} />
        <Stack.Screen name="Promotions" component={PromotionsScreen} />
        <Stack.Screen name="Transaction List" component={TransactionListScreen} />
        <Stack.Screen name="Passcode Setup" component={PasscodeSetupScreen} />
        <Stack.Screen name="User Profile" component={UserProfileScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Spending Analytics" component={SpendingAnalyticsScreen} />
        <Stack.Screen name="Tutorials" component={TutorialsScreen} />
        <Stack.Screen name="Support Chat" component={SupportChatScreen} />
        <Stack.Screen name="Example" component={ExampleScreen} />
        <Stack.Screen name="Send" component={SendScreen} />  // Add the SendScreen route
        <Stack.Screen name="Receive" component={ReceiveScreen} />  // Add the ReceiveScreen route
        <Stack.Screen name="Exchange" component={ExchangeScreen} />  // Add the ExchangeScreen route
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
