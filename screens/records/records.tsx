import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { useFastsProvider } from '../../contexts/fasts';
import { colors, spacing, standard, typography } from '../../theme';

function EmptyRecords() {
  return (
    <View style={styles.emptyFasts}>
      <Text style={styles.noFastsText}>No fasts yet!</Text>
    </View>
  );
}

function minToHours(mins: number) {
  const totalMinutes = mins;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h ${minutes}m`;
}

export function Records() {
  const { getRecords, records, loading } = useFastsProvider();

  useEffect(() => {
    async function getRecs() {
      return getRecords();
    }

    getRecs();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingWrapper}>
        <ActivityIndicator size="small" color={colors.slate300} />
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={records}
        renderItem={({ item }) => (
          <View style={styles.recordCard}>
            <Text style={styles.fastTitle}>{item.name}</Text>
            <Text style={styles.text}>
              {minToHours(item.minutes)} <Text style={styles.bar}>|</Text>{' '}
              {item.total} {item.total === 1 ? 'fast' : 'fasts'}
            </Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: spacing.large }}
        ListEmptyComponent={EmptyRecords}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    margin: spacing.large,
    marginBottom: 0,
  },
  loadingWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  recordCard: {
    backgroundColor: colors.slate800,
    padding: spacing.medium,
    marginBottom: spacing.medium,
    borderRadius: standard.borderRadius,
  },
  text: {
    color: colors.slate100,
    fontSize: typography.medium,
  },
  fastTitle: {
    color: colors.primary500,
    marginBottom: spacing.small,
    fontWeight: '600',
    fontSize: typography.normal,
  },
  emptyText: {
    color: colors.slate300,
    fontSize: typography.medium,
  },
  bar: {
    color: colors.slate600,
  },
  noFastsText: {
    fontSize: typography.medium,
    color: colors.primary200,
    fontWeight: '600',
    textAlign: 'center',
  },
  emptyFasts: {
    backgroundColor: colors.slate800,
    borderRadius: standard.borderRadius,
    padding: spacing.huge,
  },
});
