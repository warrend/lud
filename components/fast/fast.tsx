import { View, Pressable, Text, StyleSheet, Platform } from 'react-native';
import { allFastNames, fastNameIcons, TFastName } from '@/constants';
import { spacing, colors, typography, standard } from '@/theme';
import { IconWrapper } from '../icon-wrapper';

export function Fast({
  fastName,
  onPress,
  setPressedFastName,
  inProgress,
}: {
  fastName: TFastName;
  onPress: () => void;
  setPressedFastName: () => void;
  inProgress: boolean;
}) {
  function handlePressFast() {
    if (!inProgress) {
      setPressedFastName();
      onPress();
    }
  }

  return (
    <View style={styles.wrapper}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          styles.button,
          pressed && !inProgress ? styles.buttonPressed : null,
        ]}
        onPress={handlePressFast}
      >
        <View style={[styles.content, { opacity: inProgress ? 0.25 : 1 }]}>
          <IconWrapper marginBottom={spacing.normal}>
            {fastNameIcons[fastName]}
          </IconWrapper>
          <Text style={styles.title}>{allFastNames[fastName]}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: spacing.small,
    height: 125,
    width: 125,
    borderRadius: standard.borderRadius,
    elevation: 2,
    shadowColor: '#222',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: spacing.small,
    backgroundColor: colors.slate800,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  content: {
    flex: 1,
    padding: spacing.tiny,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: standard.borderRadius,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
    backgroundColor: colors.slate700,
    borderRadius: standard.borderRadius,
  },
  title: {
    fontWeight: 'bold',
    color: colors.slate300,
    fontSize: typography.small,
  },
});
