import { Tabs } from 'expo-router';
import React from 'react';
import { colors } from '@/theme';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { FontAwesome5 } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary500,
        tabBarShowLabel: false,
        headerStyle: {
          backgroundColor: colors.primary100,
        },
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.slate900,
          borderTopColor: colors.slate800,
          borderTopWidth: 2,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused, size }) => (
            <FontAwesome5
              name="bullseye"
              color={focused ? colors.primary500 : colors.slate600}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="records"
        options={{
          title: 'Records',
          tabBarIcon: ({ color, focused, size }) => (
            <FontAwesome5
              name="chart-line"
              color={focused ? colors.primary500 : colors.slate600}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}
