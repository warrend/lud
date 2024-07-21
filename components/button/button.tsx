import React from 'react';
import {
  Text,
  StyleSheet,
  Pressable,
  ViewStyle,
  StyleProp,
} from 'react-native';
import { colors, spacing, typography, standard } from '../../theme';

export function Button({
  onPress,
  label,
  width = '66%',
  backgroundColor = colors.primary400,
  disabled = false,
}: {
  onPress: () => void;
  label: string;
  width?: string;
  backgroundColor?: string;
  disabled?: boolean;
}) {
  return (
    <Pressable
      disabled={disabled}
      style={({ pressed }) =>
        [
          {
            opacity: pressed ? 0.6 : 1,
            backgroundColor: disabled ? colors.primary600 : colors.primary500,
            width,
          },
          styles.button,
        ] as StyleProp<ViewStyle>
      }
      onPress={onPress}
    >
      <Text
        style={[
          styles.label,
          { color: disabled ? colors.black200 : colors.black500 },
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  button: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    padding: spacing.medium,
    borderRadius: standard.borderRadius,
  },
  label: {
    fontSize: typography.normal,
    letterSpacing: 0.3,
    fontWeight: '600',
  },
});
