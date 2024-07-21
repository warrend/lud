import { View, Text, TextInput, StyleSheet, ViewStyle } from 'react-native';
import React from 'react';
import { spacing, colors, standard } from '@/theme';

type Props = {
  onChange: (text: string) => void;
  value: string;
  placeholder: string;
  secureTextEntry?: boolean;
  error: string;
  width?: string | undefined;
  label?: string;
  emailKeyboard?: boolean;
};

export function Input({
  onChange,
  value,
  placeholder,
  secureTextEntry = false,
  error,
  width = '100%',
  label,
  emailKeyboard,
}: Props) {
  return (
    <View style={[styles.wrapper, { width } as ViewStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        selectionColor={colors.primary200}
        placeholderTextColor={colors.slate500}
        autoCapitalize="none"
        keyboardType={emailKeyboard ? 'email-address' : 'default'}
      />
      {error && (
        <View style={styles.errorWrapper}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: spacing.jumbo,
  },
  input: {
    height: 45,
    padding: spacing.normal,
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: standard.borderRadius,
    backgroundColor: colors.slate800,
    color: colors.slate200,
  },
  label: {
    color: colors.slate800,
    fontWeight: '600',
    marginBottom: spacing.small,
  },
  errorWrapper: {},
  errorText: {},
});
