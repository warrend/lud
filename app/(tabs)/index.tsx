import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dashboard } from '@/screens/dashboard';
import { Fasts } from '@/screens/fasts';
import { colors } from '@/theme';

const HomeStack = createNativeStackNavigator();

const baseScreenHeaderStyles = {
  headerStyle: { backgroundColor: colors.slate900 },
  headerTintColor: colors.primary500,
  headerShadowVisible: false,
};

export default function HomeScreen() {
  return (
    <HomeStack.Navigator screenOptions={baseScreenHeaderStyles}>
      <HomeStack.Screen
        name="Home"
        component={Dashboard}
        options={{
          headerTitle: 'Lud',
          headerTintColor: colors.primary500,
          headerBackTitle: 'Back',
        }}
      />
      <HomeStack.Screen
        name="Fasts"
        component={Fasts}
        options={{
          headerTintColor: colors.primary500,
          headerBackTitle: 'Back',
        }}
      />
    </HomeStack.Navigator>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
