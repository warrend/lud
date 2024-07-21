import React, { useContext } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import { Button } from '../../components/button';
import { spacing, colors, typography, standard } from '../../theme';

export function User({ navigation }: { navigation: any }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        <Text style={styles.screenHeader}>Leaving so soon?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    margin: spacing.large,
  },
  card: {
    backgroundColor: colors.slate800,
    padding: spacing.large,
    borderRadius: standard.borderRadius,
  },
  screenHeader: {
    color: colors.slate100,
    fontSize: typography.medium,
    marginBottom: spacing.large,
  },
  buttonText: {},
});
