import { StyleSheet, Image, Platform, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Records } from '@/screens/records';
import { colors } from '@/theme';

const RecordsStack = createNativeStackNavigator();

const baseScreenHeaderStyles = {
  headerStyle: { backgroundColor: colors.slate900 },
  headerTintColor: colors.primary500,
  headerShadowVisible: false,
};

export default function RecordsScreen() {
  return (
    <RecordsStack.Navigator screenOptions={baseScreenHeaderStyles}>
      <RecordsStack.Screen
        name="Records"
        component={Records}
        options={baseScreenHeaderStyles}
      />
    </RecordsStack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
