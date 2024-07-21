import { View, StyleSheet } from 'react-native';
import { colors } from '@/theme';

export function IconWrapper({
  children,
  marginBottom = 0,
}: {
  children: React.ReactNode;
  marginBottom?: number;
}) {
  return <View style={[styles.wrapper, { marginBottom }]}>{children}</View>;
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 42,
    height: 42,
    borderRadius: 42 / 2,
    backgroundColor: colors.slate700,
  },
});
