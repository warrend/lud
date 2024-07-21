import { useEffect, useState, memo } from 'react';
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import { Countdown } from '@/components/countdown';
import { colors, spacing, standard, typography } from '@/theme';
import { FontAwesome } from '@expo/vector-icons';
import { allFastNames, fastNameIcons } from '@/constants';
import { useFastsProvider } from '@/contexts/fasts';
import { Fast } from '@/types/fasts';
import { InfoModal } from '@/components/info-modal';

const HEADER_ICON_COLOR = colors.primary500;

export const Dashboard = memo(({ navigation }: { navigation: any }) => {
  const [showInfoModal, setShowInfoModal] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View>
          <Pressable
            onPress={() => setShowInfoModal(true)}
            style={({ pressed }) => pressed && { opacity: 0.85 }}
          >
            <View style={styles.header}>
              <FontAwesome name="info" size={20} color={HEADER_ICON_COLOR} />
            </View>
          </Pressable>
        </View>
      ),
      headerRight: () => (
        <View>
          <Pressable
            onPress={() => navigation.navigate('Fasts')}
            style={({ pressed }) => pressed && { opacity: 0.85 }}
          >
            <View style={styles.header}>
              <FontAwesome name="plus" size={20} color={HEADER_ICON_COLOR} />
            </View>
          </Pressable>
        </View>
      ),
    });
  }, [navigation]);

  const {
    getCurrentFasts,
    currentFasts,
    deleteCurrentFast,
    onTimerEnded,
    loading,
  } = useFastsProvider();

  useEffect(() => {
    async function getFasts() {
      return getCurrentFasts();
    }

    getFasts();
  }, []);

  function EmptyFasts() {
    return (
      <View style={styles.emptyFasts}>
        <Text style={styles.noFastsText}>No current fasts. Start one!</Text>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <InfoModal
        showInfoModal={showInfoModal}
        setShowInfoModal={setShowInfoModal}
      />
      <View style={styles.fastContainer}>
        {!!currentFasts.length ? (
          <Text style={styles.h1}>Current Fast</Text>
        ) : (
          <EmptyFasts />
        )}

        <FlatList
          data={currentFasts}
          contentContainerStyle={{ paddingBottom: spacing.large }}
          renderItem={({ item }: { item: Fast }) => (
            <View key={item.id} style={styles.fastWrapper}>
              <View style={styles.headerSection}>
                <View style={styles.headerLeft}>
                  <View>{fastNameIcons[item.nameId]}</View>
                  <Text style={styles.fastTitle}>
                    {allFastNames[item.nameId]}
                  </Text>
                </View>
                {item.status === 'completed' && (
                  <View>
                    <Pressable
                      onPress={() => deleteCurrentFast(item.id!)}
                      style={({ pressed }) => pressed && { opacity: 0.66 }}
                    >
                      <View>
                        <FontAwesome
                          name="close"
                          size={20}
                          color={colors.slate300}
                        />
                      </View>
                    </Pressable>
                  </View>
                )}
              </View>
              <View style={styles.countdownWrapper}>
                <Countdown
                  id={item.id!}
                  onEnd={() => onTimerEnded(item)}
                  nameId={item.nameId}
                  typeId={item.typeId}
                  status={item.status}
                  end={item.end}
                />
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    margin: spacing.large,
    marginBottom: 0,
    flex: 1,
    flexDirection: 'column',
  },
  fastContainer: {
    flex: 1,
  },
  emptyFasts: {
    backgroundColor: colors.slate800,
    borderRadius: standard.borderRadius,
    padding: spacing.huge,
  },
  header: {
    padding: spacing.small,
  },
  h1: {
    color: colors.slate400,
    marginBottom: spacing.normal,
    fontSize: typography.normal,
    fontWeight: '700',
    letterSpacing: 1,
  },
  howToText: {
    color: colors.accent300,
    fontSize: typography.medium,
  },
  headerText: {
    color: colors.slate200,
    fontSize: typography.medium,
    fontWeight: '800',
    letterSpacing: 1,
  },
  headerLeft: {
    flexDirection: 'row',
  },
  fastList: {},
  fastWrapper: {
    backgroundColor: colors.slate800,
    borderRadius: standard.borderRadius,
    marginBottom: spacing.normal,
    padding: spacing.medium,
  },
  countdownWrapper: {},
  headerSection: {
    borderTopLeftRadius: standard.borderRadius,
    borderTopRightRadius: standard.borderRadius,
    flexDirection: 'row',
    marginBottom: spacing.normal,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  clearText: {
    color: colors.slate100,
    fontSize: typography.tiny,
    letterSpacing: 1,
  },
  fastTitle: {
    fontSize: typography.medium,
    fontWeight: '600',
    color: colors.primary200,
    marginLeft: spacing.small,
  },
  noFastsText: {
    fontSize: typography.medium,
    color: colors.primary200,
    fontWeight: '600',
    textAlign: 'center',
  },
});
